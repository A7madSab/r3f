import { FC } from "react"
import MeteorScene from "./scenes/MeteorScene"
import CarScene from "./scenes/CarScene"
import BoxScene from "./scenes/BoxScene"
import AvatarScene from "./scenes/AvatarScene"
import Home from "./views/Home"
import { BrowserRouter, Routes, Route, RouteProps } from "react-router-dom"

const routes: RouteProps[] = [
  { id: "homePage", path: "/", Component: Home },
  { id: "box", path: "/box", Component: BoxScene },
  {
    id: "car",
    path: "/car",
    Component: CarScene
  },
  {
    id: "meteor",
    path: "/meteor",
    Component: MeteorScene
  },
  {
    id: "avatar",
    path: "/avatar",
    Component: AvatarScene
  }
]

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(r => (
        <Route {...r} />
      ))}
    </Routes>
  </BrowserRouter>
)

export default App
