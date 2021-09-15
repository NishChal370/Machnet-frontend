import './App.css';
import DataFetching from './components/DataFetching/dataFetching';
import MainFrame from './components/mainFrame';

function App() {
  const [loading]= DataFetching();
  console.log("loading from app.js => ", loading);

  return (
    <div className="App">
      <h1>Product Listing App</h1>
      <MainFrame />
    </div>
  );
}

export default App;
