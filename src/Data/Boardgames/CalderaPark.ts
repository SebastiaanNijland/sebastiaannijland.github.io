import type { Boardgame } from '../boardgames';

const CalderaParkInputs = [{
    name: 'All waterfalls',
    value: 4,
    type: 'checkbox'
}, {
    name: 'All mountains',
    value: 7,
    type: 'checkbox'
}, {
    name: 'All deserts',
    value: 7,
    type: 'checkbox'
}, {
    name: 'All forests',
    value: 7,
    type: 'checkbox'
}, {
    name: 'All rivers',
    value: 8,
    type: 'checkbox'
}, {
    name: 'All canyons',
    value: 4,
    type: 'checkbox'
}, {
    name: 'Goats',
    value: 0,
    min: 0,
    max: 12
}, {
    name: 'Goats - Watering holes', 
    value: 0,
    min: 0,
    max: 3
}, {
    name: 'Bears',
    value: 0,
    min: 0,
    max: 12
}, {
    name: 'Bears - Watering holes',
    value: 0,
    min: 0,
    max: 3
}, {
    name: 'Wolves',
    value: 0,
    min: 0,
    max: 12
}, {
    name: 'Wolves - Watering holes',
    value: 0,
    min: 0,
    max: 3
}, {
    name: 'Moose',
    value: 0,
    min: 0,
    max: 12
}, {
    name: 'Moose - Watering holes',
    value: 0,
    min: 0,
    max: 3
}, {
    name: 'Eagles',
    value: 0,
    min: 0,
    max: 12
}, {
    name: 'Eagles - Watering holes',
    value: 0,
    min: 0,
    max: 3
}, {
    name: 'Bisons',
    value: 0,
    min: 0,
    max: 12
}, {
    name: 'Bisons - Watering holes',
    value: 0,
    min: 0,
    max: 3
}];

export const CalderaPark: Boardgame = {
    name: 'Caldera Park',
    inputs: CalderaParkInputs,
    output: inputs => {
        const checkboxValues = inputs.filter(i => i.type === 'checkbox').map(i => i.checked ? i.value || 0 : 0);
        const getAnimalValue = (animal: string) => {
            return (inputs.find(i => i.name === animal)?.value || 0) * (inputs.find(i => i.name === `${animal} - Watering holes`)?.value || 0);
        };
        const animalValues = ['Goats', 'Bears', 'Wolves', 'Moose', 'Eagles', 'Bisons'].map(getAnimalValue);
        return checkboxValues.reduce((acc = 0, cur = 0) => acc + cur, 0) + animalValues.reduce((acc = 0, cur = 0) => acc + cur, 0);
    }
};
