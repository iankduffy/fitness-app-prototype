import Image from 'next/image'
import styles from './page.module.css'
import { PageLink } from 'components/shared/link'

export default function Home() {
  return (
    <div className='bg-gray-50 min-h-screen p-3 grid gap-3'>
      <PageLink 
        url='/' image={'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'} mainText={'Start Workout'} description={''} />
      <PageLink 
        url='/' image={''} mainText={'Exercises'} description={''} />
      <div className='grid grid-cols-2 gap-3'>
        <PageLink 
          url='/' image={''} mainText={'Recipes'} description={''} />
        <PageLink 
          url='/' image={''} mainText={'Progress?'} description={''} />
      </div>
      <PageLink 
          url='/' image={''} mainText={'Profile'} description={''} />
    </div>
  )
}
