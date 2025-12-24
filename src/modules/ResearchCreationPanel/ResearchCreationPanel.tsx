import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames';
import { TCreateResearchData } from 'api/researchApi/types';
import ModeratedImage from 'assets/icons/moderated.svg?svgr';
import UnmoderatedImage from 'assets/icons/unmoderated2.svg?svgr';
import { EResearchTypes } from 'common/types';
import { IconButton } from 'components';
import { ResearchTypeCard } from './components';
import s from './researchCreationPanel.scss';

interface IResearchCreationPanel {
  isOpen: boolean;
  onCreate: (newResearchData: TCreateResearchData) => void;
  onClose: () => void;
}

/**
 * @description Выезжающая панель создания исследования (Только для мобильной версии)
 */

export const ResearchCreationPanel: IFC<IResearchCreationPanel> = (props) => {
  const { isOpen, onCreate, onClose } = props;
  const [panelHeight, setPanelHeight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setPanelHeight(window.innerHeight - 33); //33 высота навигационной панели снизу
  };

  const handleClickCard = (type: EResearchTypes) => {
    console.log(type);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div
      style={{ height: panelHeight }}
      className={classNames(s.panel, { [s.open]: isOpen })}
    >
      <div className={s.panelHeader}>
        <h2 className={s.title}>Выберите тип исследования</h2>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className={s.cardList}>
        <ResearchTypeCard
          onClick={handleClickCard}
          image={<UnmoderatedImage />}
          type={EResearchTypes.UnModerated}
        />
        <ResearchTypeCard
          onClick={handleClickCard}
          image={<ModeratedImage />}
          type={EResearchTypes.Moderated}
        />
      </div>
    </div>
  );
};
