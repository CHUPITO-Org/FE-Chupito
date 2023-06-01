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
import UserIcon from '@material-ui/icons/AccountCircle'

import DrawerMenu from '../DrawerMenu/DrawerMenu'
import { colors } from '../../styles/theme/colors'
import { AppBarWebProps } from '../../types/types'

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
  })
)

// TODO: Move types to a different file

export default function AppBarWeb({
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
// TODO: Add story file for AppBarWeb component
