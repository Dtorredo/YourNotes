// Re-export global firebase if using the script tag
// or initialize it here if we were using the module.
// Since we want to move away from globals, we'll try to use the window object for now
// but type it properly.

declare global {
  interface Window {
    firebase: any;
  }
}

export const firebase = window.firebase;
export const auth = firebase.auth();
export const database = firebase.database();
