import React, { useState } from "react";

function CreateMenuItemForm({ addMenu }) {
  const [menuItemData, setMenuItemData] = useState({
    title: "",
    image: "",
    price: 0,
    order_capacity: 0,
    orders_received: 0,
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setMenuItemData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // handleCreateMenuItem(menuItemData);
    fetch("http://localhost:4300/menus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(menuItemData),
    })
      .then((res) => res.json())
      .then((menu) => {
        // setMenus((prevMenus) => [...prevMenus, menu]);
        addMenu(menu);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={menuItemData.title}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={menuItemData.image}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={menuItemData.price}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Order Capacity:
        <input
          type="number"
          name="order_capacity"
          value={menuItemData.order_capacity}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Orders Received:
        <input
          type="number"
          name="orders_received"
          value={menuItemData.orders_received}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateMenuItemForm;
