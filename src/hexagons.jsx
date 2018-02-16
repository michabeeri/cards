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

const hexSize = [120, 120]
const areaRadius = 3
const areaSize = [hexSize[0] * (0.75 * 2 * areaRadius + 1), hexSize[1] * (2 * areaRadius + 1)]
const strokeWidth = 2
const points = _.map([0, 0.5, 0.25, 0, 0.75, 0, 1, 0.5, 0.75, 1, 0.25, 1, 0, 0.5], unitToRealLocation)

const blocks = _.transform({
    'n': [0.1875, 0.125, 0.25, 0, 0.75, 0, 0.8125, 0.125],
    'ne': [0.625, 0, 0.75, 0, 1, 0.5, 0.9375, 0.6125],
    'se': [0.9375, 0.375, 1, 0.5, 0.75, 1, 0.625, 1],
    's': [0.8125, 0.875, 0.75, 1, 0.25, 1, 0.1875, 0.875],
    'sw': [0.375, 1, 0.25, 1, 0, 0.5, 0.0625, 0.375],
    'nw': [0.0625, 0.625, 0, 0.5, 0.25, 0, 0.375, 0]
}, function(res, pts, key) {
    return res[key] = _.map(pts, unitToRealLocation)
}, {})

function unitToRealLocation(r, i) {
    return 0.5 * strokeWidth + r * (hexSize[i % 2] - strokeWidth)
}

class Hexagon extends React.Component {
    getBlocks() {
        return (<g className='blocks'>
            {_(blocks)
                .pickBy((v, b) => _.includes(_.get(this.props, ['data', 'blocks'], []), b))
                .map(pts => <polygon points={pts} fill="black"/>)
                .value()}
        </g>)
    }

    render() {
        const pos = this.props.pos
        const style = {
            width: hexSize[0],
            height: hexSize[1],
            left: 0.5 * areaSize[0] + (0.25 * pos[0] - 0.5) * hexSize[0],
            top: 0.5 * areaSize[1] + (0.25 * pos[1] - 0.5) * hexSize[1],
        }

        return (<div className="hexagon" style={style}>
            <div className="info">{this.props.info}</div>
            <svg viewBox={`0 0 ${hexSize[0]} ${hexSize[1]}`} xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline
                    points={points}
                    strokeWidth={strokeWidth}
                    fill={_.get(this.props, ['data', 'blocked'], false) ? 'black' : ''}/>
                {this.getBlocks()}
            </svg>
        </div>)
    }
}

const hexsData = [[-12,4], [-9,2], [-6,0], [-3,2], [0,0], [3,-2], [3,-6], [0,-8], [0,-12]]
const HexagonTrack = () => (
    <div className='cardContainer'>
        {_.map(hexsData, pos => <Hexagon pos={pos}/>)}
    </div>)

const initialAreaData = {
    '1,-1': {blocked: true},
    '1,0': {blocked: true},
    '1,1': {blocked: true},
    '0,-1': {blocked: true},
    '2,-1': {blocked: true},
    '0,2': {blocked: true}
}

const HexagonArea = ({areaData, radius, params}) => {
    params = params ? JSON.parse('{"' + decodeURI(params).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}') : {}

    const hexs = [];
    for(let i = radius * -1; i <= radius; i++) {
        for(let j = radius * -1; j <= radius; j++) {
           if (Math.abs(i + j) <= 3) {
               hexs.push({
                   pos: [3 * i, 4 * j + 2 * i],
                   info: `${i},${j}`,
                   data: initialAreaData[`${i},${j}`]
               })
           }
        }
    }

    return (<div className={`mapArea ${params.info ? 'showInfo' : ''}`} style={{width: areaSize[0], height: areaSize[1]}}>
            {_.map(hexs, h => <Hexagon {...h}/>)}
        </div>)
}

export {
    HexagonTrack,
    HexagonArea
};

