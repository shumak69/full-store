import { Container, Form, Card, Button, Row, Col } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTARTION_ROUTE } from "../utils/consts";

function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 57 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="Введите ваш email" className="mt-3" />
          <Form.Control placeholder="Введите пароль" className="mt-3" />
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
              <Button variant="outline-primary">{isLogin ? "Войти" : "Зарегистрироваться"}</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
