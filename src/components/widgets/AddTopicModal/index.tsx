import { AUTH_TOKEN, USER_INFO } from '@src/models/api'
import { createDeck } from '@utils/api'
import { safeParseJSON } from '@utils/json'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'
import { useMemo, useRef, useState } from 'react'

interface Props {
  onCloseTopicModal: () => void
}

export const AddTopicModal = ({ onCloseTopicModal }: Props) => {
  const refNameValue = useRef() as React.MutableRefObject<HTMLInputElement>
  const accessToken = useMemo(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(AUTH_TOKEN)
    }
  }, [])
  const userInfo: any = useMemo(() => {
    if (typeof window !== 'undefined') {
      return safeParseJSON(localStorage.getItem(USER_INFO) as string)
    }
  }, [])

  const onCreate = async (event: { preventDefault: () => void }) => {
    try {
      event.preventDefault()
      if (accessToken) {
        const { success, data } = await createDeck({
          topicName: refNameValue.current.value,
          userId: userInfo?.id,
          accessToken,
        })

        if (success) {
          onCloseTopicModal()
          notify(NOTIFICATION_TYPE.SUCCESS, 'Create success')
        }
      }
    } catch (error) {}
  }

  return (
    <div className="w-[100%] h-[50px] flex gap-x-[8px]">
      <input
        ref={refNameValue}
        placeholder="Enter your topic name"
        className="flex-1  bg-slate-200 rounded-full pl-[16px]"
      ></input>
      <button
        className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-[32px] py-[8px] rounded-full"
        onClick={onCreate}
      >
        Create
      </button>
    </div>
  )
}
