import Link from 'next/link'
import React from 'react'

export const HomePage = () => {
  return (
    <div className="w-full">
      <div className="w-full banner">
        <img className="w-full opacity-8" src="/images/home-background.jpg"></img>
      </div>

      <div className="bg-[url('/images/home-background-navbar.png')] bg-contain  w-full">
        <div className="text-center py-[16px] font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Choose your skill
        </div>
        <div className="grid md:grid-cols-4 py-[32px] grid-cols-2 gap-4">
          <div className="m-auto flex flex-col px-[32px] py-[16px] bg-white rounded-full">
            <img className="w-[100px] h-[100px]" src="/images/ListeningIcon.png "></img>
            <div className="text-center text-[24px] font-bold text-orange-500">Listening</div>
          </div>
          <div className="m-auto flex flex-col px-[32px] py-[16px] bg-white rounded-full">
            <img className="w-[100px] h-[100px]" src="/images/ReadingIcon.png"></img>
            <div className="text-center text-[24px] font-bold text-orange-500">Reading</div>
          </div>
          <div className="m-auto flex flex-col px-[32px] py-[16px] bg-white rounded-full">
            <img className="w-[100px] h-[100px]" src="/images/WrittingIcon.png"></img>
            <div className="text-center text-[24px] font-bold text-orange-500">Writting</div>
          </div>
          <div className="m-auto flex flex-col px-[32px] py-[16px] bg-white rounded-full">
            <img className="w-[100px] h-[100px]" src="/images/SpeakingIcon.png"></img>
            <div className="text-center text-[24px] font-bold text-orange-500">Speaking</div>
          </div>
        </div>
      </div>
      <div className=" w-full bg-[url('/images/background-footer.jpg')] h-[490px] bg-cover">
        <div className=" w-[80%] m-auto text-center pt-[48px]">
          <div className="text-[50px] font-bold py-[36px]">Start a Journey. Enroll Now</div>
          <div className="opacity-75 uppercase mb-[48px]">LEARN SOMETHING WHEREVER YOU ARE</div>

          <Link className="rounded-[16px] px-[54px] py-[20px]  " href={'/login'}>
            Join now with us
          </Link>
        </div>
      </div>
    </div>
  )
}
