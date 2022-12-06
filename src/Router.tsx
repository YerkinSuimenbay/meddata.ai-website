import { ElementType, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Circle from "./components/loaders/Circle/Circle";
import Footer from "./layouts/Footer";
// import { Home } from "./pages/home/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Footer />}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/news" element={<div>news</div>} />
        <Route path="/careers" element={<Careers />} />
      </Route>
      <Route path="*" element={<NotFound />} />
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
const Main = Loadable(lazy(() => import("./pages/Main/Main")));
const Careers = Loadable(lazy(() => import("./pages/Careers/Careers")));
const NotFound = Loadable(lazy(() => import("./pages/NotFound/NotFound")));

export default Router;
