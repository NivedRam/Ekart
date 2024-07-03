import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { FormControl, Grid, InputLabel, Select } from "@mui/material";
import { useState, useEffect } from "react";
import { dispatch, useSelector } from "../Redux/store";
import { getCategory } from "../Redux/Slices/Product";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const listItemStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  color: "black",
  marginLeft: "40px",
  fontWeight: 700,
  fontSize: "20px",
};

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar({ setCategoryData }) {
  const [category, setCategory] = useState(null);
  const [cartItems,setCartItems]=useState([])

  useEffect(() => {
    const CartData = JSON.parse(localStorage.getItem("cartItems")) || [];
setCartItems(CartData)
    dispatch(getCategory());
  }, [cartItems]);

  useEffect(() => {
    setCategoryData(category);
  }, [category, setCategoryData]);

  const filterCategories = useSelector((state) => state.product.category);

  const isMobile = useMediaQuery("(max-width:768px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={3} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
    

      <Box sx={{ flexGrow: 1, marginTop: "25px" }}>
        <AppBar
          sx={{ backgroundColor: "white", boxShadow: "none" }}
          position="static"
        >
          <Toolbar>
            <Grid container>
              <Grid md={4} item>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignContent: "center",
                    height: "100%",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingInline: "20px",
                  }}
                >
                  <img
                    src="/icons/Logo.svg"
                    style={{ height: "40px", marginLeft: "30px" }}
                    alt="Main Logo"
                  />
                </Box>
              </Grid>
              <Grid md={4} item>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <Typography
                    sx={{ color: "black", fontWeight: 800, fontSize: "38px" }}
                    variant="h4"
                  >
                    LOGO
                  </Typography>
                </Box>
              </Grid>
              <Grid md={4} item>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    gap: "10px",
                  }}
                >
                 <Badge badgeContent={cartItems?.length} color="error">
                    <a href="/checkout">
                      <img
                        style={{ height: "100%", padding: "10px" }}
                        src="/icons/shopping-bag.svg"
                        alt="Cart"
                      />
                    </a>
                  </Badge>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>

      {/* {!isMobile && ( */}
        <Box
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              alignContent:"center",
              display:"flex",
              flexDirection:isMobile?"column":"row",
              marginBottom: "20x",
              justifyContent: "center",
              alignItems:"center",
              borderBottom: "1px solid #d8d4d4",
              marginTop: "40px",
              cursor: "pointer",
            }}
          >
            <li style={listItemStyle}>
              <h5 onClick={() => setCategory(null)}>all</h5>
            </li>
            {filterCategories?.map((val) => (
              <li style={listItemStyle} key={val}>
                <h5 onClick={() => setCategory(val)}>{val}</h5>
              </li>
            ))}
          </ul>
        </Box>
      {/* )} */}

      {renderMobileMenu}
      {renderMenu}
    </>
  );
}
