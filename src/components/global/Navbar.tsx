import ColorModeToggler from "./ColorModeToggler";
import Link from "next/link";
import {
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <nav className="bg-[#fff0dd] dark:bg-[#26235c] p-4">
      <div className="mx-auto max-w-sm md:max-w-4xl lg:max-w-5xl ">
        <div className="flex justify-between md:justify-around">
          <div className="flex items-center gap-8">
            <Link href={`/`}>
              <header className="text-xl md:text-2xl font-bold">
                💻Engineering Life
              </header>
            </Link>
          </div>
          <div className="flex items-center ">
            <ColorModeToggler />
            <div className=" md:hidden ml-6">
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  color={currentTheme === "dark" ? "white" : "black"}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                  borderColor={
                    currentTheme === "dark" ? "white" : "blackAlpha.700"
                  }
                />
                <MenuList
                  bgColor={currentTheme === "dark" ? "gray.700" : "white"}
                >
                  <Link href="/">
                    <MenuItem>Home</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
