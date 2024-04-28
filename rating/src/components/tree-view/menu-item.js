import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";
export default function MenuItem({ item }) {
  const [displayChild, setdisplayChild] = useState({});

  function handleToggleChildren(currentLabel) {
    setdisplayChild({
      ...displayChild,
      [currentLabel]: !displayChild[currentLabel],
    });
  }
  console.log(displayChild);
  return (
    <>
      <li>
        <div className="menu-item">
          <p>{item.label}</p>

          {item.children && item.children.length ? (
            <span onClick={() => handleToggleChildren(item.label)}>
              {displayChild[item.label] ? (
                <FaMinus size={40} color="#fff" />
              ) : (
                <FaPlus size={40} color="#fff" />
              )}
            </span>
          ) : null}
        </div>

        {item.children && item.children && displayChild[item.label] ? (
          <MenuList list={item.children} />
        ) : null}
      </li>
    </>
  );
}
