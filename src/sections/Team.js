/* eslint-disable import/no-anonymous-default-export */

import React from 'react'
import ContentLayout from '../components/ContentLayout'
import Team from '../assets/images/team.png'

export default () => {
  const team = [
    { image: Team, name: 'Ayesha Malik', position: 'Senior Manager  ' },
    { image: Team, name: 'Asad Aziz', position: 'Team Lead' },
    { image: Team, name: 'Damini Singh', position: 'HR' },
    { image: Team, name: 'Samuel Jones', position: 'Developer' },
    { image: Team, name: 'Vishal Singh', position: 'Developer' },
    { image: Team, name: 'Deepak Narain', position: 'Developer' },
  ]
  return <ContentLayout title1="OUR" title2="TEAM" team={team} />
}
