function detailview(state = {}, action){
	switch(action.type){
		case 'GET_DETAIL_DATA':
			return state;
		case 'GET_DETAIL_DATA_PENDING':
			return {...state, pending: true };
		case 'GET_DETAIL_DATA_FULFILLED':
			return { data: action.payload.data.event, pending: false };
		case 'GET_DETAIL_DATA_REJECTED':
			return { data: [], error: true, message: 'There was an error fetching events' };
		default:
			return state;
	}
}

export default detailview;