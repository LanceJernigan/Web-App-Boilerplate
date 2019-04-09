import React from 'react';
import { Link } from 'react-router-dom';

import Brand from '../../icons/Brand';
import Menu from '../../components/Menu';

import style from './style.scss';

const Nav = ({ show, color = '#fff' }) => (
    show
        ?   (
            <Link
                to="/"
                className="app_header-menu"
            >
                <div
                    className="app_header-menu_wrapper"
                >
                    <div
                        className="app_header-menu_line"
                        style={{
                            background: color
                        }}
                    ></div>
                    <div
                        className="app_header-menu_line"
                        style={{
                            background: color
                        }}
                    ></div>
                    <div
                        className="app_header-menu_line"
                        style={{
                            background: color
                        }}
                    ></div>
                </div>
            </Link>
        )
    :   null
);

const Header = ({
    showNav = true,
    showMenu = false,
    color = '#fff'
}) => (
    <header
        className="app_header"
    >
        <div
            className="app_header-brand"
        >
            <Brand color={color} />
        </div>
        <Nav show={showNav} color={color} />
        <Menu show={showMenu} color={color} />
    </header>
);

export default Header;