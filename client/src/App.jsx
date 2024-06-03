import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import { Routes } from 'react-router-dom'
import PostPage from './pages/PostPage'
import UserPage from './pages/UserPage'


function App() {
 

  return (
    <>
      <div className='flex justify-center'>
        <div className='max-w-[620px] w-full'>
          <Routes>
            <Route path="/:username" element={<UserPagePage />} />
            <Route path="/:username/post/:pID" element={<PostPage />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
