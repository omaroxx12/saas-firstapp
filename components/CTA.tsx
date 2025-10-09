import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge'>Start learning</div>
       <h2 className='text-3xl font-bold'>

Buils and  persisonlize learning Companion

       </h2>

       <p>
        just testing before creating my own ai assistant
       </p>

       <Image src="/images/cta.svg" alt="cta" width={360} height={232} unoptimized />

       <button className='btn-primary'>

       <Image src="/icons/plus.svg" alt="plus" width={12} height={12} unoptimized />

       <Link href="/companions/new">

                  <p>
                    launch Companion  
                  </p>

        </Link>
  
       </button>



    </section>
  )
}

export default CTA