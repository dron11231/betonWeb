import { useEffect } from 'react';
import { Loader } from 'components/Loader';
import { authStore, userStore } from 'stores';
import { observer } from 'utils';
import s from './privateContainer.scss';

export const PrivateContainer: IFC = observer((props) => {
  const { children } = props;

  useEffect(() => {
    if (!userStore.userData?.userId) {
      authStore.getCurrentUser();
    }
  }, [userStore.userData?.userId]);

  if (authStore.isLoading) {
    return (
      <div className={s.loaderWrapper}>
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}, 'PrivateContainer');
