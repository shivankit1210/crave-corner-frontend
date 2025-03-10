import { AppBar, Box, Button, Drawer, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import { MdCall } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useDispatch } from "react-redux";
import { slice2 } from "../../store/slice/about";
import { slice3 } from "../../store/slice/contact";
import { slice4 } from "../../store/slice/service";

const Header = styled(AppBar)({
  width: "100%",
  float: "left",
  backgroundColor: `var(--maincol)`,
  height: "auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",

  gap: "6rem",
});
const Content = styled("section")({
  alignContent: "center",
  fontSize: 18,
  fontWeight: 600,
  float: "left",
  backgroundColor: `var(--maincol)`,
  padding: "20px 30px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  "@media (max-width:970px)": {
    display: "none",
  },
});
const Link = styled("a")({
  color: "white",
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",

  alignContent: "center",
  gap: 10,
  "& > svg": {
    marginTop: 5,
  },
});
const Logo = styled("section")({
  marginTop: 3,
  marginBottom: 3,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  "@media (max-width:970px)": {
    float: "left",
  },
  "& > img": {
    width: 80,
  },
  "& > p": {
    color: "white",
    fontSize: 30,
    fontFamily: "monospace",
    fontWeight: 600,
  },
});
const Sidebar = styled(Box)({
  display: "none",
  "@media (max-width:970px)": {
    display: "flex",
    "& > button > svg": {
      fontSize: 35,
      color: "white",
    },
  },
});
const NavItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginLeft: 50,
  gap: 15,
  "& > button": {
    color: "white",
    fontSize: 22,
    transition: "0.3s",
  },
});
const UperNavbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [service, setService] = useState(false);
  const [shop, setShop] = useState(false);

  const handleAbout = () => {
    // setAbout(true)
    dispatch(slice2(true));
    setOpen(false);
    // {console.log("about",about)}
  };
  const handleContact = () => {
    // setContact(true)
    dispatch(slice3(true));
    setOpen(false);
    // {console.log("about",about)}
  };

  const handleShop = () => {
    navigate("/delivery");

    setOpen(false);
    // {console.log("about",about)}
  };

  const handleService = () => {
    // setService(true)
    dispatch(slice4(true));
    setOpen(false);
    // {console.log("about",about)}
  };
  const handleHome = () => {
    if (location.pathname === "/") {
      setOpen(false);
    } else {
      navigate("/");
      setOpen(false);
    }
    // console.log(location.pathname)
  };

  const handleAdminLogin = () => {
    navigate("/admin/login");
  };

  return (
    <Fragment>
      <Header position="static">
        <Content className="call-box">
          <Link href="tel:+9520593613">
            <MdCall /> Call : +91-9675241816
          </Link>
        </Content>
        <Logo>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F02%2F21%2F08%2F49%2Ffood-2085075_960_720.png&f=1&nofb=1&ipt=e6727fb95b614090319cfca9d70699efbce26350da8efc394d6ca0b87c82c1a9&ipo=images"
            alt=""
          />
          <Typography style={{ color: "black", fontWeight: "900" }}>
            Crave Corner
          </Typography>
        </Logo>
        <Content className="call-box">
          <Link href="mailto:shivankit1210@gmail.com">
            <IoMdMail /> Email : shivankit1210@gmail.com
          </Link>
        </Content>
        <Sidebar>
          <Button onClick={() => setOpen(true)}>
            <GiHamburgerMenu />
          </Button>
          <Drawer
            open={open}
            anchor="right"
            hideBackdrop={true}
            variant="persistent"
            sx={{
              "& .MuiDrawer-paper": {
                zIndex: 99999999999999,
                width: "100%",
                backgroundColor: `var(--maincol)`,
                // backgroundColor: 'rgb(0, 0, 0, 0.9)',
                display: "flex",
                gap: 10,
                padding: "35px 35px",
              },
            }}
          >
            <Box style={{ alignSelf: "flex-end" }}>
              <ClearOutlinedIcon
                onClick={() => setOpen(false)}
                style={{ color: "white", fontWeight: 700, fontSize: "25px" }}
              />
            </Box>
            <NavItem>
              <Button onClick={() => handleHome()}>Home</Button>
              <Button onClick={() => handleAbout(about)}>About</Button>
              <Button onClick={() => handleContact(contact)}>Contact Us</Button>
              <Button onClick={handleAdminLogin} style={{ background: "red", color: "white" }}>ADMIN</Button>
              <Button onClick={() => handleShop()}>Shop</Button>
              {/* <Button onClick={() => handleService(service)}>Services</Button> */}
            </NavItem>
          </Drawer>
        </Sidebar>
      </Header>
    </Fragment>
  );
};
export default UperNavbar;
