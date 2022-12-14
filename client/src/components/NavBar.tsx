import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "..";
import { ROLE } from "../types/user";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";

function NavBar() {
  const { user, basket } = useContext(Context)!;
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    user.setRole(null);
    localStorage.removeItem("token");
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ color: "white", cursor: "pointer" }}>
          КупиДевайс
        </NavLink>
        <Nav className="ms -auto">
          {user.isAuth ? (
            <>
              <Button
                variant="outline-light"
                color="red"
                onClick={() => navigate(BASKET_ROUTE)}
                className="basket px-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 192.617 192.617"
                  xmlSpace="preserve"
                  width={25}
                  height={25}
                  className="me-1"
                >
                  <g>
                    <g>
                      <path
                        style={{ fill: "#fff" }}
                        d="M53.84,147.5c1.772,0,3.21-1.432,3.21-3.21V94.543c0-1.779-1.439-3.21-3.21-3.21    c-1.775,0-3.214,1.435-3.214,3.21v49.742C50.626,146.065,52.069,147.5,53.84,147.5z"
                      />
                      <path
                        style={{ fill: "#fff" }}
                        d="M82.221,147.5c1.779,0,3.214-1.432,3.214-3.21V94.543c0-1.779-1.435-3.21-3.214-3.21    c-1.768,0-3.21,1.435-3.21,3.21v49.742C79.007,146.065,80.453,147.5,82.221,147.5z"
                      />
                      <path
                        style={{ fill: "#fff" }}
                        d="M110.272,147.5c1.768,0,3.21-1.432,3.21-3.21V94.543c0-1.779-1.442-3.21-3.21-3.21    c-1.779,0-3.21,1.435-3.21,3.21v49.742C107.061,146.065,108.493,147.5,110.272,147.5z"
                      />
                      <path
                        style={{ fill: "#fff" }}
                        d="M137.986,147.5c1.779,0,3.21-1.432,3.21-3.21V94.543c0-1.779-1.432-3.21-3.21-3.21    c-1.768,0-3.21,1.435-3.21,3.21v49.742C134.772,146.065,136.215,147.5,137.986,147.5z"
                      />
                      <path
                        style={{ fill: "#fff" }}
                        d="M192.617,51.594h-14.809l10.307-10.304c2.444-2.459,2.444-6.435,0-8.872l-7.963-7.959    c-2.366-2.369-6.488-2.369-8.872,0l-27.131,27.135H49.184L22.049,24.459c-2.38-2.369-6.488-2.369-8.879,0l-7.941,7.949    c-2.444,2.444-2.452,6.424-0.004,8.879L15.536,51.59H0v30.477h13.585l18.735,87.868H154.9l24.086-87.868h13.632    C192.617,82.068,192.617,51.594,192.617,51.594z M150,163.515H37.517L20.188,82.239h152.101L150,163.515z M186.19,75.647H6.428    V58.018h24.615L9.77,36.953l7.741-7.949l29.017,29.01h100.279l28.813-29.01l7.949,7.737l-21.276,21.276h23.9v17.629H186.19z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
                {basket.basketItems.length ? <div>{basket.basketItems.length}</div> : null}
              </Button>
              {user.role === ROLE.ADMIN && (
                <>
                  <Button
                    variant="outline-light"
                    color="red"
                    onClick={() => navigate(ADMIN_ROUTE)}
                    className="ms-2"
                  >
                    Админ панель
                  </Button>
                </>
              )}
              <Button variant="outline-light" color="red" className="ms-2" onClick={() => logOut()}>
                Выйти
              </Button>
            </>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant="outline-light" color="red">
                Авторизация
              </Button>
            </NavLink>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default observer(NavBar);
