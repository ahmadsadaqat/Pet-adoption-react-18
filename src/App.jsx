import { createRoot } from "react-dom";
import Pet from "./Pet";


const App = () => {
  <div>
    <h1>Adopt me!</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Pepper" animal="bird" breed="Cockatiel" />
    <Pet name="Doink" animal="cat" breed="Mixed" />
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />); 
