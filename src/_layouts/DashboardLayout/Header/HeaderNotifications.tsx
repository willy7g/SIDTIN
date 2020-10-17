import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import IconNotifications from '@material-ui/icons/Notifications'
import Menu from '@material-ui/core/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

const notifications = [
  {
    user: {
      name: 'Remy Sharp',
      image: 'https://material-ui.com/static/images/avatar/1.jpg',
    },
    title: 'New Order',
    content: " — I'll be in your neighborhood doing errands this…",
  },
  {
    user: {
      name: 'Travis Howard',
      image: 'https://material-ui.com//static/images/avatar/2.jpg',
    },
    title: 'New Signup',
    content: " — Wish I could come, but I'm out of town this…",
  },
  {
    user: {
      name: 'Oui Oui',
      image: 'https://material-ui.com//static/images/avatar/3.jpg',
    },
    title: 'Refund Request',
    content: 'please provide me a refund for my order',
  },
]

const HeaderNotifications = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <div className={classes.headerNotifications}>
      
    </div>
  )
}


const useStyles = makeStyles(theme => ({
  headerNotifications: {
    marginRight: 23,
    // position: 'relative',
    // position: 'absolute'
  },
  notificationsContainer: {
    // position: 'relative',
  },
  button: {},
  badge: {
    color: '#fff',
  },
  notifications: {
    // width: 360,
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}))

export default HeaderNotifications
