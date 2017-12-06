import React from 'react';
import _ from 'lodash';
import Card from './card.jsx';
import cardsData from './cards.json';


//npm install webpack -g
//webpack --progress --colors --watch

class App extends React.Component {
    renderLocations() {
        return (
            <div id="locations">
                <ul className="locationsList">
                    <li>Rockfall ravine</li>
                    <li>Arid steppes</li>
                    <li>Horton's ridge</li>
                </ul>
            </div>
        )
    }

    renderCards() {
        return (
            <div id='cards'>
                {_.map(cardsData, function (c) {
                    return (<Card card={c} key={`card-${c.id}`}></Card>);
                })}
            </div>
        );
    }

    renderWeather() {
        var weatherData = [
            {id: 'temprature', icon: 'fa-thermometer-half', value: '-20', units: '\u00B0'},
            {id: 'windChill', icon: 'fa-flag-checkered', value: '-10', units: '\u00B0'},
            {id: 'snowCover', icon: 'fa-snowflake-o', value: '45', units: 'cm'},
            {id: 'snowFall', icon: 'fa-cloud', value: '5', units: 'cm'}
        ];
        return (
            <div id="weatherDisplay">
                {_.map(weatherData, item => (
                        <div id={item.id} key={`weatherItem_${item.id}`} className="weatherDisplayData">
                            <div className="icon">
                                <i className={`fa ${item.icon}`}></i>
                            </div>
                            <span>{` ${item.value}${item.units}`}</span>
                        </div>
                    )
                )}
            </div>
        );
    }

    renderDate() {
        var day = 10;
        return (
            <div id="dateDisplay">
                <div id="dateBar">
                    {_.range(1, 41).map(i => (
                            <div key={`dateMark_${i}`} className={'icon' + (i === 10 ? ' currentDay' : '')}>
                                <i className="fa fa-plus"></i>
                            </div>
                        )
                    )}
                </div>
                <div id="daysCounter">{day}</div>
            </div>
        );
    }

    render() {
        return (
            <div id='appContainer'>
                {false && this.renderLocations()}
                {false && this.renderCards()}
                {this.renderWeather()}
                {this.renderDate()}
            </div>
        );
    }
}

export default App;
