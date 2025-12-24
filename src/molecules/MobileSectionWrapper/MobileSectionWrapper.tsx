import { Button } from 'components';
import s from './mobileSectionWrapper.scss';

interface IMobileSectionWrapperProps {
  title: string;
}

export const MobileSectionWrapper: IFC<IMobileSectionWrapperProps> = ({
  children,
  title,
}) => (
  <div className={s.wrapper}>
    <div className={s.sectionHeader}>
      <h2 className={s.title}>{title}</h2>
      <Button className={s.button} variant="ghost" size="small">
        Показать все
      </Button>
    </div>
    {children}
  </div>
);
