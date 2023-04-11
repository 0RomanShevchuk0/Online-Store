import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { HeaderPartType } from '../types/types'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import LogoutIcon from '@mui/icons-material/Logout'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import { useMUIIconSettings } from '../hooks/useMUIIconSettings'
import { setIsCartOpened } from '../redux/cart-reducer'
import { removeUser } from '../redux/user-reducer'
import { Button } from './layouts/Header'


const HeaderDesktopMenu: FC<HeaderPartType> = (
	{ theme, setNewTheme, isAuthorized, userName }) => {
	const dispatch = useDispatch()
  const navigate = useNavigate()

	const [muiIconSettings] = useMUIIconSettings()

	return (
		<FlexBlock>
					<Button
						onClick={setNewTheme}
						mytheme={theme}
					>
						{theme === "light" ? 
							<LightModeIcon sx={{...muiIconSettings}} /> :
							<DarkModeIcon sx={{...muiIconSettings}} />
						} 
					</Button>
					{isAuthorized ? (
						<Button
							title="Open cart"
							onClick={() => dispatch(setIsCartOpened(true))}
							mytheme={theme}
						>
							<ShoppingCartIcon sx={{...muiIconSettings}} />
						</Button>
					) : (
						<Button 
							title="Open cart" 
							onClick={() => navigate("/login")}
							mytheme={theme}
						>
							<ShoppingCartIcon sx={{...muiIconSettings}}/>
						</Button>
					)}

					{isAuthorized ? (
						<FlexBlock>
							<div>{userName ? userName : "user"}</div>
							<Button 
								onClick={() => dispatch(removeUser())}
								title="Log Out"
								mytheme={theme}
							>
								<LogoutIcon sx={{...muiIconSettings}} />
							</Button>
						</FlexBlock>
					) : (
						<Button 
							onClick={() => navigate('/login')} 
							title="Log In"
							mytheme={theme}
						>
							<PersonIcon sx={{...muiIconSettings}} />
						</Button>
					)}
				</FlexBlock>
	)
}

export default HeaderDesktopMenu

const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
