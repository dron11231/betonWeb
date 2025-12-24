import { useEffect } from 'react';
import { Loader } from 'components/Loader';
import { authStore, userStore } from 'stores';
import { observer } from 'utils';

interface IPrivateContainerProps {
  hideLoader?: boolean;
}

export const PrivateContainer: IFC<IPrivateContainerProps> = observer(
  (props) => {
    const { children, hideLoader } = props;
    const isLoaderVisible = authStore.isLoading && !hideLoader;

    useEffect(() => {
      if (!userStore.userData?.userId) {
        authStore.getCurrentUser();
      }
    }, [userStore.userData?.userId]);

    return (
      <>
        {isLoaderVisible && <Loader />}
        {children}
      </>
    );
  },
  'PrivateContainer'
);
