import { actionTypes } from './actions'

export const exampleInitialState = [{
  TransactionId : '',
  UserName : '',
  PaymentMode : '',
  Amount : '',
}]

function reducer (state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.ACTION_SAVE_TRANSACTION:
     return {
      ...state,
      
      }
    case actionTypes.ACTION_SAVE_TRANSACTION_ERROR:
     return {
    
    }
    case actionTypes.ACTION_SAVE_TRANSACTION_SUCCESS:
     return {
      transactions: action.payload.reverse()
     }
     case actionTypes.ACTION_GET_TRANSACTION:
      return {
       }
     case actionTypes.ACTION_GET_TRANSACTION_ERROR:
      return {
     
     }
     case actionTypes.ACTION_GET_TRANSACTION_SUCCESS:
      return {
       transactions: action.payload.reverse(), 
      }
    default:
      return state
  }
}

export default reducer
