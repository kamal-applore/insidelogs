import React from 'react'
import ContentLayout from '../components/ContentLayout'
import Web from '../assets/images/web.png'
import Database from '../assets/images/database.png'
import Security from '../assets/images/security.png'

export default function Services() {
  const services = [Web, Database, Security]
  return <ContentLayout title1="OUR" title2="SERVICES" service={services} />
}
