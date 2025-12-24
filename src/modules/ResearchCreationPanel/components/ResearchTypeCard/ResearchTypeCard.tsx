import { JSX } from 'react';
import { EResearchTypes } from 'common/types';
import { Button } from 'components';
import { typeCardNamingMap } from './constants';
import s from './researchTypeCard.scss';

interface IResearchTypeCardProps {
  type: EResearchTypes;
  image: JSX.Element;
  onClick: (type: EResearchTypes) => void;
}

export const ResearchTypeCard: IFC<IResearchTypeCardProps> = (props) => {
  const { type, image, onClick } = props;
  const { name, description } = typeCardNamingMap[type];

  const handleClick = () => {
    onClick(type);
  };

  return (
    <Button onClick={handleClick} className={s.cardButton}>
      <div className={s.cardImageWrapper}>{image}</div>
      <h4 className={s.name}>{name}</h4>
      <p className={s.description}>{description}</p>
    </Button>
  );
};
