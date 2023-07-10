import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const ColorModeToggler = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <div className="flex gap-3 justify-center">
        <SunIcon
          className="text-white w-7 h-7 cursor-pointer"
          onClick={() => setTheme("light")}
          aria-label="Switch to light mode"
        />
      </div>
    );
  } else {
    return (
      <div className="flex gap-3 justify-center">
        <MoonIcon
          className="text-gray-800 w-7 h-7 cursor-pointer"
          onClick={() => setTheme("dark")}
          aria-label="Switch to dark mode"
        />
      </div>
    );
  }
};

export default ColorModeToggler;
