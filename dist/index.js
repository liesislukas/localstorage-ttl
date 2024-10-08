function set(variable, value, ttl_ms) {
  if (localStorage) {
    let data = {
      value: value,
    };
    if (ttl_ms) {
      data.expires_at = Date.now() + ttl_ms;
    }
    localStorage.setItem(variable, JSON.stringify(data));
  }
}
function remove(variable) {
  if (localStorage) {
    localStorage.removeItem(variable);
  }
}
function get(variable) {
  if (localStorage) {
    const item = localStorage.getItem(variable);
    if (item) {
      try {
        const data = JSON.parse(item);
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
  }
  return null;
}
export const ls = { set, get, remove };
export default ls;
//# sourceMappingURL=index.js.map
