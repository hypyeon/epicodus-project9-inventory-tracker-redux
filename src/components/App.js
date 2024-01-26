import React from 'react';
import Header from './Header';
import InventoryList from './InventoryList';
import InventoryUpdate from './InventoryUpdate';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <InventoryList />
        <div id="orderList">
          <InventoryUpdate />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;