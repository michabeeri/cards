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
const strokeWidth = 2
const points = _.map([0, 0.5, 0.25, 0, 0.75, 0, 1, 0.5, 0.75, 1, 0.25, 1, 0, 0.5], unitToRealLocation)

function unitToRealLocation(r, i) {
    return 0.5 * strokeWidth + r * (hexSize[i % 2] - strokeWidth)
}

const Hexagon = ({pos, blocked}) => {
    const pixelPos = [0.25 * (3 * pos[0]) * hexSize[0], 0.25 * (4 * pos[1] + 2 * pos[0]) * hexSize[1]]
    const info = `${pos[0]},${pos[1]}`
    const style = {
        width: hexSize[0],
        height: hexSize[1],
        left: pixelPos[0],
        top: pixelPos[1]
    }

    return (<div className="hexagon" style={style}>
        <div className="info">{info}</div>
        <svg viewBox={`0 0 ${hexSize[0]} ${hexSize[1]}`} xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline
                points={points}
                strokeWidth={strokeWidth}
                fill={blocked ? 'black' : ''}/>
        </svg>
    </div>)
}

const HexagonArea = ({areaData, params}) => {
    params = params ? JSON.parse('{"' + decodeURI(params).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}') : {}

    return (<div className={`mapArea ${params.info ? 'showInfo' : ''}`}>
            {_.map(areaData, h => <Hexagon {...h}/>)}
        </div>)
}

export {
    HexagonArea
};


// data generation
// (() => {
//     let str
//     for (let i = 0; i < 12; i++){
//         for (let j = -i; j < 12 - i; j++){
//             str += `{"pos": [${i}, ${j}]},\n`
//         }
//     }
//     console.log(str)
// })()
