import axios from 'axios';
import {setAlert} from './alert';
import {
    GET_TRANSACTIONS,
    GET_TRANSACTION,
    TRANSACTION_ERROR,
} from './types';

// Get posts
export const getTransactions = () => async dispatch => {
    try {
        const res=await axios.get('/api/transaction/');

        dispatch({
            type:GET_TRANSACTIONS,
            payload:res.data
        });
    } catch (err) {
        dispatch({
            type: TRANSACTION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}