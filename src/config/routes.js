// Routes config file example

// import CreatePage from "../pages/CreatePage";
// import CreateUserPage from "../pages/CreateUserPage";
// import DashboardPage from "../pages/DashboardPage";
// import EditUserPage from "../pages/EditUserPage";
// import ForgotPasswordPage from "../pages/ForgotPasswordPage";
// import LoginPage from "../pages/LoginPage";
// import ResetPasswordPage from "../pages/ResetPasswordPage";
// import UsersPage from "../pages/UsersPage";
import Login from '../pages/login/Login';
import Register from '../pages/login/Register';

export const routes = {
    private: [
        {
            name: 'home',
            path: '/',
            component: <Login />,
        },
        {
            name: 'register',
            path: '/register',
            component: <Register />,
        },
        // {
        //     name: 'users',
        //     path: '/users',
        //     component: <UsersPage />
        // },
        // {
        //     name: 'create-user',
        //     path: '/create-user',
        //     component: <CreateUserPage />
        // },
        // {
        //     name: 'edit-user',
        //     path: '/edit-user/:userId',
        //     component: <EditUserPage />
        // },
        // {
        //     name: 'create-page',
        //     path: '/create-page',
        //     component: <CreatePage />
        // }
    ],
    public: [
        {
            name: 'home',
            path: '/',
            component: <Login />,
        },
        {
            name: 'register',
            path: '/register',
            component: <Register />,
        },
        // {
        //     name: 'forgot-password',
        //     path: '/forgot-password',
        //     component: <ForgotPasswordPage />
        // },
        // {
        //     name: 'reset-password',
        //     path: '/reset-password/:code',
        //     component: <ResetPasswordPage />
        // }
    ],
};
