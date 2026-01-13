import { useSearchParams } from 'react-router-dom';

export const useCreateResearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isCreateResearchOpen = searchParams.get('screen') === 'create-research';

  const openCreateResearch = () => {
    setSearchParams({ screen: 'create-research' });
  };

  const closeCreateResearch = () => {
    setSearchParams({});
  };

  return { isCreateResearchOpen, openCreateResearch, closeCreateResearch };
};
