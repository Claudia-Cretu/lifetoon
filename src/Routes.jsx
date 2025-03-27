import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingpageWIP from "pages/LandingpageWIP";
import Formnew from "pages/Formnew";
import Confirmationatsubmitform from "pages/Confirmationatsubmitform";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "landingpagewip",
      element: <LandingpageWIP />,
    },
    {
      path: "formnew",
      element: <Formnew />,
    },
    {
      path: "confirmationatsubmitform",
      element: <Confirmationatsubmitform />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
