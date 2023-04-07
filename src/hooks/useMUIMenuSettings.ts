import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export const useMUIMenuItemSettings = () => {
	const { theme } = useContext(ThemeContext)
	
	const menuItemSettings = {
		color: theme === 'light' ? 'var(--dark)' : 'var(--light)'
	}

	return [menuItemSettings]
}