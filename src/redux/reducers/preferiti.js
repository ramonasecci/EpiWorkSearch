import { ADD_TO_PREF, REMOVE_FROM_PREF } from "../actions";


const initialState = {
	content: [],
};

const prefReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_PREF:
			return {
				...state,
				content: [...state.content, action.payload],
			};

		case REMOVE_FROM_PREF:
			return {
				...state,
				content: state.content.filter(
					(work, i) => i !== action.payload
				),
			};

		default:
			return state;
	}
};

export default prefReducer;