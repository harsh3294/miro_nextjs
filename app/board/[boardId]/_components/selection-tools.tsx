"use client";

import { memo, useEffect, useState } from "react";
import { Hint } from "@/components/hint";
import { Camera, Color } from "@/types/canvas";
import { useMutation, useSelf, useStorage } from "@/liveblocks.config";
import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { ColorPicker } from "./color-picker";
interface SelectionToolsProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

export const SelectionTools = memo(
  ({ camera, setLastUsedColor }: SelectionToolsProps) => {
    const selection = useSelf((me) => me.presence.selection);
    const [selectionColor, setSelectionColor] = useState<Color>({
      a: 1,
      b: 0,
      g: 0,
      r: 0,
    });
    const [colorPickerVisible, setColorPickerVisible] = useState(false);

    const defaultColor: Color = { r: 0, g: 0, b: 0, a: 1 };
    const storage = useStorage((root) => root.layers);
    useEffect(() => {
      async function getFill() {
        const colors = await Promise.all(
          selection.map((id) => storage.get(id)?.fill)
        );
        const filteredColors = colors.filter((color) => isValidColor(color));
        if (filteredColors.length > 0) {
          setSelectionColor(filteredColors[0] || defaultColor);
        }
      }

      getFill();
    }, [selection]);

    // Function to validate color format
    function isValidColor(color: any) {
      return (
        color &&
        typeof color === "object" &&
        "r" in color &&
        "g" in color &&
        "b" in color &&
        "a" in color
      );
    }

    const setFill = useMutation(
      ({ storage }, fill: Color) => {
        const liveLayers = storage.get("layers");
        setLastUsedColor(fill);
        selection.forEach((id) => {
          liveLayers.get(id)?.set("fill", fill);
        });
      },
      [selection, setLastUsedColor]
    );

    const selectionBounds = useSelectionBounds();

    useEffect(() => {
      // Toggle color picker visibility when a new selection is made
      setColorPickerVisible(false);
    }, [selection]);

    if (!selectionBounds) {
      return null;
    }

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;
    return (
      <div
        className="absolute p-3 rounded-xl bg-white shadow-sm border flex select-none"
        style={{
          transform: `translate(
          calc(${x}px - 50%),
          calc(${y - 16}px - 100%)
        )`,
        }}
      >
        <ColorPicker
          selectionColor={selectionColor}
          onChange={setFill}
          visible={colorPickerVisible}
          toggleColorPicker={() => setColorPickerVisible(!colorPickerVisible)}
        />
      </div>
    );
  }
);

SelectionTools.displayName = "SelectionTools";
