/* eslint-disable import/no-anonymous-default-export */

import React from 'react'
import ContentLayout from '../components/ContentLayout'
import Team from '../assets/images/team.png'

export default () => {
  const team = [Team, Team, Team, Team, Team, Team]
  return <ContentLayout title1="OUR" title2="TEAM" team={team} />
}
