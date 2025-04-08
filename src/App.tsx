import { type FunctionComponent,useState} from 'react';

import styled from 'styled-components';

import InitativeTracker from './Components/Templates/InitativeTracker';

import Boardgames from './Boardgames';

const Main = styled.main`
box-sizing: border-box;
font-size: 20px;

display: flex;
flex-flow: row wrap;
justify-content: center;
height: 100%;
min-height: 100vh;
width: 100vw;
padding-left: 1rem;
padding-right: 1rem;

color: ${({ theme }) => theme.primary.complementaryColor};
`;

const Nav = styled.nav`
flex: 1 0 100%;
display: flex;
flex-flow: row wrap;
justify-content: center;
`;

const NavButton = styled.button`
background-color: transparent;
border: 2px solid ${({ theme }) => theme.primary.complementaryColor};
border-radius: 5px;
color: ${({ theme }) => theme.primary.complementaryColor};
font-size: 20px;
font-weight: 600;
padding: 0.5rem 1rem;
margin: 0.5rem;
`;

const App: FunctionComponent = () => {
    const [view, setView] = useState('home');

    return (
        <Main>
            <Nav>
                <NavButton onClick={() => setView('home')}>Home</NavButton>
                <NavButton onClick={() => setView('boardgames')}>Boardgames</NavButton>
                <NavButton onClick={() => setView('initative')}>Initative</NavButton>
            </Nav>
            {view === 'boardgames' && <Boardgames /> }
            {view === 'initative' && <InitativeTracker />}
        </Main>
    );
};

export default App;
