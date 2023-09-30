import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import BlogPage from './components/blog/BlogPage';
import WritePage from './components/write/WritePage';
import LoginPage from './components/login/LoginPage';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import SinglePage from './components/singlePage/SinglePage';

function App() {
  const { theme } = useContext(ThemeContext)
  const Layout = () => {
    return (
      <div className={`container ${theme}`} >
        <div className='wrapper'>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div >
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/blog",
          element: <BlogPage />
        },
        {
          path: "/write",
          element: <WritePage />
        },
        {
          path: "/login",
          element: <LoginPage />
        },
        {
          path: "/post",
          element: <SinglePage />
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
