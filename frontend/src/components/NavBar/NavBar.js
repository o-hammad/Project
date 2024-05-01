import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';
import { useState } from 'react';

function NavBar() {
    const loggedIn = useSelector(state => !!state.session.user);
    const dispatch = useDispatch();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown menu visibility

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
    }

    const logoutUser = e => {
        e.preventDefault();
        dispatch(logout());
    }

    const getLinks = () => {
        if (loggedIn) {
            return (
                <div className="links-nav">
                    <div className="dropdown">
                        <button className="dropbtn" onClick={toggleDropdown}>Menu</button>
                        {/* Render dropdown content based on state */}
                        {isDropdownOpen && (
                            <div className="dropdown-content">
                                <Link to={'/dashboard'}>Dashboard</Link>
                                <Link to={'/customerrfqs'}>Customer RFQ Database</Link>
                                <Link to={'/prosecrfqs'}>Prosec RFQ Database</Link>
                                <Link to={'/vendorquotes'}>Vendor Quote Database</Link>
                                <Link to={'/prosecquotes'}>Prosec Quote Database</Link>
                                <Link to={'/customerpos'}>Customer PO Database</Link>
                                <Link to={'/prosecpos'}>Prosec PO Database</Link>
                                <Link to={'/prosecinvoices'}>Prosec Invoice & Packing List Database</Link>
                                <Link to={'/vendorinvoices'}>Vendor Invoice Database</Link>
                                <button onClick={logoutUser}>Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="links-auth">
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            );
        }
    }

    return (
        <div className='navbar'>
            <h1>PROSEC VISION</h1>
            {getLinks()}
        </div>
    );
}

export default NavBar;