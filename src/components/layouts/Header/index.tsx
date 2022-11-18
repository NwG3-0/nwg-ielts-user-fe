import { isLogin } from '@utils/api'
import { MENU_HEADER } from '@utils/common'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="bg-[#f0d0b4]">
      <div className="flex justify-between items-center container lg:w-[1240px] mx-auto py-[20px]">
        <img src="/images/logo-usth.png" className="w-[150px]" />
        <div className="flex gap-[20px] items-center">
          <div className="flex items-center gap-[20px]">
            {MENU_HEADER.map((item) => (
              <Link className="relative font-bold text-[22px] menu-link" key={item.id} href={item.path}>
                {item.name}
              </Link>
            ))}
          </div>
          {isLogin() ? <div>Name</div> : <div>Profile</div>}
        </div>
      </div>
    </div>
  )
}
