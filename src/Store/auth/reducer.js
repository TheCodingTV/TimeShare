
const INITIAL_STATE = {
  user: {},
  jwt: ''
}

const authRedcuer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTH_SET_DATA':
      return {
        user: action.user,
        jwt: action.jwt
      }  
    default:
      return state;
  }
}

export default authRedcuer