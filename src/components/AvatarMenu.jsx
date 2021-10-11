import React from 'react';
import { Link } from 'react-router-dom';
import './AvatarMenu.scss'
import { LOGIN } from '../routes/routes';
import { logout } from '../auth/auth';
import jwt from 'jwt-decode'




function AvatarMenu({ avatarMenu }) {
    return (
        <div className={avatarMenu ? 'menu-container active' : 'menu-container'}>
            <ul className="user-menu">
                <div className="profile-highlight">
                    <div className="details">
                        <div id="profile-name">{jwt(sessionStorage.getItem("token")).name}</div>
                        <div id="profile-footer">Tecnostart</div>
                    </div>
                </div>
                <div className="footer">
                    <li className="user-menu__item"><Link className="user-menu-link" to={LOGIN} onClick={logout}>Logout</Link></li>
                </div>
            </ul>
        </div>
    )

}

export default AvatarMenu;