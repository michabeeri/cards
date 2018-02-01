import React from 'react';
import _ from 'lodash';

const heroClassMetadata = {
    'Nomad': {color: '#ff6400', icon: 'fa-free-code-camp'},
    'Crusader': {color: '#a9a9a9', icon: 'fa-shield'},
    'Highwayman': {color: '#483D8B', icon: 'fa-paw'}
}

const terrainMetadata = {
    'desert': {color: '#DAA520', icon: 'fa-sun-o'},
    'mountains': {color: '#6495ED', icon: 'fa-snowflake-o'},
    'forest': {color: '#008000', icon: 'fa-tree'}
}

class HeroCard extends React.Component {

    getHeroBanner(hero) {
        const meta = heroClassMetadata[hero.heroClass]
        return (<div className="heroBanner">
            {meta && <div className="icon"><i className={`fa ${meta.icon}`} style={{color: meta.color}}></i></div>}
            <div className="heroName">{hero.name}</div>
        </div>)
    }

    getHeroStates(hero) {
        return (<div className="heroStates">{_.compact([
            hero.combat && <div className="heroStateSingle"><i className="fa fa-gavel"></i>{` : ${hero.combat}`}</div>,
            hero.pathfinding && <div className="heroStateSingle"><i className="fa fa-compass"></i>{` : ${hero.pathfinding}`}</div>,
            hero.scouting && <div className="heroStateSingle"><i className="fa fa-binoculars"></i>{` : ${hero.scouting}`}</div>
        ])}</div>)
    }

    getHeroTerrainSymbol(hero) {
        const meta = terrainMetadata[hero.terrain]
        return (<div className="xpIndicator">
            {meta && <div className="icon"><i className={`fa ${meta.icon}`} style={{color: meta.color}}></i></div>}
        </div>)
    }

    getHeroInfo (hero) {
        return (<div className={`heroInfo ${hero.heroClass}`}>
            {this.getHeroBanner(hero)}
            {this.getHeroStates(hero)}
            {this.getHeroTerrainSymbol(hero)}
        </div>);
    }

    render () {
        return (
            <div className='cardContainer'>
                {this.getHeroInfo(this.props)}
            </div>
        );
    }
}

export default HeroCard;
