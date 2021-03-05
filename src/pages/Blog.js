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
      heading: 'Web Development',
      label:
        "Working in site improvement isn't the handiest method to ceaselessly become more acquainted with new dialects and comprehend them while applying them. It additionally moves toward dominating extra about showcasing, prerequisites hoarding, and human-pc association. Webpage improvement has changed from primary HTML-pushed sites to completely intuitive educational and e-commerce entrances. HTML5, jQuery and node.js didn't exist a few years prior. Presently they're essential for each mission I do.",
      label2: `In this part, you'll find conversations and contemplations on web site improvement that don't effortlessly fit in one of the current orders. We'll discuss web architecture overall, site improvement hardware, convenience and running a web website improvement enterprise. As innovations and programming dialects arise, we'll impart around them here first.Our site producers give ace web application improvement and web design organizations to our clients.  Appnovation gives a spread of web composition and improvement contributions, from creating versatile net advancement answers and responsive web compositions to developing custom web-based business and intranet stories utilizing the popular and approved net innovation. With up to 85% of purchasers visiting an enterprise's or dispatch organization's site before making a purchase, progressively customers settle on choices dependent on their online revel in the appearance, convenience and openness of your site is additional fundamental than at any other time, explicitly in an undeniably more forceful commercial centre. We have practical experience developing intuitive, versatile, logo-orientated, and business undertaking equipped custom web arrangements. We mean to build valuable virtual items designed to start innovativeness and increment ROI. Our custom net improvement administrations comprise of each front-stop and back-quit advancement. Whether it's far improving a current utility or architecting an organization application, our manufacturers are up for the mission. We guarantee that our customer's web website is receptive to each instrument, so no unmarried client is lost. Our responsive site responds to the customer's lead and ecological elements reliant on display size, stage, and heading.Progression has been affirming as a prominent Web Design and Development Company in India. It has gained a couple of prestigious affirmations for its quality Website Development organizations in Delhi. Continuous to the nearby rankings and affirmations, advancement has been dumbfounding concerning naming the best Website Development Company in Delhi, Gurgaon, or other country's mechanical zones. We have been surveyed as the best Web Design and Development Company by various affiliations investigating affiliations' character.What are Offers?`,
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
