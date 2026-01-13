import { useState } from 'react';
import ArrowLeftIcon from 'assets/icons/arrowLeft.svg?svgr';
import PlusIcon from 'assets/icons/plus.svg?svgr';
import { EResearchTypes } from 'common/types';
import { Button, IconButton, ISegmentButtonData, SegmentSelect, TextField } from 'components';
import { useCreateResearch } from 'hooks';
import s from './createResearchScreen.scss';

export const CreateResearchScreen: IFC = () => {
  const { closeCreateResearch } = useCreateResearch();
  const [researchType, setResearchType] = useState(EResearchTypes.UnModerated);
  const [researchName, setResearchName] = useState('');

  const researchTypeButtons: ISegmentButtonData[] = [
    {
      text: 'Немодерируемое',
      value: EResearchTypes.UnModerated,
    },
    {
      text: 'Модерируемое',
      value: EResearchTypes.Moderated,
    },
  ];

  const handleChangeResearchType = (value: EResearchTypes) => {
    setResearchType(value);
  };

  const handleChangeResearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setResearchName(value);
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <IconButton onClick={closeCreateResearch} variant="ghost" size="small">
          <ArrowLeftIcon />
        </IconButton>
        <span className={s.title}>Создать исследование</span>
        <div className={s.placeholder}></div>
      </div>
      <div className={s.contentWrapper}>
        <div className={s.content}>
          <SegmentSelect
            label="Тип исследования"
            size="small"
            onChange={handleChangeResearchType}
            value={researchType}
            buttonsList={researchTypeButtons}
          />
          <TextField
            className={s.textField}
            onChange={handleChangeResearchName}
            value={researchName}
            placeholder="Введите название..."
            label="Название исследования"
          />
          <div className={s.templatesBlock}>
            <div className={s.templatesInfo}>
              <span className={s.infoTitle}>Ускорьте создание</span>
              <span className={s.infoDescription}>
                Вместо создания пустого исследования используйте один из готовых шаблонов с настроенными вопросами для
                респондентов
              </span>
            </div>
            <Button className={s.addTemplateButton} variant="ghost" icon={<PlusIcon />}>
              Выбор из доступных шаблонов
            </Button>
          </div>
        </div>
        <Button size="large" className={s.createResearchButton}>
          Создать исследование
        </Button>
      </div>
    </div>
  );
};
