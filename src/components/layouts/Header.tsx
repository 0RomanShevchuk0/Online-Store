import React, { FC, useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { setIsCartOpened } from "../../redux/cart-reducer"
import cartIcon from "../../assets/icons/cart.svg"
import { ThemeContext } from "../../providers/ThemeProvider"
import { GlobalStateType } from "../../redux/store"
import { Link, useNavigate } from "react-router-dom"
import { removeUser } from "../../redux/user-reducer"
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import LogoutIcon from '@mui/icons-material/Logout'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { useMUIIconSettings } from "../../hooks/useMUIIconSettings"

const Header: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthorized = useSelector(
    (state: GlobalStateType) => state.user.isAuthorized
  );
  const userName = useSelector((state: GlobalStateType) => state.user.name)
  const { theme, setTheme } = useContext(ThemeContext)
	const [muiIconSettings] = useMUIIconSettings()

  return (
    <Container>
      <Link to="/">Home</Link>
      <FlexBlock style={{ display: "flex" }}>
        <Button
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
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
          >
            <ShoppingCartIcon sx={{...muiIconSettings}} />
          </Button>
        ) : (
          <Button title="Open cart" onClick={() => navigate("/login")}>
            <ShoppingCartIcon sx={{...muiIconSettings}}/>
          </Button>
        )}

        {isAuthorized ? (
          <FlexBlock>
            <div>{userName ? userName : "user"}</div>
            <Button 
							onClick={() => dispatch(removeUser())}
							title="Log Out"
						>
							<LogoutIcon sx={{...muiIconSettings}} />
						</Button>
          </FlexBlock>
        ) : (
					<Button onClick={() => navigate('/login')} title="Log In">
						<PersonIcon sx={{...muiIconSettings}} />
					</Button>
        )}
      </FlexBlock>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #8b7ba4;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  box-sizing: border-box;
  padding: 0px 100px;

  @media screen and (max-width: 768px) {
    padding: 0px 20px;
  }
`;

const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border-radius: 12px;

  &:hover {
    background-color: #9585ae;
  }
`;
