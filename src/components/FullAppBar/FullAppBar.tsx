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

import DrawerMenu from '../DrawerMenu/DrawerMenu'

import SettingsIcon from '@material-ui/icons/Settings'

import { colors } from '../../styles/theme/colors'

const useStyles = makeStyles(() =>
  createStyles({
    hamburgerIcon: {
      color: colors.white,
    },
    searchIcon: {
      color: colors.white,
    },
    userIcon: {
      color: colors.white,
    },
    settingsIcon: {
      color: colors.white,
    },
    appTitle: {},
    version: {
      color: colors.transparentWhite,
      position: 'absolute',
      top: '0',
      right: '1em',
      fontSize: 'xx-small',
    },
  })
)

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

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton aria-label="Menu" onClick={toggleDrawer}>
            <MenuIcon className={classes.hamburgerIcon} />
          </IconButton>
          <Typography className={classes.appTitle} variant="h5">
            {title}
          </Typography>
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
export function AppBarMobile() {
  const [openSettings, setOpenSettings] = useState(false)
  const classes = useStyles()

  const handleSettings = () => {
    setOpenSettings(!openSettings)
  }
  return (
    <AppBar>
      <Toolbar>
        <IconButton aria-label="Menu" onClick={handleSettings}>
          <SearchIcon className={classes.searchIcon} />
          <UserIcon className={classes.userIcon} />
          <SettingsIcon className={classes.settingsIcon} />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
