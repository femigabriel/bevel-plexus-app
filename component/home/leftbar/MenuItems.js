import React from "react";
import { FaHome, FaHourglassEnd, FaRegAddressBook } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import Link from "next/link";


function menuItems() {
  const items = [
    { id: 0, name: "Dashboard", icon: <FaHome />, linkName: "/" },
    {
      id: 1,
      name: "Make payment",
      icon: <BsCreditCard />,
      linkName: "/payment",
    },
    {
      id: 2,
      name: "Transactions",
      icon: <FaHourglassEnd />,
      linkName: "/transactions",
    },
    {
      id: 3,
      name: "Recipents",
      icon: <FaRegAddressBook />,
      linkName: "/recipents",
    },
    {
      id: 4,
      name: "My Account",
      icon: <BiUser />,
      linkName: "/account",
    },
  ];
  return (
    <div className="">
      <nav className="">
        <ul className="text-xl	font-inherit">
          {items.map((list, key) => (
            <Link href={list.linkName}>
              <li className="flex p-5  cursor-pointer">
                <span className="pr-5 text-sky-500 mt-1">{list.icon}</span>
                <span className="mb-">{list.name} </span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default menuItems;
