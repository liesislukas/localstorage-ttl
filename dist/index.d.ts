declare function set<T>(variable: string, value: T, ttl_ms?: number): void;
declare function remove(variable: string): void;
declare function get<T>(variable: string): T | null;
export declare const ls: {
  set: typeof set;
  get: typeof get;
  remove: typeof remove;
};
export default ls;
//# sourceMappingURL=index.d.ts.map
