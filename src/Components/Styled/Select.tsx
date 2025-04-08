import styled from 'styled-components';

export default styled.select`
    padding: .5rem;
    margin: 0;
    border-radius: 5px;
    border: 2px solid #ffffff;
    color: #eeeeee;
    background: #555555;
    line-height: 0;
    &:hover, &:focus {
        border-color: hsl(221, 100%, 70%);
    }
`;
