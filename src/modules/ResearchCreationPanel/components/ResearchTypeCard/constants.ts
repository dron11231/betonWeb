import { EResearchTypes } from 'common/types';

interface ITypeCardNaming {
  name: string;
  description: string;
}

export const typeCardNamingMap: Record<EResearchTypes, ITypeCardNaming> = {
  [EResearchTypes.Moderated]: {
    name: 'Модерируемое исследование',
    description:
      'Исследование в формате живого диалога: ведущий задает вопросы и уточняет ответы',
  },
  [EResearchTypes.UnModerated]: {
    name: 'Немодерируемое исследование',
    description:
      'Исследование в свободном режиме: участники выполняют задания самостоятельно, без ограничений по времени',
  },
};
