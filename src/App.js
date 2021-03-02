import React, {useEffect} from "react";
import './App.scss'
import {connect} from "react-redux";
import {getUser} from "./actions";
import Loader from "./components/Loader";
import {Redirect, Route, Switch} from "react-router-dom";
import CreateUser from "./page/CreateUser/CreateUser";
import UsersPage from "./page/UsersPage/UsersPage";

const App = props => {

  useEffect(() => {
    props.getUser()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Loader classStyle={props.loading ? ' Loader_is-opened' : ''}/>
      <Switch>
        <Route exact path="/" component={UsersPage}/>
        <Route path="/create-user/" component={CreateUser}/>
        <Redirect to={'/'}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = ({loading}) => {
  return {loading}
}

const mapDispatchToProps = (dispatch) => {
  return {getUser: () => dispatch(getUser())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
