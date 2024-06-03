import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Tooltip, Avatar, Menu, MenuItem, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { useOutletContext, useNavigate } from "react-router-dom";
import { MenuItemComponent, pages, settings } from "../components/MenuItemComponent";

export default function NavigationBar() {
	const navigate = useNavigate();
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);
	const { user, logout } = useOutletContext();
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

	const handleNavigate = (path) => {
		handleCloseNavMenu();
		navigate(path);
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
							{Object.keys(pages).map((page) => (
								<MenuItem key={page} onClick={() => handleNavigate(pages[page])}>
									<Typography textAlign="center">{pages[page]}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="/"
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
						{Object.keys(pages).map((page) =>
							user ? (
								<Button key={page} onClick={() => handleNavigate(pages[page])} sx={{ my: 2, color: "white", display: "block" }}>
									{pages[page]}
								</Button>
							) : null
						)}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						{user ? (
							<>
								<Tooltip title="Open settings">
									<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
										<Avatar alt={user.username} src="/static/images/avatar/2.jpg" />
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
									{Object.keys(settings).map((setting) =>
										setting === settings.Login ? null : (
											<MenuItemComponent
												key={setting}
												menuKey={setting}
												menuValue={settings[setting]}
												onClickAction={setting === settings.Logout ? logout : null}
											/>
										)
									)}
								</Menu>
							</>
						) : (
							<MenuItemComponent menuKey={settings.Login} menuValue={settings.Login} />
						)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
