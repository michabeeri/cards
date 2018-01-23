import React from 'react';
import _ from 'lodash';

class Card extends React.Component {
    getForkDelta () {
        const forkDelta = _.get(this.props, 'paths', []).length
        return <div className={`forkDelta-${forkDelta}`}>{forkDelta}</div>
    }

    getPathInfo (path) {
        return (<div className={`pathInfo ${_.get(path, 'flags', []).join(' ')}`}>{_.compact([
            // challanges
            path.monster && <div className="icon"><i className="fa fa-gavel" style={{color: '#4682b4'}}></i></div>,
            path.obstacle && <div className="icon"><i className="fa fa-exclamation-triangle" style={{color: '#4682b4'}}></i></div>,
            path.riddle && <div className="icon"><i className="fa fa-puzzle-piece" style={{color: '#4682b4'}}></i></div>,

            // rewards
            path.north === 1 && <div className="icon"><i className="fa fa-compass" style={{color: '#4682b4'}}></i></div>,
            path.north === -1 && <div className="icon"><i className="fa fa-compass" style={{color: '#fd6a02'}}></i></div>,
            path.minerals && <div className="icon"><i className="fa fa-diamond" style={{color: '#4682b4'}}></i></div>,
            path.hero && <div className="icon"><i className="fa fa-user" style={{color: '#4682b4'}}></i></div>,
            path.ritual && <div className="icon"><i className="fa fa-spinner" style={{color: '#4682b4'}}></i></div>,
            path.item && <div className="icon"><i className="fa fa-gift" style={{color: '#4682b4'}}></i></div>,
            path.quest && <div className="icon"><i className="fa fa-book" style={{color: '#4682b4'}}></i></div>
        ])}
        </div>);
    }

    getCompletePaths () {
        return _.concat(
            [this.getPathInfo(_.assign({flags: ['current']}, this.props))],
            _.map(_.get(this.props, 'paths', []), this.getPathInfo));
    }

    render () {
        //var card = this.props.card;
        return (
            <div className='cardContainer'>
                {this.getForkDelta()}
                <div className="pathsContainer">{this.getCompletePaths()}</div>
            </div>
        );
    }
}

export default Card;
