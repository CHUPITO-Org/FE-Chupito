import { useContext } from 'react'
import { Paper, createStyles, makeStyles } from '@material-ui/core'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import AppBarMobile from '../../components/AppBarMobile/AppBarMobile'
import AppBarWeb from '../../components/AppBarWeb/AppBarWeb'
import NavigationBar from '../Navigation/NavigationBar'
import LayoutContext, { LayoutTypes } from '../../shared/contexts/LayoutContext'
import { colors } from '../../styles/theme/colors'
import { MainProps } from '../../types/types'

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {},
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
  const { layout, title, showLogo } = useContext(LayoutContext)

  const classes = useStyles()
  const theme = useTheme()
  const matchesDesktopDisplay = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <>
      {matchesDesktopDisplay ? (
        <AppBarWeb title={'Special Spider App'} version={''} />
      ) : (
        <AppBarMobile version={''} />
      )}

      {layout === LayoutTypes.NAVIGATION && (
        <NavigationBar title={title} showLogo={showLogo} />
      )}
      <Paper className={classes.mainContainer}>
        <div className={classes.innerContainer}>{version}</div>
      </Paper>
    </>
  )
}
