import {
  SET_USER,
  SET_USER_EMAIL,
  SET_USER_IMAGE,
  SET_USER_PASSWORD
} from '../action/action-const';

const initialState = {
  image: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNTEyLjAwMDAwMHB0IiBoZWlnaHQ9IjUxMi4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE0LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw1MTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMjMzMSA1MTA5IGMtMTAxMyAtOTAgLTE4ODIgLTc4MSAtMjIwMSAtMTc0OSAtOTEgLTI3NiAtMTI1IC00OTEKLTEyNSAtODAwIDAgLTMwOSAzNCAtNTI0IDEyNSAtODAwIDEyNyAtMzg2IDMyNCAtNzA2IDYxMyAtOTk5IDQwNyAtNDEyIDkwNQotNjU4IDE1MDIgLTc0MyAxMTggLTE3IDUxMiAtMTcgNjMwIDAgNTk3IDg1IDEwOTUgMzMyIDE1MDIgNzQzIDQwMyA0MDggNjQwCjg5MyA3MjUgMTQ4NCAxNyAxMTggMTcgNTEyIDAgNjMwIC00OCAzMzYgLTE0NyA2NDIgLTI5NSA5MTAgLTQ5MSA4OTQgLTE0NjMKMTQxNCAtMjQ3NiAxMzI0eiBtNDA2IC03NzUgYzI2NSAtNTUgNDkwIC0yNDAgNjAxIC00OTYgNDUgLTEwNSA2NCAtMjAyIDY0Ci0zMzMgMCAtMTQ1IC0yMSAtMjM0IC04NyAtMzcxIC00NCAtOTEgLTY4IC0xMjYgLTEzMSAtMTkzIC0xMjYgLTEzNCAtMjQwCi0yMDQgLTQxMSAtMjUzIC0xMTIgLTMyIC0zMTQgLTMyIC00MjYgMCAtMTcwIDQ5IC0yODUgMTE5IC00MDkgMjUxIC04OCA5NAotMTY2IDIzNyAtMTk5IDM2NiAtMjUgMTAwIC0yOCAyNzcgLTUgMzgzIDY3IDMxNiAzMzAgNTc5IDY0NiA2NDcgODkgMTkgMjY0CjE4IDM1NyAtMXogbTUyOCAtMjExMiBjMzYzIC0xMDEgNjExIC0zOTYgNjQxIC03NjQgMTMgLTE2NSAtMzcgLTI3MSAtMTc5Ci0zODIgLTIyMCAtMTcxIC00NTAgLTI4NCAtNzE2IC0zNTAgLTE3NyAtNDQgLTIzNyAtNTEgLTQ1NiAtNTEgLTI0OSAxIC0zNzIKMjAgLTU4NCA5MCAtMTc0IDU4IC0zMTEgMTI1IC00NTcgMjI0IC0yMjkgMTUzIC0yOTEgMjMyIC0zMDEgMzg3IC02IDkyIDE1CjIyMiA1MyAzMjMgMTA2IDI4MiAzNzQgNDk1IDY3OSA1NDAgMzMgNSAzMjYgOCA2NTAgNyA1NzYgLTIgNTkyIC0yIDY3MCAtMjR6Ii8+CjwvZz4KPC9zdmc+Cg=="
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_EMAIL:
      state = { ...state, email: action.payload };
      break;

    case SET_USER_PASSWORD:
      state = { ...state, password: action.payload };
      break;

    case SET_USER:
      const image = state.image;
      state = action.payload;
      state = { ...state, image: image };
      break;

    case SET_USER_IMAGE:
      state = { ...state, image: action.payload };
      break;

    default:
      state = { ...state };
  }
  return state;
}
