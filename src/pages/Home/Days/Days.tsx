import React from 'react';
import s from './Days.module.scss'
import {Card} from "./Card";
import {Tabs} from "./Tabs";

export interface Day {
    day: string,
    day_info:string,
    icon_id:string,
    temp_day:string,
    temp_night:string,
    info:string,
}

export const Days = () => {
    const days: Day[] = [
        {
        day: 'Сегодня',
        day_info:'28 авг',
        icon_id:'small_rain',
        temp_day:'+18',
        temp_night:'+15',
        info:'небольшой дожь',

    },
        {
            day: 'Завтра',
            day_info:'29 авг',
            icon_id:'small_rain',
            temp_day:'+18',
            temp_night:'+15',
            info:'небольшой дождь',

        },
        {
            day: 'Пн',
            day_info:'30 авг',
            icon_id:'small_rain',
            temp_day:'+18',
            temp_night:'+15',
            info:'небольшой дождь',

        },
        {
            day: 'Вт',
            day_info:'31 авг',
            icon_id:'small_rain',
            temp_day:'+18',
            temp_night:'+15',
            info:'небольшой дождь',

        },
        {
            day: 'Ср',
            day_info:'1 Сен',
            icon_id:'small_rain',
            temp_day:'+18',
            temp_night:'+15',
            info:'небольшой дождь и солнце',

        },
        {
            day: 'Чт',
            day_info:'2 Сен',
            icon_id:'small_rain',
            temp_day:'+18',
            temp_night:'+15',
            info:'небольшой дождь',

        },
        {
            day: 'Пт',
            day_info:'3 Сен',
            icon_id:'rain',
            temp_day:'+18',
            temp_night:'+15',
            info:'облачно',

        },
    ]
    return (
        <>
            <Tabs/>
        <div className={s.days}>
            {days.map((day: Day) => (
                <Card day={day} key={day.day}/>))}
        </div>
        </>
    );
};

