import Link from 'next/link'
import React from 'react'

export const HomePage = () => {
  return (
    <div className="w-full ">
      <div
        className=" relative w-full banner h-[700px] bg-[url('/images/bigbenImg.webp')] bg-cover overflow-hidden"
      >
        <div className="clound1 absolute top-[60px]">
          <img src="/images/cloundImg.webp" alt='Cloud Run' />
        </div>
        <div className="clound2 absolute top-[-50px]">
          <img src="/images/cloundImg2.webp" alt='Cloud Run' />
        </div>
        <div className="clound3 absolute top-[0px]">
          <img src="/images/cloundImg.webp" alt='Cloud Run' />
        </div>
        <div className="clound4 absolute top-[0px]">
          <img src="/images/cloundImg2.webp" alt='Cloud Run' />
        </div>
      </div>
      <div className="bg-[url('/images/home-background-navbar.webp')] bg-cover w-full">
        <div className="home-title w-full text-center  font-extrabold  text-8xl ">
          <h1>Choose your skill</h1>
        </div>
        <div className="grid md:grid-cols-4 py-[32px] grid-cols-2 gap-4">
          <div className="m-auto flex flex-col px-[32px] py-[16px] bg-white rounded-full">
            <img src="/images/ListeningIcon.webp" alt='Listening Icon' />
            <div className="text-center text-[24px] font-bold text-orange-500">Listening</div>
          </div>
          <div className="m-auto flex flex-col px-[32px] py-[16px] bg-white rounded-full">
            <img src="/images/ReadingIcon.webp" alt='Reading Icon'/>
            <div className="text-center text-[24px] font-bold text-orange-500">Reading</div>
          </div>
          <div className="m-auto flex flex-col px-[32px] py-[16px] bg-white rounded-full">
            <img src="/images/WrittingIcon.webp"alt='Writting Icon' />
            <div className="text-center text-[24px] font-bold text-orange-500">Writting</div>
          </div>
          <div className="m-auto flex flex-col px-[32px] py-[16px] bg-white rounded-full">
            <img src="/images/SpeakingIcon.webp" alt='Speaking Icon' />
            <div className="text-center text-[24px] font-bold text-orange-500">Speaking</div>
          </div>
        </div>
      </div>
      <div
        className=" w-full bg-[url('/images/background-footer.webp')] h-[490px] bg-cover"
      >
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
