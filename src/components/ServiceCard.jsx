import { Card, makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.up('md')]: {
      // paddingLeft: '70px',
    },
    [theme.breakpoints.up('lg')]: {
      // paddingLeft: '130px',
      // marginTop: '90px',
      backgroundColor: '#6B849F',
    },
  },
  marginTop: {
    [theme.breakpoints.up('md')]: {
      // paddingLeft: '70px',
    },
    [theme.breakpoints.up('lg')]: {
      // paddingLeft: '130px',
      marginTop: '120px',
    },
  },
  // heroSection: {
  //   marginTop: '30px',
  //   padding: '0px 10px',
  //   [theme.breakpoints.up('md')]: {
  //     marginTop: '50px',
  //     padding: 0,
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     marginTop: '107px',
  //   },
  // },
  // ourServices: {
  //   marginTop: '50px',
  //   padding: '0px 10px',
  //   [theme.breakpoints.up('md')]: {
  //     marginTop: '50px',
  //     padding: 0,
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     marginTop: '107px',
  //   },
  // },
}))

export default function ServiceCard() {
  const classes = useStyles()
  return <Card className={classes.card}>as</Card>
}
