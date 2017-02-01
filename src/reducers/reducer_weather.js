import { FETCH_WEATHER } from '../actions/index';

export default function ( state = [], action ) {
	switch ( action.type ) {
		case FETCH_WEATHER :
		// add new version of state
		// state.concat( [ action.payload.data ] )
		return [ action.payload.data, ...state ]; // [ city, city, city ]
	}
	return state;
}