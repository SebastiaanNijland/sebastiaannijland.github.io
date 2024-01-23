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
    onChangeHandler: (name: string, value: number) => void;
}

const BoardgameInput: FunctionComponent<BoardGameProps> = ({ name, onChangeHandler, step = 1, value = 0, ...rest }) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeHandler(name, parseInt(e.target.value, 10));
    };
    const decrease = () => {
        onChangeHandler(name, parseInt(value as string, 10) - parseInt(step as string, 10));
    };
    const increase = () => {
        onChangeHandler(name, parseInt(value as string, 10) + parseInt(step as string, 10));
    };
    return (
        <Row>
            <Span>{name}:</Span>
            <SmallButton onClick={decrease}>-</SmallButton>
            <Input name={ name } type="number" onChange={ onChange } step={ step } value={ value } { ...rest } />
            <SmallButton onClick={increase}>+</SmallButton>
        </Row>
    );
};

export default BoardgameInput;
