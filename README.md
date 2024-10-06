# localstorage-ttl

TS module to save data to localstorage with time to live. Data will expire after set time.
On npm: https://www.npmjs.com/package/localstorage-ttl

Updated to TS (v2) after 9yr of JS (v1) 🎉

# Install:

```
npm install localstorage-ttl --save
```

# Usage:

```
import ls from 'localstorage-ttl';

ls.set(variable, value, [ttl_ms]);
ls.get(variable);
ls.remove(variable);
```

- ttl_ms = time to live time in ms.

if **ttl_ms** is not set it will stay **without expire date** and will be there till deleted.

You may contact me here: https://lukasliesis.com/
