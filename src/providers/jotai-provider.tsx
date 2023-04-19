"use client";

import { Provider } from "jotai";
import { type FC } from "react";

interface JotaiProviderProps {
  children: React.ReactNode;
}

const JotaiProvider: FC<JotaiProviderProps> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default JotaiProvider;
