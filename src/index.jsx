import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import {
  subscribe,
  APP_READY,
  APP_INIT_ERROR,
  initialize,
} from "@edx/frontend-platform";
import {
  AppProvider,
  PageRoute,
  AuthenticatedPageRoute,
  ErrorPage
} from "@edx/frontend-platform/react";
import ExamplePage from "./components/ExamplePage";
import { DashboardPage } from "./components/dashboard-page";
import { CoursesPage } from "./components/courses-page";
import store from './store';
import './index.scss';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider store={store}>
      <PageRoute exact path="/" component={ExamplePage} />
      <PageRoute
        exact
        path="/error_example"
        component={() => <ErrorPage message="Test error message" />}
      />
      <AuthenticatedPageRoute
        exact
        path="/dashboard"
        component={DashboardPage}
      />
      <AuthenticatedPageRoute
        exact
        path="/courses"
        component={CoursesPage}
      />
    </AppProvider>,
    document.getElementById("root")
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages: [],
  requireAuthenticatedUser: false,
});
