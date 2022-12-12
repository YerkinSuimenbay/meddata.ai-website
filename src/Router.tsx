import { ElementType, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Circle from "./components/loaders/Circle/Circle";
import Footer from "./layouts/Footer";
// import { Home } from "./pages/home/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Footer />}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/news" element={<News />} /> */}
        {/* <Route path="/careers" element={<Careers />} /> */}
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
const Main = Loadable(lazy(() => import("./pages/main/Main")));
const About = Loadable(lazy(() => import("./pages/About/About")));
// const Careers = Loadable(lazy(() => import("./pages/Careers/Careers")));
// const News = Loadable(lazy(() => import("./pages/News/News")));
const NotFound = Loadable(lazy(() => import("./pages/NotFound/NotFound")));

export default Router;
