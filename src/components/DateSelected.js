import React, { useState } from "react";

const DateSelected = ({ userDOB }) => {
    const [day, setday] = useState(userDOB.day)
    const [month, setmonth] = useState(userDOB.month)
    const [year, setyear] = useState(userDOB.year)


    const isLeap = (year) => new Date(year, 1, 29).getDate() === 29;

    const monthRender = Array(12)
        .fill(0)
        .map((notUse, index) => index + 1);
    const monthRenderMap = monthRender.map((month, index) => <option key={index}>{month}</option>);

    const yearRender = Array(100)
        .fill(0)
        .map((notUse, index) => index + new Date().getFullYear() - 110);
    const yearRenderMap = yearRender.map((year, index) => <option key={index}>{year}</option>);

    const dayRender = (dayOfMonth) => {
        return Array(dayOfMonth)
            .fill(0)
            .map((notUse, index) => index + 1);
    };
    const dayChecked = (isLeapYear, month) => {
        const MONTH_2_LEAP_YEAR = 29;
        const MONTH_2_NORMAL_YEAR = 28;
        const MONTH_30_DAY = 30;
        const MONTH_31_DAY = 31;
        const DAY_30 = [2, 4, 6, 9, 11];

        if (isLeapYear && month === 2) return dayRender(MONTH_2_LEAP_YEAR);
        if (!isLeapYear && month === 2) return dayRender(MONTH_2_NORMAL_YEAR);
        return DAY_30.includes(month) ? dayRender(MONTH_30_DAY) : dayRender(MONTH_31_DAY);
    };

    const IS_LEAP_YEAR = isLeap(year);
    const DAYS_WITH_ACCURATE_MONTH = dayChecked(IS_LEAP_YEAR, month);
    const dayRenderMap = DAYS_WITH_ACCURATE_MONTH.map((day, index) => (
        <option key={index}> {day}</option>
    ));

    return (
        <div className="row test">
            <div className="form-group col-3">
                <label htmlFor="day" className="text-small">
                    Ngày:
                </label>
                <select
                    className="form-control text-center text-small custom-select-tag"
                    onChange={(e) => {setday(e.target.value)}}
                    id="day"
                    value={day}
                >
                    {dayRenderMap}
                </select>
            </div>
            <div className="form-group col-3">
                <label htmlFor="month" className="text-small">
                    Tháng:
                </label>
                <select
                    className="form-control text-center text-small custom-select-tag"
                    onChange={(e) => {setmonth(e.target.value)}}
                    id="month"
                    value={month}
                >
                    {monthRenderMap}
                </select>
            </div>
            <div className="form-group col-6">
                <label htmlFor="year" className="text-small">
                    Năm:
                </label>
                <select
                    className="form-control text-center text-small custom-select-tag"
                    onChange={(e) => {setyear(e.target.value)}}
                    id="year"
                    value={year}
                >
                    {yearRenderMap}
                </select>
            </div>
        </div>
    );
};

export default DateSelected;
