import React, {FC} from 'react';
import {Route, Navigate, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";

export const AppRouter: FC = () => {
    const auth = true;

    return (
        auth ? <Routes>
                {privateRoutes.map(route => <Route key={route.path} path={route.path} element={<route.element/>}/>)}
                <Route path={"*"} element={<Navigate to={RouteNames.EVENT}/>}/>
            </Routes>

            :
            <Routes>
                {publicRoutes.map(route => <Route key={route.path} path={route.path} element={<route.element/>}/>)}
                <Route path={"*"} element={<Navigate to={RouteNames.LOGIN}/>}/>
            </Routes>
    )
}