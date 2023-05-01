import React, {useState, useEffect} from 'react'


function Menus() {
  const [menus, setMenus] = React.useState([]);
  const [selectedMenu, setSelectedMenu] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:4300/menus")
      .then((res) => res.json())
      .then((menus) => setMenus(menus));
  }, []);

  function renderSingleMenu(menuname) {
    const menu = menus.find((mn) => mn.title === menuname);
    setSelectedMenu(menu);
  }

  return (
    <>
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
          <p>{selectedMenu.price}</p>
          <p>
            {selectedMenu.order_capacity - selectedMenu.orders_received} orders
            left
          </p>
          <button id="place-order">Place Order</button>
        </div>
      )}
    </>
  );
}



// function Menus() {
//   const [menus, setMenus] = React.useState([]);

//   React.useEffect(() => {
//     fetch("http://localhost:4300/menus")
//       .then((res) => res.json())
//       .then((menus) => setMenus(menus));
//   }, []);

//   return (
//     <ul id="menus">
//       {menus.map((menu) => (
//         <li key={menu.title}>{menu.title}</li>
//       ))}
//     </ul>
//   );


// }

    


export default Menus