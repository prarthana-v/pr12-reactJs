let intialState = {
  Notes: [],
};
const UserReducer = (state = intialState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        Notes: [...state.Notes, action.payload],
      };

    case "view":
      return {
        ...state,
        Notes: action.payload,
      };

    case "delete":
      return {
        ...state,
        Notes: state.Notes.filter((n) => n.id !== action.payload),
      };

    case "multiple_delete":
      return {
        ...state,
        // Notes: state.Notes.filter((n) => !action.payload.includes(n.id)),
        Notes: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
