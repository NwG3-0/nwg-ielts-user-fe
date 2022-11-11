import InputPassword from '@components/common/InputPassword'
import type { NextPage } from 'next'
import Link from 'next/link'
import React, { useRef } from 'react'

const LoginPage: NextPage = () => {
  const emailValue = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordValue = useRef() as React.MutableRefObject<HTMLInputElement>

  const onLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (emailValue.current.value !== '' && passwordValue.current.value !== '') {
      console.log(emailValue.current.value, passwordValue.current.value)
    }
  }

  return (
    <div className="relative bg-[url('/images/background.webp')] bg-cover h-screen w-full font-library">
      <div className="w-full h-full bg-[#00000075] relative z-1"></div>
      <div className="absolute w-[500px] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] bg-[#BA8C63] z-100 rounded-md">
        <div className="text-white text-center text-[32px] mt-[20px]">Login</div>
        <form className="p-[20px]" onSubmit={onLogin}>
          <div>
            <label htmlFor="email" className="block text-[18px] text-white">
              Email:
            </label>
            <input
              id="email"
              name="email"
              ref={emailValue}
              className="w-full rounded-sm mt-[5px] outline-none px-[10px] py-[5px] border-[1px] border-[#808080] bg-transparent text-[#ffffffb6]"
            />
          </div>
          <div className="mt-[10px]">
            <label htmlFor="password" className="block text-[18px] text-white">
              Password:
            </label>
            <InputPassword classNameCustom="text-[#ffffffb6] mt-[5px] rounded-sm" ref={passwordValue} />
          </div>
          <div className="flex justify-end mt-[10px]">
            <Link href="/register" className="text-white underline">
              Don't have an account ?
            </Link>
          </div>
          <button className="w-full py-[8px] bg-[#FFFFFF] mt-[20px] rounded-sm" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
