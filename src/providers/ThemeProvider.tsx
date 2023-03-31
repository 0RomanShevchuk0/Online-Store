import React, { createContext, Dispatch, FC, SetStateAction, useState } from 'react'

export const ThemeContext = createContext<ThemeStateType>({theme: 'light'} as ThemeStateType)

type ThemeStateType = {
	theme: 'light' | 'dark',
	setTheme: Dispatch<SetStateAction<'light' | 'dark'>>
}

const ThemeProvider: FC<{children?: JSX.Element}> = ({children}) => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light')
	
	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
