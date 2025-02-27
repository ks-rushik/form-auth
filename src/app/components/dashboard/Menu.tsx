"use client";
import {  Table } from "@mantine/core";
import BaseButton from "../ui/BaseButton";
import MenuModal from "./MenuModal";


const menu = () => {
 

  const elements = [
    {
      Menu: 6,
      mass: 12.011,
      symbol: "C",
      name: "Carbon",
      button: <BaseButton>View</BaseButton>,
    },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.Menu}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
      <Table.Td>{element.button}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <div className="flex justify-between m-4">
        <h1 className="text-4xl">Menus</h1>
         <MenuModal/>
      </div>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Menu</Table.Th>
            <Table.Th>visibility</Table.Th>
            <Table.Th>ShareMenu</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
};

export default menu;
