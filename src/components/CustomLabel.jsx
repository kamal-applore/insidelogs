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
    [theme.breakpoints.up('md')]: { textAlign: 'left', lineHeight: '24px' },
  },
  icon: {
    paddingLeft: '13px',
  },
}))

export default ({ label, className, icon, onClick, underline }) => {
  const classes = useStyles()
  return (
    <>
      {icon ? (
        <Box display="flex">
          <Typography className={className ? `${className} ${classes.label}` : classes.label}> {label} </Typography>
          {icon ? <div className={`${className} ${classes.icon}`}>{icon}</div> : null}
        </Box>
      ) : (
        <Typography className={className ? `${className} ${classes.label}` : classes.label} onClick={onClick}>
          {label}
          {underline}
        </Typography>
      )}
    </>
  )
}
