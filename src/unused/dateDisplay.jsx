import React from 'react';
import _ from 'lodash';

const seasonStartDays = {
    'Autumn': 0,
    'Winter': 10,
    'Spring': 20,
    'Summer': 30
}

const counterSuffix = {
    1: 'st',
    2: 'nd',
    3: 'rd'
};

function formatDateString(season, day) {
    const suffix = _.get(counterSuffix, day, 'th');
    return `${day}${suffix} day of  ${season}`;
}

class DateDisplay extends React.Component {
    render() {
        const day = this.props.day;
        const season = this.props.season;
        const daysTotal = seasonStartDays[season] * 10 + day;
        return (
            <div id="dateDisplay">
                <div id="dateLabel">{formatDateString(season, day)}</div>
                <div id="dateBar">
                    {_.range(1, 41).map(i => (
                            <div key={`dateMark_${i}`} className={'icon' + (i === daysTotal ? ' currentDay' : '')}>
                                <i className="fa fa-plus"></i>
                            </div>
                        )
                    )}
                </div>
            </div>
        );
    }
}

export default DateDisplay;
