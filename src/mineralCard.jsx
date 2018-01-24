import React from 'react';
import _ from 'lodash';

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

    getMineralInfo () {
        return (<div className="mineralInfo">
            <div className="mineralBanner">
                <div className="icon"><i className="fa fa-diamond" style={{color: this.props.color}}></i></div>
                <div className="mineralName">{this.props.name}</div>
            </div>
            <div className="mineralRequirements">
                {this.props.ingenuity && <div className="measureWithIcon"><div className="measureValue">{this.props.ingenuity}</div><div className="icon"><i className="fa fa-hand-paper-o"></i></div></div>}
            </div>
            <div className="xpIndicator">
                {_.times(this.props.xp, () => <div className="icon"><i className="fa fa-certificate" style={{color: '#b22222'}}></i></div>)}
            </div>
        </div>);
    }

    render () {
        return (
            <div className='cardContainer'>
                {this.getMineralInfo()}
            </div>
        );
    }
}

export default MonsterCard;
