import React from 'react';
import s from './Header.module.scss'
import {GlobalSwgSelector} from "../../assets/imeges/icons/global/GlobalSwgSelector";
import Select from 'react-select'
import {useTheme} from "../../hooks/useTheme";
import {Theme} from "../../context/ThemeContext";

export const Header = () => {
    const theme = useTheme()

    const options = [
        { value: 'city-1', label: 'Санкт-петербург' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Новгород' }
    ]

    const colourStyles = {
        control : (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
     singleValue: (styles: any) => ({
            ...styles,
           color: theme.theme === Theme.DARK ? '#fff' : '#000',
        }),
}


function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
}


    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSwgSelector id="header-logo"/>
                </div>
                <div className={s.title}>Weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSwgSelector id="change-theme"/>
                </div>
                <Select defaultValue={options[0]} styles={colourStyles} options={options} />
            </div>
        </header>
    );
};

