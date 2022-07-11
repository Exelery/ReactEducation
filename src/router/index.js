
import Posts from 'pages/Posts'
import About from 'pages/About';
import Error from 'pages/Error';
// import Navbar from 'components/UI/Navbar/Navbar'
import PostIdPage from 'pages/PostIdPage';
import Login from 'pages/Login';

export const privateRoutes = [
    // {path: "/", element: Navbar },
    {path: 'about', element: About},
    {path: 'posts', element: Posts},
    {path: '/posts/:id', element: PostIdPage},
    {path: '*', element: Error}
]

export const publicRoutes = [
    {path: 'login', element: Login},
    {path: '*', element: Login}
]