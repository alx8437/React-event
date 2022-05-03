import React from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import {AppRouter} from "./components/AppRouter";

export const App = () => {
    return (
        <div>
            <AppRouter />
        </div>
    );
};