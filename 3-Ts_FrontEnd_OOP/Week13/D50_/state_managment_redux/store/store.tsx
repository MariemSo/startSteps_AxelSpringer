"use client";

import * as React from "react";
import { Store } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store: Store<ArticleState, ArticleAction> = configureStore({ reducer });

const StoreWrapper = ({ children }: React.PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreWrapper;
