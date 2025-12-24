import LabImage from 'assets/icons/lab.svg?svgr';
import s from './emptyRecent.scss';

export const EmptyRecent = () => (
  <div className={s.container}>
    <div className={s.imageWrapper}>
      <LabImage />
    </div>
    <div className={s.textWrapper}>
      <h3 className={s.title}>Нет созданных исследований</h3>
      <span className={s.description}>
        Создайте первое UX исследование, чтобы собрать ценную информацию от
        пользователей
      </span>
    </div>
  </div>
);
