import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from '../Pages/Root/Root'
import Apps from '../Pages/Apps/Apps'


export const router = createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children: [
      {
        index: true,
        Component: App
      },
      {
        path:'apps',
        Component: Apps
      }
    ]
  }
])