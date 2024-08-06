import Image from "next/image";
import LangWrapper from "../../context/LangWrapper";
import Counter from "../../components/Counter";
import CounterReducer from "../../components/CounterReducer";
import InputWithFocus from "../../components/InputWithFocus";

export default function Home() {
  return (
    <main>
      <Counter />
      <CounterReducer />
      <InputWithFocus />
    </main>
  );
}
