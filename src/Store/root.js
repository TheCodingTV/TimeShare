import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

import authReducer from './auth/reducer'
import timerReducer from './timer/reducer'

import * as authEpics from './auth/epic'
import * as timerEpics from './timer/epic'

export const rootEpic = combineEpics(
  ...Object.values(authEpics),
  ...Object.values(timerEpics)
)

export const rootReducer = combineReducers({
  auth: authReducer,
  timer: timerReducer
})