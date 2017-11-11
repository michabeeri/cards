import React from 'react';
import _ from 'lodash';
import Card from './card.jsx';


//npm install webpack -g
//webpack --progress --colors --watch

const cards = [
    {
        id: '0000',
        subj: 'Nothing',
        desc: 'The broken waste of desert'
    },
    {
        id: '0001',
        subj: 'Leper Colony',
        desc: 'Deteriorated and derelict assortment of hovels',
        optional: true,
        multiselect: true,
        act: {
                desc: 'Investigate',
                success: 'gain 1 man',
                failure: '1 man catches lepracy (-2 life cap until town)',
                prob: 0.5
            }
    },
    {
        id: '0002',
        subj: 'Dune Slug',
        desc: 'Giant ferocious man-eating beast, sort of ..',
        multiselect: true,
        act: {
                desc: 'sneak unnoticed',
                failure: '1 man was eaten alive',
                prob: 0.2,
                altProb: {condition: 'slugbait', prob: 0.7}
            }
    },
    {
        id: '0003',
        subj: 'Lost',
        desc: 'Map is dull, compass faulty and the navigator inept',
        immediate: true,
        result: 'go back 1 place'
    },
    {
        id: '0004',
        subj: 'Dehydration',
        desc: 'Mouth is dry, palms aren\'t sweating, balance shaken and sight in dimmed',
        immediate: true,
        result: '1 man becomes dehydrated (-1 life cap -1 life can\'t walk, with water +1 life cap +1 life + restore walk)'
    },
    {
        id: '0005',
        subj: 'Abandoned cottage',
        desc: 'Empty, crumbling shuddered on a hill',
        result: 'benefits for camping'
    },
    {
        id: '0006',
        subj: 'Cave',
        desc: 'Impenetrable blackness, faint shadows dissolve into the surrounding darkness',
        optional: true,
        multiselect: true,
        act: {
                desc: 'Search',
                options: [
                    {
                        prob: 0.2,
                        desc: 'snake bite',
                        res: 'poisoned(3)'
                    },
                    {
                        prob: 0.4,
                        desc: 'injury',
                        res: '-1 life'
                    },
                    {
                        prob: 0.4,
                        desc: 'loot',
                        res: '+3 currency'
                    }
                ],
            }
    },
    {
        id: '0007',
        subj: 'Dangerous path',
        desc: 'Narrow and rocky mountain pass with a cliff on one side and a long drop on the other',
        multiselect: true,
        act: {
            desc: 'Cross',
            failure: 'lose wagon',
            prob: 0.5
        }
    },
    {
        id: '0008',
        subj: 'Landslide',
        desc: '...',
        immediate: true,
        failure: '-1 life',
        prob: 0.5,
    },
    {
        id: '0009',
        subj: 'Boulder',
        desc: '...',
        immediate: true,
        failure: '-1 life',
        prob: 0.5,
    },
    {
        id: '000a',
        subj: 'Rain',
        desc: '...',
        immediate: true,
        result: '2nd rain is a flood (if in ravine lose wagon and 50% chance to lose each man, rain count goes to 0)',
    },
    {
        id: '000b',
        subj: 'Crossroads',
        desc: '...',
        immediate: true,
        result: 'see two cards and choose 1 instead of this one',
    },
    {
        id: '000c',
        subj: 'Lookout hill',
        desc: '...',
        immediate: true,
        result: 'see the next two cards',
    },
    {
        id: '000c',
        subj: 'Lookout hill',
        desc: '...',
        immediate: true,
        result: 'see the next two cards',
    },
    {
        id: '000d',
        subj: 'Osage-night-cress',
        desc: 'Patches of the scarce vegetation blossom with faint ghostly aura, can only be seen at night.',
        result: 'at night gain 10 clumps of Osage-night-cress herbs',
    },

];

class App extends React.Component {
    render () {
        return (
            <div id='appContainer'>
                {_.map(cards, function(c){
                    return (<Card card={c} key={`card-${c.id}`}></Card>);
                })}
            </div>
        );
    }
}

export default App;
