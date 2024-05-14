import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Vegetarians from '../Pages/Vegetarians/Vegetarians';

const roots = createBrowserRouter([{
    path: '*',
    element: <div>404</div>
    }, 
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                index:true,
                element:<Dashboard/>,
            },
            {
                path: '/vegetarians',
                element: <Vegetarians/>
            }
        ]
    }, 
    {
        path: '/login',
        element: <div>login</div>
    }
]);
const AppRouter = () => {
    return <RouterProvider router={roots} />;
};

export default AppRouter;
