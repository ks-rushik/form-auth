"use client";
import { Table } from "@mantine/core";
import MenuModal from "./MenuModal";
import { FC, useState } from "react";
import {  IMenuDefaulData } from "./Types";
import BaseButton from "../../ui/BaseButton";
import deleteaction from "@/app/(dashboard)/menu/deleteaction";
import { menu } from "@/app/(dashboard)/menu/insertaction";
import { Database } from "../../../../../database.types";

type IMenu = Database['public']['Tables']['menus']['Row'][]

type IMenuProps = {
  defaultData?:  IMenu| null;
};

const Menu: FC<IMenuProps> = ({ defaultData }) => {
  const [menuItems, setMenuItems] = useState<IMenu[]>(defaultData);
  console.log(defaultData);

  const handleAddMenu = async(newItem: IMenuDefaulData) => {
   const data  = await menu(newItem) 
   if(!data) return;
    const newMenuItem = {
      id:data.id,
      menu_name: data.menu_name,
      currency: newItem.currency,
      status: newItem.status,
    };
    setMenuItems((prevItems) => [...prevItems, newMenuItem]);
  };

  const handleDelete = (id: number) => {
    console.log(id);
    
    const prevItems = menuItems
    setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
    deleteaction(id)

  };

  const combinedMenuItems = [
    ...defaultData.map((item) => ({
      id: item.id,
      menu: item.menu_name,
      currency: item.currency,
      availability: item.status,
    })),
    ...menuItems,
  ];
  console.log(combinedMenuItems);

  return (
    <>
      <div className="flex justify-between m-4">
        <h1 className="text-4xl">Menus</h1>
        <MenuModal onAddMenu={handleAddMenu} />
      </div>
      <Table>
        <Table.Thead>
          <Table.Tr classNames={{ tr: "text-2xl" }}>
            <Table.Th>Menu</Table.Th>
            <Table.Th>Currency</Table.Th>
            <Table.Th>Availability</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {combinedMenuItems.map((item) => (
            <Table.Tr key={item.id} classNames={{ tr: "text-xl" }}>
              <Table.Td>{item.menu}</Table.Td>
              <Table.Td>{item.currency}</Table.Td>
              <Table.Td>{item.availability}</Table.Td>
              <Table.Td>
                <BaseButton
                  intent={"danger"}
                  onClick={() => handleDelete(item.id!)}
                >
                  Delete
                </BaseButton>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
};

export default Menu;
