const selectExamplePage = (state) => {
    /** @namespace state.editPipeline */
    // const statePipeline = state.editPipeline;
    const stateTransactions = state.transactions;
    const isLoading = state.isLoading;

    return {
      transactions: stateTransactions,
    };
  };
  
  export default selectExamplePage;
  