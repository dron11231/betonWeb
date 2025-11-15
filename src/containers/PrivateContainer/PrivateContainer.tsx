import { Loader } from 'components/Loader';
import { authStore, userStore } from 'stores';
import { observer } from 'utils';
import s from './privateContainer.scss';

export const PrivateContainer: IFC = observer((props) => {
  const { children } = props;

  if (!userStore.userData?.userId) {
    authStore.getCurrentUser();
  }

  if (authStore.isLoading) {
    return (
      <div className={s.loaderWrapper}>
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}, 'PrivateContainer');
