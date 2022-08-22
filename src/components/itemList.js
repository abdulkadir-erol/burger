import React from "react";

const ItemList = ({ mockData, addItem, deleteItem, hamburger, total }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Total Item</td>
          <td>Delete Item</td>
          <td>Add Item</td>
        </tr>
      </thead>
      <tbody>
        {mockData.map((item, idx) => (
          <tr key={idx}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              {hamburger.filter((element) => element.id === item.id).length}
            </td>
            <td>
              <button onClick={() => deleteItem(item)}>Delete</button>
            </td>
            <td>
              <button onClick={() => addItem(item)}> Add </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tbody>
        <tr>
          <td> Total Price: {total}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ItemList;
