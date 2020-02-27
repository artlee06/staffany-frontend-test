import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SecondPage from "./pages/SecondPage";
import Grid from '@material-ui/core/Grid';



function App() {
  return (
    <Router>
      <div>
        <Grid container justify={"center"}>
          <Route exact path="/Main" render={() => <MainPage />}/>
          <Route exact path="/Second" render={() => <SecondPage />}/>
          <Redirect to="/Main"/>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
