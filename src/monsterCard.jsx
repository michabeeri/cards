import React from 'react';
import _ from 'lodash';

const afflictionsMetadata = {
    'injury': {color: '#ff6400', icon: 'fa-wheelchair'}
}

class MonsterCard extends React.Component {

    getMonsterOptions (options, title) {
        return (<div className="monsterOptions">
            <div className="monsterOptionsLabel">{title}</div>
            {_.map(options, opt => (
                <div className="monsterOptionsContainer">
                    {_.compact([
                        opt.combat && <div className="skillRequirement"><i className="fa fa-gavel"></i>{` : ${opt.combat}`}</div>,
                        opt.ingenuity && <div className="skillRequirement"><i className="fa fa-hand-paper-o"></i>{` : ${opt.ingenuity}`}</div>,
                        opt.scouting && <div className="skillRequirement"><i className="fa fa-binoculars"></i>{` : ${opt.scouting}`}</div>,
                        opt.magic && <div className="skillRequirement"><i className="fa fa-magic"></i>{` : ${opt.magic}`}</div>,
                        _.map(_.get(opt, 'afflictions', []), aff => {
                            const meta = afflictionsMetadata[aff]
                            return <div className="icon"><i className={`fa ${meta.icon}`} style={{color: meta.color}}></i></div>
                        })
                    ])}
                </div>
            ))}
        </div>)
    }

    getMonsterInfo () {
        return (<div className="monsterInfo">
            <div className="monsterBanner">
                <div className="icon"><i className="fa fa-gavel" style={{color: '#383838'}}></i></div>
                <div className="monsterName">{this.props.name}</div>
            </div>
            {this.getMonsterOptions(this.props.defeat, 'defeat')}
            {this.props.avoid && this.getMonsterOptions(this.props.avoid, 'avoid')}
            <div className="xpIndicator">
                {_.times(this.props.xp, () => <div className="icon"><i className="fa fa-certificate" style={{color: '#b22222'}}></i></div>)}
            </div>
        </div>);
    }

    render () {
        return (
            <div className='cardContainer'>
                {this.getMonsterInfo()}
            </div>
        );
    }
}

export default MonsterCard;
