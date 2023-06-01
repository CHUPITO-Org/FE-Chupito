import { ReactNode, useContext } from 'react'
import { Paper, createStyles, makeStyles } from '@material-ui/core'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { AppBarWeb, AppBarMobile } from '../FullAppBar/FullAppBar'
import NavigationBar from '../Navigation/NavigationBar'
import UserContext from '../../shared/contexts/UserContext'
import LayoutContext, { LayoutTypes } from '../../shared/contexts/LayoutContext'
import { Authentication } from '../../shared/api'
import { colors } from '../../styles/theme/colors'
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

export interface MainProps {
  children: ReactNode
}

export default function Main({ children }: MainProps): JSX.Element {
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
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

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

  return (
    <>
      {/* {layout === LayoutTypes.FULL && (
        <FullAppBar
          title={title}
          version={config.version || ''}
          onLogout={handleLogout}
        />
      )} */}
      {/* TODO: responsive logic should be inside LayoutTypes */}

      {matches && (
        <AppBarWeb
          title={'Special Spider App'}
          version={''}
          onLogout={handleLogout}
        />
      )}
      {!matches && <AppBarMobile version={''} onLogout={handleLogout} />}
      {layout === LayoutTypes.NAVIGATION && (
        <NavigationBar title={title} showLogo={showLogo} />
      )}
      <Paper className={classes.mainContainer}>
        <div className={classes.innerContainer}>{children}</div>
      </Paper>
    </>
  )
}
