import React, { useState } from 'react'

const DateSelected = () => {
    
    const [currentYear, setcurrentYear] = useState(2000)
    const [currentMonth, setcurrentMonth] = useState(2)
    const [currentDay, setcurrentDay] = useState(15)
    const dayRender = (dayOfMonth) => {
        // console.log(dayOfMonth)
        return Array(dayOfMonth).fill(0).map((abc, index) => {
            return index + 1
        })
    }
    const dayChecked = (status, month) => {
        const MONTH_2_LEAP_YEAR = 29;
        const MONTH_2_NORMAL_YEAR = 28;
        const MONTH_30_DAY = 30;
        const MONTH_31_DAY = 31;
        const DAY_30 = [2, 4, 6, 9, 11]
        const DAY_31 = [1, 3, 5, 7, 8, 10, 12]


       
        if (status) {
            console.log(typeof  month)
            if (month === 2) return dayRender(MONTH_2_LEAP_YEAR)
            if (DAY_30.includes(month)) return dayRender(MONTH_30_DAY)
            if (DAY_31.includes(month)) return dayRender(MONTH_31_DAY)
            return []
        }
        else {
            if (month === 2) return dayRender(MONTH_2_NORMAL_YEAR)
            if (DAY_30.includes(month)) return dayRender(MONTH_30_DAY)
            if (DAY_31.includes(month)) return dayRender(MONTH_31_DAY)
            return []
        }

    }


    const isLeap = year => new Date(year, 1, 29).getDate() === 29;
    const monthRender = Array(12).fill(0).map((abc, index) => {
        return index + 1
    })
    const monthRenderMap = monthRender.map(month => {
        return <option>{month}</option>
    })
    const yearRender = Array(100).fill(0).map((abc, index) => {
        return index + new Date().getFullYear() - 110
    })
    const yearRenderMap = yearRender.map(year => {
        return <option>{year}</option>
    })
    const dayRenderMap = dayChecked(isLeap(currentYear), currentMonth).map(day => {
        return <option>{day}</option>
    })
    return (
        <div className="row">
            <div class="form-group col-3">
                <label for="day" className="text-small">Ngày:</label>
                <select class="form-control text-small" id="day" onChange={(e) => setcurrentDay(e.target.value)} defaultValue={currentDay}>
                    {dayRenderMap}
                </select>
            </div>
            <div class="form-group col-3">
                <label for="month" className="text-small">Tháng:</label>
                <select class="form-control text-center text-small" id="month" onChange={(e) => setcurrentMonth(Number(e.target.value))} defaultValue={currentMonth}>
                    {monthRenderMap}
                </select>
            </div>
            <div class="form-group col-6">
                <label for="year" className="text-small">Năm:</label>
                <select class="form-control text-center text-small" id="year" onChange={(e) => setcurrentYear(e.target.value)} defaultValue={currentYear} >
                    {yearRenderMap}
                </select>
            </div>


        </div>
    )
}

export default DateSelected
