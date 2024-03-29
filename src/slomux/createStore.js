export const createStore = (reducer, initialState) => {
    let currentState = initialState
    const listeners = []
  
    const getState = () => currentState
    const dispatch = action => {
      currentState = reducer(currentState, action)
      listeners.forEach(listener => listener())

      return action;
    }
  
    const subscribe = listener => {
        listeners.push(listener)

        // introduce an unsubscribe method
        return function () {
            const index = listeners.indexOf(listener)
            listeners.splice(index, 1)
        }
    }
  
    return { getState, dispatch, subscribe }
}