import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

import authContext from '../../store/authContext';

const MainNavigation = () => {
  const authCtx = useContext(authContext);

  const onLogoutHnadler = () => {
      authCtx.logout();
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {
            !authCtx.isLoggedin &&
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          }
          {
            authCtx.isLoggedin &&
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          }
          {
            authCtx.isLoggedin && <li>
              <button onClick={onLogoutHnadler}>Logout</button>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
