import { combineReducers } from 'redux';
import listview from './ListviewReducer';
import detailview from './DetailviewReducer';

const reducers = combineReducers({
	list: listview,
	detail: detailview
});

export default reducers;