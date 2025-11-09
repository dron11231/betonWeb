import { Navigate } from 'react-router-dom';
import { routerPaths } from 'routes/routerPaths';
import { authStore } from 'stores';
import { observer } from 'utils';

export const PrivateContainer: IFC = observer((props) => {
  const { children } = props;

  const loggedIn = true; /* authStore.isLoggedIn */

  if (!loggedIn) {
    return <Navigate to={routerPaths.SignIn} />;
  }

  return <div>{children}</div>;
}, 'PrivateContainer');
