import React from 'react';
import _ from 'lodash';
import {Banner, States, Description, Footer, XPIndicator, Alternatives} from './cardComponents.jsx';
import cardMetaData from './cardMetaData.json';

const HeroCard = props => (
    <div className='cardContainer'>
        <Banner {...cardMetaData.heroClass[props.heroClass]} name={props.name}/>
        <States {...props}/>
        <Footer {...cardMetaData.terrain[props.terrain]}/>
    </div>)

const ObstacleCard = props => (
    <div className='cardContainer'>
        <Banner icon={'fa-exclamation-triangle'} name={props.name}/>
        <States {...props}/>
        <Footer {...cardMetaData.terrain[props.terrain]}/>
    </div>)

const MonsterCard = props => (
    <div className='cardContainer'>
        <Banner icon={'fa-arrows-alt'} name={props.name}/>
        <Alternatives alternatives={props.defeat}/>
        <XPIndicator xp={props.xp}/>
        <Footer {...cardMetaData.terrain[props.terrain]}/>
    </div>)

const MineralCard = props => (
    <div className='cardContainer'>
        <Banner icon={'fa-pagelines'} name={props.name}/>
        <Alternatives alternatives={props.gather}/>
        <Footer {...cardMetaData.terrain[props.terrain]}/>
    </div>)

const DungeonCard = props => (
    <div className='cardContainer'>
        <Banner {...cardMetaData.action[props.action]} name={props.name}/>
        <Description description={props.description}/>
    </div>)

export {
    HeroCard,
    ObstacleCard,
    MonsterCard,
    MineralCard,
    DungeonCard
}

