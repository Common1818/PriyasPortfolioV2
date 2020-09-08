export const projectReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PROJECT":
      return {
        ...state,
        project: action.project,
        homeLoaded: true,
      };

    // case "UPDATE_ABOUT":
    //   return {
    //     ...state,
    //     message: action.message,
    //     color: action.color,
    //     completed: true,
    //   };

    default:
      return state;
  }
};
