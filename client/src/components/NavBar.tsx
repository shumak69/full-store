import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "..";
import { ROLE } from "../types/user";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";

function NavBar() {
  const { user } = useContext(Context)!;
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
              <Button variant="outline-light" color="red" onClick={() => navigate(ADMIN_ROUTE)}>
                Админ панель
              </Button>
              {user.role === ROLE.ADMIN && (
                <>
                  <Button variant="outline-light" color="red" onClick={() => navigate(ADMIN_ROUTE)}>
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
