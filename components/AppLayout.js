import Link from "next/link";
import PropTypes from "prop-types";

import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";

const AppLayout = ({ children }) => {
  const menuId = "primary-search-account-menu";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              component="h1"
              sx={{ display: { xs: "flex", sm: "flex" } }}
            >
              <a style={{ cursor: "pointer" }}>MUI</a>
            </Typography>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <Link href="/signup">
              <Typography
                variant="body1"
                noWrap
                component="div"
                sx={{ display: { xs: "block", sm: "block" } }}
              >
               <a style={{ cursor: "pointer" }}>Sign Up</a>
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <Link href="/profile">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <a>
                  <AccountCircle />
                </a>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

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
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

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

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
