import type { Boardgame } from '../boardgames';

const AgricolaInputs = [{
    name: 'Fields',
    min: 0,
    value: undefined
}, {
    name: 'Pastures',
    min: 0,
    value: undefined
}, { 
    name: 'Grain',
    min: 0,
    value: undefined
}, {
    name: 'Vegetables',
    min: 0,
    value: undefined
}, {
    name: 'Sheep',
    min: 0,
    value: undefined
}, {
    name: 'Pigs',
    min: 0,
    value: undefined
}, {
    name: 'Cattle',
    min: 0,
    value: undefined
}, {
    name: 'Unused spaces',
    min: 0,
    value: undefined
}, {
    name: 'Fenced stables',
    min: 0,
    value: undefined
}, {
    name: 'Clay rooms',
    min: 0,
    value: undefined
}, {
    name: 'Stone rooms',
    min: 0,
    value: undefined
}, {
    name: 'Family members',
    min: 2,
    max: 5,
    value: undefined
}, {
    name: 'Cards',
    min: 0,
    value: undefined
}, {
    name: 'Bonus points',
    min: 0,
    value: undefined
}, {
    name: 'Horses',
    min: 0,
    value: undefined
}];

export const Agricola: Boardgame = {
    id: '1',
    name: 'Agricola',
    inputs: AgricolaInputs,
    output: inputs => {
        let total = 0;
        const fields = inputs.find(input => input.name === 'Fields')?.value || 0;
        const pastures = inputs.find(input => input.name === 'Pastures')?.value || 0;
        const grain = inputs.find(input => input.name === 'Grain')?.value || 0;
        const vegetables = inputs.find(input => input.name === 'Vegetables')?.value || 0;
        const sheep = inputs.find(input => input.name === 'Sheep')?.value || 0;
        const pigs = inputs.find(input => input.name === 'Pigs')?.value || 0;
        const cattle = inputs.find(input => input.name === 'Cattle')?.value || 0;
        const horses = inputs.find(input => input.name === 'Horses')?.value || 0;
        const unusedSpaces = inputs.find(input => input.name === 'Unused spaces')?.value || 0;
        const fencedStables = inputs.find(input => input.name === 'Fenced stables')?.value || 0;
        const clayRooms = inputs.find(input => input.name === 'Clay rooms')?.value || 0;
        const stoneRooms = inputs.find(input => input.name === 'Stone rooms')?.value || 0;
        const familyMembers = inputs.find(input => input.name === 'Family members')?.value || 0;
        const cards = inputs.find(input => input.name === 'Cards')?.value || 0;
        const bonusPoints = inputs.find(input => input.name === 'Bonus points')?.value || 0;
        if (fields <= 1) {
            total -= 1;
        } else {
            total += Math.min(fields - 1, 4);
        }
        total += Math.min(pastures - 1, 4);
        if (grain === 0) {
            total -= 1;
        } else if (grain <= 3) {
            total += 1;
        } else if (grain <= 5) {
            total += 2;
        } else if (grain <= 7) {
            total += 3;
        } else {
            total += 4;
        }
        total += Math.min(vegetables - 1, 4);
        if (sheep === 0) {
            total -= 1;
        } else if (sheep <= 3) {
            total += 1;
        } else if (sheep <= 5) {
            total += 2;
        } else if (sheep <= 7) {
            total += 3;
        } else {
            total += 4;
        }
        if (pigs === 0) {
            total -= 1;
        } else if (pigs <= 2) {
            total += 1;
        } else if (pigs <= 4) {
            total += 2;
        } else if (pigs <= 6) {
            total += 3;
        } else {
            total += 4;
        }
        if (cattle === 0) {
            total -= 1;
        } else if (cattle === 1) {
            total += 1;
        } else if (cattle <= 3) {
            total += 2;
        } else if (cattle <= 5) {
            total += 3;
        } else {
            total += 4;
        }
        total += Math.min(fencedStables - 1, 4);
        total += clayRooms * 2;
        if (clayRooms === 0) {
            total += stoneRooms * 3;
        }
        total += familyMembers * 3;
        return total + horses + cards + bonusPoints - unusedSpaces;
    }
};
