//                                                  [  0,-12]
//
//                                      [ -3,-10]               [  3,-10]
//
//                          [ -6, -8]               [  0, -8]               [  6, -8]
//
//              [ -9, -6]               [ -3, -6]               [  3, -6]               [  9, -6]
//
//  [-12, -4]               [ -6, -4]               [  0, -4]               [  6, -4]               [ 12, -4]
//
//              [ -9, -2]               [ -3, -2]               [  3, -2]               [  9, -2]
//
//  [-12,  0]               [ -6,  0]               [  0,  0]               [  6,  0]               [ 12,  0]
//
//              [ -9,  2]               [ -3,  2]               [  3,  2]               [  9,  2]
//
//  [-12,  4]               [ -6,  4]               [  0,  4]               [  6,  4]               [ 12,  4]
//
//              [ -9,  6]               [ -3,  6]               [  3,  6]               [  9,  6]
//
//                          [ -6,  8]               [  0,  8]               [  6,  8]
//s
//                                      [ -3, 10]               [  3, 10]
//
//                                                  [  0, 12]

import React from 'react';
import _ from 'lodash';

const hexsData = [[-12,4], [-9,2], [-6,0], [-3,2], [0,0], [3,-2], [3,-6], [0,-8], [0,-12]]
const hexSize = [100, 100]
const cardSize = [876, 1240]
const strokeWidth = 4
const points = _.map([0, 0.5, 0.25, 0, 0.75, 0, 1, 0.5, 0.75, 1, 0.25, 1, 0, 0.5],
    (r, i) => 0.5 * strokeWidth + r * (hexSize[i % 2] - strokeWidth))

class Hexagon extends React.Component {
    render() {
        const style = {
            width: hexSize[0],
            height: hexSize[1],
            left: 0.5 * cardSize[0] + (0.25 * this.props.x - 0.5) * hexSize[0],
            top: 0.5 * cardSize[1] + (0.25 * this.props.y - 0.5) * hexSize[1],
        }

        return (<div className="hexagon" style={style}>
            <svg width={hexSize[0]} height={hexSize[1]} xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points={points} strokeWidth={strokeWidth}/>
            </svg>
        </div>)
    }
}

const Hexagons = () => (
    <div className='cardContainer'>
        {_.map(hexsData, c => <Hexagon x={c[0]} y={c[1]}/>)}
    </div>)

export default Hexagons;

