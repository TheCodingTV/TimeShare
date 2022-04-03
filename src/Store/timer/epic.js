import { ofType } from 'redux-observable'
import { from } from 'rxjs'
import { switchMap, withLatestFrom, map } from 'rxjs/operators'
import api from '../../Api/config'

export const addTimerEpic = (action$, state$) => action$.pipe(
  ofType('ADD_TIMER'),
  withLatestFrom(state$),
  switchMap(([action, state]) => {
    const { jwt } = state.auth
    return from(api.addTimer({
      title: action.title,
      config: action.config
    }, jwt)).pipe(
      map(response => {
        return { type: 'GET_MY_TIMERS' }
      })
    )
  })
)

export const getMyTimersEpic = (action$, state$) => action$.pipe(
  ofType('GET_MY_TIMERS'),
  withLatestFrom(state$),
  switchMap(([_, state]) => {
    const { jwt } = state.auth
    return from(api.getMyTimers({}, jwt)).pipe(
      map(({ count, data }) => {
        // console.log('-- get my timers --')
        // console.log(count, data)
        return {
          type: 'SET_MY_TIMERS',
          data,
          count
        }
      })
    )
  })
)

export const deleteMyTimersEpic = (action$, state$) => action$.pipe(
  ofType('DELETE_MY_TIMER'),
  withLatestFrom(state$),
  switchMap(([action, state]) => {
    const { jwt } = state.auth
    return from(api.deleteTimer({ timerId: action.id }, jwt)).pipe(
      map((response) => {
        console.log('-- delete timer --')
        console.log(response)
        // console.log('-- get my timers --')
        // console.log(count, data)
        return { type: 'GET_MY_TIMERS' }
      })
    )
  })
)