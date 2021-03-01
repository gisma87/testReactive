import React, {useEffect} from "react";
import './App.scss'
import SideBar from "./components/SideBar/SideBar";
import UserInfo from "./components/UserInfo/UserInfo";
import {connect} from "react-redux";
import {getUser} from "./actions";
import Loader from "./components/Loader";

const App = props => {

  useEffect(() => {
    props.getUser()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Loader classStyle={props.loading ? ' Loader_is-opened' : ''}/>
      <section className='App__column App__usersColumn'>
        <h2 className='App__titleColumn'>Users</h2>
        <SideBar/>
      </section>
      <section className='App__column App__infoColumn'>
        <h2 className='App__titleColumn'>User Info</h2>
        <UserInfo/>
      </section>

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
