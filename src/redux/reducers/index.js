const initialState = {
  isLoadingCity: false,
  isLoadingWeather: false,
  isLoadingHTML: true,
  isLoadingHTML2: true,
  isLoadingNextDays: false,
  city: "Milan",
  search: [],
  weather: {},
  nextdays: {},
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_QUERY":
      return {
        ...state,
        city: action.payload,
        isLoadingCity: true,
        isLoadingHTML: true,
        isLoadingHTML2: true,
      };
    case "ADD_PARSEBODY_CITY":
      return {
        ...state,
        search: [action.payload],
        isLoadingCity: false,
        isLoadingWeather: true,
        isLoadingNextDays: true,
      };
    case "ADD_PARSEBODY_WEATHER":
      return {
        ...state,
        weather: action.payload,
        isLoadingWeather: false,
        isLoadingHTML: false,
      };
    case "ADD_PARSEBODY_NEXTDAYS":
      return {
        ...state,
        nextdays: action.payload,
        isLoadingNextDays: false,
        isLoadingHTML2: false,
      };
    default:
      return state;
  }
};

export default mainReducer;
