import React from "react";
import { RecoilRoot } from "recoil";
import { initialize } from "./modules";
import { Todos } from "./Todos";

export default function App() {
  return (
    <RecoilRoot initializeState={initialize}>
      <Todos />
    </RecoilRoot>
  );
}
