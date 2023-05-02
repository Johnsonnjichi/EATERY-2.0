import React, {useState, useEffect} from 'react'
import CreateMenuItemForm from './CreateForm';


function Menus() {
  const [menus, setMenus] = React.useState([]);
  const [selectedMenu, setSelectedMenu] = React.useState(null);


  useEffect(() => {
    fetch("http://localhost:4300/menus")
      .then((res) => res.json())
      .then((menus) => setMenus(menus));
  }, []);

  function renderSingleMenu(menuname) {
    const menu = menus.find((mn) => mn.title === menuname);
    setSelectedMenu(menu);
  }

  const addMenu = (newmenu) => {
    setMenus([...menus, newmenu])
  }

  // function handleCreateMenuItem(data) {
  //   fetch("http://localhost:4300/menus", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((menu) => { setMenus((prevMenus) => [...prevMenus, menu]);
  //       setSelectedMenu(menu);
  //     });
  // }

  return (
    <>
      <CreateMenuItemForm addMenu={addMenu} />
      <ul id="menus">
        {menus.map((menu) => (
          <li key={menu.title} onClick={() => renderSingleMenu(menu.title)}>
            {menu.title}
          </li>
        ))}
      </ul>
      {selectedMenu && (
        <div>
          <img src={selectedMenu.image} alt={selectedMenu.title} />
          <h2>{selectedMenu.title}</h2>
          <p>Price:{selectedMenu.price}</p>
          <p>
            Orders remaining:
            {selectedMenu.order_capacity - selectedMenu.orders_received}
          </p>
          <button id="place-order">Place Order</button>
        </div>
      )}
    </>
  );
}

export default Menus