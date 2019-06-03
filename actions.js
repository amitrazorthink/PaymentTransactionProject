export const actionTypes = {
  ACTION_SAVE_TRANSACTION: 'ACTION_SAVE_TRANSACTION',
  ACTION_SAVE_TRANSACTION_SUCCESS: 'ACTION_SAVE_TRANSACTION_SUCCESS',
  ACTION_SAVE_TRANSACTION_ERROR: 'ACTION_SAVE_TRANSACTION_ERROR',
  ACTION_GET_TRANSACTION: 'ACTION_GET_TRANSACTION',
  ACTION_GET_TRANSACTION_SUCCESS: 'ACTION_GET_TRANSACTION_SUCCESS',
  ACTION_GET_TRANSACTION_ERROR: 'ACTION_GET_TRANSACTION_ERROR',
}

export const saveTransaction = payload => ({
  type: actionTypes.ACTION_SAVE_TRANSACTION,
  payload,
});

export const saveTransactionError = payload => ({
  type: actionTypes.ACTION_SAVE_TRANSACTION_ERROR,
  payload,
});


export const getTransactionSuccess = payload => ({
  type: actionTypes.ACTION_GET_TRANSACTION_SUCCESS,
  payload,
});

export const getTransaction = () => ({
  type: actionTypes.ACTION_GET_TRANSACTION
});

export const getTransactionError = payload => ({
  type: actionTypes.ACTION_GET_TRANSACTION_ERROR,
  payload,
});


export const saveTransactionSuccess = payload => ({
  type: actionTypes.ACTION_SAVE_TRANSACTION_SUCCESS,
  payload,
});




