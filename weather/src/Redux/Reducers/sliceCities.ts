import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const citiesSlice: any = createSlice({
  name: "cities",
  initialState,
  reducers: {
    filter: (state, payload) =>
      state.filter((item: any) => {
        return item?.zip_code.includes(payload) || item?.city.includes(payload);
      }),
    setCities: (state, action) => action.payload,
  },
});

export const { filter, setCities } = citiesSlice.actions;
export default citiesSlice.reducer;
