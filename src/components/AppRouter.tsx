import React, {FC} from 'react';
import {Route, Navigate, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

export const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.authReducer)

    return (
        isAuth ? <Routes>
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