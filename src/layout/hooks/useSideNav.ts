import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavItem } from "../Interfaces/types";

export const useSideNav = (navItems: NavItem[]) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedSubIndex, setSelectedSubIndex] = useState<number | null>(null);

  const initializeSelection = () => {
    const mainIndex = navItems.findIndex((item) =>
      location.pathname.startsWith(item.path ?? "")
    );

    if (mainIndex !== -1) {
      setSelectedIndex(mainIndex);

      if (navItems[mainIndex].subNav) {
        const subIndex = navItems[mainIndex].subNav!.findIndex(
          (subItem) => subItem.path === location.pathname
        );
        if (subIndex !== -1) {
          setSelectedSubIndex(subIndex);
          setOpen(true);
        } else {
          setOpen(false);
        }
      } else {
        setSelectedSubIndex(null);
        setOpen(false);
      }
    }
  };

  useEffect(() => {
    initializeSelection();
  }, [location.pathname]);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    setSelectedSubIndex(null);
    if (navItems[index].subNav) {
      setOpen(!open);
    } else {
      setOpen(false);
      navigate(navItems[index].path ?? "");
    }
  };

  const handleSubItemClick = (path: string, subIndex: number) => {
    setSelectedSubIndex(subIndex);
    navigate(path);
  };

  return {
    open,
    selectedIndex,
    selectedSubIndex,
    handleClick,
    handleSubItemClick,
  };
};
