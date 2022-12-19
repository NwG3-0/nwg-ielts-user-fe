import { ListeningIcon, ReadingIcon, SpeakingIcon, WritingIcon } from '@components/common/CustomIcon'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [isCloudRun, setCloudRun] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setCloudRun(true)
    }, 1500)
  }, [])

  return (
    <div className="w-full">
      <div className="relative w-full h-[900px] bg-[url('/images/bigbenImg.webp')] bg-cover overflow-hidden">
        {isCloudRun && (
          <>
            <div className="clound2 absolute top-[-100px]">
              <img src="/images/cloundImg2.webp" className="w-[1170px] h-[500px]" alt="Cloud Run" />
            </div>
            <div className="clound4 absolute top-[-40px]">
              <img src="/images/cloundImg2.webp" alt="Cloud Run" />
            </div>
          </>
        )}
      </div>
      <div className="bg-[url('/images/home-background-navbar.webp')] bg-cover w-full py-[50px]">
        <div data-aos="fade-up" data-aos-offset="0" className="home-title w-full text-center font-extrabold text-8xl ">
          <h1>Choose your skill</h1>
        </div>
        <div className="grid md:grid-cols-4 py-[32px] grid-cols-2 gap-4">
          <div
            data-aos="zoom-in"
            data-aos-offset="50"
            data-aos-duration="600"
            data-aos-delay="300"
            className="m-auto cursor-pointer hover-scale flex flex-col px-[40px] py-[24px] bg-white rounded-full"
          >
            <ListeningIcon width={100} height={100} color="" />
            <div className="text-center text-[24px] font-bold text-orange-500">Listening</div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-offset="-50"
            data-aos-duration="600"
            data-aos-delay="500"
            className="m-auto cursor-pointer hover-scale flex flex-col px-[40px] py-[24px] bg-white rounded-full"
          >
            <ReadingIcon width={100} height={100} color="" />
            <div className="text-center text-[24px] font-bold text-orange-500">Reading</div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-offset="-50"
            data-aos-duration="600"
            data-aos-delay="700"
            className="m-auto cursor-pointer hover-scale flex flex-col px-[40px] py-[24px] bg-white rounded-full"
          >
            <WritingIcon width={100} height={100} color="" />
            <div className="text-center text-[24px] font-bold text-orange-500">Writing</div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-offset="-50"
            data-aos-duration="600"
            data-aos-delay="900"
            className="m-auto cursor-pointer hover-scale flex flex-col px-[40px] py-[24px] bg-white rounded-full"
          >
            <SpeakingIcon width={100} height={100} color="" />
            <div className="text-center text-[24px] font-bold text-orange-500">Speaking</div>
          </div>
        </div>
      </div>
      <div className=" w-full bg-[url('/images/background-footer.webp')] h-[490px] bg-cover">
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

export default HomePage
