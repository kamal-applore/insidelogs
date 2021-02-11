/* eslint-disable import/no-anonymous-default-export */
import { makeStyles } from '@material-ui/core'
import React from 'react'
import Layout from '../components/Layout'
import AboutUs from '../sections/AboutUs'
import CTABanner from '../sections/CTABanner'
import OurVision from '../sections/OurVision'
import Services from '../sections/Services'
import Team from '../sections/Team'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '30px',
    padding: '0px 20px',

    [theme.breakpoints.up('md')]: {
      padding: '0px 40px',
      marginTop: '50px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '100px',
      marginTop: '90px',
    },
  },
  marginTop: {
    marginTop: '40px',
    [theme.breakpoints.up('md')]: {
      marginTop: '70px',
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
export default () => {
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.root}>
        <AboutUs />
        <div className={classes.marginTop}>
          <OurVision />
        </div>
        <div className={classes.marginTop}>
          <Services />
        </div>
        <div className={classes.marginTop}>
          <Team />
        </div>
      </div>
      <div className={classes.marginTop}>
        <CTABanner
          heading="Ready to work for your project?"
          label="Our team is ready to take your buisness at high simply contact us to discuss your dream project"
          button="Contact Us"
          about
        />
      </div>
    </Layout>
  )
}
