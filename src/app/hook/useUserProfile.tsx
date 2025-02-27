// import { useQuery } from '@tanstack/react-query';

// // Create a function to fetch the data
// const fetchUserProfile = async (userId) => {
//   const { data } = await supabase
//     .from("user_profile")
//     .select()
//     .eq("id", userId)
//     .single();
//   return data;
// };

// // In your component
// function UserProfile({ userId }) {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ['userProfile', userId], // Unique key for the query
//     queryFn: () => fetchUserProfile(userId), // Function to fetch data
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       {/* Use your data here */}
//       {data && (
//         <div>
//           {/* Access your user profile fields */}
//           <p>User ID: {data.id}</p>
//           {/* Add other fields as needed */}
//         </div>
//       )}
//     </div>
//   );
// }