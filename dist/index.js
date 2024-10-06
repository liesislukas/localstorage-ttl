"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ls = void 0;
function set(variable, value, ttl_ms) {
    let data = {
        value: value,
    };
    if (ttl_ms) {
        data.expires_at = Date.now() + ttl_ms;
    }
    localStorage.setItem(variable, JSON.stringify(data));
}
function remove(variable) {
    localStorage.removeItem(variable);
}
function get(variable) {
    const item = localStorage.getItem(variable);
    if (item) {
        try {
            const data = JSON.parse(item);
            if (data.expires_at && data.expires_at < Date.now()) {
                localStorage.removeItem(variable);
                return null;
            }
            else {
                return data.value;
            }
        }
        catch (e) {
            localStorage.removeItem(variable);
        }
    }
    return null;
}
exports.ls = { set, get, remove };
exports.default = exports.ls;
