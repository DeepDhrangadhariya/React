import './App.css';
import AddData from './AddData';
import GetData from './GetData';
import { useState } from 'react';

function App() {

  const [refresh, setRefresh] = useState(false);

  const refreshData = () => {
    setRefresh(!refresh)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="column">
          <AddData refreshData={refreshData} />
        </div>
        <div className="column">
          <GetData refresh={refresh} />
        </div>
      </div>
    </div>
  );
}

export default App;
