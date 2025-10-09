import React from 'react'
import { Button } from '@/components/ui/button'
import CompanionsCard from '@/components/CompanionsCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline '>Popular Companions</h1>
      
      <section className='home-section'>   
        
        <CompanionsCard 
          id="123"
          name="Neura the Brainy Explorer"
          subject="science"
          topic="Neural Network of the Brain"
          duration={45}
          color="#E5D0FF"
        />   
        <CompanionsCard 
          id="456"
          name="Countsy the Number Wizard"
          subject="maths"
          topic="Derivatives & Integrals"
          duration={30}
          color="#FFDA6E"
        />   
         <CompanionsCard 
           id="789"
           name="Wordy the Language Master"
           subject="language"
           topic="Advanced Grammar"
           duration={25}
           color="#A8E6CF"
         />   
      </section>
       
        <section className='home-section'>
          <CompanionsList 
          title="Recent Sessions"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full"
          />
          <CTA />
        </section>


        </main>
  )
}

export default Page
