import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import {
  HomeOutlined,
  LocalGroceryStoreOutlined,
  NotificationsOutlined,
  PersonOutlined,
  SearchOutlined,
} from '@material-ui/icons';

const Footer = (props) => (
  <>
    {
      props.icons ? (
        <footer className={`Footer ${props.theme}`}>
          <NavLink exact className="Footer__icon" to="/" activeClassName="Footer__icon-active" aria-label="Go to Home">
            <HomeOutlined />
          </NavLink>
          <NavLink exact className="Footer__icon" to="/notifications" activeClassName="Footer__icon-active" aria-label="Go to Notifications">
            <NotificationsOutlined />
          </NavLink>
          <NavLink exact className="Footer__icon" to="/search" activeClassName="Footer__icon-active" aria-label="Go to Search">
            <SearchOutlined />
          </NavLink>
          <NavLink exact className="Footer__icon" to="/cart" activeClassName="Footer__icon-active" aria-label="Go to Cart">
            <LocalGroceryStoreOutlined />
          </NavLink>
          <NavLink exact className="Footer__icon" to="/profile/tuentyfaiv" activeClassName="Footer__icon-active" aria-label="Go to Profile">
            <PersonOutlined />
          </NavLink>
        </footer>
      ) :
        (
          <footer className={`Footer ${props.theme} modalView_termsAndConditions`}>
            <Link className="Footer__terms" to="/" aria-label="Go to terms and conditions">
              terms and Conditions
            </Link>
          </footer>
        )
    }
  </>
);

Footer.propTypes = {
  icons: PropTypes.bool,
};

export default Footer;
