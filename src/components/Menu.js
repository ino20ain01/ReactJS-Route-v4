import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'About',
        to: '/about',
        exact: false
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false
    },
    {
        name: 'Products',
        to: '/products',
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={ to }
            exact={ activeOnlyWhenExact }
            children={({ match }) => {
                let active = match ? 'active unknown' : '';
                return (
                    <li className={`my-li ${active}`}>
                        <Link
                            to={ to }
                            className="my-link"
                        >{label}</Link>
                    </li>
                );
            }}
        />
    );
}

class Menu extends Component {

    showMenus = (menus) => {
        let result = [];
        if (menus.length) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={ index }
                        label={ menu.name }
                        to={ menu.to }
                        activeOnlyWhenExact={ menu.exact }
                    />
                );
            });
        }
        return result;
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        { this.showMenus(menus) }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;
