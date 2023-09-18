const initialState = {
  location: "",
  userInteraction: {
    arrLocations: [],
    weather: {},
    forecast: {},
    forecast5days: [],
    fiveDays: [],
    isLoading: true,
    isLoadingHTML: true,
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EMPTY_ARR_LOCATION":
      return {
        ...state,
        userInteraction: {
          ...state.userInteraction,
          arrLocations: [],
          isLoading: !state.userInteraction.isLoading,
        },
      };
    case "ADD_FIVE_DAYS":
      return {
        ...state,
        userInteraction: {
          ...state.userInteraction,
          fiveDays: [action.payload],
        },
      };
    case "ADD_ARR_LOCATIONS":
      return {
        ...state,
        location: action.payload,
        userInteraction: {
          ...state.userInteraction,
          arrLocations: [action.payload],
        },
      };

    case "ADD_PARSEBODY_WEATHER":
      return {
        ...state,
        userInteraction: {
          ...state.userInteraction,
          weather: action.payload,
          isLoadingHTML: false,
        },
      };
    case "ADD_PARSEBODY_FORECAST":
      return {
        ...state,
        userInteraction: {
          ...state.userInteraction,
          forecast: action.payload,
          forecast5days: action.payload.list,
          isLoadingHTML: false,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
