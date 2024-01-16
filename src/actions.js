import axios from 'axios';

// action types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SECCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

//actions creators
const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    };
};

const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data,
    };
};

const fecthDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error,
    };
};

//thunk action creator
export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const data = response.data;
            dispatch(fetchDataSuccess(data));
        })
        .catch(error => {
            dispatch(fecthDataFailure(error.message))
        });
    };
};