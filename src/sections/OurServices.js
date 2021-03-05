import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import ContentLayout from '../components/ContentLayout'
import CustomButton from '../components/CustomButton'
import CustomHeading from '../components/CustomHeading'
import CustomLabel from '../components/CustomLabel'
import Title from '../components/Title'

const useStyles = makeStyles((theme) => ({
  // content: {
  //   marginTop: '30px',

  //   [theme.breakpoints.up('md')]: {
  //     //   fontSize: '16px',
  //     //   lineHeight: '24px',
  //     marginTop: '50px',
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     //   fontSize: '16px',
  //     //   lineHeight: '24px',
  //     marginTop: '85px',
  //   },
  // },
  heading: {
    marginTop: '20px',
    marginBottom: '20px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up('md')]: {
      //   fontSize: '16px',
      //   lineHeight: '24px',
      marginTop: '50px',
      marginBottom: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      //   fontSize: '16px',
      //   lineHeight: '24px',
      marginTop: '85px',
      marginBottom: '68px',
    },
  },

  label: {
    marginTop: '20px',
    [theme.breakpoints.up('md')]: {
      marginTop: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '16px',
      lineHeight: '24px',
      marginTop: '28px',
    },
  },
}))

export default function OurServices() {
  const classes = useStyles()
  const services = [
    {
      title: 'Web Development',
      subTitle:
        'Your website is the most visible asset, and it is the first impression of your company. Inside logos expertise in developing a multifunctional, robust, dynamic, and scalable website. A Full-Service with Excellence in Web Design & Development Services. We design and develop a wide variety of websites. Create user-centric designs for a successful engagement and user experience.',
    },
    {
      title: 'Database Analysis',
      subTitle:
        "Every business needs a well-designed database management tool. Without a database, you have no clue what is occurring within your company. You can quickly input information and keep track of your activities, monitoring your business's progression. We design and create countless tools, frameworks, and platforms to help your company.",
    },
    {
      title: 'Server Security',
      subTitle:
        'Server is heart of every organization. We build tools to help small and medium-sized organizations around the world control their web security. We know that proper tools can bridge the gap between security and development to reduce stress.',
    },
  ]
  return (
    <div>
      <ContentLayout
        heading="We are dedicated to developing software that is 100% suited to your needs. Inside Logs will work in accordance with the preferred project management methodology."
        title1="OUR"
        title2="SERVICES"
      >
        {services.map((item, index) => (
          <div key={index} className={classes.content}>
            <CustomHeading heading={item.title} />
            <CustomLabel label={item.subTitle} className={classes.label} />
            <br />
          </div>
        ))}
      </ContentLayout>
    </div>
  )
}
