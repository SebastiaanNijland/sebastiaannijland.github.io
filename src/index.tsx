import React from 'react';

import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';

const theme = {
    primary: {
        color: '#6494ff',
        complementaryColor: '#ffffff',
        tertiaryColor: '#471588'
    }
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<React.StrictMode>
    <ThemeProvider theme={ theme }>
        <App />
    </ThemeProvider>
</React.StrictMode>);
