import { Navigate, Route, Routes } from "react-router-dom"
import { sharedConfigRoutes } from "shared/config"

const routes: sharedConfigRoutes.RouteDescription[] = []

const routesContent = routes.map(({ path, component: Component }) => (
  <Route key={path} path={path} element={<Component />} />
))

const AppRouter = () => {
  return (
    <Routes>
      {routesContent}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRouter
