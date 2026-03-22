import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { generatePath, useNavigate } from 'react-router-dom';
import ArrowLeftIcon from 'assets/icons/arrowLeft.svg?svgr';
import PlusIcon from 'assets/icons/plus.svg?svgr';
import { EResearchAccessTypes, EResearchPermissionTypes, EResearchTemplateTypes, EResearchTypes } from 'common/types';
import { Button, IconButton, ISegmentButtonData, SegmentSelect, TextField } from 'components';
import { useCreateResearch } from 'hooks';
import { routerPaths } from 'routes/routerPaths';
import { researchesStore, userStore } from 'stores';
import { EResearchErrorTypes } from 'stores/ResearchesStore/types';
import s from './createResearchScreen.scss';

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

export const CreateResearchScreen: IFC = observer(() => {
  const { closeCreateResearch } = useCreateResearch();

  const [researchType, setResearchType] = useState(EResearchTypes.UnModerated);
  const [researchName, setResearchName] = useState('');

  const navigate = useNavigate();

  const { userData } = userStore;
  const { createNewResearch, clearError, errors } = researchesStore;

  const handleChangeResearchType = (value: EResearchTypes) => {
    setResearchType(value);
  };

  const handleChangeResearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (errors.NAME) {
      clearError();
    }
    setResearchName(value);
  };

  const handleCreateResearch = async () => {
    if (userData?.userId) {
      const researchId = await createNewResearch({
        name: researchName,
        type: researchType,
        userId: userData?.userId,
        template: EResearchTemplateTypes.Blank,
        access: EResearchAccessTypes.Private,
        permission: EResearchPermissionTypes.Write,
      });
      if (researchId) {
        navigate(generatePath(routerPaths.Research.Root, { id: researchId }));
      }
    }
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
            error={errors[EResearchErrorTypes.Name]}
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
        <Button
          isLoading={researchesStore.isLoading}
          onClick={handleCreateResearch}
          size="large"
          className={s.createResearchButton}
        >
          Создать исследование
        </Button>
      </div>
    </div>
  );
});
