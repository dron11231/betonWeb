import { JSX } from 'react';
import { EResearchTypes } from 'common/types';
import { typeCardNamingMap } from './constants';
import s from './researchTypeCard.scss';

interface IResearchTypeCardProps {
  type: EResearchTypes;
  image: JSX.Element;
}

export const ResearchTypeCard: IFC<IResearchTypeCardProps> = (props) => {
  const { type, image } = props;
  const { name, description } = typeCardNamingMap[type];

  return (
    <div className={s.card}>
      <div className={s.cardImageWrapper}>{image}</div>
      <h4 className={s.name}>{name}</h4>
      <p className={s.description}>{description}</p>
    </div>
  );
};
