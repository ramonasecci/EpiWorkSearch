import { GET_WORKS } from '../actions';

const initialState = {
	workList: [],
};

const worksReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_WORKS:
			return {
				...state,
				workList: action.payload,
			};

		default:
			return state;
	}
};

export default worksReducer;