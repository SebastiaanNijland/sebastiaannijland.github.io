import { FC, useEffect, useState } from 'react';

import { World } from '../World/World';

const InitativeTracker: FC = () => {
    const [inputs] = useState([{
        name: 'S E V E N',
        initiative: 15,
        type: 'pc'
    }, {
        name: 'K r a t o s',
        initiative: 10,
        type: 'pc'
    }, {
        name: 'F e n r i s',
        initiative: 20,
        type: 'pc'
    }, {
        name: 'N P C',
        initiative: 5,
        type: 'npc'
    }]);

    useEffect(() => {
        const container = document.getElementById('scene-container');
        if (!container) return;
        const world = new World(container);
        world.render();
    }, []);
    
    return <canvas id="scene-container"></canvas>;
};

export default InitativeTracker;
