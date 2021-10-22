import React, { useState } from "react";

const DateSelected = () => {
    const [currentYear, setcurrentYear] = useState(2000);
    const [currentMonth, setcurrentMonth] = useState(2);
    const [currentDay, setcurrentDay] = useState(15);

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

    const IS_LEAP_YEAR = isLeap(currentYear);
    const DAYS_WITH_ACCURATE_MONTH = dayChecked(IS_LEAP_YEAR, currentMonth);
    const dayRenderMap = DAYS_WITH_ACCURATE_MONTH.map((day, index) => (
        <option key={index}>{day}</option>
    ));

    return (
        <div className="row test">
            <div className="form-group col-3">
                <label htmlFor="day" className="text-small">
                    Ngày:
                </label>
                <select
                    className="form-control text-center text-small custom-select-tag"
                    id="day"
                    onChange={(e) => {
                        setcurrentDay(e.target.value);
                    }}
                    defaultValue={currentDay}
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
                    id="month"
                    onChange={(e) => setcurrentMonth(Number(e.target.value))}
                    defaultValue={currentMonth}
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
                    id="year"
                    onChange={(e) => setcurrentYear(e.target.value)}
                    defaultValue={currentYear}
                >
                    {yearRenderMap}
                </select>
            </div>
        </div>
    );
};

export default DateSelected;
