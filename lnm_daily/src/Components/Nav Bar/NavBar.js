import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, useNavigate } from "react-router-dom";
import WebhookIcon from "@mui/icons-material/Webhook";

const NavBar = () => {
  const navigate = useNavigate();

  //const pages = ['Events', 'Clubs', 'Chat'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCreatePost = () => {
    navigate("new_post");
  };
  const handleProfile = () => {
    navigate("profile");
  };
  const handleLogout = () => {
    navigate("/");
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleClubs = () => {
    navigate("clubs");
  };
  const handleChat = () => {
    navigate("chats");
  };
  const handleAbout = () => {
    navigate("about");
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <WebhookIcon />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuItem key={"clubs"} onClick={handleClubs}>
                  <Typography textAlign="center">{"Clubs"}</Typography>
                </MenuItem>
                <MenuItem key={"chat"} onClick={handleChat}>
                  <Typography textAlign="center">{"Chats"}</Typography>
                </MenuItem>
                <MenuItem key={"about"} onClick={handleAbout}>
                  <Typography textAlign="center">{"About"}</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <WebhookIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 300,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <NavLink to="/" style={{ color: "white" }}>
                LNM DAILY
              </NavLink>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                key={"clubs"}
                onClick={handleClubs}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {"Clubs"}
              </Button>
              <Button
                key={"chat"}
                onClick={handleChat}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {"Chats"}
              </Button>
              <Button
                key={"about"}
                onClick={handleAbout}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {"About"}
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key={"profile"} onClick={handleProfile}>
                  <Typography textAlign="center">{"Profile"}</Typography>
                </MenuItem>
                <MenuItem key={"createPost"} onClick={handleCreatePost}>
                  <Typography textAlign="center">{"Create a Post"}</Typography>
                </MenuItem>
                <MenuItem key={"logout"} onClick={handleLogout}>
                  <Typography textAlign="center">{"Log Out"}</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
