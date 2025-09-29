import { Navigate } from 'react-router-dom';

export const PrivateContainer: IFC = (props) => {
  const { children } = props;
  console.log('we are here');
  const loggedIn = false;

  if (!loggedIn) {
    return <Navigate to="/auth" />;
  }

  return <div>{children}</div>;
};
