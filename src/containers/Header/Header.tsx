import { useState } from 'react';
import { Avatar } from '@mui/material';
import classNames from 'classnames';
import BellIcon from 'assets/icons/bell.svg?svgr';
import ChartIcon from 'assets/icons/chart.svg?svgr';
import PlusIcon from 'assets/icons/plus.svg?svgr';
import SearchIcon from 'assets/icons/search.svg?svgr';
import { Button, IconButton, TextField } from 'components';
import s from './header.scss';

export const Header: IFC = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [isSearchFocus, setSearchFocus] = useState(false);
  // Временно
  const isNewNotice = true;

  const handleChangeSearchText = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    setSearchText(value);
  };

  const toggleSearchFocus = () => {
    setSearchFocus((previousState) => !previousState);
  };

  return (
    <>
      <div className={s.header}>
        <div className={s.mainSection}>
          <div className={s.mainSectionBlock}>
            <div className={s.logo}>
              <ChartIcon />
            </div>
            <h1 className={s.title}>UX Search</h1>
          </div>
          <div className={s.mainSectionBlock}>
            <IconButton size="small" className={s.notificationButton}>
              {isNewNotice && <div className={s.noticeMark} />}
              <BellIcon />
            </IconButton>
            <Avatar sx={{ width: 32, height: 32 }} className={s.avatar}>
              MC
            </Avatar>
          </div>
        </div>
        <div className={s.searchWrapper}>
          <TextField
            onFocus={toggleSearchFocus}
            onBlur={toggleSearchFocus}
            id="search"
            size="small"
            placeholder="Найти исследования..."
            className={s.searchField}
            iconLeft={<SearchIcon />}
            value={searchText}
            onChange={handleChangeSearchText}
          />
          <Button
            className={classNames(s.addResearchButton, {
              [s.compact]: isSearchFocus,
            })}
            size="small"
            icon={<PlusIcon />}
          >
            {!isSearchFocus && 'Исследование'}
          </Button>
        </div>
      </div>
      {children}
    </>
  );
};

Header.displayName = 'Header';
