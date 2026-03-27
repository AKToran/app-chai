import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root'
import Home from "../Pages/Home/Home";
import AllApps from "../Components/AllApps/AllApps";
import AppDetails from "../Components/AppDetails/AppDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Loading from "../Components/Loading/Loading";


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
        HydrateFallback: Loading,
        loader: ()=> fetch('/data.json'),
        Component: AllApps
      },
      {
        path: 'appDetails/:id',
        HydrateFallback: Loading,
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