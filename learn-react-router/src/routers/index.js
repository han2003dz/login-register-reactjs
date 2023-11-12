import PrivateRoute from "../components/PrivateRouter";
import LayoutDefault from "../layouts/LayoutDefault";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogAll from "../pages/Blog/BlogAll";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import BlogDetail from "../pages/Blog/BlogDetail";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
        children: [
          {
            index: true,
            element: <BlogAll />,
          },
          {
            path: ":id",
            element: <BlogDetail />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        element: <PrivateRoute />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
];

{
  /* <Routes>
  <Route path="/" element={<LayoutDefault />}>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="blog" element={<Blog />}>
      <Route index element={<BlogAll />} />
      <Route path=":id" element={<BlogDetail />} />
    </Route>
    <Route path="login" element={<Login />} />

    <Route element={PrivateRoute}>
      <Route path="info-user" element={<InfoUser />} />
    </Route>
    <Route path="*" element={<Error404 />} />
  </Route>
</Routes>; */
}
