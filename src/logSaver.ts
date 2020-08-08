const localStorageKey = 'pokemon-damage-estimator-log';

export function appendLog(message: string) {
    localStorage.setItem(localStorageKey, getLog() + message);
}

export function getLog(): string {
    return localStorage.getItem(localStorageKey) || '';
}

export function clearLog() {
    localStorage.removeItem(localStorageKey);
}
