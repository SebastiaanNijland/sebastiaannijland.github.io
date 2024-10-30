import { useEffect, useState } from 'react';

import type { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Boardgame } from '../../Data/boardgames';
import BoardgameInput from './BoardGameInput';

const Result = styled.strong`
    display: block;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: .5rem;
    text-align: center;
    border-top: 2px solid var(--accent-color);
    color: var(--accent-color);
    background: black;
`;

const BoardGame: FunctionComponent<{ boardgame: Boardgame }> = ({ boardgame }) => {
    const [result, setResult] = useState<number>(0);
    const [inputs, setInputs] = useState(boardgame.inputs);
    const calculate = (i: typeof boardgame.inputs) => setResult(boardgame.output(i));

    const onChange = (name: string, value: number) => {
        const newInputs = inputs.map(input => {
            if (input.name === name) {
                return {
                    ...input,
                    value
                };
            }
            return input;
        });
        setInputs(newInputs);
        calculate(newInputs);
    };

    const onCheck = (name: string, checked: boolean) => {
        const newInputs = inputs.map(input => {
            if (input.name === name) {
                return {
                    ...input,
                    checked
                };
            }
            return input;
        });
        setInputs(newInputs);
        calculate(newInputs);
    };

    useEffect(() => {
        setInputs(boardgame.inputs);
        calculate(boardgame.inputs);
    }, [boardgame]);

    const Inputs = inputs.map(({name, type, ...rest}) => (
        <BoardgameInput
            key={name}
            name={name}
            onChangeHandler={type === 'checkbox' ? onCheck : onChange}
            type={type}
            {...rest} />
    ));

    return (
        <>
            {Inputs}
            <Result>Score: {result}</Result>
        </>
    );
};

export default BoardGame;
