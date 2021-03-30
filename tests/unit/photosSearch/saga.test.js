import { assert } from 'chai';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { searchText } from '../../../src/actions/photosSearch';
import watchGetPhotos from '../../../src/saga/photosSearch';
import reducer from '../../../src/reducers/photosSearch';

describe('photosSearch saga', function () {
	let store = null;
	beforeEach(function () {
		const sagaMiddleware = createSagaMiddleware();
		store = createStore(reducer, applyMiddleware(sagaMiddleware));
		sagaMiddleware.run(watchGetPhotos);
	});

	afterEach(function () {
		store = null;
	});

	it('should get photos list by axios', function (done) {
		store.dispatch(searchText('Sydney'));
		const oldState = store.getState();
		assert.strictEqual(oldState.searchText, 'Sydney');
		assert.strictEqual(oldState.photosList.length, 0);
		assert.strictEqual(oldState.currentPage, 0);
		assert.strictEqual(oldState.totalPage, 0);
		setTimeout(() => {
			const newState = store.getState();
			assert.strictEqual(newState.searchText, 'Sydney');
			assert.isAbove(newState.photosList.length, 0);
			newState.photosList.forEach((photo) => {
				assert.isString(photo.id);
				assert.isNumber(photo.farm);
				assert.isString(photo.server);
				assert.isString(photo.secret);
				assert.isString(photo.title);
			});
			assert.strictEqual(newState.currentPage, 1);
			assert.isAbove(newState.totalPage, 0);
			done();
		}, 3000);
	});
});
