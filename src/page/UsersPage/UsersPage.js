import React from "react";
import './UsersPage.scss'
import SideBar from "../../components/SideBar/SideBar";
import UserInfo from "../../components/UserInfo/UserInfo";

const UsersPage = () => {
  return (
    <main className='UsersPage'>
      <section className='UsersPage__column UsersPage__usersColumn'>
        <h2 className='UsersPage__titleColumn'>Users</h2>
        <SideBar/>
      </section>
      <section className='UsersPage__column UsersPage__infoColumn'>
        <h2 className='UsersPage__titleColumn'>User Info</h2>
        <UserInfo/>
      </section>
    </main>
  )
}

export default UsersPage
