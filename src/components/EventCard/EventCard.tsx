import Moment from 'moment'
import {
  Card,
  CardActionArea,
  CardMedia,
  createStyles,
  Grid,
  makeStyles,
  Button,
  Link,
  Fab,
  Typography,
} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded'

import ConferenceStatusSection from './ConferenceStatusSection'
import { Conference } from '../../shared/entities'
import { colors } from '../../styles/theme/colors'

const eventImg = require('../../assets/programmingImg.png')

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: '100%',
      height: '20em',
      overflow: 'hidden',
      backgroundColor: colors.transparentYellow,
      display: 'flex',
    },
    cardGridItem: {
      padding: '0.2em',
    },
    image: {
      width: '100%',
      height: '10em',
      objectFit: 'cover',
    },
    location: {
      backgroundColor: colors.dark,
      paddingLeft: '0.5em',
      paddingRight: '0.5em',
      borderRadius: '5%',
      color: colors.black,
    },
    locationName: {
      marginTop: '1em',
      marginBottom: '1em',
      marginLeft: '0.5em',
      marginRight: '0.5em',
    },
    date: {
      position: 'relative',
      paddingTop: '0.3em',
      paddingBottom: '0.3em',
      paddingLeft: '1em',
      paddingRight: '1em',
    },
    day: {
      color: colors.orange,
      fontFamily: 'Exo',
      margin: 0,
    },
    top: {
      display: 'grid',
      width: '100%',
      padding: '1em',
      backgroundColor: colors.orangeTransparent,
    },
    title: {
      color: colors.white,
      fontFamily: 'Exo',
      whiteSpace: 'nowrap',
      margin: 0,
    },
    eventStatus: {
      position: 'absolute',
      right: '1em',
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
      left: '16.5em',
      color: colors.blue,
    },
    suscribersSection: {
      position: 'relative',
      bottom: '2em',
      left: '1em',
      display: 'flex',
      flexDirection: 'row',
    },
    suscribedUserIcon: {
      position: 'relative',
      //bottom: '2em',
      //right: '3em',
      color: colors.black,
      backgroundColor: colors.white,
      borderColor: colors.orange,
      borderRadius: '50%',
    },
    text: {
      color: colors.black,
      margin: '0.5em',
    },
  })
)

//type DateParts = 'day' | 'month'

export interface EventCardProps {
  event: Conference
  onSelectedEvent: (event: Conference) => void
}

export default function EventCard({
  event,
  onSelectedEvent,
}: EventCardProps): JSX.Element {
  const classes = useStyles()

  const handleCardClicked = () => {
    //     const {event, history, userContext, onSelectedEvent} = this.props;
    //     const {isAdmin, role} = userContext.user;
    //     if (isAdmin || role === 'Marketing') {
    //       history.push(`/event/update/${event.id}`);
    //       return;
    //     }

    //     if (!onSelectedEvent) {
    //       return;
    //     }
    onSelectedEvent(event)
  }

  const getDatePart = (date: string) => {
    const dateObject = Moment(date, 'YYYY-MM-DD')
    return dateObject.format('D MMM YYYY')
  }

  /*   const image =
    event.images && event.images.length > 0
      ? event.images[0].url
      : '/images/NoImage.png' */

  return (
    <Grid className={classes.cardGridItem} item xs={12} sm={5} md={4} lg={3}>
      <Card className={classes.card}>
        <CardActionArea onClick={handleCardClicked}>
          <div className={classes.top}>
            <h2 className={classes.title}>{event.name}</h2>
            <div className={classes.eventStatus}>
              <ConferenceStatusSection status={event.status} />
            </div>
          </div>
          <div className={classes.date}>
            <h3 className={classes.day}>{getDatePart(event.eventDate)}</h3>
          </div>
          <CardMedia
            className={classes.image}
            component="img"
            image={eventImg}
            title={event.name}
          />
          <Button variant="contained" className={classes.button} href="#">
            {'Register'}
          </Button>
          <Link underline="hover" className={classes.link} href="#">
            {'+more info '}
          </Link>
          <div className={classes.suscribersSection}>
            <Fab
              size="medium"
              aria-label="add"
              className={classes.suscribedUserIcon}
            >
              <AccountCircleIcon />
            </Fab>
            <Typography className={classes.text} variant="h6">
              {'Joined'}
            </Typography>
          </div>

          <div className={classes.location}></div>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
