import * as React from "react";
import { Faq } from "./components";
import { IProps } from "./components/props";

export function App(props: IProps): React.ReactElement {
  return <Faq {...props} />;
}
