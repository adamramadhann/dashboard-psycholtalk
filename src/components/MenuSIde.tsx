// Salah:
import { Link } from "react-router-dom"
import { logoImage } from "../assets/importImage"
import { dataPathUrl } from "../dami"
import { useState } from "react"

interface onClose {
    isOpen : boolean
    onTogle : () => void
}

export const MenuSIde = ({isOpen, onTogle}: onClose) => {

  const [openSubPath, setOpenSubPath] = useState<number | null>(null)
  const [openSubPathActive, setOpenSubPathActive] = useState<string | null>(null)

  const isOpenPath = (index : number) => {
    setOpenSubPath(val => (val === index ? null : index))
  }

  const handleClosePath = (value : string) => {
    setOpenSubPath(null)
    setOpenSubPathActive(value)
  }

  const isActive = (index : string) => {
    setOpenSubPathActive(index)
  }
 
  return (
    <div className={` ${isOpen ? 'w-[200px] duration-300' : 'w-[150px] duration-300 '} p-5 space-y-5 transition-all relative flex items-center flex-col h-full bg-teal-500`} >
        <button onClick={onTogle}  className="text-xl cursor-pointer absolute -right-3 bg-black text-white w-10 h-10 rounded-full" >{isOpen ? "<" : ">"}</button>
        <div onClick={onTogle} className="w-14 h-14 cursor-pointer" >
            <img src={logoImage} alt="medica" className="w-14 h-14" />
        </div>
        <div className="flex flex-col w-full items-start gap-3" >
          {
           dataPathUrl.map((val, i) => {
            return val.children && val.children.length > 0 ? (
              <>
                <button key={i} onClick={() => isOpenPath(i)} className={`border text-center w-full py-2 ${openSubPathActive === val.path ? "bg-blue-500" : ""}`} >{val.namaPage}</button>
                <div className={`flex w-full transition-all flex-col overflow-hidden gap-5 ease-in-out ${openSubPath === i ? "duration-300 h-[120px] opacity-100" : "duration-300 h-0 opacity-0"}`} >
                    {
                      val.children?.map((e, i) => (
                        <Link key={i} to={e.path} onClick={() => isActive(e.path)} className={`border text-center w-full py-2 ${openSubPathActive === e.path ? "bg-blue-500" : ""}`} >{e.namaPage}</Link>
                      ))
                    }
                </div> 
              </>
              ) : (
                <Link onClick={() => handleClosePath(val.path)} to={val.path} className={`border text-center w-full py-2 ${openSubPathActive === val.path ? "bg-blue-500" : ""}`} >{val.namaPage}</Link>
              )
            })
          } 
        </div>
    </div>
  )
}
