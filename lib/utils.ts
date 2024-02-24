import { Camera, Color } from "@/types/canvas";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const COLORS =[
  "#FF0000", // Red
  "#00FF00", // Lime
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FF00FF", // Magenta
  "#00FFFF", // Cyan
  "#FF4500", // OrangeRed
  "#FFD700", // Gold
  "#800080", // Purple
  "#008000", // Green
  "#800000", // Maroon
  "#008080", // Teal
  "#FFA500", // Orange
  "#4B0082", // Indigo
  "#FF1493", // DeepPink
  "#00FF7F", // SpringGreen
  "#8A2BE2", // BlueViolet
  "#D2691E", // Chocolate
  "#7FFF00", // Chartreuse
  "#BA55D3", // MediumOrchid
  "#8B4513", // SaddleBrown
  "#9932CC", // DarkOrchid
  "#2E8B57", // SeaGreen
  "#FF6347", // Tomato
  "#20B2AA", // LightSeaGreen
  "#1E90FF", // DodgerBlue
  "#7FFFD4", // Aquamarine
  "#FF7F50", // Coral
  "#B0E0E6", // PowderBlue
  "#800000"  // Maroon
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}
 

export function pointerEventToCanvasPoint(e:React.PointerEvent,camera:Camera){
  return {
    x:Math.round(e.clientX)-camera.x,
    y:Math.round(e.clientY)- camera.y
  }
}


export function colorToCss(color: Color) {
  return `#${color.r.toString(16).padStart(2, "0")}${color.g.toString(16).padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`;
}