import React from 'react';
import _ from 'lodash';
import {s4} from './utils';
import DangeonCard from './dangeonCard.jsx';
import dangeonCardData from './dangeonCardData.json';
import HeroCard from './heroCard.jsx';
import heroCardsData from './heroCardData.json';
import ItemCard from './itemCard.jsx';
import itemCardsData from './itemCardData.json';
import MonsterCard from './monsterCard.jsx';
import monsterCardsData from './monsterCardData.json';

class App extends React.Component {
    renderCards(dataset, ReactClass) {
        return <div className='cards'>
            {_.map(dataset, c => {
                c.id = `${s4()}${s4()}`
                return <ReactClass {...c} key={`card-${c.id}`}></ReactClass>
            })}
        </div>;
    }

    render() {
        return (
            <div id='appContainer'>{_.compact([
                false && this.renderCards(dangeonCardData, DangeonCard),
                false && this.renderCards(heroCardsData, HeroCard),
                false && this.renderCards(itemCardsData, ItemCard),
                this.renderCards(monsterCardsData, MonsterCard)
            ])}</div>
        );
    }
}

export default App;
