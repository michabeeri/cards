import _ from 'lodash';

const initialValues = {
    temprature: 20,
    windChill: 0,
    snowCover: 0,
    snowFall: 0
};

const diceValues = {
    Autumn: {temprature: [ 1, 0,-1,-2,-3,-4], windChill: [-3,-1, 0, 0, 1, 1], snowFall: [-1,-1, 0, 0, 0, 1]},
    Winter: {temprature: [-1,-2,-3,-4,-5,-6], windChill: [-3,-2,-1, 1, 2, 3], snowFall: [-1, 0, 0, 0, 1, 2]},
    Spring: {temprature: [-1, 0, 1, 2, 3, 4], windChill: [-3,-2,-1, 0, 1, 1], snowFall: [-1,-1,-1,-1, 0, 1]},
    Summer: {temprature: [ 1, 2, 3, 4, 5, 6], windChill: [-4,-2,-1, 0, 0, 1], snowFall: [-2,-2,-1,-1,-1, 1]},
};

const range = {
    temprature: {min: -40, max: 20},
    windChill: {min: 0, max: 9},
    snowCover: {min: 0, max: 9},
    snowFall: {min: -2, max: 2}
};

function roll(currentState, season) {
    const tempDelta = _.sample(diceValues[season].temprature);
    const tempNext = _.clamp(currentState.temprature + tempDelta, range.temprature.min, range.temprature.max);
    console.log(`temprature:\t${currentState.temprature}\t=>\t${tempNext}\t(${tempDelta})`);

    const windDelta = _.sample(diceValues[season].windChill);
    const windNext = _.clamp(currentState.windChill + windDelta, range.windChill.min, range.windChill.max);
    console.log(`windChill:\t${currentState.windChill}\t=>\t${windNext}\t(${windDelta})`);

    const snowFall = _.sample(diceValues[season].snowFall);
    console.log(`snowFall:\t${snowFall}`);

    const coverNext = _.clamp(currentState.snowCover + snowFall, range.snowCover.min, range.snowCover.max);
    console.log(`snowCover:\t${currentState.snowCover}\t=>\t${coverNext}`);

    return {
        temprature: tempNext,
        windChill: windNext,
        snowFall: snowFall,
        snowCover: coverNext
    };
}

export default {
    initialValues,
    range,
    roll
};
