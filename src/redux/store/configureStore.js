import {createStore, compose, applyMiddleware} from 'redux';
// import {createEpicMiddleware} from 'redux-observable';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
// import rootEpic from '../epics';

// const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  // composeEnhancers(applyMiddleware(epicMiddleware)),
  composeEnhancers(
      applyMiddleware(
          thunkMiddleware,
      )
  )
);

store.subscribe(() => {
    console.log('State: ', store.getState());
})

// epicMiddleware.run(rootEpic);

export default store;

// Cai khac
// import {
//   createStore,
//   applyMiddleware,
//   compose
// } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import {
//   createLogger
// } from 'redux-logger';
// import rootReducer from './combine-reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const loggerMiddleware = createLogger();

// var store = createStore(
//   rootReducer,
//   composeEnhancers(
//       applyMiddleware(
//           thunkMiddleware,
//           // loggerMiddleware
//       )
//   )
// );



// export default store;