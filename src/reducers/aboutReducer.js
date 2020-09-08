export const aboutReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ABOUT":
      return {
        ...state,
        about: action.about,
        homeLoaded: true,
      };

    case "UPDATE_ABOUT":
      return {
        ...state,
        message: action.message,
        color: action.color,
        completed: true,
      };

    default:
      return state;
  }
};
