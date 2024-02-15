import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MyContainer } from './components/MyContainer.ts';
import { General } from './loyout/layoutPage/General.tsx';
import { Pages } from './loyout/pages/Pages.tsx';

function App() {
  return (
    <BrowserRouter>
      <MyContainer>
        <General>
          <Pages />
        </General>
      </MyContainer>
    </BrowserRouter>
  );
}

export default App;
