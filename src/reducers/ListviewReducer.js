function listview(state = {}, action){
	switch(action.type){
		case 'GET_LIST_DATA':
			return state;
		case 'GET_LIST_DATA_PENDING':
			return {...state, pending: true };
		case 'GET_LIST_DATA_FULFILLED':
			return { data: action.payload.data.events, pending: false };
		case 'GET_LIST_DATA_REJECTED':
			return { data: [], error: true, message: 'There was an error fetching events' };
		default:
			return state;
	}
}

export default listview;