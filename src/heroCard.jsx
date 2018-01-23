import React from 'react';
import _ from 'lodash';

const heroClassMetadata = {
    'hellion': {color: '#ff6400', icon: 'fa-arrows-alt'},
    'crusader': {color: '#a9a9a9', icon: 'fa-shield'},
    'highwayman': {color: '#cd853f', icon: 'fa-paw'},
    'plageDoctor': {color: '#2e8b57', icon: 'fa-flask'},
    'Occultist': {color: '#322a61', icon: 'fa-moon-o'},
    'possessed': {color: '#dc143c', icon: 'fa-viacoin'}
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
            hero.ingenuity && <div className="heroStateSingle"><i className="fa fa-hand-paper-o"></i>{` : ${hero.ingenuity}`}</div>,
            hero.scouting && <div className="heroStateSingle"><i className="fa fa-binoculars"></i>{` : ${hero.scouting}`}</div>,
            hero.magic && <div className="heroStateSingle"><i className="fa fa-magic"></i>{` : ${hero.magic}`}</div>,
            hero.hearts && <div className="heroStateSingle"><i className="fa fa-heart"></i>{` : ${hero.hearts}`}</div>
        ])}</div>)
    }

    getHeroInfo (hero) {
        return (<div className={`heroInfo ${hero.heroClass}`}>
            {this.getHeroBanner(hero)}
            {this.getHeroStates(hero)}
        </div>);
    }

    render () {
        return (
            <div className='cardContainer'>
                {this.getHeroInfo(this.props)}
                {this.getHeroInfo(_.assign({heroClass: 'possessed'}, this.props.possessed))}
            </div>
        );
    }
}

export default HeroCard;
