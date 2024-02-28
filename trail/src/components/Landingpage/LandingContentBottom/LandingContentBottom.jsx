import React from 'react'
import LandingApplyOnline from './LandingApplyOnline'
import LandingPayments from './LandingPayments'
import LandingProcess from './LandingProcess'
import LandingSteptoGetloan from './LandingSteptoGetloan'

const LandingContentBottom = () => {
  return (
    <div>
      <LandingApplyOnline/>
      <LandingProcess/>
      <LandingSteptoGetloan/>
      <LandingPayments/>

    </div>
  )
}

export default LandingContentBottom
