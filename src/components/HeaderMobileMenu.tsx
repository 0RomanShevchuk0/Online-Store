import React, { FC } from 'react'
import { Menu, MenuItem } from "@mui/material"
import { usePopupState, bindTrigger, bindMenu, } from "material-ui-popup-state/hooks"
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setIsCartOpened } from '../redux/cart-reducer'
import { removeUser } from '../redux/user-reducer'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import LogoutIcon from '@mui/icons-material/Logout'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import { HeaderPartType } from '../types/types'
import { useMUIMenuItemSettings } from '../hooks/useMUIMenuSettings'
import { Button } from './layouts/Header'
import MenuIcon from '@mui/icons-material/Menu';
import { useMUIIconSettings } from '../hooks/useMUIIconSettings'


const HeaderMobileMenu: FC<HeaderPartType> = (
	{ theme, setTheme, isAuthorized }) => {
	const dispatch = useDispatch()
  const navigate = useNavigate()

	const popupState = usePopupState({ variant: 'popover', popupId: 'Menu' })

	const [muiIconSettings] = useMUIIconSettings()
	const [muiMenuItemSettings] = useMUIMenuItemSettings()

	return (
		<>
			<Button {...bindTrigger(popupState)} mytheme={theme}>
				<MenuIcon sx={{...muiIconSettings}}/>
			</Button>

			<MyMenu {...bindMenu(popupState)} mytheme={theme} >
				{isAuthorized ? (
					<MyMenuItem 
						onClick={() => {
							dispatch(setIsCartOpened(true))
							popupState.close()
						}}
						sx={{...muiMenuItemSettings}}
					>
						Cart <ShoppingCartIcon />
					</MyMenuItem>
				) : (
					<MyMenuItem 
						onClick={() => {
							navigate("/login")
							popupState.close()
						}}
						sx={{...muiMenuItemSettings}}
					>
						Cart <ShoppingCartIcon />
					</MyMenuItem>
				)}

					<MyMenuItem
						onClick={() =>{
							theme === "light" ? setTheme("dark") : setTheme("light")
							popupState.close()
						}}
						sx={{...muiMenuItemSettings}}
					>
						Theme
						{theme === "light" ? 
							<LightModeIcon /> :
							<DarkModeIcon />
						}
					</MyMenuItem>

				{isAuthorized ? (
						<MyMenuItem 
							onClick={() => {
								dispatch(removeUser())
								popupState.close()
							}}
							sx={{...muiMenuItemSettings}}
						>
							Log out <LogoutIcon />
						</MyMenuItem>
				) : (
					<MyMenuItem 
						onClick={() => {
							navigate('/login')
							popupState.close()
						}}
						sx={{...muiMenuItemSettings}}
					>
						Log in <PersonIcon />
					</MyMenuItem>
				)}
			</MyMenu>
		</>
	)
}

export default HeaderMobileMenu

const MyMenu = styled(Menu)<{mytheme: 'light' | 'dark'}>`
	ul {
		background: ${(props) => props.mytheme === 'light' ? 'var(--light)' : 'var(--dark)'};
	}
`

const MyMenuItem = styled(MenuItem)`
	display: flex !important;
	justify-content: space-between !important;
	gap: 12px;
`