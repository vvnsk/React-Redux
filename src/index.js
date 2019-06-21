import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);

/**
 *  Enhancements to do:
 *  1. Author Management
 *  2. Filter book list
 *  3. Hide empty book list
 *  4. Unsaved changes message
 *  5. Enhance validation
 *  6. Handle 404 on edit book
 *  7. Show # books in Header
 *  8. Pagination
 *  9. Sort course table
 *  10. Revert abandoned changes
 **/
