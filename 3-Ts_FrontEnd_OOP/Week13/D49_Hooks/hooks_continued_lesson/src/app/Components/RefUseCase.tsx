import React, { useEffect, useRef } from "react";

const RefUseCase = () => {
  const inputRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type Something" />
    </div>
  );
};

export default RefUseCase;
