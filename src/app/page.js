import Image from "next/image";
import styles from "./page.module.css";
import { ThemeToggle } from "@/components/tiptap-templates/simple/theme-toggle";
import TiptapEditor from "@/components/TiptapEditor";
import SmallTiptapEditor from "@/components/SmallTiptapEditor";

export default function Home() {
  return (
    <div>
    <ThemeToggle />
    <TiptapEditor />
    <SmallTiptapEditor />
  </div>
  );
}
