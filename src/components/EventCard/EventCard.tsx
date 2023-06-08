import Moment from 'moment'
import {
  Card,
  CardActions,
  CardMedia,
  createStyles,
  Grid,
  makeStyles,
  Button,
  Link,
  Typography,
  Avatar,
  Fab,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
//import { useNavigate } from 'react-router-dom'

import ConferenceStatusSection from './ConferenceStatusSection'
import { Conference } from '../../shared/entities'
import { colors } from '../../styles/theme/colors'

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: '100%',
      height: '20em',
      overflow: 'hidden',
      backgroundColor: colors.transparentYellow,
    },
    cardGridItem: {
      padding: '0.3em',
    },
    image: {
      width: '95%',
      objectFit: 'cover',
      borderRadius: '0.2em',
      marginTop: '1em',
      marginRight: '1em',
      marginLeft: '1em',
    },
    date: {
      paddingTop: '0.5em',
      paddingLeft: '1em',
      paddingRight: '1em',
    },
    day: {
      color: colors.orange,
      fontFamily: 'Exo',
      margin: 0,
    },
    top: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      padding: '1em',
      backgroundColor: colors.black,
      bottom: '20em',
    },
    title: {
      color: colors.white,
      fontFamily: 'Exo',
      whiteSpace: 'nowrap',
      margin: 0,
      paddingRight: '2em',
      display: 'flex',
      justifyContent: 'start',
    },
    eventStatus: {
      display: 'flex',
      justifyContent: 'end',
    },
    userActionsSection: {
      display: 'flex',
      flexDirection: 'column',
      right: '1em',
      bottom: '3em',
    },
    button: {
      position: 'relative',
      right: '0.5em',
      color: colors.white,
      backgroundColor: colors.yellow,
      marginLeft: '15em',
      top: '0.5em',
    },
    link: {
      position: 'relative',
      top: '1.5em',
      left: '6.4em',
      color: colors.blue,
    },
    subscribersSection: {
      display: 'flex',
      flexDirection: 'row',
      //justifyContent: 'start',
      right: '2em',
      bottom: '5em',
    },
    subscribedUserIcon: {
      color: colors.black,
      backgroundColor: colors.white,
    },
    subscribedUsersNumber: {
      right: '1em',
    },
    text: {
      color: colors.black,
    },
  })
)

export interface EventCardProps {
  event: Conference
  //onSelectedEvent: (event: Conference) => void
}

export default function EventCard({
  event,
}: //onSelectedEvent,
EventCardProps): JSX.Element {
  const classes = useStyles()

  const getDatePart = (date: string) => {
    const dateObject = Moment(date, 'YYYY-MM-DD')
    return dateObject.format('D MMM YYYY')
  }

  const url =
    event.images && event.images.length > 0
      ? event.images[0].url
      : '/assets/programmingImg.png'

  //let navigate = useNavigate()

  return (
    <Grid className={classes.cardGridItem} item xs={12} sm={5} md={4} lg={3}>
      <Card className={classes.card}>
        <div>
          <div className={classes.top}>
            <h2 className={classes.title}>{event.name}</h2>
            <div className={classes.eventStatus}>
              <ConferenceStatusSection status={event.status} />
            </div>
          </div>
          <div className={classes.date}>
            <h3 className={classes.day}>{getDatePart(event.eventDate)}</h3>
          </div>
        </div>
        <CardMedia
          className={classes.image}
          component="img"
          image={url}
          height={80}
          title={event.name}
        />
        <CardActions className={classes.userActionsSection}>
          <Button
            variant="contained"
            className={classes.button}
            //onClick={() => navigate('/Login')}
          >
            {'Register'}
          </Button>
          <Link underline="always" className={classes.link} href="#">
            {'+more info '}
          </Link>
        </CardActions>
        <div className={classes.subscribersSection}>
          <Avatar
            className={classes.subscribedUserIcon}
            src={'/avatar.png'}
          ></Avatar>
          <Fab size="small" className={classes.subscribedUsersNumber}>
            <AddIcon />
            {+15}
          </Fab>
          <Typography className={classes.text}>{'Joined'}</Typography>
        </div>
      </Card>
    </Grid>
  )
}
