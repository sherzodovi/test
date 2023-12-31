import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdMessage,
  MdPeople,
  MdHome,
  MdPerson3,
  MdOutlineMenuBook,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
// import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Category",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineMenuBook}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Message",
    layout: "/admin",
    icon: <Icon as={MdMessage} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Group",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPeople} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Student",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdPerson3} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  }
];

export default routes;
