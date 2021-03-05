/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import ContentLayout from '../components/ContentLayout'
import CustomImage from '../components/CustomImage'
import AboutImage from '../assets/images/about.png'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  image: {
    marginTop: '40px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginTop: '0px',
    },
  },
}))
export default () => {
  const classes = useStyles()
  const label = [
    'We can help lead your association forward with exceptionally viable IT techniques and execute imaginative arrangements with our IT consultancy services.    ',
    'Inside Logs design and development team assess your current site. We use unique ideas and processes to build a responsive, engaging, and scalable website. We create the perfect platform for optimization and business growth.    ',
    " Our development team takes care of your website's core principles to ensure that it meets your needs.",
  ]
  return (
    <ContentLayout title1="ABOUT" title2="US" label={label}>
      <CustomImage image={AboutImage} className={classes.image} />
    </ContentLayout>
  )
}
