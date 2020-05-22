import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBackIos, FilterList } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = (props) => (
  <>
    {
      props.type === 'logo' && (
        <header className="header">
          <Link className="header__brand" to="/">
            LOUIS MONSTRUON
          </Link>
        </header>
      )
    }
    {
      props.type === 'page' && (
        <header className="header">
          <p className="header__page-name" to="/">
            Categorias
          </p>
        </header>
      )
    }
    {
      props.type === 'twoIcons' && (
        <header className="header">
          <div className="header__container">
            <Link className="header__icon" to="/">
              <ArrowBackIos className="header__icon--arrow" />
            </Link>
            <p className="header__page-name" to="/">
              Categorias
            </p>
            <Link className="header__icon header__icon--list" to="/">
              <FilterList />
            </Link>
          </div>
        </header>
      )
    }
    {
      props.type === 'leftIcons' && (
        <header className="header">
          <div className="header__container">
            <Link className="header__icon" to="/">
              <ArrowBackIos className="header__icon--arrow" />
            </Link>
            <p className="header__page-name header__page-name--arrow" to="/">
              Categorias
            </p>
          </div>
        </header>
      )
    }
    {
      props.type === 'search' && (
        <header className="header header__search">
          <input type="text" className="header__search--bar" />
          <Link className="header__icon header__icon--list header__search--icon" to="/">
            <FilterList />
          </Link>
        </header>
      )
    }
  </>
);

Header.propTypes = {
  type: PropTypes.string,
};

export default Header;