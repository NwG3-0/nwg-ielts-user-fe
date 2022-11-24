import React, { useRef } from 'react'
import { CloseIcon, SearchIcon, StarIcon } from '../CustomIcon'

interface Props {
  isLoading: boolean
  word: any
  onSearch: (wordSearch: string) => void
  onCloseDictionaryModal: () => void
  onOpenSaveCardModal: () => void
}

export const DictionaryModal = ({ isLoading, word, onSearch, onCloseDictionaryModal, onOpenSaveCardModal }: Props) => {
  const searchWordInput = useRef() as React.MutableRefObject<HTMLInputElement>
  return (
    <div className="fixed px-[10px] opacity-80 pt-[5px] z-100 top-[20%] shadow-2xl right-[16px] bg-slate-50 h-[60vh] w-[320px] rounded-t-[24px] ">
      <div className="flex  w-full bg-white rounded-[24px] border-b-2 border-slate-600">
        <input
          placeholder="Enter word"
          ref={searchWordInput}
          className=" outline-none bg-transparent mx-auto block rounded-[4px]"
        />
        <div className="p-2 cursor-pointer" onClick={() => onSearch(searchWordInput.current.value)}>
          <SearchIcon width={24} height={24} color="#000" />
        </div>
      </div>

      {isLoading ? (
        <div className="absolute top-[50%]  right-[50%] translate-y-[-50%] translate-x-[50%]">
          <img className="w-[100px] h-[100px]" src="/images/Search.gif" />
        </div>
      ) : (
        <>
          <div className="absolute top-[64px] overflow-y-scroll h-[70%]">
            <div>
              <div className="font-bold ">Prononciation:</div>
              {word &&
                word[0]?.phonetics.map((spelling: any) => {
                  return <div>{spelling.text}</div>
                })}
            </div>
            {word &&
              word[0]?.meanings.map((mean: any) => {
                return (
                  <div>
                    <div className="font-bold">{mean?.partOfSpeech}:</div>
                    <div>
                      {mean?.definitions.map((define: any) => {
                        return <div>{define.definition}</div>
                      })}
                    </div>
                  </div>
                )
              })}
            {word &&
              word[0]?.phonetics.map((voice: any) => {
                return (
                  <div className="my-[16px]">
                    <div className="font-bold text-blue-800">Spelling:</div>
                    {voice.audio != '' && (
                      <audio controls>
                        <source src={voice.audio} type="audio/ogg" />
                      </audio>
                    )}
                  </div>
                )
              })}
          </div>
        </>
      )}

      <audio src="https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3"></audio>
      <div className="absolute bottom-[-48px] right-[50%] translate-x-[50%] " onClick={onCloseDictionaryModal}>
        <CloseIcon width={24} height={24} color="#000" />
      </div>
      <div className="absolute right-[10%] top-[15%]">
        <StarIcon width={24} height={24} color="#000" />
      </div>
      <div>
        <button
          onClick={onOpenSaveCardModal}
          className="absolute rounded-full hover:rounded-lg bg-cyan-400 py-[16px] px-[48px] bottom-[20px] right-[50%] translate-x-[50%]"
        >
          Save
        </button>
      </div>
    </div>
  )
}
