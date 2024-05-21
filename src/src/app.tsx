import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { AiTwotoneMail, AiTwotonePhone, AiOutlineUser } from 'react-icons/ai'

import Avatar from 'components/Avatar'
import Form from 'components/Form'
import logo from 'assets/logo.svg'
import Fence from 'components/Fence'

function App() {
  const [isFlipped, setIsFlipped] = useState(false)

  const Profile = () => (
    <div className="mt-14 flex flex-col gap-7 text-gray-600 min-h-[266px]">
      <div className="flex items-center rounded-lg  bg-white p-4">
        <AiOutlineUser size={24} />
        <p className="ml-2">
          User: <span>1303737846@qq.com</span>
        </p>
      </div>
      <div className="flex items-center rounded-lg  bg-white p-4">
        <AiTwotoneMail size={24} />
        <p className="ml-2">
          Email: <span>1303737846@qq.com</span>
        </p>
      </div>
      <div className="flex items-center rounded-lg  bg-white p-4">
        <AiTwotonePhone size={24} />
        <p className="ml-2">
          Phone: <span>1303737846@qq.com</span>
        </p>
      </div>
      <div className="my-10 flex">
        <a
          className="cursor-pointer inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          Edit
        </a>
      </div>
    </div>
  )

  return (
    <div className="relative overflow-hidden bg-[#ebeaeea6]">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-4">
          <div className="sm:max-w-xl">
            <div className="my-4">
              <Avatar size="large" src={logo} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-tight">
              Photographer's profile center for
              <span className="text-indigo-600"> Coding Test</span>.
            </h1>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
              <Profile />
              <Form onSubmit={() => {}} />
            </ReactCardFlip>
          </div>
          <Fence />
        </div>
      </div>
    </div>
  )
}

export default App
