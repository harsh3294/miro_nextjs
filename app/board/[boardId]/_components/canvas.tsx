"use client";

import { Info } from "./info";
import { Participants } from "./participants";
import { SelectionTools } from "./selection-tools";
import { Toolbar } from "./toolbar";
import { useSelf } from "@/liveblocks.config";
interface CanvasPProps {
  boardId: string;
}
export const Canvas = ({ boardId }: CanvasPProps) => {
  const info = useSelf((me) => me.info);
  console.log({ info });
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar />
      {/* <SelectionTools /> */}
    </main>
  );
};
