import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root'
import Apps from '../Pages/Apps/Apps'
import Home from "../Pages/Home/Home";


export const router = createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path:'apps',
        Component: Apps
      }
    ]
  }
])