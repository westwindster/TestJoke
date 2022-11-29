import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: []
};

function save(state) {
  let i = 1;
  for (; i <= state.values.length; i++) {
    localStorage.setItem("jokes" + i, state.values[i - 1].text);
    localStorage.setItem("jokesId" + i, state.values[i - 1].id);
  }
  localStorage.setItem("jokesCount", i);
}
export const jokesSlice = createSlice({
  name: "jokes",
  initialState,

  reducers: {
    load: (state) => {
      const count = localStorage.getItem("jokesCount");
      if (!count) return;
      for (let i = 1; i < count; i++) {
        state.values.push({
          text: localStorage.getItem("jokes" + i),
          id: localStorage.getItem("jokesId" + i)
        });
      }
    },
    add: (state, action) => {
      const id = action.payload.id;
      if (state.values.find((el) => el.id === id)) return; //element is already added
      if (state.values.length >= 10) state.values.shift(); //array hold max 10 elems
      state.values.push(action.payload);
      save(state); //toLocal
    },
    removeLast: (state) => {
      state.values.pop();
      save(state); //toLocal
    },
    remove: (state, action) => {
      const id = action.payload?.id ?? 0;
      const delInd = state.values.findIndex((el) => el.id === id);
      if (delInd < 0) return;
      state.values.splice(delInd, 1);
      save(state); //toLocal
    },
    deleteAll: (state) => {
      state.values.length = 0;
      localStorage.setItem("jokesCount", 0);
    }
  }
});

export const { add, remove, removeLast, load, deleteAll } = jokesSlice.actions;
export default jokesSlice.reducer;
