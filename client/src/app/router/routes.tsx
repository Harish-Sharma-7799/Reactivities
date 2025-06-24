import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/activities/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetailPage from "../../features/activities/details/ActivityDetailPage";
import Counter from "../../features/counter/Counter";
import TestErrors from "../../features/errors/TestError";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import LoginForm from "../../features/accounts/LoginForm";
import RequireAuth from "./requireAuth";
import RegisterForm from "../../features/accounts/RegisterForm";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                element: <RequireAuth />,
                children: [
                    {
                        path: 'activities',
                        element: <ActivityDashboard />
                    },
                    {
                        path: 'createActivity',
                        element: <ActivityForm key='create' />
                    }, {
                        path: 'activities/:id',
                        element: <ActivityDetailPage />
                    }, {
                        path: 'manage/:id',
                        element: <ActivityForm />
                    },
                ]
            },
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'counter',
                element: <Counter />
            },
            {
                path: 'error',
                element: <TestErrors />
            },
            {
                path: 'not-found',
                element: <NotFound />
            },
            {
                path: 'server-error',
                element: <ServerError />
            },
            {
                path: 'login',
                element: <LoginForm />
            },
            {
                path: 'register',
                element: <RegisterForm />
            },
            {
                path: '*',
                element: <Navigate replace to='/not-found' />
            }
        ]
    }
])