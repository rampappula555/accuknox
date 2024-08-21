import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      categoryName: "CSPM Executive Dashboard",
      widgets: [
        {
          widgetName: "Widget 1",
          widgetText: "This is a random text for Widget 1.",
          isChecked: true,
        },
        {
          widgetName: "Widget 2",
          widgetText: "This is a random text for Widget 2.",
          isChecked: true,
        },
      ],
    },
    {
      categoryName: "Security Overview",
      widgets: [
        {
          widgetName: "Widget 1",
          widgetText: "This is a random text for Security Overview Widget 1.",
          isChecked: true,
        },
      ],
    },
  ],
  searchQuery: "",
};

const widgetsSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryName, widget } = action.payload;
      const category = state.categories.find(
        (cat) => cat.categoryName === categoryName
      );
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryName, widgetName } = action.payload;
      const category = state.categories.find(
        (cat) => cat.categoryName === categoryName
      );
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.widgetName !== widgetName
        );
      }
    },
    toggleIsChecked: (state, action) => {
      const { widgetName, checked, currentCategory } = action.payload;
      const category = state.categories.find(
        (cat) => cat.categoryName === currentCategory
      );
      if (category) {
        const wantedWidget = category.widgets.find(
          (each) => each.widgetName === widgetName
        );
        wantedWidget["isChecked"] = checked;
      }
    },
    removeUnchecked: (state) => {
      state.categories.forEach((category) => {
        category.widgets = category.widgets.filter(
          (widget) => widget.isChecked
        );
      });
    },
    searchWidgets: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  addWidget,
  removeWidget,
  toggleIsChecked,
  removeUnchecked,
  searchWidgets,
} = widgetsSlice.actions;

export default widgetsSlice.reducer;
