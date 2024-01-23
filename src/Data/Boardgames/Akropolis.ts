import type { Boardgame } from '../boardgames';

const AkropolisInputs = [{
    name: 'Blue stars',
    min: 0,
    value: undefined
}, {
    name: 'Blue districts',
    min: 0,
    value: undefined
}, { 
    name: 'Yellow stars',
    min: 0,
    step: 2,
    value: undefined
}, {
    name: 'Yellow districts',
    min: 0,
    value: undefined
}, {
    name: 'Red stars',
    min: 0,
    step: 2,
    value: undefined
}, {
    name: 'Red districts',
    min: 0,
    value: undefined
}, {
    name: 'Purple stars',
    min: 0,
    step: 2,
    value: undefined
}, {
    name: 'Purple districts',
    min: 0,
    value: undefined
}, {
    name: 'Green stars',
    min: 0,
    step: 3,
    value: undefined
}, {
    name: 'Green districts',
    min: 0,
    value: undefined
}, {
    name: 'Blocks',
    min: 0,
    value: undefined
}];

export const Akropolis: Boardgame = {
    id: '2',
    name: 'Akropolis',
    inputs: AkropolisInputs,
    output: inputs => {
        const blue = (inputs[0].value || 0) * (inputs[1].value || 0);
        const yellow = (inputs[2].value || 0) * (inputs[3].value || 0);
        const red = (inputs[4].value || 0) * (inputs[5].value || 0);
        const purple = (inputs[6].value || 0) * (inputs[7].value || 0);
        const green = (inputs[8].value || 0) * (inputs[9].value || 0);
        return blue + yellow + red + purple + green + (inputs[10].value || 0);
    }
};
