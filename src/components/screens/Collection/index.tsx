import { BinIcon, SearchIcon } from '@components/common/CustomIcon'
import { CustomModal } from '@components/common/CustomModal'
import { AddTopicModal } from '@components/widgets/AddTopicModal'
import { AUTH_TOKEN, USER_INFO } from '@src/models/api'
import { useQuery } from '@tanstack/react-query'
import { createDeck, deleteDeck, getCard, getDeckList } from '@utils/api'
import { safeParseJSON } from '@utils/json'
import { QUERY_KEYS } from '@utils/keys'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'
import React, { useMemo, useRef, useState } from 'react'
import Slider from 'react-slick'

export const Collection = () => {
  const [limit, setLimit] = useState<number>(5)
  const [page, setPage] = useState<number>(1)
  const [keyword, setKeyword] = useState<string>('')
  const refTopicName = useRef() as React.MutableRefObject<HTMLInputElement>
  const [isOpenAddTopicModal, setIsOpenAddTopicModal] = useState<boolean>(false)
  const [level, setLevel] = useState<string[]>([])
  const [tpName, setTopicName] = useState<string>('')

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

  const {
    data: deck,
    isLoading: isLoadingDeck,
    error: isErrorDeck,
  } = useQuery(
    [QUERY_KEYS.TOPIC_LIST],
    async () => {
      try {
        const response = await getDeckList(userInfo?.id)

        return response
      } catch (error) {
        console.log(error)
      }
    },
    {
      refetchInterval: false,
      enabled: !!userInfo,
    },
  )

  const {
    data: card,
    isLoading: isLoadingCard,
    error: isErrorCard,
  } = useQuery(
    [QUERY_KEYS.CARD_LIST, tpName, limit, page, keyword, level, deck],
    async () => {
      try {
        const topicName = tpName || deck?.data[0].topicName
        const response = await getCard({ limit, page, keyword, level: level.join(','), topicName })

        console.log(card)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    {
      refetchInterval: false,
      enabled: deck && deck.data !== null,
    },
  )
  console.log(card)
  const onCreate = async (event: { preventDefault: () => void }) => {
    try {
      event.preventDefault()
      if (accessToken) {
        const { success, data } = await createDeck({
          topicName: refTopicName.current.value,
          userId: userInfo?.id,
          accessToken,
        })

        if (success) {
          notify(NOTIFICATION_TYPE.SUCCESS, 'Delete success')
        }
      }
    } catch (error) {}
  }

  const onDelete = async (id: any) => {
    try {
      if (id !== '') {
        const { success, data } = await deleteDeck(id)

        if (success) {
          notify(NOTIFICATION_TYPE.SUCCESS, 'Delete success')
        }
      }
    } catch (error) {}
  }

  const onOpenTopicModal = () => {
    setIsOpenAddTopicModal(true)
  }
  const onCloseTopicModal = () => {
    setIsOpenAddTopicModal(false)
  }
  const onSelect = (tpN: string) => {
    setTopicName(tpN)
  }

  const handleCheck = (e: { target: { checked: boolean; value: string } }) => {
    let updatedList: any = [...level]
    if (e.target.checked) {
      updatedList = [...level, e.target.value]
    } else {
      updatedList.splice(level.indexOf(e.target.value), 1)
    }
    setLevel(updatedList)
  }
  return (
    <div className="w-[80%] grid grid-cols-6 m-auto gap-x-[48px] gap-y-[32px] my-[48px]">
      <div className="col-span-4 h-[500px]  border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-slate-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div>
          <Slider></Slider>
        </div>
      </div>
      <div className="col-span-2 h-[500px]  border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-slate-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col  leading-normal">
        <div className="flex  w-full bg-white rounded-[24px] border-b-2 border-slate-600">
          <input
            placeholder="Enter topic name"
            className="w-full px-[24px] outline-none bg-transparent mx-auto block rounded-[4px]"
          />
          <div className="p-2 cursor-pointer">
            <SearchIcon width={24} height={24} color="#000" />
          </div>
        </div>
        <div className="h-[300px] overflow-y-scroll mt-[16px]">
          {deck &&
            deck?.data?.map((tpname: any) => {
              return (
                <div className="flex">
                  <div
                    className="w-[80%] hover:bg-slate-100 hover:scale-105 cursor-pointer border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-slate-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col"
                    onClick={() => onSelect(tpname.topicName)}
                  >
                    {tpname?.topicName}
                  </div>
                  <div className="m-auto">
                    <button onClick={() => onDelete(tpname.id)}>
                      <BinIcon width={24} height={24} color={'red'} />
                    </button>
                  </div>
                </div>
              )
            })}
        </div>
        <div className="m-auto">
          <div className="flex w-full gap-[10px] items-center">
            <div className="flex items-center gap-[4px]">
              <input onChange={handleCheck} value={'easy'} type="checkbox" className=" checked:bg-blue-500 block" />
              <div>Easy</div>
            </div>
            <div className="flex items-center gap-[4px]">
              <input onChange={handleCheck} value={'normal'} type="checkbox" className=" checked:bg-blue-500 block" />
              <div>Normal</div>
            </div>
            <div className="flex items-center gap-[4px]">
              <input onChange={handleCheck} value={'hard'} type="checkbox" className=" checked:bg-blue-500 block" />
              <div>Hard</div>
            </div>
          </div>
          <button
            onClick={onOpenTopicModal}
            className="mt-[16px] bg-gradient-to-r mx-auto block from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-[48px] py-[16px] rounded-full"
          >
            Create
          </button>
          <CustomModal isOpen={isOpenAddTopicModal} onRequestClose={() => setIsOpenAddTopicModal(false)}>
            <AddTopicModal onCloseTopicModal={onCloseTopicModal} />
          </CustomModal>
        </div>
      </div>
    </div>
  )
}
