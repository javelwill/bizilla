import {
  KeyboardArrowDown,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    return setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    return setAnchorElUser(null);
  };

  return (
    <AppBar>
      <Toolbar
        sx={{
          py: { xs: "0.5em", sm: "0em" },
        }}
      >
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "35%",
          }}
        >
          <IconButton>
            <Search />
          </IconButton>
          <InputBase placeholder="Search reports" />
        </Paper>
        <Box flexGrow="1"></Box>
        <Box display="flex" alignItems="center" gap="1em">
          <IconButton color="inherit" size="large">
            <Badge badgeContent="2" color="success">
              <NotificationsOutlined />
            </Badge>
          </IconButton>
          <Avatar src="https://i.pravatar.cc/250" />
          <Box display="flex" alignItems="center">
            <Typography>Elenar Pena</Typography>
            <IconButton
              color="inherit"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
            >
              <KeyboardArrowDown />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{ mt: "45px" }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
