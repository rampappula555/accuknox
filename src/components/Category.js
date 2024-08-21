import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeWidget } from "../features/widgets/widgetsSlice";

const Category = ({ category, setOpenWidgetForm }) => {
  const query = useSelector((state) => state.widgets.searchQuery);
  const dispatch = useDispatch();

  const handleRemoveWidget = (widgetName) => {
    dispatch(removeWidget({ categoryName: category.categoryName, widgetName }));
  };

  return (
    <div style={{ paddingTop: "40px" }}>
      <h2 style={{ marginBottom: "30px" }} className="fw-bolder">
        {category.categoryName}
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {category.widgets.map((widget) => (
          <div
            key={widget.widgetName}
            style={{
              listStyle: "none",
              marginRight: "20px",
              minWidth: "250px",
            }}
          >
            <div
              className="card border-dark mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <h5 className="card-header">{widget.widgetName}</h5>
              <button
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                }}
                className="btn"
                onClick={() => {
                  handleRemoveWidget(widget.widgetName);
                }}
              >
                x
              </button>
              <div className="card-body fst-italic">
                <p className="card-text">{widget.widgetText}</p>
              </div>
            </div>
          </div>
        ))}
        {query.length === 0 && (
          <div
            onClick={() => {
              setOpenWidgetForm(true);
            }}
            className="card border-dark mb-3"
            style={{ width: "18rem" }}
          >
            <div
              className="card-body d-flex justify-content-center align-items-center"
              role="button"
            >
              <p className="card-text font-monospace">Add widget +</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
