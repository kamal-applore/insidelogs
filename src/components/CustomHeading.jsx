import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: theme.typography.body1.fontFamily,
    color: theme.palette.common.dark,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '20px',
    textAlign: 'left',

    [theme.breakpoints.up('lg')]: {
      fontSize: '26px',
      lineHeight: '30.47px',
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
}))

export default function CustomHeading({ heading, className }) {
  const classes = useStyles()
  return (
    <Typography className={className ? `${className} ${classes.heading}` : classes.heading}> {heading} </Typography>
  )
}
