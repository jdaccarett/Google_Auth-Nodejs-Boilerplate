import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//helpers
// - Browser Router (brains) looks at url and changes components
// - Route : used to setup a rule with a route and set of components

//dummy components
const Header = () => <h2> Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Landing} />
          <Route exact={true} path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
