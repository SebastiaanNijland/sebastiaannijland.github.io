import styled from 'styled-components';

export default styled.button`
    padding: 1.25rem;
    border-radius: 5px;
    border: 2px solid #ffffff;
    color: #eeeeee;
    background: #555555;
    line-height: 0;
    &:hover, &:focus {
        border-color: hsl(221, 100%, 70%);
    }
    + button {
        margin-left: 5px;
    }
`;