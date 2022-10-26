# getting started

- yarn
```hs
yarn install
```

- npm
```hs
npm install
```

## Environment

1. create `.env` file and `.env.frontend`
2. put the credentials

```hs
HOST=host
PORT=port
APP_KEYS=key
API_TOKEN_SALT=token
ADMIN_JWT_SECRET=token-admin
JWT_SECRET=secret
VITE_API=YOUR_API_VITE
```
 
> Important
## How to generate a new Component?

you can generate a new component using this command

**npm**
```sh
npm run gc NameComponent
```

**yarn**
```sh
yarn gc NameComponent
```


this will create a new folder with files components, `module.css` and there file for export

three file:
- `Component.jsx`
- `Component.module.css` || CSS file
- `index.js`
