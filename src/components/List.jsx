import React, { useState } from "react";
import itemsData from "../assets/data.json";

export default function List() {
export default function List() {
  const [itemsList, setItemsList] = useState(itemsData);
  return (
    <div>
        <h2>Item List</h2>
        {itemsList.map((item) => {
            return (
                <ProductCard
                key={item.id}
                item= />
            );
        })}

    </div>