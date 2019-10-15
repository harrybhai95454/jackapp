const initialState = {
   username: "test",
   password: "test"
}

const stateReducer = (state = initialState, action) => {
   switch(action.type) {
      case "Edit":
         return state.username;
      case "Delete":
         return state.password;
      default:
         return state;
   }
}

export default stateReducer;