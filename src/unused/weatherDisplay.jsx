import React from 'react';
import _ from 'lodash';
import weatherLogic from './weatherLogic';

const weatherMeasurements = {
    temprature: {icon: 'fa-thermometer-half', units: '\u00B0'},
    windChill: {icon: 'fa-flag-checkered', units: '\u00B0'},
    snowCover: {icon: 'fa-snowflake-o', units: 'cm'},
    snowFall: {icon: 'fa-cloud', units: 'cm'}
};

class WeatherDisplay extends React.Component {
    render() {
        return (
            <div id="weatherDisplay">
                {_.map(weatherMeasurements, (measure, id) => (
                        <div id={id} key={`weatherItem_${id}`} className="weatherDisplayData">
                            <div className="icon"><i className={`fa ${measure.icon}`}></i></div>
                            <input type="number"
                                   min={weatherLogic.range[id].min}
                                   max={weatherLogic.range[id].max}
                                   value={this.props[id]}
                                   onChange={e => this.props.updateWeather(id, +e.target.value)}/>
                        </div>
                    )
                )}
            </div>
        );
    }
}

export default WeatherDisplay;
