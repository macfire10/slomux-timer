import { CHANGE_INTERVAL } from './actions'

export default (state, action) => {
    switch(action.type) {
      case CHANGE_INTERVAL:
        return {
            ...state,
            currentInterval: state.currentInterval + action.payload,
        };
      default:
        return {}
    }
  }