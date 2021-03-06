/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ArrowBackIos } from '@material-ui/icons';

import Button from '../components/elements/Button';
import SwitchButton from '../components/elements/SwitchButton';

import '../assets/styles/containers/Settings.scss';

const SettingsContainer = (props) => {
  const { isAuth, settings, changeSetting, goToLogin, push } = props;

  const themeSelected = settings.theme === 'light' ? 'dark' : 'light';

  return (
    <section className={`settings ${settings.theme}`}>
      <ul className="Settings__menu">
        <li className="Settings__menu-item">
          <p>Theme</p>
          <SwitchButton
            selected={settings.theme}
            action={() => changeSetting('CHANGE_THEME', themeSelected)}
            element="checked-theme"
            theme
          />
        </li>
        <li className="Settings__menu-item">
          <p>Push notifications</p>
          <SwitchButton
            selected={settings.notificationPermisions}
            action={() => changeSetting('TOGGLE_NOTIFICATIONS')}
            element="checked-notifications"
          />
        </li>
        <li className="Settings__menu-item">
          <p>Acount</p>
          <div className="Settings__menu-item--icon">
            <ArrowBackIos />
          </div>
        </li>
        <li className="Settings__menu-item">
          {
            isAuth ?
              <Button name="error" action={() => { changeSetting('REMOVE_AUTHORIZATION'); push('/'); }}>Logout</Button> :
              <Button name="success" action={goToLogin}>Login</Button>
          }
        </li>
      </ul>
    </section>
  );
};

export default SettingsContainer;

