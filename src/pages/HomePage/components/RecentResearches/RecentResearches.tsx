import { IResearchData } from 'common/types';
import { MobileSectionWrapper } from 'molecules';
import { EmptyRecent } from './components';

interface IRecentResearchesProps {
  researchesList: IResearchData[];
}

export const RecentResearches: IFC<IRecentResearchesProps> = (props) => {
  const { researchesList } = props;
  return (
    <MobileSectionWrapper title="Последние исследования">
      {!researchesList.length && <EmptyRecent />}
    </MobileSectionWrapper>
  );
};
