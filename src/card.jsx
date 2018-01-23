import React from 'react';
import _ from 'lodash';

class Card extends React.Component {
    getForkClass () {
        return `fork-${_.get(this.props, 'paths', []).length}`;
    }

    getPathInfo (path) {
        return (<div className='pathInfo'>{_.compact([
            path.north === 1 && <div className="icon"><i className="fa fa-compass" style={{color: '#66cd00'}}></i></div>,
            path.north === -1 && <div className="icon"><i className="fa fa-compass" style={{color: '#ff6347'}}></i></div>
        ])}
        </div>);
    }

    render () {
        //var card = this.props.card;
        return (
            <div className='cardContainer'>
                <div className={`imageContainer ${this.getForkClass()}`}></div>
                <div className="pathsContainer">{_.map(_.get(this.props, 'paths', []), this.getPathInfo)}</div>
            </div>
        );
    }
}

export default Card;
