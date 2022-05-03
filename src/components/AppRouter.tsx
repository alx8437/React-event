import React, {FC} from 'react';
import {Route, Navigate, Routes, BrowserRouter} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";

export const AppRouter: FC = () => {
    const auth = false;

    return <BrowserRouter>
        <Routes>
            {auth ? privateRoutes.map(route => <Route key={route.path} path={route.path}
                                                      element={<route.element/>}/>) : publicRoutes.map(route => <Route
                key={route.path} path={route.path} element={<route.element/>}/>)}
        </Routes>
    </BrowserRouter>

}