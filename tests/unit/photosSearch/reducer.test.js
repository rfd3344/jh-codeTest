import { assert } from 'chai';
import {
	pickQuantity,
	changePage,
	cancelSearch,
} from '../../../src/actions/photosSearch';
import reducers from '../../../src/reducers/photosSearch';

describe('photosSearch reducer ', function () {
	const initialState = {
		searchText: '',
		photosList: [],
		shownPhotos: [],
		pickedQuantity: 2,
		currentPage: 0,
		totalPage: 0,
	};

	it('should return the initial state', () => {
		const res = reducers(undefined, {});
		assert.deepEqual(res, initialState);
	});

	it('should get pickedQuantity correctly', () => {
		const res = reducers(initialState, pickQuantity(10));
		assert.strictEqual(res.pickedQuantity, 10);
	});

	it('should get currentPage as 0', () => {
		const res = reducers(initialState, changePage(10));
		assert.strictEqual(res.currentPage, 0);
	});

	it('should get currentPage correctly', () => {
		const newState = {
			searchText: '',
			photosList: [...Array(50).keys()],
			shownPhotos: [],
			pickedQuantity: 2,
			currentPage: 0,
			totalPage: 0,
		};
		const res = reducers(newState, changePage(10));
		assert.strictEqual(res.currentPage, 10);
		assert.deepEqual(res.shownPhotos, [18, 19]);
	});

	it('should set to initial value', () => {
		const newState = {
			searchText: 'aaaa',
			photosList: [...Array(50).keys()],
			shownPhotos: [1, 2],
			pickedQuantity: 2,
			currentPage: 2,
			totalPage: 20,
		};
		const res = reducers(newState, cancelSearch());
		assert.deepEqual(res, initialState);
	});
});
