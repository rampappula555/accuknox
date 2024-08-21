import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeUnchecked,
  toggleIsChecked,
} from "../features/widgets/widgetsSlice";

function AddCategory({ setShowAddCategoryView }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.widgets.categories);
  const [currentCategory, setCurrentCategory] = useState(
    categories[0].categoryName
  );
  const res = categories.filter((cat) => cat.categoryName === currentCategory);
  function handleCheckbox(widgetName) {
    return (event) => {
      dispatch(
        toggleIsChecked({
          checked: event.target.checked,
          widgetName,
          currentCategory,
        })
      );
    };
  }
  function handleChangeCategory(cat) {
    setCurrentCategory(cat);
  }
  function handleConform() {
    dispatch(removeUnchecked());
    setShowAddCategoryView(false);
  }
  return (
    <div
      className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: "0",
        left: "50%",
        backgroundColor: "white",
        paddingLeft: "20px",
      }}
    >
      <h5
        style={{
          borderTopLeftRadius: "10px",
          backgroundColor: "blue",
          color: "white",
          padding: "4px",
        }}
      >
        Add Widget
      </h5>
      <div style={{ marginBottom: "15px" }}>
        <p>Personalize your dashboard by adding the following widget</p>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          {categories.map((cat) => (
            <button
              className="btn btn-outline-primary"
              key={cat.categoryName}
              onClick={() => handleChangeCategory(cat.categoryName)}
            >
              {cat.categoryName}
            </button>
          ))}
          <button className="btn btn-primary">add category</button>
        </div>
      </div>
      <div>
        {res[0].widgets.map((each) => {
          return (
            <div
              key={each.widgetName}
              style={{ display: "flex", alignItems: "center" }}
            >
              <input
                className="form-check-input mt-0"
                aria-label="Checkbox for following text input"
                type="checkbox"
                id={each.widgetName}
                checked={each.isChecked}
                onChange={handleCheckbox(each.widgetName)}
              />
              <label
                style={{
                  height: "18px",
                  textAlign: "center",
                  paddingLeft: "7px",
                  marginBottom: "9px",
                }}
                htmlFor={each.widgetName}
              >
                {each.widgetName}
              </label>
            </div>
          );
        })}
      </div>
      <div
        style={{ height: "70%", paddingRight: "20px" }}
        className="d-flex justify-content-end align-items-end"
      >
        <button
          onClick={() => {
            setShowAddCategoryView(false);
          }}
          style={{ marginRight: "17px" }}
          className="btn btn-outline-secondary"
        >
          Cancel
        </button>
        <button onClick={handleConform} className="btn btn-outline-primary">
          Conform
        </button>
      </div>
    </div>
  );
}
export default AddCategory;
