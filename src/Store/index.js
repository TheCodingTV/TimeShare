import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic, rootReducer } from './root'

const epicMiddleware = createEpicMiddleware()

export default function configureStore () {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  )

  epicMiddleware.run(rootEpic)
  return store
}
