import _ from 'lodash';

const DAYS_IN_SEASON = 10;
const SEASONS = ['Autumn', 'Winter', 'Spring', 'Summer'];

const initialValues = {
    day: 0,
    season: 'Autumn'
};

function getNextDate(currentDate) {
    const daysTotal = dateToDaysTotal(currentDate) + 1;
    return daysTotalToDate(daysTotal);
}

function dateToDaysTotal(date) {
    return _.indexOf(SEASONS, date.season) * DAYS_IN_SEASON + date.day;
}

function daysTotalToDate(daysTotal) {
    return {
        day: daysTotal % DAYS_IN_SEASON,
        season: SEASONS[Math.floor(daysTotal / DAYS_IN_SEASON) % SEASONS.length]
    };
}

export default {
    initialValues,
    getNextDate,
    dateToDaysTotal,
    daysTotalToDate
};
