import React, { useEffect } from "react";
import { AppRouter } from "./components/AppRouter";
import { Layout } from "antd";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import { useActions } from "./hooks/useActions";
import { IUser } from "./types/IUser";
import { LocalStorageService } from "./services/LocalStorageService";

export const App = () => {
  const { setAuth, setUser } = useActions();

  useEffect(() => {
    const username = LocalStorageService.getValue("username");
    const isAuth = LocalStorageService.getValue("auth");

    if (isAuth && username) {
      setAuth(true);
      setUser({ username } as IUser);
    }
  }, [setAuth, setUser]);

  return (
    <Layout>
      <Navbar />
      <>
        <AppRouter />
      </>
    </Layout>
  );
};
