/* eslint-disable import/no-anonymous-default-export */
import { makeStyles } from '@material-ui/core'
import React from 'react'
import ContentLayout from '../components/ContentLayout'
import Layout from '../components/Layout'
import AboutUs from '../sections/AboutUs'
import CTABanner from '../sections/CTABanner'
import OurVision from '../sections/OurVision'
import Services from '../sections/Services'
import Team from '../sections/Team'
import Blog from '../assets/images/blog.png'

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

  blog: {
    // width: '100%',
    // marginTop: '10px',
    marginTop: '38px',

    [theme.breakpoints.up('md')]: {
      // marginTop: '28px',
      // width: '90%',
      marginTop: '48px',

      // fontSize: '30px',
      // fontWeight: theme.typography.fontWeightBold,
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '98px',
      // fontSize: '40px',
      // width: '90%',
    },
  },
  content: {
    // width: '100%',
    // marginTop: '10px',
    marginTop: '38px',
    backgroundColor: '#F2F8FF',
    [theme.breakpoints.up('md')]: {
      // marginTop: '28px',
      // width: '90%',
      marginTop: '48px',

      // fontSize: '30px',
      // fontWeight: theme.typography.fontWeightBold,
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '98px',
      // fontSize: '40px',
      // width: '90%',
    },
  },
}))
export default () => {
  const classes = useStyles()
  const blog = [
    {
      heading: 'Road to Redemption',
      label:
        'Road to Redemption Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      label2:
        'Road to Redemption Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      image: Blog,
    },
    {
      heading: 'Road to Redemption',
      label:
        'Road to Redemption Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      label2:
        'Road to Redemption Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      image: Blog,
      className: classes.blog,
    },
    {
      heading: 'Road to Redemption',
      label:
        'Road to Redemption Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      label2:
        'Road to Redemption Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      image: Blog,
      className: classes.blog,
    },
  ]
  return (
    <Layout>
      {/* <div className={classes.root}>
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
      </div> */}

      <div className={classes.root}>
        <ContentLayout title1="OUR" title2="BLOGS" blog={blog}>
          {/* <div className={classes.content}>sdsdsdsd</div> */}
        </ContentLayout>
      </div>
    </Layout>
  )
}
