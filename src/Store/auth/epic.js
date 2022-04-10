import { ofType } from 'redux-observable'
import { from, of, concat } from 'rxjs'
import { switchMap, map } from 'rxjs/operators'
import api from '../../Api/config'

export const authEpic = action$ => action$.pipe(
  ofType('AUTH_LOGIN'),
  switchMap(_ =>
    from(api.authLocal()).pipe(
      switchMap((response) => {
        const { user, jwt } = response
        return concat(
          of({ type: 'AUTH_SET_DATA', user, jwt }),
          of({ type: 'GET_MY_TIMERS' })
        )
      })
    )
  )
)