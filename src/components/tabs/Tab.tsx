import { ReactElement } from "react";
import Content from "./Content";
import Label from "./Label";

export interface TabProps {
  children: [ReactElement, ReactElement];
  disabled?: boolean;
}

export default function Tab({ children }: TabProps) {
  return <>{children}</>;
}

Tab.Content = Content;
Tab.Label = Label;
