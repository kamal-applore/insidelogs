import { makeStyles } from '@material-ui/core'
import React from 'react'
import CustomHeading from './CustomHeading'
import CustomImage from './CustomImage'
import CustomLabel from './CustomLabel'

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.common.white,
    margin: '20px 0px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '26px',
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: '24px',
    },
  },
  label: {
    color: theme.palette.common.white,
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
      fontWeight: 300,
      //   marginBottom: '24px',
      //   lineHeight: '28px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '18px',
      fontWeight: 300,
      //   marginBottom: '24px',
      lineHeight: '28px',
    },
  },
  image: {
    width: '49px',
    marginLeft: '5px',
    [theme.breakpoints.up('md')]: {
      marginLeft: '9px',
    },
  },
}))

export default function FooterContent({ heading, label, logo }) {
  const classes = useStyles()
  return (
    <>
      <CustomHeading heading={heading} className={classes.heading} />
      {logo
        ? logo.map((item, index) => <CustomImage image={item} className={classes.image} />)
        : label.map((item, index) => <CustomLabel label={item} key={index} className={classes.label} />)}
    </>
  )
}
