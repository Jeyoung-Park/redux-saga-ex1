import React from "react";
import { Route } from "react-router";
import CounterContainer from "./containers/CounterContainer";
import PostListContainer from "./containers/PostListContainer";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";

const App = () => {
  return (
    <>
      <Route path="/" component={PostListPage} exact />
      <Route path="/:id" component={PostPage} />
    </>
  );
};

export default App;
