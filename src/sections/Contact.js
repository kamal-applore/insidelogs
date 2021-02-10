import { Grid } from '@material-ui/core'
import React from 'react'
import ContactForm from '../components/ContactForm'
import ContentLayout from '../components/ContentLayout'
import CustomInput from '../components/CustomInput'

export default function Contact() {
  return (
    <ContentLayout contact>
      <ContactForm />
    </ContentLayout>
  )
}
