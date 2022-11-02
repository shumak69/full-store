import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "..";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";

function NavBar() {
  const { user } = useContext(Context)!;
  const navigate = useNavigate();
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ color: "white" }}>
          КупиДевайс
        </NavLink>
        <Nav className="ms -auto">
          {user.isAuth ? (
            <>
              <Button variant="outline-light" color="red" onClick={() => navigate(ADMIN_ROUTE)}>
                Админ панель
              </Button>
              <Button variant="outline-light" color="red" className="ms-2" onClick={() => navigate(LOGIN_ROUTE)}>
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
