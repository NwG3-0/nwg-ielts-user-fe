import { CustomModal } from '@components/common/CustomModal'
import { DictionaryModal } from '@components/common/DictionaryModal'
import { SaveCardModal } from '@components/widgets/SaveCardModal'
import { USER_INFO } from '@src/models/api'
import { useQuery } from '@tanstack/react-query'
import { getDicionary, isLogin } from '@utils/api'
import { DROPDOWN_MENU, MENU_HEADER } from '@utils/common'
import { safeParseJSON } from '@utils/json'
import { QUERY_KEYS } from '@utils/keys'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import HotKeys from 'react-hot-keys'

const trueHotKeysWindow = 'alt+m'
const trueHotKeysMacOS = 'command+m'

export const Header = () => {
  const [isOpenDictionary, setIsOpenDictionary] = useState<boolean>(false)
  const [isOpenSaveCardModal, setIsSaveCardModal] = useState<boolean>(false)
  const [searchWordValue, setSearchWordValue] = useState<string>('')
  const userInfo: any = useMemo(() => {
    if (typeof window !== 'undefined') {
      return safeParseJSON(localStorage.getItem(USER_INFO) as string)
    }
  }, [])

  const { data: word, isLoading } = useQuery(
    [QUERY_KEYS.DICTIONARY_SEARCH, searchWordValue],
    async () => {
      try {
        const response = await getDicionary(searchWordValue)

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

  const onSearch = (wordSearch: string) => {
    setSearchWordValue(wordSearch)
  }

  const onCloseDictionaryModal = () => {
    setIsOpenDictionary(false)
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
    <div className="bg-[#f0d0b4]">
      <div className="flex justify-between items-center container lg:w-[1240px] mx-auto py-[20px]">
        <img src="/images/Logo.png" className="w-[150px]" />
        <div className="flex gap-[20px] items-center">
          <div className="flex items-center gap-[20px]">
            {MENU_HEADER.map((item) => (
              <Link className="relative font-bold text-[22px] menu-link" key={item.id} href={item.path}>
                {item.name}
              </Link>
            ))}{' '}
            {DROPDOWN_MENU.map((item) => (
              <Link className="relative font-bold text-[22px] menu-link" key={item.id} href={item.path}>
                {item.name}
              </Link>
            ))}
          </div>
          {isLogin() ? <div>{userInfo?.email}</div> : <div>Profile</div>}
        </div>
      </div>

      <HotKeys keyName="alt+m" onKeyUp={onKeyUp}>
        {isOpenDictionary && (
          <DictionaryModal
            isLoading={isLoading}
            word={word}
            onSearch={onSearch}
            onCloseDictionaryModal={onCloseDictionaryModal}
            onOpenSaveCardModal={onOpenSaveCardModal}
          />
        )}
      </HotKeys>
      {!isOpenDictionary && (
        <div
          onClick={() => {
            setIsOpenDictionary(true)
          }}
          className="fixed right-[12px] top-[50%]"
        >
          <img src="/images/DictionaryIcon.png" />
        </div>
      )}
      <CustomModal isOpen={isOpenSaveCardModal} onRequestClose={() => setIsSaveCardModal(false)}>
        <SaveCardModal />
      </CustomModal>
    </div>
  )
}
