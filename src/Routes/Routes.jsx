import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root'
import Apps from '../Pages/Apps/Apps'
import Home from "../Pages/Home/Home";
import AllApps from "../Components/AllApps/AllApps";
import AppDetails from "../Components/AppDetails/AppDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path:'/',
    Component: Root,
    hydrateFallbackElement: ErrorPage,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path:'apps',
        loader: ()=> fetch('/data.json'),
        Component: AllApps
      },
      {
        path: 'appDetails/:id',
        loader: ()=> fetch('/data.json'),
        Component: AppDetails
      },
      {
        path:"*",
        Component: ErrorPage
      }
    ]
  }
])