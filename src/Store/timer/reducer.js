const INITIAL_STATE = {
  myTimers: [],
  myTimersCount: 0
}

const timerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_MY_TIMERS':
      return {
        ...state,
        myTimers: action.data,
        myTimersCount: action.count
      }  
    default:
      return state;
  }
}

export default timerReducer