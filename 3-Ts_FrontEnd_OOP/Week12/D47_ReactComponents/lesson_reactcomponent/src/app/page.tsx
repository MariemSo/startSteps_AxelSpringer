"use client";
import React, { Component } from "react";
type hello = {
  name: string;
  age: number;
  run?: () => void;
};
interface GreetingsProps {
  name: string;
}
class HelloClass extends Component<GreetingsProps> {
  constructor(props: GreetingsProps) {
    super(props);
  }
  render() {
    const { name } = this.props;
    return <p>Hello ,{name},from class Component </p>;
  }
}

const HelloFunction = (props: GreetingsProps) => {
  return <p>Hello ,{props.name},from functional Component </p>;
};

function Hello({ name, age, run }: hello /* :{ age: number; name: string }*/) {
  if (run) {
    console.log(name);
    run();
  }
  return (
    <>
      <p>
        Hello {name} {age}
      </p>
    </>
  );
}
export default function Home() {
  console.log("Home component rendered");
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h1>Hello World</h1>
      <br />
      <Hello name="John" age={20} run={() => console.log("helloWorld")} />
      <br />
      <Hello name="Meik" age={30} />
      <br />
      <HelloClass name="Miou" /> <br />
      <HelloFunction name="Regi" />
    </main>
  );
}
