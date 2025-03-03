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

// import { Modal } from "@mantine/core";
// import FormField from "../forms/FormField";
// import BaseSelect from "../ui/BaseSelect";
// import BaseInput from "../ui/BaseInput";
// import BaseButton from "../ui/BaseButton";
// import { useDisclosure } from "@mantine/hooks";
// import { useForm, Controller } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// // Define Props for MenuModal
// type MenuModalProps = {
//   onAddMenu: (data: { text: string; currency: string; availability: string }) => void;
// };

// const ModalSchema = z.object({
//   text: z.string().min(1, "Menu Name is required"),
//   currency: z.string().min(1, "Currency is required"),
//   availability: z.string().min(1, "Availability is required"),
// });

// type IModalData = z.infer<typeof ModalSchema>;

// const MenuModal: React.FC<MenuModalProps> = ({ onAddMenu }) => {
//   const [opened, { open, close }] = useDisclosure(false);

//   const {
//     register,
//     handleSubmit,
//     control,
//     reset, // Reset form after submission
//     formState: { errors },
//   } = useForm<IModalData>({
//     resolver: zodResolver(ModalSchema),
//   });

//   const onSubmit = (data: IModalData) => {
//     onAddMenu(data); // Send data to parent component
//     reset(); // Reset form fields after submission
//     close(); // Close modal
//   };

//   return (
//     <>
//       <Modal opened={opened} onClose={close} title="Enter Menu" size="md">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Menu Name Input */}
//           <FormField label="Menu Name" required name="text">
//             <BaseInput
//               type="text"
//               placeholder="Enter Menu Name..."
//               {...register("text")}
//             />
//             {errors.text && <p className="text-red-500">{errors.text.message}</p>}
//           </FormField>

//           {/* Currency Select */}
//           <FormField label="Enter Currency" required name="currency">
//             <Controller
//               name="currency"
//               control={control}
//               render={({ field }) => (
//                 <BaseSelect {...field} data={["$", "₹"]} />
//               )}
//             />
//             {errors.currency && <p className="text-red-500">{errors.currency.message}</p>}
//           </FormField>

//           {/* Availability Select */}
//           <FormField label="Availability" required name="availability">
//             <Controller
//               name="availability"
//               control={control}
//               render={({ field }) => (
//                 <BaseSelect {...field} data={["Active", "Inactive"]} defaultValue="Active" />
//               )}
//             />
//             {errors.availability && <p className="text-red-500">{errors.availability.message}</p>}
//           </FormField>

//           <BaseButton type="submit">Submit</BaseButton>
//         </form>
//       </Modal>

//       <BaseButton intent="primary" onClick={open}>
//         Add New Menu
//       </BaseButton>
//     </>
//   );
// };

// export default MenuModal;







import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export type Menu = {
  id: string;
  menu_name: string;
  restaurant_id: string;
  currency: string;
  status: boolean;
};

// **Fetch all menus for a specific restaurant**
export const fetchMenus = async (restaurant_id: string) => {
  const { data, error } = await supabase
    .from("menus")
    .select("*")
    .eq("restaurant_id", restaurant_id);

  if (error) {
    console.error("Error fetching menus:", error);
    return [];
  }

  return data;
};

// **Add a new menu item**
export const addMenu = async (menu: {
  menu_name: string;
  restaurant_id: string;
  currency: string;
  status: boolean;
}) => {
  const { data, error } = await supabase.from("menus").insert([menu]);

  if (error) {
    console.error("Error adding menu:", error);
    return null;
  }

  return data;
};

export const deleteMenu = async (id: string) => {
  const { error } = await supabase.from("menus").delete().eq("id", id);

  if (error) {
    console.error("Error deleting menu:", error);
    return false;
  }

  return true;
};

export const updateMenu = async (id: string, updates: Partial<Menu>) => {
  const { data, error } = await supabase
    .from("menus")
    .update(updates)
    .eq("id", id);

  if (error) {
    console.error("Error updating menu:", error);
    return null;
  }

  return data;
};
