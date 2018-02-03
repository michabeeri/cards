import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import _ from 'lodash';
import dangeonCardData from './dangeonCardData.json';
import heroCardsData from './heroCardData.json';
import monsterCardsData from './monsterCardData.json';
import mineralCardsData from './mineralCardData.json';
import obstacleCardsData from './obstacleCardData.json';
import {DungeonCard, HeroCard, ObstacleCard, MonsterCard, MineralCard} from './cardClasses.jsx';

const CardsRenderer = ({CardClass, cardsData, path}) => (
    <Route path={path} render={() => (
        <div className='cards'>
            {_.flatMap(cardsData, c =>
                _.times(_.get(c, 'quantity', 1), () => <CardClass {...c}></CardClass>))}
        </div>
    )}/>
)

const NavigationBar = () => (
    <div className="navigationBar">
        <ul>
            <li><Link to="/dungeon">dungeon</Link></li>
            <li><Link to="/heroes">Heroes</Link></li>
            <li><Link to="/monsters">Monsters</Link></li>
            <li><Link to="/minerals">Minerals</Link></li>
            <li><Link to="/obstacles">Obstacles</Link></li>
        </ul>
    </div>
)

class App extends React.Component {
    render() {
        return (
            <Router>
                <div id='appContainer'>
                    <CardsRenderer cardsData={dangeonCardData} CardClass={DungeonCard} path={'/dungeon'}/>
                    <CardsRenderer cardsData={heroCardsData} CardClass={HeroCard} path={'/heroes'}/>
                    <CardsRenderer cardsData={monsterCardsData} CardClass={MonsterCard} path={'/monsters'}/>
                    <CardsRenderer cardsData={mineralCardsData} CardClass={MineralCard} path={'/minerals'}/>
                    <CardsRenderer cardsData={obstacleCardsData} CardClass={ObstacleCard} path={'/obstacles'}/>
                    <Route exact path='/' component={NavigationBar}/>
                </div>
            </Router>
        );
    }
}

export default App;
