import React, {useEffect} from 'react';
import {AppRouter} from "./components/AppRouter";
import {Layout} from "antd";
import {Navbar} from "./components/Navbar/Navbar";
import './App.css'
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";

export const App = () => {
  const {setAuth, setUser} = useActions()

  useEffect(() => {
    const isAuth = localStorage.getItem('auth');
    const username = localStorage.getItem('username');

    if (isAuth && username) {
      setAuth(true);
      setUser({username} as IUser)
    }
  },[setAuth, setUser])

    return (
            <Layout>
                <Navbar />
                <>
                    <AppRouter />
                </>
            </Layout>

    );
};