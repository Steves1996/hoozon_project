import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Facebook from "./pages/facebook/facebook";
import { FaFacebook } from "react-icons/fa";
import { Instagram } from "./pages/instagram";
import { FaInstagramSquare } from "react-icons/fa";
import { Tiktok } from "./pages/tiktok";
import { FaTiktok } from "react-icons/fa";
import { Twitter } from "./pages/twitter";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { User } from "./pages/user";





const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },

      {
        icon: <FaUser {...icon} />,
        name: "commercial",
        path: "/commercial",
        element: <User />,
      },
      /*{
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },

      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },*/
      {
        icon: <FaFacebook {...icon} />,
        name: "facebook",
        path: "/facebook",
        element: <Facebook />,
      },

      {
        icon: <FaInstagramSquare {...icon} />,
        name: "instagram",
        path: "/instagram",
        element: <Instagram />,
      },

      {
        icon: <FaTiktok {...icon} />,
        name: "tiktok",
        path: "/tiktok",
        element: <Tiktok />,
      },

      {
        icon: <FaSquareXTwitter {...icon} />,
        name: "twitter",
        path: "/twitter",
        element: <Twitter />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
