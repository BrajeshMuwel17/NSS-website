import * as React from "react";
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
import AdbIcon from "@mui/icons-material/Adb";
import banner from "../images/banner.jpg";
import nsslogo from "../images/logo.png";
import newgif from "../images/new.gif";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Slide from '@mui/material/Slide';



import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import Activities from "./activities";
import Footer from "./Footer";
import Profile from "./Profile";

const pages = ["Objectives", "Activities", "Our Team", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const theme = useTheme();

  React.useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (!isTop) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.5)"
          : "transparent",
        transition: "background-color 0.2s",
        borderBottom: isScrolled ? "1px solid #ddd" : "none",
        boxShadow: isScrolled ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <Container
        maxWidth="xl"
        style={{
          marginTop: isScrolled ? "0px" : "50px",

          transition: "margin-top 0.3s",
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "center" }}>
          <img
            src={nsslogo} // Update the path to your image
            alt="Logo"
            style={{
              height: "60px",
              display: { xs: "none", md: "flex" },
              marginRight: 8,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              ml: 3,
              display: { xs: "none", sm: "flex", md: "flex" },
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: isScrolled ? "#333" : "inherit",
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
          >
             NSS,IIT GUWAHATI
          </Typography>
          

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "none", md: "none" },
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: isScrolled ? "#333" : "inherit",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            NSS, <br /> IIT GUWAHATI
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  color: isScrolled ? "#333" : "white",
                  fontSize: "0.8rem",
                  marginRight: index !== pages.length - 1 ? "8px" : 0, // Reduce the margin between buttons
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: { sm: "flex", md: "none" },
             
              "& .MuiDrawer-paper": { width: 250 },
            }}
          >
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
            <Drawer
              anchor="right"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { sm: "block", md: "none" },
                backgroundColor: "darkgray",
              }}
            >
              <Box
                sx={{
                  width: 250,
                
                  marginTop: 5,
                  backgroundColor: "#f0f0f0",
                  padding: "16px 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                role="presentation"
                onClick={handleCloseNavMenu}
                onKeyDown={handleCloseNavMenu}
              >
                <List>
                  {pages.map((page) => (
                    <ListItem key={page} disablePadding>
                      <ListItemButton>
                        <ListItemText primary={page} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function NavBar({posts,members}) {
  const theme = useTheme();
  return (
    <>
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `url(${banner}) center/cover`,
          zIndex: -1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          color="white"
          sx={{
            fontSize: "4rem",
            width: "65%",
            fontWeight: "bold",
            marginTop: "120px",
            "@media (max-width:1000px)": {
              fontSize: "3rem",
              width: "85%",
            },
            "@media (max-width:600px)": {
              fontSize: "2.5rem",
              textAlign: "center",
              width: "90%",
            },
            textAlign: "center",
          }}
        >
          BRINGING THE CHANGE TOGETHER.
        </Typography>

        <Typography
          variant="h1"
          color="rgba(255, 255, 255, 0.7)" // Translucent white color
          sx={{
            fontSize: "1rem",
            width: "60%",
            marginTop: "30px",
            // fontWeight: "bold",
            "@media (max-width:1000px)": {
              fontSize: "1rem",
              width: "70%",
            },
            "@media (max-width:600px)": {
              fontSize: "1rem",
              textAlign: "center",
              width: "90%",
            },
            textAlign: "center",
          }}
        >
          The Indian Institutes of Technology (IITs) were created to engineer
          technological innovations that would improve the living standards of
          the society at large. NSS IIT Guwahati constantly works towards this
          goal through regular donation drives, cleanliness drives and by taking
          up teaching projects at various locations.
        </Typography>

        <Typography
          variant="h1"
          color="white"
          sx={{
            fontSize: "1.5rem",
            width: "60%",
            marginTop: "120px",
            fontWeight: "bold",
            "@media (max-width:1000px)": {
              fontSize: "1.5rem",
              width: "70%",
            },
            "@media (max-width:600px)": {
              fontSize: "1.2rem",
              marginTop: "60px",
              textAlign: "center",
              width: "90%",
            },
            textAlign: "center",
          }}
        >
          <img
            src={newgif} // Update the path to your image
            alt="Logo"
            style={{
              height: "60px",
              display: { xs: "none", md: "flex" },
              marginRight: 8,
              display: "inline-flex",
            }}
          />
          We invite all interested Faculty Members, Officers, Staff Members and
          Students to join NSS Cell as a Volunteer. Join
          <a href="https://www.google.com/"> here</a>.
        </Typography>
      </Box>

      <ResponsiveAppBar />
    </Box>
<Activities posts={posts}/>
<Profile members={members}/>
<Footer/>
</>
  );
}

export default NavBar;
