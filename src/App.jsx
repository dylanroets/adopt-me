import { createRoot} from 'react-dom';
import Pet from './Pet';

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Lola" animal="Dog" breed="Goldador" />
    <Pet name="Skittzens" animal="Cat" breed="Mix-Breed" />
    <Pet name="Roxy" animal="Dog" breed="Rat-Dog" />
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
