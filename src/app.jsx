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
import MineralCard from './mineralCard.jsx';
import mineralCardsData from './mineralCardData.json';
import ObstacleCard from './obstacleCard.jsx';
import obstacleCardsData from './obstacleCardData.json';

class App extends React.Component {
    renderCards(dataset, ReactClass) {
        return <div className='cards'>
            {_.flatMap(dataset, c => {
                return _.times(_.get(c, 'quantity', 1), () => {
                    c.id = `${s4()}${s4()}`
                    return <ReactClass {...c} key={`card-${c.id}`}></ReactClass>
                })
            })}
        </div>;
    }

    render() {
        return (
            <div id='appContainer'>{_.compact([
                false && this.renderCards(dangeonCardData, DangeonCard),
                false && this.renderCards(heroCardsData, HeroCard),
                false && this.renderCards(itemCardsData, ItemCard),
                false && this.renderCards(monsterCardsData, MonsterCard),
                false && this.renderCards(mineralCardsData, MineralCard),
                this.renderCards(obstacleCardsData, ObstacleCard)
            ])}</div>
        );
    }
}

export default App;
