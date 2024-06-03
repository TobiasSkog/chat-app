import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Tooltip, Avatar, Menu, MenuItem, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const pages = ["Home", "Chat"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function NavigationBar({ login, logout, user }) {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (e) => {
		setAnchorElNav(e.currentTarget);
	};
	const handleOpenUserMenu = (e) => {
		setAnchorElUser(e.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						LOGO
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
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
							sx={{
								display: { xs: "block", md: "none" },
							}}>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						LOGO
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
								{page}
							</Button>
						))}
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
							onClose={handleCloseUserMenu}>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

// return (
//   <AppBar position="static">
//     <Toolbar>
//       <Typography variant="h6" style={{ flexGrow: 1 }}>
//         Chat App
//       </Typography>

//       {user ? (
//         <>
//           <Link to="/chat">Chat</Link>
//           <div align="right">
//             <Typography variant="h6">{user.username}</Typography>
//             <Button color="inherit" onClick={logout}>
//               Logout
//             </Button>
//           </div>
//         </>
//       ) : (
//         <Button color="inherit" href="/login">
//           Login
//         </Button>
//       )}
//     </Toolbar>
//   </AppBar>
// );
