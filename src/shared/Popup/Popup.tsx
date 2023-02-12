import React from 'react';
import s from './Popup.module.scss'
import {ThisDayItem} from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import cloud from "../../assets/imeges/cloud.png";
import {Item} from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import {GlobalSwgSelector} from "../../assets/imeges/icons/global/GlobalSwgSelector";

interface Props {

}

export const Popup = ({}: Props) => {
     const items = [
        {
            icon_id:'temp',
            name: 'Тумпература',
            value: '20 - ощущается как 17',
        },
        {
            icon_id:'pressure',
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное',
        },
        {
            icon_id:'precipitation',
            name: 'Осадки',
            value: 'Без осадков',
        },
        {
            icon_id:'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер',
        },
    ];
    return (
        <>
            <div className={s.blur}></div>
        <div className={s.popup}>
            <div className={s.day}>
                <div className={s.day__temp}>20</div>
                <div className={s.day__name}>Среда</div>
                <div className={s.img}><GlobalSwgSelector id="sun"/></div>
                <div className={s.day__time}>
                    Время: <span>21:00</span></div>
                <div className={s.day__city}>
                    Город: <span>Москва</span></div>
            </div>
                <div className={s.this__day_info_items}>
                    {items.map((item: Item) =>
                        <ThisDayItem key={item.icon_id} item={item}/>
                    )}
                </div>
            <div className={s.close}>
                <GlobalSwgSelector id="close"/>
            </div>
            </div>
        </>
    );
};

