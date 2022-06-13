import * as React from 'react';
import { Container, ThemeProvider } from 'react-bootstrap';

import { Portfolio } from './components/Portfolio';
import { Store } from './components/Store/';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <ThemeProvider breakpoints={['lg', 'md']}>
        <Container>
          <Portfolio />
          <Store />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
