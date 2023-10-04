import React from "react";
import Link from "next/link";
interface User {
  id: number;
  name: string;
  // username:string,
  // email:string,
  // address:
}
const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",{"cache":'no-cache'},
); //{"cache":'no-cache'}  //每10秒更新一次
  const users: User[] = await res.json();
  const date = () => {
    return new Date().toLocaleTimeString();
  };
  return (
    <div>
      <h1>UserPage</h1>
      <p>{date()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/user/${user.id}`}>
              {user.id}
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
