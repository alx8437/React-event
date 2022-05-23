import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import styles from './Navbar.module.scss'
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../router";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";


export const Navbar: FC = () => {
    const {isAuth} = useTypedSelector(state => state.authReducer)
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const onLogin = () => {
        navigate(RouteNames.LOGIN)
    }

    const onExit = () => {
        console.log('exit')
    }


    return (
        <Layout.Header>
            <Row justify="end">
                <div className={styles.userName}>Alex</div>
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
