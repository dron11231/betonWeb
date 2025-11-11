import { Navigate } from 'react-router-dom';
import { routerPaths } from 'routes/routerPaths';
import { userStore } from 'stores';
import { observer } from 'utils';

export const PrivateContainer: IFC = observer((props) => {
  const { children } = props;

  const isLoggedIn = userStore.userData?.userId;

  if (!isLoggedIn) {
    return <Navigate to={routerPaths.SignIn} />;
  }

  return <div>{children}</div>;
}, 'PrivateContainer');
