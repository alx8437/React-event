import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import styles from './Navbar.module.scss'
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../router";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {logout} from "../../store/reducers/auth/thunk-creators";

export const Navbar: FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const {isAuth, user} = useTypedSelector(state => state.authReducer)

    const onLogin = () => {
        navigate(RouteNames.LOGIN)
    }

    const onExit = () => {
        dispatch<any>(logout());
    }

    return (
        <Layout.Header>
            <Row justify="end">
                <div className={styles.userName}>{user.username}</div>
                {isAuth ? <Menu className={styles.menu} theme="dark" mode='horizontal' selectable={false}>
                    <Menu.Item
                        key='01'
                        onClick={onExit}>
                        Exit
                    </Menu.Item>
                </Menu> : <Menu className={styles.menu} theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item
                        key='02'
                        onClick={onLogin}>
                        Login
                    </Menu.Item>
                </Menu>}
            </Row>
        </Layout.Header>
    );
};
