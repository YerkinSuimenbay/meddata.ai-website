import { ElementType, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
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
    <Suspense
      fallback={
        <Box p={2} textAlign="center">
          <CircularProgress />
        </Box>
      }
    >
      <Component {...props} />
    </Suspense>
  );

// const NotFound = Loadable(lazy(() => import("./pages/Page404")));
const Home = Loadable(lazy(() => import("./pages/home/Home")));


export default Router;
