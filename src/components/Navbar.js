import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { Home, Users, Briefcase, MessageSquare } from "lucide-react"; 

const Navbar = () => {

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4 text-white" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <Briefcase className="h-4 w-4 text-white" />,
  },
  {
    name: "Collaborators",
    link: "/collaborators",
    icon: <Users className="h-4 w-4 text-white" />,
  },
  {
    name: "Community",
    link: "/community",
    icon: <MessageSquare className="h-4 w-4 text-white" />,
  },
];

    return (
        <div>
            <FloatingNav navItems={navItems}/>
        </div>
    )
}

export default Navbar;