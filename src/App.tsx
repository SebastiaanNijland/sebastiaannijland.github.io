import { type FunctionComponent,useState} from 'react';

import styled from 'styled-components';

import Col from './Components/Styled/Col';
import Row from './Components/Styled/Row';
import Select from './Components/Styled/Select';

import BoardGame from './Components/Templates/BoardGame';

import { boardgames } from './Data/boardgames';

const Article = styled.article`
flex: 1 0 100%;
margin-left: auto;
padding-left: 1rem;
padding-right: 1rem;
`;

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

const App: FunctionComponent = () => {
    const [boardgame, setBoardgame] = useState(boardgames[0]);

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newBoardgame = boardgames.find(b => b.id === e.target.value);
        if (newBoardgame) {
            setBoardgame(newBoardgame);
        }
    };

    return (
        <Main>
            <Article>
                <Row>
                    <Col>
                        <p>Calculate your score for boardgames! Pick one from the dropdown and fill out all the fields.</p>
                    </Col>
                    <Col>
                        <Select onChange={onChange}>
                            {boardgames.map(({ id, name }) => (
                                <option key={id} value={id}>{name}</option>
                            ))}
                        </Select>
                    </Col>
                    <Col>
                        <BoardGame boardgame={boardgame} />
                    </Col>
                </Row>
            </Article>
        </Main>
    );
};

export default App;
