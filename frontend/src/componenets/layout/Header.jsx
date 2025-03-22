import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { lazy, Suspense, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { orange } from '../../constants/colours'
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationsIcon } from '@mui/icons-material'

const SearchDialog = lazy(() => import('../specific/Search'))
const NotificationsDialog = lazy(() => import('../specific/Notifications'))
const NewGroupDialog = lazy(() => import('../specific/NewGroup'))

const Header = () => {

  const [isMobile, setIsMobile] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [isNewGroup, setIsNewGroup] = useState(false)
  const [isNotification, setIsNotification] = useState(false)
  // const [isMobile, setIsMobile] = useState(false)

  const navigate = useNavigate()

  const Iconbtn = ({title, icon, onClick}) => {
    return (
      <Tooltip title={title}>
        <IconButton color='inherit' size='large' onClick={onClick}>
          {icon}
        </IconButton>
      </Tooltip>
    )
  }

  const handleMobile = () => {setIsMobile((prev) => !prev)}

  const openSearch = () => {setIsSearch((prev) => !prev)}

  const openNewGroup = () => {}

  const openNotification = () => {}

  const logoutHandler = () => {}

  const navigateToGroup = () => navigate("/groups")

  return (
    <>
      <Box sx={{flexGrow: 1}} height={"4rem"}>
        <AppBar position='static' sx={{bgcolor: orange}}>

          <Toolbar>
            <Typography variant='h6' sx={{display: {xs: 'none', sm: 'block'}}}>
              Chat App
            </Typography>

            <Box sx={{display: {xs: 'block', sm: 'none'}}}>
              <IconButton color='inherit' onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{flexGrow: 1}}></Box>

            <Box>
              <Iconbtn title={"Search"} icon={<SearchIcon />} onClick={openSearch} />
              
              <Iconbtn title={"New Group"} icon={<AddIcon />} onClick={openNewGroup} />

              <Iconbtn title={"Manage Groups"} icon={<GroupIcon />} onClick={navigateToGroup} />
               
              <Iconbtn title={"Notifications"} icon={<NotificationsIcon />} onClick={openNotification} />

              <Iconbtn title={"Logout"} icon={<LogoutIcon />} onClick={logoutHandler}/>
            </Box>
          </Toolbar>

        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<div>Loading...</div>}>
          <SearchDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<div>Loading...</div>}>
          <NewGroupDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<div>Loading...</div>}>
          <NotificationsDialog />
        </Suspense>
      )}
    </>
  )
}

export default Header
