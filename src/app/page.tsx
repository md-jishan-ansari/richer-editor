import SmallTiptapEditor from "@/components/SmallTiptapEditor";
import { ThemeToggle } from "@/components/tiptap-templates/simple/theme-toggle";
import TiptapEditor from "@/components/TiptapEditor";

export default function Home() {
  return (
    <div>
    <ThemeToggle />
    <TiptapEditor />
    <SmallTiptapEditor />
  </div>
  );
}
