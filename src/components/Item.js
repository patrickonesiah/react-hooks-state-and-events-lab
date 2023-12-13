import React, {useState} from "react";

function Item({ name, category }) {

  const [isAdd, setIsAdd] = useState(false)


  function handleAdd(){
    setIsAdd(isAdd => !isAdd)
  }
  const buttonClass = isAdd ? "in-cart":"add"
  const text = isAdd ? "Remove From Cart":"Add to Cart"
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAdd}>{text}</button>
    </li>
  );
}

export default Item;
