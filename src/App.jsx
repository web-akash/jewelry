import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import RootLayOut from "./components/RootLayOut";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />} />
        <Route path="/Product" element={<Product />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
