import React from 'react';
import _ from 'lodash';

class DangeonCard extends React.Component {

    getPathInfo (path) {
        return (<div className={`pathInfo ${_.get(path, 'flags', []).join(' ')}`}>{_.compact([
            // conditions
            path.forkMax && <div className="icon"><i className="fa fa-code-fork" style={{color: '#fd6a02'}}></i></div>,
            _.isNumber(path.northAs) && <div className="measureWithIcon"><div className="measureValue">{path.northAs}</div><div className="icon"><i className="fa fa-map"></i></div></div>,
            _.isNumber(path.scouting) && <div className="measureWithIcon"><div className="measureValue">{path.scouting}</div><div className="icon"><i className="fa fa-binoculars"></i></div></div>,

            // challanges
            path.monster && <div className="icon"><i className="fa fa-gavel" style={{color: '#4682b4'}}></i></div>,
            path.obstacle && <div className="icon"><i className="fa fa-exclamation-triangle" style={{color: '#4682b4'}}></i></div>,
            path.riddle && <div className="icon"><i className="fa fa-puzzle-piece" style={{color: '#4682b4'}}></i></div>,

            // rewards
            path.minerals && <div className="icon"><i className="fa fa-diamond" style={{color: '#4682b4'}}></i></div>,
            path.hero && <div className="icon"><i className="fa fa-user" style={{color: '#4682b4'}}></i></div>,
            path.ritual && <div className="icon"><i className="fa fa-spinner" style={{color: '#4682b4'}}></i></div>,
            path.item && <div className="icon"><i className="fa fa-gift" style={{color: '#4682b4'}}></i></div>,
            path.quest && <div className="icon"><i className="fa fa-book" style={{color: '#4682b4'}}></i></div>,

            // modifiers
            path.north === 1 && <div className="icon"><i className="fa fa-compass" style={{color: '#4682b4'}}></i></div>,
            path.north === -1 && <div className="icon"><i className="fa fa-compass" style={{color: '#fd6a02'}}></i></div>
        ])}
        </div>);
    }

    getCompletePaths () {
        return _.concat(
            [this.getPathInfo(_.assign({flags: ['current']}, this.props))],
            _.map(_.get(this.props, 'paths', []), this.getPathInfo));
    }

    render () {
        return (
            <div className='cardContainer'>
                <div className="dungeonBanner">
                    <div className="icon"><i className="fa fa-compass" style={{color: this.props.north ? '#ff7f50' : '#8db8c6'}}></i></div>
                    <div className="dungeonName">{this.props.name}</div>
                </div>
                <div className="eventContainer">
                    {_.compact([
                        // conditions
                        _.isNumber(this.props.scouting) && <div className="measureWithIcon"><div className="measureValue">{this.props.scouting}</div><div className="icon"><i className="fa fa-binoculars"></i></div></div>,

                        // challanges
                        this.props.monster && <div className="icon"><i className="fa fa-gavel"></i></div>,
                        this.props.obstacle && <div className="icon"><i className="fa fa-exclamation-triangle"></i></div>,
                        this.props.riddle && <div className="icon"><i className="fa fa-puzzle-piece"></i></div>,

                        // rewards
                        this.props.minerals && <div className="icon"><i className="fa fa-diamond"></i></div>,
                        this.props.hero && <div className="icon"><i className="fa fa-user"></i></div>,
                        this.props.ritual && <div className="icon"><i className="fa fa-spinner"></i></div>,
                        this.props.item && <div className="icon"><i className="fa fa-gift"></i></div>
                    ])}
                </div>
                <div className="xpIndicator">
                    {_.times(this.props.camp, () => <div className="icon"><i className="fa fa-free-code-camp" style={{color: '#daa520'}}></i></div>)}
                </div>
            </div>
        );
    }
}

export default DangeonCard;
