// "use client";
// import { useState } from "react";
// import { Table } from "@mantine/core";
// import BaseButton from "../ui/BaseButton";
// import MenuModal from "./MenuModal";

// const Menu = () => {
//   // State to store menu items
//   const [menuItems, setMenuItems] = useState<
//     { id: number; name: string; currency: string; visibility: string }[]
//   >([]);

//   // Function to handle new menu submission
//   const handleAddMenu = (newItem: { text: string; currency: string; availability: string }) => {
//     const newMenuItem = {
//       id: menuItems.length + 1, // Auto-increment ID
//       name: newItem.text, // Menu name from modal
//       currency: newItem.currency, // Currency from modal
//       visibility: newItem.availability, // Availability status from modal
//     };

//     setMenuItems((prevItems) => [...prevItems, newMenuItem]); // Update state with new item
//   };

//   // Function to delete a menu item
//   const handleDeleteMenu = (id: number) => {
//     setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Remove item by ID
//   };

//   return (
//     <>
//       <div className="flex justify-between m-4">
//         <h1 className="text-4xl">Menus</h1>
//         <MenuModal onAddMenu={handleAddMenu} />
//       </div>

//       {/* Show message if no menu items exist */}
//       {menuItems.length === 0 ? (
//         <p className="text-center text-gray-500 mt-4">No menus available. Click "Add New Menu" to create one.</p>
//       ) : (
//         <Table striped highlightOnHover>
//           <Table.Thead>
//             <Table.Tr>
//               <Table.Th>#</Table.Th>
//               <Table.Th>Name</Table.Th>
//               <Table.Th>Currency</Table.Th>
//               <Table.Th>Visibility</Table.Th>
//               <Table.Th>Actions</Table.Th>
//             </Table.Tr>
//           </Table.Thead>
//           <Table.Tbody>
//             {menuItems.map((item) => (
//               <Table.Tr key={item.id}>
//                 <Table.Td>{item.id}</Table.Td>
//                 <Table.Td>{item.name}</Table.Td>
//                 <Table.Td>{item.currency}</Table.Td>
//                 <Table.Td>{item.visibility}</Table.Td>
//                 <Table.Td>
//                   <BaseButton intent="danger" onClick={() => handleDeleteMenu(item.id)}>
//                     Delete
//                   </BaseButton>
//                 </Table.Td>
//               </Table.Tr>
//             ))}
//           </Table.Tbody>
//         </Table>
//       )}
//     </>
//   );
// };

// export default Menu;

