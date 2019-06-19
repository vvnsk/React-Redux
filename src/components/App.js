import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import BooksPage from "./books/BooksPage";
import ManageBookPage from "./books/ManageBookPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/books" component={BooksPage} />
        <Route path="/book/:slug" component={ManageBookPage} />
        <Route path="/book" component={ManageBookPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
