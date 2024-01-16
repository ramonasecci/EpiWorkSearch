export const ADD_TO_PREF = 'ADD_TO_PREF';
export const REMOVE_FROM_PREF = 'REMOVE_FROM_PREF';
export const GET_WORKS = 'GET_WORKS';

export const addToPrefAction = workPref => {
	return {
		type: ADD_TO_PREF, // è importante dare al tipo, e in generale è una buona pratica della naming convention, un nome parlante, che spieghi cosa fa/a cosa serve
		payload: workPref,
	};
};


export const removeFromPrefAction = i => {
	return {
		type: REMOVE_FROM_PREF,
		payload: i,
	};
};

export const getWorksAction = (searchQuery) => {
	return async dispatch => {
		//qui verrà effettuata la fetch (o qualsiasi operazione asincrona) che, una volta ottenuto il risultato, sarà spedita (dispatch) verso il reducer che farà il dispatch verso lo store e quindi verso i components
		try {
			let resp = await fetch(
				'https://strive-benchmark.herokuapp.com/api/jobs?company=' + searchQuery
			);
			if (resp.ok) {
				let works = await resp.json();
				dispatch({
					type: GET_WORKS,
					payload: works, // viene dispatchato l'intero array di libri
				});
			} else {
				throw new Error('Errore nel recupero dati');
			}
		} catch (error) {
			console.log(error);
		}
	};
};