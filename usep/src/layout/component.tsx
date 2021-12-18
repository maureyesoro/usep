import "./styles.css";
import {FC} from 'react';
import images from '../assets';
import { Link } from "react-router-dom";


const Layout: FC = ({children}) => {
    const {University} = images;

    return (
        <div className="usep-container">
            <header className="usep-header">
            <Link to="/">
                <University className="usep-logo" />
            </Link>
                <ul className="usep-firstMenu">
                    <li className="clickable"> <Link className="header-link" to="/">Univ</Link> </li>
                    <li className="clickable"> <Link className="header-link" to="/">Sep</Link> </li>
                </ul>
                <ul className="usep-secondMenu">
                    <li className="clickable"><Link className="header-link" to="/login">Contact</Link></li>
                    <li className="clickable"> <Link className="header-link" to="/login">Log in/Sign in</Link> </li> {/*erase after login view created*/}
                    {/* {!tokenUser ? (
                        <li className="clickable">
                        <Link to="/login">Log in/Sign in</Link>
                        </li>
                    ) : <li className="clickable" onClick={logoutUser}>
                            <Link to="/">{userUsername}</Link>
                        </li>} */}
                </ul>
            </header>

            <div className="usep-content">{children}</div>

            <footer className="usep-footer">
            <ul className="footer-greyList">
                <li className="clickable">Option1</li>
                <li className="clickable">Option2</li>
                <li className="clickable">Option3</li>
            </ul>
            <ul className="footer-second-greyList">
                <li className="clickable">{"Terms & conditions"}</li>
                <li className="clickable">Privacy Policy</li>
            </ul>
            <div className="footer-rights">
                <p>© 2021 Usep System</p>
                <p>All rights reserved</p>
            </div>
            </footer>
        </div>
    )
};

export default Layout;