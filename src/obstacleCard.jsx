import React from 'react';
import _ from 'lodash';

class ObstacleCard extends React.Component {
    getObstacleInfo () {
        return (<div className="obstacleInfo">
            <div className="obstacleBanner">
                <div className="icon"><i className="fa fa-exclamation-triangle" style={{color: '#b8860b'}}></i></div>
                <div className="obstacleName">{this.props.name}</div>
            </div>
            {_.map(this.props.requirements, req => (
                <div className="obstacleRequirementContainer">
                    {_.compact([
                        req.combat && <div className="skillRequirement"><i className="fa fa-gavel"></i>{` : ${req.combat}`}</div>,
                        req.ingenuity && <div className="skillRequirement"><i className="fa fa-hand-paper-o"></i>{` : ${req.ingenuity}`}</div>,
                        req.scouting && <div className="skillRequirement"><i className="fa fa-binoculars"></i>{` : ${req.scouting}`}</div>,
                        req.magic && <div className="skillRequirement"><i className="fa fa-magic"></i>{` : ${req.magic}`}</div>
                    ])}
                </div>
            ))}
        </div>);
    }

    render () {
        return (
            <div className='cardContainer'>
                {this.getObstacleInfo()}
            </div>
        );
    }
}

export default ObstacleCard;
