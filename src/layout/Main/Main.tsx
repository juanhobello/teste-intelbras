import { ReactNode } from "react";
import "./styles.css";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return <main className="main-container">{children}</main>;
}
