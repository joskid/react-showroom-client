import React from 'react';
import ReactDOM from 'react-dom';
import DemoPageIndex from './components/DemoPageIndex.react';
import parseComponents from './parseComponents';

let rootElement = document.getElementById('main');
let demoPageIndex = React.createElement(DemoPageIndex, { getComponents: () => parseComponents([]) });

ReactDOM.render(demoPageIndex, rootElement);
