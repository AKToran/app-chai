import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root'
import Apps from '../Pages/Apps/Apps'
import Home from "../Pages/Home/Home";
import AllApps from "../Components/AllApps/AllApps";


export const router = createBrowserRouter([
  {
    path:'/',
    Component: Root,
    hydrateFallbackElement: <h3>loading.....</h3>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path:'apps',
        loader: ()=> fetch('/data.json'),
        Component: AllApps
      }
    ]
  }
])