// actions
export const setCurrentCompany = (company) => ({
  type: 'SET_CURRENT_COMPANY',
  payload: company,
});

// reducer
const initialState = {
  currentCompany: null,
};

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_COMPANY':
      return {
        ...state,
        currentCompany: action.payload,
      };
    default:
      return state;
  }
};
