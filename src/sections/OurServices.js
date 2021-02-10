import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import ContentLayout from '../components/ContentLayout'
import CustomButton from '../components/CustomButton'
import CustomHeading from '../components/CustomHeading'
import CustomLabel from '../components/CustomLabel'
import Title from '../components/Title'

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: '30px',

    [theme.breakpoints.up('md')]: {
      //   fontSize: '16px',
      //   lineHeight: '24px',
      marginTop: '50px',
    },
    [theme.breakpoints.up('lg')]: {
      //   fontSize: '16px',
      //   lineHeight: '24px',
      marginTop: '85px',
    },
  },
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
        "We are a professionally recognized website designing, internet marketing and software development company having huge experience in developing corporate designing, software development and digital marketing best match to customer's need and requirements. We have expertise in wor",
    },
    {
      title: 'Database Analysis',
      subTitle:
        "We are a professionally recognized website designing, internet marketing and software development company having huge experience in developing corporate designing, software development and digital marketing best match to customer's need and requirements. We have expertise in wor",
    },
    {
      title: 'Server Security',
      subTitle:
        "We are a professionally recognized website designing, internet marketing and software development company having huge experience in developing corporate designing, software development and digital marketing best match to customer's need and requirements. We have expertise in wor",
    },
  ]
  return (
    <div>
      <ContentLayout
        heading="Inside Logs provide wide range of digital services from full fledged Web Development to Security to support your buisness"
        title1="OUR"
        title2="SERVICES"
      >
        {services.map((item, index) => (
          <div key={index} className={classes.content}>
            <CustomHeading heading={item.title} />
            <CustomLabel label={item.subTitle} className={classes.label} />
          </div>
        ))}
      </ContentLayout>
    </div>
  )
}
