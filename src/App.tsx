import React from 'react';
import {AppRouter} from "./components/AppRouter";
import {Layout} from "antd";
import {Navbar} from "./components/Navbar/Navbar";
import './App.css'

export const App = () => {
    return (
            <Layout>
                <Navbar />
                <>
                    <AppRouter />
                </>
            </Layout>

    );
};