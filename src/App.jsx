import Homeindex from "./Pages/Home/Homeindex";
import AboutUs from "./Pages/Home/AboutUs.jsx";
import Sermon from "./Pages/Home/Sermon.jsx"
import { BrowserRouter,Routes,Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./Components/Layouts/Rootlayout.jsx";
import Errorpage from "./Components/Layouts/Errorpage.jsx";
import Blog from "./Pages/Home/Blog.jsx";
const routes = createRoutesFromElements(
 <Route element={<Rootlayout/>}>
    <Route path="/" element={<Homeindex />}/>
    <Route path="/about" element={<AboutUs/>} />
    <Route path="/sermon" element={<Sermon/>} />
     <Route path="/blog" element={<Blog/>} />
    <Route path="*" element={<Errorpage/>}/>
 </Route>
);
const router = createBrowserRouter(routes);

function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;



