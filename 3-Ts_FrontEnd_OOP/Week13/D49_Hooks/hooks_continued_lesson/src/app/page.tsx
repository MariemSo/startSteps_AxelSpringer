"use client";
import { createContext, useContext, useState } from "react";
const UserContext = createContext();
export default function Home() {
  const [user, setUser] = useState("Miou");

  return (
    <UserContext.Provider value={user}>
      <Component1 />
    </UserContext.Provider>
  );
}
function Component1() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Hello {user}</h1>
      <Component2 />
    </>
  );
}
function Component2() {
  return (
    <>
      <h1>Component2</h1>
      <Component3 />
    </>
  );
}
function Component3() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component3</h1>
      <h2>Hello{user}</h2>
    </>
  );
}
