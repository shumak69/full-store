import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import { useContext } from "react";
import { Context } from "..";
function AppRouter() {
  const { user } = useContext(Context)!;
  return (
    <div>
      <Routes>
        {user.isAuth &&
          authRoutes.map((route) => <Route path={route.path} key={route.path} element={<route.Component />} />)}
        {publicRoutes.map((route) => (
          <Route path={route.path} element={<route.Component />} key={route.path} />
        ))}
        <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
