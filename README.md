this is an electron , svelteKit and vite starter template 
using npm and with Typescript.


steps:

1. create the electron app using official Electron Forge 
    npx create-electron-app@latest app name --template=vite-typescript
2. in the src folder , building a SvelteKit app
    npx sv create renderer
3. make them work together with some changes
    - package.json: add  concurrently dev for renderer and electron.
    - package.json: adjust the version for packages
    - src/main.ts : add IPC console.log() and define MAIN_WINDOW_VITE_DEV_SERVER_URL
    - src/renderer/package.json: using the newest compatible packages.
    - src/renderer/src: add ambient.d.ts for type definition.
    - /src/renderer/src/routes/page.svelte: add some lines to test the ipc
4. it works if
   npm run dev 
and the app pop-up and you can click 'Send IPC' button and read some msg on the console.

Good Luck!