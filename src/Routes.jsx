import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import LandingpageWIP from "pages/LandingpageWIP";
import Formnew from "pages/Formnew";
import Confirmationatsubmitform from "pages/Confirmationatsubmitform";
import Tocome from "pages/Tocome";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <LandingpageWIP /> },
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
    {
      path: "tocome",
      element: <Tocome />,
    },

   
    
  ]);

  return element;
};

export default ProjectRoutes;
