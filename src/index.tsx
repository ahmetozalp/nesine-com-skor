import React from 'react';
import { createRoot } from 'react-dom/client';

import Provider from './provider';
import Application from './routes/index';

import './styles/styles.css';
import Basket from './components/ui/Basket';

console.log('[NESINE] : Renderer execution started');

// Render application in DOM
createRoot(document.getElementById('app')).render(
    <Provider>
        <Application />
    </Provider>,
);
