import { configureStore } from "@reduxjs/toolkit";
import widgetsReducer from "./features/widgets/widgetsSlice";

export const store = configureStore({
  reducer: {
    widgets: widgetsReducer,
  },
});
