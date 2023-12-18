'use client'

import { useChat } from "ai/react"
import SyntaxHiglight from "./component/SyntaxHiglight"


export default function Home() {

  const { messages, input, handleInputChange, handleSubmit } = useChat()
  
  return (
    <div className="pt-4 pb-14">
     {
      messages.map((message: any) => {
        return (
          <div key={message.id} className={`border-t border-black/10 ${message.role === 'assistant' && 'bg-gray-50'}`} >
            <div className="max-w-3xl flex flex-col py-6 px-3 mx-auto" >
              <span className="pb-2 font-bold" >{message.role}</span>
              <SyntaxHiglight message={message.content}/>
            </div>
          </div>
        )
      })
     }
      <form className="fixed inset-x-0 bottom-10" onSubmit={handleSubmit}>
        <input 
        value={input}
        onChange={handleInputChange}
        type="" className="w-full flex mx-auto max-w-3xl h-10 ring-offset-background shadow-xl rounded-md text-base py-6 px-3 border border-input bg-background "
        placeholder="enter a message"
        />
      </form>
    </div>
  )
}
