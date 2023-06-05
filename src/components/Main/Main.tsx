import { useContext } from 'react'
import { Paper, createStyles, makeStyles } from '@material-ui/core'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import AppBarMobile from '../../components/AppBarMobile/AppBarMobile'
import AppBarWeb from '../../components/AppBarWeb/AppBarWeb'
import NavigationBar from '../Navigation/NavigationBar'
import UserContext from '../../shared/contexts/UserContext'
import LayoutContext, { LayoutTypes } from '../../shared/contexts/LayoutContext'
import { Authentication } from '../../shared/api'
import { colors } from '../../styles/theme/colors'
import { MainProps } from '../../types/types'
// TODO: Return import,linked to LayoutTypes
// import config from '../../environment/environment'
// TODO: Implement route for Login
// import LoginPage from '../../pages/Login/Login'

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      // ...theme.mainContainer
    },
    innerContainer: {
      marginTop: '5em',
      marginBottom: '5em',
      marginRight: '5em',
      marginLeft: '5em',
      [theme.breakpoints.down('sm')]: {
        marginRight: '1.5em',
        marginLeft: '1.5em',
      },

      overflow: 'auto',
      backgroundColor: colors.lightGray,
    },
    full: {
      margin: '0',
      height: '100%',
      width: '100%',
    },
  })
)

export default function Main({ version }: MainProps): JSX.Element {
  // const { isLoggedIn, logout } = useContext(UserContext)
  const { logout } = useContext(UserContext)
  const { layout, title, showLogo } = useContext(LayoutContext)

  const classes = useStyles()

  // if (!isLoggedIn) {
  //   return (
  //     <Paper className={classes.mainContainer}>
  //       <div className={classes.innerContainer}>
  //         <LoginPage />
  //       </div>
  //     </Paper>
  //   )
  // }
  const theme = useTheme()
  const matchesDesktopDisplay = useMediaQuery(theme.breakpoints.up('sm'))

  const handleLogout = () => {
    const api = Authentication()
    api
      .logout()
      .then(() => {
        logout()
      })
      .catch((error) => {
        console.error(error)
      })
  }
  //TODO: Move AppBarWebDisplay and AppBarMobileDisplay to a component FullAppBar
  const AppBarWebDisplay = () => {
    return (
      <AppBarWeb
        title="Special Spider App"
        version={''}
        onLogout={handleLogout}
      />
    )
  }

  const AppBarMobileDisplay = () => {
    return <AppBarMobile version={''} />
  }

  return (
    <>
      {/* {layout === LayoutTypes.FULL && (
        <FullAppBar
          title={title}
          version={config.version || ''}
          onLogout={handleLogout}
        />
      )} */}
      {/* TODO: return LayoutTypes for FullAppBar */}

      {matchesDesktopDisplay ? AppBarWebDisplay() : AppBarMobileDisplay()}

      {layout === LayoutTypes.NAVIGATION && (
        <NavigationBar title={title} showLogo={showLogo} />
      )}
      <Paper className={classes.mainContainer}>
        <div className={classes.innerContainer}>{version}</div>
      </Paper>
    </>
  )
}
