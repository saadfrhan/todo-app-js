export function load<T>(key: string, fallback: T): T {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    return fallback;
  }
}

export function save<T>(key: string, data: T): void {
  localStorage.setItem(key, JSON.stringify(data));
}
