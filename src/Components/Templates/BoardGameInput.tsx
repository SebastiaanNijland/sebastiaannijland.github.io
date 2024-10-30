import { ChangeEvent, FunctionComponent, InputHTMLAttributes, useState} from 'react';

import styled from 'styled-components';

import Button from '../Styled/Button';
import Row from '../Styled/Row';

const SmallButton = styled(Button)`
    padding: .5rem;
`;

const Span = styled.span`
    width: 13rem;
`;

const Input = styled.input`
    width: 4rem;
    margin-left: .5rem;
    margin-right: .5rem;
`;

interface BoardGameProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    onChangeHandler: (name: string, value: any) => void;
}

const BoardgameInput: FunctionComponent<BoardGameProps> = ({ name, onChangeHandler, step = 1, value = 0, type = 'number', min, max, ...rest }) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = type === 'checkbox' ? e.target.checked : parseInt(e.target.value, 10);
        onChangeHandler(name, value);
    };
    const decrease = () => {
        const newVal = parseInt(value as string, 10) - parseInt(step as string, 10);
        console.log(newVal, min);
        onChangeHandler(name, min !== undefined ? Math.max(newVal, min as number) : newVal);
    };
    const increase = () => {
        const newVal = parseInt(value as string, 10) + parseInt(step as string, 10);
        onChangeHandler(name, max !== undefined ? Math.min(newVal, max as number) : newVal);
    };
    return (
        <Row>
            <Span>{ name }:</Span>
            { type ==='number' && <SmallButton onClick={decrease}>-</SmallButton> }
            <Input name={ name } type={ type } onChange={ onChange } step={ step } value={ value } min={ min } max={ max } { ...rest } />
            { type === 'number' && <SmallButton onClick={increase}>+</SmallButton> }
        </Row>
    );
};

export default BoardgameInput;
