const state = {
  currentIndex: 0,
  total: 0,
  history: [],
  _listeners: [],
};

/** Subscribe to state changes */
export function subscribe(fn) {
  state._listeners.push(fn);
  return () => {
    state._listeners = state._listeners.filter(l => l !== fn);
  };
}

/** Notify all listeners */
function notify() {
  const snapshot = getState();
  state._listeners.forEach(fn => fn(snapshot));
}

/** Get a read-only snapshot */
export function getState() {
  return {
    currentIndex: state.currentIndex,
    total: state.total,
    history: [...state.history],
  };
}

/** Set the total slide count (called once at init) */
export function setTotal(n) {
  state.total = n;
  notify();
}

/** Navigate to a specific slide index */
export function goTo(index) {
  const clamped = Math.max(0, Math.min(state.total - 1, index));
  if (clamped === state.currentIndex) return;
  state.history.push(state.currentIndex);
  state.currentIndex = clamped;
  notify();
}

/** Go to the next slide */
export function next() {
  goTo(state.currentIndex + 1);
}

/** Go to the previous slide */
export function prev() {
  goTo(state.currentIndex - 1);
}

/** Go to first slide */
export function goFirst() {
  goTo(0);
}

/** Go to last slide */
export function goLast() {
  goTo(state.total - 1);
}

export function setCurrentIndex(index) {
  const clamped = Math.max(0, Math.min(state.total - 1, index));
  state.currentIndex = clamped;
  notify();
}
