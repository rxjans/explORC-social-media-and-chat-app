import { Route, Routes } from 'react-router-dom'
import PostPage from './pages/PostPage'
import UserPage from './pages/UserPage'

import Header from './components/Header';

function App() {
 

  return (
    <>
      <div className='flex justify-center'>
        <div className='max-w-[620px] w-full'>
          <Header />
          <Routes>
            <Route path="/:username" element={<UserPage />} />
            <Route path="/:username/post/:pID" element={<PostPage />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
