import { MessageIcon } from '@components/common/CustomIcon'
import { CustomModal } from '@components/common/CustomModal'
import { DictionaryModal } from '@components/common/DictionaryModal'
import { DropdownMenu } from '@components/common/Dropdown'
import { MessageModal } from '@components/common/MessageModal'
import { SaveCardModal } from '@components/widgets/SaveCardModal'
import { AUTH_TOKEN, USER_INFO } from '@src/models/api'
import { useQuery } from '@tanstack/react-query'
import { checkCard, getDictionary, isLogin, logout } from '@utils/api'
import { MENU_HEADER, DROPDOWN_TEST_MENU, DROPDOWN_USER_MENU, DROPDOWN_PRACTICE_MENU } from '@utils/common'
import { safeParseJSON } from '@utils/json'
import { QUERY_KEYS } from '@utils/keys'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import HotKeys from 'react-hot-keys'
import { motion } from 'framer-motion'

const trueHotKeysWindow = 'alt+m'
const trueHotKeysMacOS = 'command+m'

export const testSubMenu = [
  {
    content: 'Word Test',
    type: 'link',
  },
  {
    content: 'Total Test',
    type: 'link',
  },
]

export const Header = () => {
  const [isOpenDictionary, setIsOpenDictionary] = useState<boolean>(false)
  const [isMessageModal, setIsMessageModal] = useState<boolean>(false)
  const [isOpenSaveCardModal, setIsSaveCardModal] = useState<boolean>(false)
  const [searchWordValue, setSearchWordValue] = useState<string>('')
  const [saveChecked, setSaveChecked] = useState<boolean>(false)

  const userInfo: any = useMemo(() => {
    if (typeof window !== 'undefined') {
      return safeParseJSON(localStorage.getItem(USER_INFO) as string)
    }
  }, [])
  const accessToken = useMemo(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(AUTH_TOKEN)
    }
  }, [])

  const { data: wordDetail, isLoading: isLoadingWord } = useQuery(
    [QUERY_KEYS.DICTIONARY_SEARCH, searchWordValue],
    async () => {
      try {
        const response = await getDictionary(searchWordValue)

        return response
      } catch (error) {
        console.log(error)
      }
    },
    {
      refetchInterval: false,
      enabled: searchWordValue !== '' && isOpenDictionary,
    },
  )

  const onSearch = async (wordSearch: string) => {
    setSearchWordValue(wordSearch)
    let word = wordSearch
    try {
      const userId = userInfo?.id
      if (accessToken) {
        const { success, data: dataCheck } = await checkCard({ word, userId })
        if (dataCheck) {
          setSaveChecked(true)
        } else {
          setSaveChecked(false)
        }
      }
    } catch (error) {}
  }

  const OnLogout = async () => {
    try {
      if (accessToken) {
        const { success } = await logout(accessToken)

        if (success) {
          notify(NOTIFICATION_TYPE.SUCCESS, 'Logout success')
        }
      }
    } catch (error) {}
  }
  const onCloseDictionaryModal = () => {
    setIsOpenDictionary(false)
  }

  const onOpenMessageModal = () => {
    setIsMessageModal(!isMessageModal)
  }

  const onOpenSaveCardModal = () => {
    setIsSaveCardModal(true)
  }

  const onKeyUp = (keyName: string) => {
    if (keyName === trueHotKeysWindow || keyName === trueHotKeysMacOS) {
      setIsOpenDictionary((prev) => !prev)
    }
  }

  return (
    <motion.div
      initial={{
        x: 1080,
        y: 0,
      }}
      animate={{
        x: 0,
        y: 0,
      }}
      transition={{ duration: 0.5 }}
      className="bg-[#f0d0b4]"
    >
      <div className="flex justify-between items-center container lg:w-[1240px] mx-auto py-[20px]">
        <div className="w-[150px] h-[150px]">
          <Link href={'/'}>
            <img src="/images/Logo.webp" className="" />
          </Link>
        </div>
        <div className="flex gap-[20px] items-center">
          <div className="flex items-center gap-[20px]">
            {MENU_HEADER.map((item) => (
              <Link className=" font-bold text-[22px] relative menu-link" key={item.id} href={item.path}>
                {item.name}
              </Link>
            ))}
            <DropdownMenu classNameCustom="" title="Test" subMenu={DROPDOWN_TEST_MENU} />
            <DropdownMenu classNameCustom="" title="Practice" subMenu={DROPDOWN_PRACTICE_MENU} />

            {isLogin() ? (
              <div className="relative">
                <DropdownMenu classNameCustom="" title="User Profile " subMenu={DROPDOWN_USER_MENU} />
              </div>
            ) : (
              <Link className=" font-bold text-[22px] " href={'/login'}>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      <HotKeys keyName="alt+d" onKeyUp={onKeyUp}>
        {isOpenDictionary && (
          <DictionaryModal
            isLoading={isLoadingWord}
            word={wordDetail}
            onSearch={onSearch}
            onCloseDictionaryModal={onCloseDictionaryModal}
            onOpenSaveCardModal={onOpenSaveCardModal}
            isSave={saveChecked}
          />
        )}
      </HotKeys>
      {!isOpenDictionary && (
        <motion.div
          initial={{
            x: 100,
            y: 0,
          }}
          animate={{
            x: 0,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
          onClick={() => {
            setIsOpenDictionary(true)
          }}
          className="fixed right-[12px] top-[50%] "
        >
          <img className="hover:scale-125 cursor-pointer" src="/images/DictionaryIcon.webp" />
        </motion.div>
      )}
      <HotKeys keyName="alt+m" onKeyUp={onKeyUp}>
        {isMessageModal && <MessageModal onOpenMessageModal={onOpenMessageModal} />}
      </HotKeys>

      {!isMessageModal && (
        <motion.div
          initial={{
            x: 100,
            y: 0,
          }}
          animate={{
            x: 0,
            y: 0,
          }}
          transition={{ type: 'spring', duration: 0.5 }}
          onClick={() => {
            setIsMessageModal(true)
          }}
          className="fixed right-[12px] top-[60%] hover:scale-125 cursor-pointer"
        >
          <MessageIcon width={72} height={72} color={''} />
        </motion.div>
      )}
      <CustomModal isOpen={isOpenSaveCardModal} onRequestClose={() => setIsSaveCardModal(false)}>
        <SaveCardModal word={wordDetail} />
      </CustomModal>
    </motion.div>
  )
}
