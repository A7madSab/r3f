import { FC } from "react"
import MeteorScene from "./scenes/MeteorScene"
import CarScene from "./scenes/CarScene"
import BoxScene from "./scenes/BoxScene"
import { BrowserRouter, Routes, Route, RouteProps } from "react-router-dom"

const routes: RouteProps[] = [
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
