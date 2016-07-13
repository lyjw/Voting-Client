// Action Creators are pure functions that return action objects
// They encapsulate the internal structure of action objects and document all actions that can be dispatched in the application

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function vote(entry) {
  return {
    type: 'VOTE',
    entry
  }
}
