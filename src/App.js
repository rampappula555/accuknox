import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import AddWidgetForm from "./components/AddWidgetForm";
import Search from "./components/Search";
import AddCategory from "./components/AddCategory";

const App = () => {
  const [showAddCategoryView, setShowAddCategoryView] = useState(false);
  const [openWidgetForm, setOpenWidgetForm] = useState(false);
  function handleCategory() {
    setShowAddCategoryView(true);
  }
  return (
    <div>
      <div
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          opacity: showAddCategoryView ? 0.4 : 1,
          pointerEvents: showAddCategoryView ? "none" : "auto",
        }}
      >
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <h1 className="navbar-brand">Dynamic Dashboard</h1>
            <button className="btn btn-light fw-bold" onClick={handleCategory}>
              Add Category +
            </button>
            <div className="d-flex" role="search">
              <Search setShowAddCategoryView={setShowAddCategoryView} />
            </div>
          </div>
        </nav>
        {openWidgetForm && (
          <AddWidgetForm setOpenWidgetForm={setOpenWidgetForm} />
        )}
        <Dashboard setOpenWidgetForm={setOpenWidgetForm} />
      </div>
      {showAddCategoryView && (
        <AddCategory setShowAddCategoryView={setShowAddCategoryView} />
      )}
    </div>
  );
};

export default App;
