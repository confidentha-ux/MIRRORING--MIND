const STORAGE_KEY = "mirroringMindJourney";

export function loadJourney() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

export function saveJourney(state) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    return false;
  }
  return true;
}

export function clearJourney() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    return false;
  }
  return true;
}
