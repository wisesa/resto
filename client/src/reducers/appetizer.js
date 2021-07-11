import { post } from 'request';
import {
    GET_APPETIZERS,
    GET_APPETIZER,
    DELETE_APPETIZER,
    APPETIZER_ERROR
} from '../actions/types';

const initialState = { 
    appetizers: [],
    appetizer: null,
    loading:true,
    error:{}
 }

 export default function (state=initialState, action){
     const {type, payload} = action;

     switch(type){
         case GET_APPETIZERS:
            return {
                ...state,
                appetizers: payload,
                loading:false
            }
         case GET_APPETIZER:
            return {
                ...state,
                appetizer: payload,
                loading:false
            }
         case DELETE_APPETIZER:
            return{
                ...state,
                appetizers: state.appetizers.filter(appetizer=>appetizer._id !== payload),
                loading:false
            }
         case APPETIZER_ERROR:
            return {
                ...state,
                error: payload,
                loading:false
            }
        default:
            return state;
     }
 }