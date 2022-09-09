import { useContext, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import authContext from './store/authContext';

function App() {
  const authCtx = useContext(authContext);
  const history = useHistory();

  const { isLoggedin } = authCtx;

  useEffect(() => {
    if (!isLoggedin){
        history.replace("/auth")
    }
  }, [isLoggedin, history]);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {
          !isLoggedin &&
          <Route path='/auth'>
            <AuthPage />
          </Route>
        }
        {
          isLoggedin &&
          <Route path='/profile'>
            <UserProfile />
          </Route>
        }
        <Route path="*">
          <div className='centered'>page not found!</div>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
