import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BasicMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [topics,setTopics] = useState([]);

  const getTopics = async () => {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    setTopics(data);
  };

  useEffect(() => {
    getTopics();
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
        style={{color:'white'}}
        size="large"
        variant="text"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
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
          'aria-labelledby': 'basic-button',
        }}
      >
        {topics.map((topic) => (
          <>
          <MenuItem>{topic}</MenuItem>
          </>
        ))}
      </Menu>
    </div>
  );
}
export default BasicMenu;