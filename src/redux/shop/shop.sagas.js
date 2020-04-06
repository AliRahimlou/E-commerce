import { takeEvery } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync(){
    yield console.log(' i am disnddifnd')
}

export function* fetchCollectionsStart(){
    yield takeEvery(ShopActionTypes.UPDATE_COLLECTIONS,fetchCollectionsAsync);
}