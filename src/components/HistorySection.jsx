import { RiDeleteBin2Line, RiHistoryLine } from "react-icons/ri"
import HistoryBox from "./HistoryBox"
import { useEffect, useState } from "react"

function HistorySection({ data , onJoke }) {

  const [jokes, setJokes] = useState([])

  const deleteAllJokes = () => {
    localStorage.setItem('joke-to-shahab', JSON.stringify([]))
    setJokes([])
  }

  useEffect(()=> {
    setJokes(data)
  }, [data])

  return (
    <section className='rounded-xl border border-background-200 bg-white p-5 md:p-6' style={{ display: jokes.length !== 0 ? 'block' : 'none' }}>

      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-foreground-900"><RiHistoryLine className="inline" /> تاریخچه جوک ها
            <span className="text-sm font-normal text-foreground-400 mr-2">(1 مورد)</span>
          </h2>
          <button
            class="flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700 bg-red-50 
          hover:bg-red-100 px-3 py-1.5 rounded-md cursor-pointer transition-all whitespace-nowrap"
            onClick={deleteAllJokes}
          ><RiDeleteBin2Line /> حذف همه</button>
        </div>

        <div className="space-y-3">
          {
            jokes !== 0 &&
            jokes.map(data =>
              <HistoryBox key={data.id} {...data} onJoke={onJoke}/>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default HistorySection