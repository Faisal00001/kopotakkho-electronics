import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                element: <CategoryDetails></CategoryDetails>
            }
        ]
    },
]);


export default router;