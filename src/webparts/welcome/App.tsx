import * as React from "react";
import { Welcome } from "./components";
import { IProps } from "./components/props";

export function App(props: IProps): React.ReactElement {
  return <Welcome {...props} />;
}
