import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import ContentLayout from '../components/ContentLayout'
import CustomButton from '../components/CustomButton'
import CustomHeading from '../components/CustomHeading'
import CustomLabel from '../components/CustomLabel'
import Title from '../components/Title'
import Icon1 from '../assets/images/icon1.png'
import Icon2 from '../assets/images/icon2.png'
import Icon3 from '../assets/images/icon3.png'
import Icon4 from '../assets/images/icon4.png'
import CustomImage from '../components/CustomImage'

const useStyles = makeStyles((theme) => ({
  // content: {
  //   marginTop: '30px',
  //   [theme.breakpoints.up('md')]: { marginTop: '50px' },
  //   [theme.breakpoints.up('lg')]: { marginTop: '85px' },
  // },

  label: {
    textAlign: 'center',
    margin: '20px 0px',

    [theme.breakpoints.up('md')]: {
      marginTop: '15px',
      marginBottom: '80px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '24px',
      marginBottom: '104px',
    },
  },
  image: {
    width: '80px',
    display: 'flex',
    margin: '0px auto',
  },
}))

export default function WhyUs() {
  const classes = useStyles()
  const whyUs = [
    {
      icon: Icon1,
      label: 'Expert Work',
    },
    {
      icon: Icon2,
      label: '24/7 Support',
    },
    {
      icon: Icon3,
      label: 'Creative Design',
    },
    {
      icon: Icon4,
      label: 'Well Experienced',
    },
  ]
  return (
    <div>
      <ContentLayout
        heading="Inside Logs have expert workers who
        withstand with your work and create an 
        well experience for your buisness"
        title1="WHY"
        title2="US"
      >
        <Grid container className={classes.content}>
          {whyUs.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <CustomImage image={item.icon} className={classes.image} />
              <CustomLabel label={item.label} className={classes.label} />
            </Grid>
          ))}
        </Grid>
      </ContentLayout>
    </div>
  )
}
