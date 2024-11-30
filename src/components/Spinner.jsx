import React from 'react'
import { Spinner } from '@chakra-ui/react'

const Spinners = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </div>
  )
}

export default Spinners
