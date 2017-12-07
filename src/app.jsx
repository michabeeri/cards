import React from 'react';
import _ from 'lodash';
//import Card from './card.jsx';
//import cardsData from './cards.json';
import DateDisplay from './dateDisplay.jsx';
import WeatherDisplay from './weatherDisplay.jsx';
import weatherLogic from './weatherLogic.js';
import dateLogic from './dateLogic';

const initialDate = {
    day: 1,
    season: 'Autumn'
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = _.assign({}, weatherLogic.initialValues, dateLogic.initialValues);
        this.roll = this.roll.bind(this);
    }

    roll() {
        const currentDate = _.pick(this.state, ['season', 'day']);
        const nextDate = dateLogic.getNextDate(currentDate);
        const currentWeather = _.pick(this.state, ['temprature', 'windChill', 'snowCover', 'snowFall']);
        const nextWeather = weatherLogic.roll(currentWeather, nextDate.season);
        this.setState(_.assign({}, nextWeather, nextDate));
    }

    // renderLocations() {return (<div id="locations"><ul className="locationsList"><li>Rockfall ravine</li><li>Arid steppes</li><li>Horton's ridge</li></ul></div>)}
    // renderCards() {return (<div id='cards'>{_.map(cardsData, function (c) {return (<Card card={c} key={`card-${c.id}`}></Card>);})}</div>);}

    renderWeather() {
        return (
            <WeatherDisplay {..._.pick(this.state, ['temprature', 'windChill', 'snowCover', 'snowFall'])}/>
        );
    }

    renderDate() {
        return (
            <DateDisplay {..._.pick(this.state, ['day', 'season'])}/>
        );
    }

    renderControls() {
        return (
            <div id="gameControls">
                <div className="icon"><i className='fa fa-repeat'></i></div>
                <div className="icon" onClick={this.roll}><i className='fa fa-play'></i></div>
            </div>
        );
    }

    render() {
        return (
            <div id='appContainer'>
                {false && this.renderLocations()}
                {false && this.renderCards()}
                {this.renderDate()}
                {this.renderWeather()}
                {this.renderControls()}
            </div>
        );
    }
}

export default App;
