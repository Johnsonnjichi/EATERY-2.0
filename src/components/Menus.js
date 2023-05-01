import React, {useState, useEffect} from 'react'




function Menus() {
  const [menus, setMenus] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:4300/menus")
      .then((res) => res.json())
      .then((menus) => setMenus(menus));
  }, []);

  return (
    <ul id="menus">
      {menus.map((menu) => (
        <li key={menu.title}>{menu.title}</li>
      ))}
    </ul>
  );


}

    


export default Menus