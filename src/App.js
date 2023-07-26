import "./styles/App.css";
import EnhancedTable from "./components/ProductDetails";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import * as React from 'react';

function App() {
  const [data, setData] = React.useState(false);
  return (
    <Router>
    <div className="App">
      {!data && <header className="App-header">
        <p>
          Welcome to Inventory Management System
        </p>
        <Link to={'/inventory' } className="App-link" onClick={()=> setData(true)}>Click here to view, update and delete the products from inventory</Link>
      </header>}
      {data && <EnhancedTable />}
    </div>
    </Router>
  );
}

export default App;