import React from 'react';
import _ from 'lodash';
import Card from './card.jsx';

const cards = [
    {
        id: '0000',
        subj: 'Nothing',
    },
    {
        id: '0001',
        subj: 'Leper Colony',
        desc: 'Deteriorated and forgotten hovel',
        act: [
            {
                desc: 'Investigate',
                success: 'gain 1 man',
                failure: '1 man catches lepracy (-2 life cap until town)',
                prob: 0.5
            }
        ]
    },
    {
        id: '0002',
        subj: 'Dune Slug',
        desc: 'Giant ferocious man-eating beast, sort of',
        act: [
            {
                desc: 'sneak unnoticed',
                failure: '1 man was eaten alive',
                prob: 0.2,
                altProb: {condition: 'slugbait', prob: 0.7}
            }
        ]
    },
    {
        id: '0003',
        subj: 'Lost',
        desc: 'Map is dull, compass faulty and the navigator suck',
        act: 'go back 1 place'
    },
    {
        id: '0004',
        subj: 'Dehydration',
        desc: 'Map is dull, compass faulty and the navigator suck',
        act: '1 man becomes dehydrated (-1 life cap -1 life can\'t walk, with water +1 life cap +1 life + restore walk)'
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
