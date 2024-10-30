import { InputHTMLAttributes } from 'react';

import { Agricola } from './Boardgames/Agricola';
import { Akropolis } from './Boardgames/Akropolis';
import { CalderaPark } from './Boardgames/CalderaPark';
import { GalileoProject } from './Boardgames/GalileoProject';

interface Input extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    value?: number;
}

export interface Boardgame {
    name: string;
    inputs: Input[];
    output: (inputs: Input[]) => number;
}

export const boardgames = [
    Agricola,
    Akropolis,
    CalderaPark,
    GalileoProject
];
