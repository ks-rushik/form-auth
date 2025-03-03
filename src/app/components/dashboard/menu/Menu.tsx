'use client'
import { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import MenuModal from "./MenuModal";
import BaseButton from "../../ui/BaseButton";
import { IModalData } from "./Types";
import { menu } from "@/app/(dashboard)/menu/insertaction";
import { Database } from "../../../../../database.types";
import deleteaction from "@/app/(dashboard)/menu/deleteaction";
import useUserMenu from "./useUserMenu";

export type IMenudata = Database["public"]["Tables"]["menus"]["Row"];

const Menu = () => {
  const [menuItems, setMenuItems] = useState<IMenudata[]>([]);
  const data = useUserMenu(); 

  useEffect(() => {
    if (data) {
      setMenuItems(data); 
    }
  }, [data]);

  const handleAddMenu = async (newItem: IModalData) => {
    const addedItem = await menu(newItem);
    if (addedItem) setMenuItems((prev) => [...prev, addedItem]);
  };

  const handleDeleteMenu = async (
    id: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    await deleteaction(id);
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="flex justify-between m-4">
        <h1 className="text-4xl">Menus</h1>
        <MenuModal onAddMenu={handleAddMenu} />
      </div>

      {menuItems.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">
          No menus available. Click "Add New Menu" to create one.
        </p>
      ) : (
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Visibility</Table.Th>
              <Table.Th>Edit</Table.Th>
              <Table.Th>Delete</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {menuItems.map((item) => (
              <Table.Tr key={item.id}>
                <Table.Td>{item.menu_name} ({item.currency})</Table.Td>
                <Table.Td>{item.status}</Table.Td>
                <Table.Td>
                  <BaseButton intent="purple">Edit</BaseButton>
                </Table.Td>
                <Table.Td>
                  <BaseButton
                    intent="default"
                    onClick={(e) => handleDeleteMenu(item.id, e)}
                  >
                    Delete
                  </BaseButton>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      )}
    </>
  );
};

export default Menu;
