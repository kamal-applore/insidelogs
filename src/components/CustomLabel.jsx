/* eslint-disable */
import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  label: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.dark,
    fontSize: '16px',
    fontWeight: 400,
    // textAlign: 'center',
    [theme.breakpoints.up('md')]: { textAlign: 'left', lineHeight: '26px', fontSize: '18px' },
    [theme.breakpoints.up('lg')]: { lineHeight: '30px', fontSize: '20px' },
  },
  icon: {
    paddingLeft: '13px',
  },
}))

export default ({ label, className, onClick, center }) => {
  const classes = useStyles()
  return <Typography className={className ? `${className} ${classes.label}` : classes.label}> {label} </Typography>
}
