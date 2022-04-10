import React from 'react';

function Drink2Menu({ drink3Menu, setAddLists }) {
    const onClick = (e) => {
      setAddLists((lists) => [...lists, e.target.innerText]);
    };
    return (
      <div>
        {drink3Menu.map((menu, index) => (
          <button key={index} onClick={onClick}>{menu}</button>
        ))}
      </div>
    );
  }

export default Drink2Menu;