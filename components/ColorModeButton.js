/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Button, useColorMode } from "theme-ui";

export default function ColorModeButton() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Button
      variant="primary"
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
    >
      Toggle {colorMode === "default" ? "Dark" : "Light"}
    </Button>
  );
}
