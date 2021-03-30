import { assert } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { cleanup, render } from '@testing-library/react';
import SearchBar from '../../../src/views/PhotosSearch/SearchBar';
import QuantityPicker from '../../../src/views/PhotosSearch/QuantityPicker';
import PhotosList from '../../../src/views/PhotosSearch/PhotosList';
import Pagination from '../../../src/views/PhotosSearch/Pagination';

describe('photosSearch component', function () {
	let mockStore = null;
	beforeEach(function () {
		mockStore = configureStore([]);
	});

	afterEach(function () {
		mockStore = null;
		cleanup();
	});

	it('should create SearchBar with cancel icon', () => {
		const state = {
			photosSearch: {
				shownPhotos: [
					{
						id: '', farm: 0, server: '', secret: '', title: '',
					},
					{
						id: '', farm: 0, server: '', secret: '', title: '',
					},
				],
			},
		};
		const store = mockStore(state);
		const { container } = render(
			<Provider store={store}>
				<SearchBar />
			</Provider>,
		);
		const activeNode = container.querySelector('#CancelSearch');
		assert.exists(activeNode);
	});

	it('should create PhotosList with 2 photos', () => {
		const state = {
			photosSearch: {
				pickedQuantity: 10,
			},
		};
		const store = mockStore(state);
		const { container } = render(
			<Provider store={store}>
				<QuantityPicker />
			</Provider>,
		);
		const quantityNodes = container.querySelectorAll('.form-check-input');
		assert.isFalse(quantityNodes[0].checked);
		assert.isTrue(quantityNodes[1].checked);
		assert.isFalse(quantityNodes[2].checked);
	});

	it('should create PhotosList with 2 photos', () => {
		const state = {
			photosSearch: {
				shownPhotos: [
					{
						farm: 66, id: '49212687452', owner: '153280806@N06', secret: '6c489e358f', server: '65535', title: 'Chained',
					},
					{
						farm: 66, id: '49212687453', owner: '153280806@N06', secret: '65bf238c59', server: '65532', title: 'title2',
					},
				],
			},
		};
		const store = mockStore(state);
		const { container } = render(
			<Provider store={store}>
				<PhotosList />
			</Provider>,
		);
		const photoNodes = container.querySelectorAll('.photo');
		assert.strictEqual(photoNodes.length, 2);
	});

	it('should create Pagination with 2 page active', () => {
		const state = {
			photosSearch: {
				currentPage: 2,
				totalPage: 10,
			},
		};
		const store = mockStore(state);
		const { container } = render(
			<Provider store={store}>
				<Pagination />
			</Provider>,
		);
		const activeNode = container.querySelector('.active');
		assert.strictEqual(activeNode.firstChild.value, '2');
	});
});
