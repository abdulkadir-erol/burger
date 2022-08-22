import { useState } from "react";
import ItemList from "./components/itemList";
import Hamburger from "./components/hamburger";
import { mockData } from "./mock";

function App() {
  const [hamburger, setHamburger] = useState([]);
  var [total, setTotal] = useState(0);
  const addHamburgerItem = (item) => {
    setHamburger([...hamburger, item]);
    total += item.price;
    setTotal(total);
  };
  const deleteHamburgerItem = (item) => {
    const deletedIndex = hamburger.findIndex((elem) => elem.id === item.id);
    if (deletedIndex > -1) {
      hamburger.splice(deletedIndex, 1);
      total -= item.price;
    }
    setHamburger((hamburger) => [...hamburger]);
    setTotal(total);
  };
  return (
    <div className="App">
      <h1>Burger Build</h1>
      <ItemList
        mockData={mockData}
        addItem={addHamburgerItem}
        deleteItem={deleteHamburgerItem}
        hamburger={hamburger}
        total={total}
      />
      <Hamburger hamburger={hamburger} />
    </div>
  );
}

export default App;
