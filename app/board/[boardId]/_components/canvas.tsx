"use client";

import { Info } from "./info";
import { Participants } from "./participants";
import { SelectionTools } from "./selection-tools";
import { Toolbar } from "./toolbar";

interface CanvasPProps {
  boardId: string;
}
export const Canvas = ({ boardId }: CanvasPProps) => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar />
      <SelectionTools />
    </main>
  );
};
