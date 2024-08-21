import React from "react";
import { useSelector } from "react-redux";
import Category from "./Category";

const Dashboard = ({ setOpenWidgetForm }) => {
  const categories = useSelector((state) => state.widgets.categories);
  const searchQuery = useSelector((state) => state.widgets.searchQuery);

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.widgetName.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div>
      {filteredCategories.map((category) => (
        <Category
          key={category.categoryName}
          category={category}
          setOpenWidgetForm={setOpenWidgetForm}
        />
      ))}
    </div>
  );
};

export default Dashboard;
