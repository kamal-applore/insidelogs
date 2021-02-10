import { Divider, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import CustomHeading from '../components/CustomHeading'
import CustomLabel from '../components/CustomLabel'
import FooterContent from '../components/FooterContent'
import Facebook from '../assets/images/facebook.png'
import Twitter from '../assets/images/twitter.png'
import Instagram from '../assets/images/instagram.png'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    padding: '30px 0px 0px 20px',
    marginTop: '50px',

    [theme.breakpoints.up('md')]: {
      padding: '30px 0px 0px 20px',
      marginTop: '50px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '64px 0px 0px 0px',
      marginTop: '100px',
    },
  },
  content: {
    backgroundColor: theme.palette.common.black,
    padding: '0px 0px 40px 0px',

    [theme.breakpoints.up('md')]: {
      padding: '0px 0px 40px 0px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0px 0px 70px 0px',
    },
  },
  label: {
    color: theme.palette.common.white,
    textAlign: 'center',
    borderTop: '1px solid #3C9AFF',
    // padding: '13px 0px',
    // fontSize: '16px',
    padding: '10px 0px',
    fontSize: '14px',
    [theme.breakpoints.up('md')]: {
      padding: '10px 0px',
      fontSize: '14px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '13px 0px',
      fontSize: '16px',
    },
  },
}))

export default function Footer() {
  const classes = useStyles()
  const footerContent = [
    {
      heading: 'ADDRESS',
      label: ['52 Amarsa St, Dubai Marina,', 'DUBAI UAE', ' info@insidelogs.com'],
    },
    {
      heading: 'CONTACT INFO',
      label: [
        'Aayesha Malik',
        'Senior operations manager',
        'phone: +91-9870337598',
        'Email: aayesha.malik@insidelogs.com',
      ],
      grid: 4,
    },
    {
      heading: 'FOLLOW US',
      logo: [Facebook, Twitter, Instagram],
    },
  ]
  const year = new Date().getFullYear()
  return (
    <div className={classes.root}>
      <Grid container className={classes.content}>
        <Grid item lg={1} />
        {footerContent.map((item, index) => (
          <Grid item md={4} lg={item.grid ? item.grid : 3} key={index}>
            <FooterContent heading={item.heading} label={item.label} logo={item.logo} />
          </Grid>
        ))}
      </Grid>

      <CustomLabel label={`Copyright © ${year} Inside Logs`} className={classes.label} />
    </div>
  )
}
