import React from "react"

interface TypeModalConfrim {
    isOpen : boolean,
    isClose : () => void,
    closed : string,
    confrim : string,
    textColor : string
}

const ModalConfrimasi : React.FC<TypeModalConfrim> = ({isOpen, isClose, closed, confrim, textColor}) => {

  console.log("ini functions isClosed", isClose)
  return (
    <div className={`${isOpen ? "opacity-100 duration-400 " : 'opacity-0 pointer-events-none'} transition-all z-50 fixed left-1/2 top-1/2 -translate-1/2 w-screen h-screen bg-black/20 flex items-center justify-center`} >
      <div className="max-w-2xl w-full rounded-md p-8 space-y-5 relative z-50 bg-white h-[200px]" >
          <h1 className={`text-3xl font-bold ${textColor}`} >Deleted</h1>
          <p className="text-lg text-gray-500" >are your sure deleted data ??</p>
          <div className="flex items-center absolute bottom-4 right-4 gap-5" >
            <button onClick={isClose}  className="bg-blue-500 text-white p-1.5 cursor-pointer hover:bg-blue-700 rounded-md" >{closed}</button>
            <button className="bg-red-500 text-white p-1.5 cursor-pointer hover:bg-red-700 rounded-md" >{confrim}</button>
          </div>
      </div>
    </div>
  )
}

export default ModalConfrimasi