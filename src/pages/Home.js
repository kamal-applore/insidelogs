/* eslint-disable import/no-anonymous-default-export */
import { makeStyles } from '@material-ui/core'
import React from 'react'
import Layout from '../components/Layout'
import Contact from '../sections/Contact'
import CTABanner from '../sections/CTABanner'
import HeroSection from '../sections/HeroSection'
import OurServices from '../sections/OurServices'
import WhyUs from '../sections/WhyUs'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: '70px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '130px',
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
  heroSection: {
    // marginTop: '30px',
    padding: '0px 10px',
    [theme.breakpoints.up('md')]: {
      // marginTop: '50px',
      padding: 0,
    },
    [theme.breakpoints.up('lg')]: {
      // marginTop: '107px',
    },
  },
  ourServices: {
    // marginTop: '50px',
    padding: '0px 10px',
    [theme.breakpoints.up('md')]: {
      // marginTop: '50px',
      padding: 0,
    },
    [theme.breakpoints.up('lg')]: {
      // marginTop: '107px',
    },
  },
}))

export default () => {
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.marginTop}>
          <HeroSection />
        </div>
        <div className={classes.marginTop}>
          <OurServices />
        </div>
        <div className={classes.marginTop}>
          <WhyUs />
        </div>
      </div>
      {/* < */}
      <CTABanner
        heading="We are here to help brightest minds to endeavor their endless success"
        label="Brightest Minds, Impactful Opportunities"
        button="Join with Us"
      />
      <div className={classes.root}>
        <div className={classes.marginTop}>
          <Contact />
        </div>
      </div>
    </Layout>
  )
}
