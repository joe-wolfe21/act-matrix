import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HistoryIcon from "@material-ui/icons/History";
import Home from "./Home";
import MatrixHistory from "./MatrixHistory";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  historyButtonText: {
    marginLeft: theme.spacing(1),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className="nav-bar">
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <Link to="/">Act Matrix</Link>
              </Typography>
              <Button color="inherit" component={Link} to="/matrices">
                <HistoryIcon />
                <span className={classes.historyButtonText}>History</span>
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <Switch>
          <Route path="/matrices">
            <MatrixHistory />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
