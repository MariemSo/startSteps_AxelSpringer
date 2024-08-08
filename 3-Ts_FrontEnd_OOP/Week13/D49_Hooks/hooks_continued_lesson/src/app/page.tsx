"use client";
import { createContext, useContext, useState } from "react";
import Counter from "./Components/Counter";
import RefUseCase from "./Components/RefUseCase";
import UseReducer from "./Components/UseReducer";
const UserContext = createContext();
export default function Home() {
  const [user, setUser] = useState("Miou");

  return (
    <UserContext.Provider value={user}>
      <Component1 />
      --------------------
      <br />
      <Counter />
      --------------
      <br />
      <RefUseCase />
      <br />
      -----------------
      <UseReducer />
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
