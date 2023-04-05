import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export const useMUIIconSettings = () => {
	const { theme } = useContext(ThemeContext);
	
	const settings = {
		fontSize: 28,
		color: theme === 'light' ? 'var(--dark)' : 'var(--light)'
	}

	return [settings]
}