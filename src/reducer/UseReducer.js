// retrieve the stored value
const storedUser = localStorage.getItem("user");

// set the initial state to the stored value, or to null if no value is found
export const initialState = storedUser ? JSON.parse(storedUser) : 0;

export const reducer = (state, action) => {
  switch (action.type) {
    case "MEMBER":
      // store the user information in localStorage
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;

      case "ADMIN":
        // store the user information in localStorage
        localStorage.setItem("user", JSON.stringify(action.payload));
        return action.payload;

    default:
      return state;
  }
};