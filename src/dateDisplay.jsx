import React from 'react';
import _ from 'lodash';
import dateLogic from './dateLogic';

const counterSuffix = {
    1: 'st',
    2: 'nd',
    3: 'rd'
};

function formatDateString(season, day) {
    const suffix = _.get(counterSuffix, day + 1, 'th');
    return `${day + 1}${suffix} day of  ${season}`;
}

class DateDisplay extends React.Component {
    render() {
        const day = this.props.day;
        const season = this.props.season;
        const daysTotal = dateLogic.dateToDaysTotal({day, season});
        return (
            <div id="dateDisplay">
                <div id="dateLabel">{formatDateString(season, day)}</div>
                <div id="dateBar">
                    {_.times(40).map(i => (
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
