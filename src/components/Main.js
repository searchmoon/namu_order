import React from "react";
import Drink1 from "./Drink1";
import Drink2 from "./Drink2";
import OrderListAndRequest from "./OrderListAndRequest";
import { Routes, Route } from "react-router-dom";
import Order from "./Order";
import { useState } from "react";

function Main() {
  let [addLists, setAddLists] = useState([]);

  function deleteBtn(index) {
    const updatedTodos = addLists.filter((e, idx) => idx !== index);
    setAddLists(updatedTodos);
  }
  return (
    <div>
      <h1>MENU</h1>
      <Drink1 setAddLists={setAddLists} />
      <Drink2 setAddLists={setAddLists} />
      <OrderListAndRequest addLists={addLists} deleteBtn={deleteBtn} />
      <Routes>
        <Route path="/order" element={<Order />}/>
      </Routes>
    </div>
  );
}
export default Main;
