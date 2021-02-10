import { Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import CustomButton from './CustomButton'
import CustomInput from './CustomInput'

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: '25px',
    width: '100%',

    [theme.breakpoints.up('md')]: {
      //   padding: '10px 30px',
      marginTop: '52px',
      fontSize: '16px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '10px 40px',
      marginTop: '62px',
      width: '100%',
      //   fontSize: '22px',
    },
  },
}))

export default function ContactForm() {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const classes = useStyles()
  return (
    <form>
      <Grid container>
        <Grid item xs={12} md={5}>
          <CustomInput placeholder="NAME" value={name} handleChange={setName} />
        </Grid>
        <Grid item md={1} />
        <Grid item xs={12} md={6}>
          <CustomInput placeholder="PHONE NO." value={mobile} handleChange={setMobile} />
        </Grid>

        <Grid item xs={12} md={5}>
          <CustomInput placeholder="COMPANY" value={company} handleChange={setCompany} />
        </Grid>
        <Grid item md={1} />
        <Grid item xs={12} md={6}>
          <CustomInput placeholder="MESSAGE" value={message} handleChange={setMessage} />
        </Grid>
        <Grid item xs={12} md={12}>
          <CustomInput placeholder="EMAIL" value={email} handleChange={setEmail} />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <CustomButton text="SEND MESSAGE" className={classes.button} />
        </Grid>
      </Grid>
    </form>
  )
}
