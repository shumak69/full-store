import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Container, Form, Card, Button, Row, Col } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../http/userApi";
import { LOGIN_ROUTE, REGISTARTION_ROUTE, SHOP_ROUTE } from "../utils/consts";

function Auth() {
  const { user } = useContext(Context)!;
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const authHandler = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 57 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            placeholder="Введите ваш email"
            className="mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            placeholder="Введите пароль"
            className="mt-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row>
            <Col className="d-flex justify-content-between mt-3 align-items-center">
              {isLogin ? (
                <div>
                  Нет аккаунта? <NavLink to={REGISTARTION_ROUTE}>Зарегистрируйся!</NavLink>
                </div>
              ) : (
                <div>
                  Есть аккаунта? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
              )}
              <Button variant="outline-primary" onClick={authHandler}>
                {isLogin ? "Войти" : "Зарегистрироваться"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default observer(Auth);
