import type { Boardgame } from '../boardgames';

const GalileoProjectInputs = [{
    name: 'Io',
    min: 0,
    step: 1,
    value: undefined
}, {
    name: 'Europa',
    min: 0,
    step: 1,
    value: undefined
}, { 
    name: 'Callisto',
    min: 0,
    step: 1,
    value: undefined
}, {
    name: 'Ganymede',
    min: 0,
    step: 1,
    value: undefined
}, {
    name: 'Technology',
    min: 0,
    step: 1,
    value: undefined
}, {
    name: 'VP Markers',
    min: 0,
    step: 1,
    value: undefined
}, {
    name: 'Characters',
    min: 0,
    step: 1,
    value: undefined
}];

export const GalileoProject: Boardgame = {
    name: 'Galileo Project',
    inputs: GalileoProjectInputs,
    output: inputs => {
        let total = 0;
        inputs.forEach(i => total += i.value || 0);
        return total;
    }
};
