import { lazy, Suspense, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/layouts/Header";
import Home from "./components/Home";
import Cart from "./components/layouts/Cart";
import Overlay from "./components/layouts/Overlay";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./redux/products-reducer";
import { GlobalStateType } from "./redux/store";
import { ThemeContext } from "./providers/ThemeProvider";
import Preloader from "./components/layouts/Preloader";
import Page404 from "./components/Page404";
const ProductDetails = lazy(() => import("./components/ProductDetails"))
const Login = lazy(() => import("./components/Login"))
const SignUp = lazy(() => import("./components/SignUp"))

const App = () => {
  const dispatch = useDispatch()
  const isCartOpened = useSelector(
    (state: GlobalStateType) => state.cart.isCartOpened
  )

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    const body = document.querySelector("body")
    if (isCartOpened) {
      body?.classList.add("removedScroll")
    } else {
      body?.classList.remove("removedScroll")
    }
  }, [isCartOpened])

  const { theme } = useContext(ThemeContext);

  return (
    <Layout className={theme}>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route element={<Home />} path="/:search?" />
            <Route
              element={
                <Suspense fallback={<Preloader />}>
                  <ProductDetails />
                </Suspense>
              }
              path="/products/:id"
            />
            <Route
              element={
                <Suspense fallback={<Preloader />}>
                  <Login />
                </Suspense>
              }
              path="/login"
            />
            <Route
              element={
                <Suspense fallback={<Preloader />}>
                  <SignUp />
                </Suspense>
              }
              path="/Sign-up"
            />
            <Route element={<Page404 />} path="*" />
          </Routes>
          <Cart />
          <Overlay />
        </MainContent>
      </AppContainer>
    </Layout>
  );
};

export default App;

const Layout = styled.div`
  min-height: 100vh;
`;
const AppContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0px auto;
`;
const MainContent = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 130px;
`;
