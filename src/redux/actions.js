import axios from "axios";
import {
	FETCH_TEMPERATURE_REQUEST,
	FETCH_TEMPERATURE_SUCCESS,
	FETCH_TEMPERATURE_FAILURE,
} from "./constants";

export const fetchTemperature = (city) => {
	return async (dispatch) => {
		dispatch({ type: FETCH_TEMPERATURE_REQUEST, payload: null });
		await axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a9f0de9ed61cf61824fa8a7ccf371a6`
			)
			.then((response) => {
				const temperature = response.data.main.temp;
				console.log("response from api call ==>", temperature);
				console.log("City is==>", city);
				dispatch({
					type: FETCH_TEMPERATURE_SUCCESS,
					payload: { temp: temperature, city: city },
				});
			})
			.catch((error) => {
				// const errorMsg = error.message;
				console.log("error getting data", error);
				dispatch({
					type: FETCH_TEMPERATURE_FAILURE,
					payload: null,
				});
			});
	};
};
