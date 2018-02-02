import React from 'react';
import _ from 'lodash';

const Banner = ({color, icon, name}) => (
    <div className="banner">
        {icon && <div className="icon"><i className={`fa ${icon}`} style={{color}}></i></div>}
        <div className="title">{name}</div>
    </div>)

const States = states => (
    <div className="states">{_.compact([
        states.combat && <div className="stateSingle"><i className="fa fa-gavel"></i>{` : ${states.combat}`}</div>,
        states.pathfinding && <div className="stateSingle"><i className="fa fa-compass"></i>{` : ${states.pathfinding}`}</div>,
        states.scouting && <div className="stateSingle"><i className="fa fa-binoculars"></i>{` : ${states.scouting}`}</div>
    ])}</div>)

const Footer = ({icon, color}) => (
    <div className="footer">
        {icon && <div className="icon"><i className={`fa ${icon}`} style={{color}}></i></div>}
    </div>)

const XPIndicator = ({xp}) => (
    <div className="xpIndicator">
        {_.times(xp, () => <div className="icon"><i className="fa fa-certificate" style={{color: '#b22222'}}></i></div>)}
    </div>)

export {
    Banner,
    States,
    Footer,
    XPIndicator
};
