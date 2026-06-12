"use client";

import { ColorSwatchPicker } from "../components/ui/heroui-color-swatch-picker";
import { THEMES, useTheme } from "../context/ThemeContext";

const themeList = Object.values(THEMES);

export function ColorChanger() {
  const { themeId, setThemeId } = useTheme();
  const selected = THEMES[themeId].swatch;

  return (
    <ColorSwatchPicker
      size="sm"
      variant="square"
      value={selected}
      onChange={(color) => {
        const hex = color.toString("hex");
        const match = themeList.find((t) => t.swatch === hex);
        if (match) setThemeId(match.id);
      }}
      className="justify-end gap-2.5"
    >
      {themeList.map((theme) => (
        <ColorSwatchPicker.Item key={theme.id} color={theme.swatch}>
          <ColorSwatchPicker.Swatch />
          <ColorSwatchPicker.Indicator />
        </ColorSwatchPicker.Item>
      ))}
    </ColorSwatchPicker>
  );
}
