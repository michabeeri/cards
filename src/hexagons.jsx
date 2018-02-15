//https://www.redblobgames.com/grids/hexagons/
//                                                  [  0, -3]
//                                                  [  0,-12]
//
//                                      [ -1, -2]               [  1, -3]
//                                      [ -3,-10]               [  3,-10]
//
//                          [ -2, -1]               [  0, -2]               [  2, -3]
//                          [ -6, -8]               [  0, -8]               [  6, -8]
//
//              [ -3,  0]               [ -1, -1]               [  1, -2]               [  3, -3]
//              [ -9, -6]               [ -3, -6]               [  3, -6]               [  9, -6]
//
//                          [ -2,  0]               [  0, -1]               [  2, -2]
//                          [ -6, -4]               [  0, -4]               [  6, -4]
//
//              [ -3,  1]               [ -1,  0]               [  1, -1]               [  3, -2]
//              [ -9, -2]               [ -3, -2]               [  3, -2]               [  9, -2]
//
//                          [ -2,  1]               [  0,  0]               [  2, -1]
//                          [ -6,  0]               [  0,  0]               [  6,  0]
//
//              [ -3,  2]               [ -1,  1]               [  1,  0]               [  3, -1]
//              [ -9,  2]               [ -3,  2]               [  3,  2]               [  9,  2]
//
//                          [ -2,  2]               [  0,  1]               [  2,  0]
//                          [ -6,  4]               [  0,  4]               [  6,  4]
//
//              [ -3,  3]               [ -1,  2]               [  1,  1]               [  3,  0]
//              [ -9,  6]               [ -3,  6]               [  3,  6]               [  9,  6]
//
//                          [ -2,  3]               [  0,  8]               [  2,  1]
//                          [ -6,  8]               [  0,  8]               [  6,  8]
//
//                                      [ -1,  3]               [  1,  2]
//                                      [ -3, 10]               [  3, 10]
//
//                                                  [  0,  3]
//                                                  [  0, 12]

import React from 'react';
import _ from 'lodash';

const areaRadius = 4
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
            <div className="info">{this.props.info}</div>
            <svg width={hexSize[0]} height={hexSize[1]} xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points={points} strokeWidth={strokeWidth}/>
            </svg>
        </div>)
    }
}

const HexagonTrack = () => (
    <div className='cardContainer'>
        {_.map(hexsData, c => <Hexagon x={c[0]} y={c[1]}/>)}
    </div>)

const HexagonArea = ({areaData, radius, params}) => {
    params = params ? JSON.parse('{"' + decodeURI(params).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}') : {}

    const hexs = [];
    for(let i = radius * -1; i <= radius; i++) {
        for(let j = radius * -1; j <= radius; j++) {
           if (Math.abs(i + j) <= 3) {
               hexs.push({
                   x: 3 * i,
                   y: 4 * j + 2 * i,
                   info: `${i},${j}`,
                   data: areaData[`${i},${j}`]
               })
           }
        }
    }

    return (<div className={`mapArea ${params.info ? 'showInfo' : ''}`}>
            {_.map(hexs, h => <Hexagon {...h}/>)}
        </div>)
}

export {
    HexagonTrack,
    HexagonArea
};

