import { useState } from 'react';
import { Avatar } from '@mui/material';
import BellIcon from 'assets/icons/bell.svg?svgr';
import ChartIcon from 'assets/icons/chart.svg?svgr';
import SearchIcon from 'assets/icons/search.svg?svgr';
import { IconButton, TextField } from 'components';
import s from './header.scss';

export const Header: IFC = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  // Временно
  const isNewNotice = true;

  const handleChangeSearchText = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    setSearchText(value);
  };

  return (
    <>
      <div className={s.header}>
        <div className={s.mainSection}>
          <div className={s.mainSectionBlock}>
            <div className={s.logo}>
              <ChartIcon />
            </div>
            <span className={s.title}>UX Search</span>
          </div>
          <div className={s.mainSectionBlock}>
            <IconButton size="small" className={s.notificationButton}>
              <div className={s.noticeMark} />
              <BellIcon />
            </IconButton>
            <Avatar sx={{ width: 32, height: 32 }} className={s.avatar}>
              MC
            </Avatar>
          </div>
        </div>
        <TextField
          id="search"
          size="small"
          placeholder="Найти исследования..."
          className={s.searchField}
          iconLeft={<SearchIcon />}
          value={searchText}
          onChange={handleChangeSearchText}
        />
      </div>
      {children}
    </>
  );
};

Header.displayName = 'Header';
