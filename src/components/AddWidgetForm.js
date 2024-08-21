import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWidget } from "../features/widgets/widgetsSlice";

const AddWidgetForm = ({ setOpenWidgetForm }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const categories = useSelector((state) => state.widgets.categories);
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    if (categoryName && widgetName && widgetText) {
      dispatch(
        addWidget({
          categoryName,
          widget: { widgetName, widgetText, isChecked: true },
        })
      );
      setWidgetName("");
      setWidgetText("");
      setOpenWidgetForm(false);
    }
  };

  return (
    <div
      className="d-flex flex-column  justify-content-center align-items-center"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "#f2f2f2",
        zIndex: 1000,
      }}
    >
      <h1>Add Widget</h1>
      <select
        style={{ width: "500px", marginBottom: "15px" }}
        className="form-control"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.categoryName} value={category.categoryName}>
            {category.categoryName}
          </option>
        ))}
      </select>
      <input
        className="form-control"
        style={{ width: "500px", marginBottom: "15px" }}
        type="text"
        placeholder="Widget Name"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
      />
      <textarea
        className="form-control"
        style={{
          width: "500px",
          height: "200px",
          marginBottom: "15px",
        }}
        type="text"
        placeholder="Widget Text..."
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAddWidget}>
        Add Widget
      </button>
    </div>
  );
};

export default AddWidgetForm;
