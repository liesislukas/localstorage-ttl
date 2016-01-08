# localstorage-ttl
JS module to save data to localstorage with time to live. Data will expire after set time.
On npm: https://www.npmjs.com/package/localstorage-ttl

# Install:

```
npm install localstorage-ttl --save
```

# Usage:

```
const ls = require('localstorage-ttl');

ls.set(variable, value, [ttl_ms]);
ls.get(variable);
```

* ttl_ms = time to live time in ms.

if **ttl_ms** is not set it will be **without expire date** and will be there till user deletes or your other js deletes it.
