import { ElementType, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Circle from "./components/loaders/Circle/Circle";
// import { Home } from "./pages/home/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div>about</div>} />
      <Route path="/about" element={<div>about</div>} />
      <Route path="/about" element={<div>about</div>} />
    </Routes>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<Circle />}>
      <Component {...props} />
    </Suspense>
  );

// const NotFound = Loadable(lazy(() => import("./pages/Page404")));
const Home = Loadable(lazy(() => import("./pages/Main/Main")));

export default Router;
