interface StoredData<T> {
  value: T;
  expires_at?: number;
}

function set<T>(variable: string, value: T, ttl_ms?: number): void {
  let data: StoredData<T> = {
    value: value,
  };
  if (ttl_ms) {
    data.expires_at = Date.now() + ttl_ms;
  }
  localStorage.setItem(variable, JSON.stringify(data));
}

function remove(variable: string): void {
  localStorage.removeItem(variable);
}

function get<T>(variable: string): T | null {
  const item = localStorage.getItem(variable);
  if (item) {
    try {
      const data: StoredData<T> = JSON.parse(item) as StoredData<T>;
      if (data.expires_at && data.expires_at < Date.now()) {
        localStorage.removeItem(variable);
        return null;
      } else {
        return data.value;
      }
    } catch (e) {
      localStorage.removeItem(variable);
    }
  }
  return null;
}

export const ls = { set, get, remove };
export default ls;
