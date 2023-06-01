import { useState } from 'react'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  createStyles,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import UserIcon from '@material-ui/icons/AccountCircle'
import SettingsIcon from '@material-ui/icons/Settings'

import DrawerMenu from '../DrawerMenu/DrawerMenu'
import { colors } from '../../styles/theme/colors'

const useStyles = makeStyles(() =>
  createStyles({
    toolbarWeb: {
      justifyContent: 'space-between',
    },
    hamburgerIcon: {
      color: colors.white,
    },
    userWebIcon: {
      color: colors.white,
      justifyContent: 'end',
    },
    appTitle: {},
    version: {
      color: colors.transparentWhite,
      position: 'absolute',
      top: '0',
      right: '1em',
      fontSize: 'xx-small',
    },
    // TODO: Move component to a different file
    header: {
      backgroundColor: 'transparent',
      boxShadow: '0px 0px 0px 0px',
      display: 'flex',
    },
    toolbar: {
      justifyContent: 'space-evenly',
    },
    searchIcon: {
      color: colors.black,
    },
    userIcon: {
      color: colors.black,
    },
    settingsIcon: {
      color: colors.yellow,
    },
  })
)

// TODO: Move types to a different file
export interface AppBarWebProps {
  title: string
  version: string
  onLogout: () => void
}
export interface AppBarMobileProps {
  version: string
  onLogout: () => void
}

export function AppBarWeb({
  title,
  version,
  onLogout,
}: AppBarWebProps): JSX.Element {
  const [openDrawer, setOpenDrawer] = useState(false)
  const classes = useStyles()

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }
  // TODO: Add Login function

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbarWeb}>
          <IconButton aria-label="Menu" onClick={toggleDrawer}>
            <MenuIcon className={classes.hamburgerIcon} />
          </IconButton>
          <Typography className={classes.appTitle} variant="h5">
            {title}
          </Typography>
          <IconButton edge="end">
            <UserIcon className={classes.userWebIcon} />
          </IconButton>
          <label className={classes.version}>v{version}</label>
        </Toolbar>
      </AppBar>
      <DrawerMenu
        open={openDrawer}
        onClose={toggleDrawer}
        onLogout={onLogout}
      />
    </>
  )
}

// TODO: Move AppBarMobile component to a different file
export function AppBarMobile({ version, onLogout }: AppBarMobileProps) {
  const [openSettings, setOpenSettings] = useState(false)
  const classes = useStyles()

  const handleSettings = () => {
    setOpenSettings(!openSettings)
  }
  // TODO: Add handlers for search and settings icons
  return (
    <>
      <AppBar className={classes.header} position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton aria-label="Menu" onClick={handleSettings}>
            <SearchIcon className={classes.searchIcon} />
          </IconButton>
          <IconButton>
            <UserIcon className={classes.userIcon} />
          </IconButton>
          <IconButton>
            <SettingsIcon className={classes.settingsIcon} />
          </IconButton>
          <label className={classes.version}>v{version}</label>
        </Toolbar>
      </AppBar>
      {/* TODO: Replace Drawer for handlers */}
      <DrawerMenu
        open={openSettings}
        onClose={handleSettings}
        onLogout={onLogout}
      />
    </>
  )
}
// TODO: Add story file for AppBarMobile component
// TODO: Add story file for AppBarWeb component
