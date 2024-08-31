import React from "react";
import Link from "next/link";
interface user{
    id: number,
    name: string,
    email: string
}
const Users = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

  return (
    <div className="flex gap-6 flex-wrap p-6">
      {data.map((user:user) => {
        return (
          <div key={user.id} className="border p-6 w-[100%]">
            <h2>User id: { user.id}</h2>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <Link href={`/users/${user.id}`} className="text-red-600">Click Me</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
