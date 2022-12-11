import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToggleButtonGroupUtilityClass } from "@mui/material";

const BasicMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [topics, setTopics] = useState([]);
  const [categories, setCategories] = useState([]);

  const getTopics = async (category?: string) => {
    const response = await fetch(
      "https://dummyjson.com/products/category" + category !== undefined ||
        category !== "" ||
        category !== null
        ? `/${category}`
        : ""
    );
    const data = await response.json();

    setTopics(data);
  };

  const getCategories = async () => {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    // getTopics();
    getCategories();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  return (
    <div>
      <Button
        style={{ color: "white" }}
        size="large"
        variant="text"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Topics
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {categories.map((category) => (
          <>
            <MenuItem onClick={() => navigate("/topic")}>{category}</MenuItem>
          </>
        ))}
      </Menu>
    </div>
  );
};
export default BasicMenu;
