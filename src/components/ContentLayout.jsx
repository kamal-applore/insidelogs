import { Grid, Hidden, makeStyles } from '@material-ui/core'
import React from 'react'
import CustomButton from './CustomButton'
import CustomHeading from './CustomHeading'
import CustomImage from './CustomImage'
import CustomLabel from './CustomLabel'
import Title from './Title'

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: '30px',

    [theme.breakpoints.up('md')]: {
      marginTop: '50px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '85px',
    },
  },
  heading: {
    // marginTop: '20px',
    marginBottom: '20px',
    fontWeight: 400,
    [theme.breakpoints.up('md')]: {
      // marginTop: '50px',
      marginBottom: '40px',
      // fontWeight: theme.typography.fontWeightBold,
    },
    [theme.breakpoints.up('lg')]: {
      // marginTop: '85px',
      marginBottom: '68px',
      lineHeight: '38px',
    },
  },

  label: {
    // marginTop: '20px',
    [theme.breakpoints.up('md')]: {
      // marginTop: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '16px',
      lineHeight: '24px',
      // marginTop: '28px',
    },
  },
  label2: {
    // marginTop: '20px',
    [theme.breakpoints.up('md')]: {
      // marginTop: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '26px',
      lineHeight: '38px',
      // marginTop: '28px',
    },
  },
  heading2: {
    marginTop: '0px',
    marginBottom: '20px',
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',

      marginTop: '50px',
      marginBottom: '30px',
      fontSize: '26px',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '85px',
      marginBottom: '52px',
      lineHeight: '22px',
      fontSize: '32px',
    },
  },
  labelNew: {
    // marginTop: '20px',
    [theme.breakpoints.up('md')]: {
      // marginTop: '20px',
    },
    [theme.breakpoints.up('lg')]: {
      // fontSize: '24px',
      // lineHeight: '38px',
      fontWeight: theme.typography.fontWeightRegular,
      marginTop: '28px',
    },
  },
  image: {
    width: '100%',
    marginTop: '10px',

    [theme.breakpoints.up('md')]: {
      marginTop: '28px',
      width: '90%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '28px',
      // width: '90%',
    },
  },
  heading3: {
    // width: '100%',
    // marginTop: '10px',
    margin: '0px 0px 18px 0px',

    [theme.breakpoints.up('md')]: {
      // marginTop: '28px',
      // width: '90%',
      margin: '0px 0px 28px 0px',
      fontSize: '30px',
      fontWeight: theme.typography.fontWeightBold,
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0px 0px 38px 0px',
      fontSize: '40px',
      // width: '90%',
    },
  },
  // blog: {
  //   // width: '100%',
  //   // marginTop: '10px',
  //   margin: '0px 0px 18px 0px',

  //   [theme.breakpoints.up('md')]: {
  //     // marginTop: '28px',
  //     // width: '90%',
  //     marginTop: '28px',

  //     // fontSize: '30px',
  //     // fontWeight: theme.typography.fontWeightBold,
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     marginTop: '88px',
  //     // fontSize: '40px',
  //     // width: '90%',
  //   },
  // },
}))

export default function ContentLayout({
  title1,
  title2,
  button,
  heading,
  children,
  contact,
  label,
  gridSize = 5,
  team,
  blog,
}) {
  const classes = useStyles()
  return (
    <>
      {title1 && title2 ? <Title heading={title1} heading2={title2} /> : null}
      {team ? (
        <>
          <Grid container>
            {team.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <CustomImage image={item} className={classes.image} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : blog ? (
        <>
          <Grid container>
            {blog.map((item, index) => (
              <Grid item lg={9}>
                <Grid container>
                  <Grid item xs={12} md={12} key={index} className={item.className}>
                    <CustomHeading heading={item.heading} className={classes.heading3} />
                    <CustomLabel label={item.label} />
                    <br />
                    <CustomImage image={item.image} />
                    <br />
                    <br />
                    <CustomLabel label={item.label2} />
                  </Grid>
                </Grid>
              </Grid>
            ))}
            <Grid item md={3}>
              {children}
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid container>
            <Grid item xs={12} md={gridSize}>
              {contact ? (
                <div>
                  <CustomHeading heading="CONTACT US" className={classes.heading2} />
                  <Hidden smDown>
                    <CustomLabel label="Contact Us to discuss your" className={classes.label2} />
                    <CustomLabel label="dream project" className={classes.label2} />
                  </Hidden>
                </div>
              ) : label ? (
                <>
                  {label.map((item, index) => (
                    <CustomLabel label={item} key={index} className={classes.labelNew} />
                  ))}
                </>
              ) : (
                <CustomHeading heading={heading} className={classes.heading} />
              )}
              {button ? <CustomButton text="START YOUR PROJECT" /> : null}
            </Grid>
            <Grid item md={1} />
            <Grid item md={5}>
              {children}
            </Grid>
          </Grid>
        </>
      )}
    </>
  )
}
