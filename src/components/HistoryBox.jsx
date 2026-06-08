import { RiCloseLine } from "react-icons/ri"

function HistoryBox({ id, originalJoke, transform , onJoke }) {

  const allJokes = JSON.parse(localStorage.getItem('joke-to-shahab'))

  const deleteJoke = () => {
    const filteredJokes = allJokes.filter(joke => joke.id !== id)

    localStorage.setItem('joke-to-shahab' , JSON.stringify(filteredJokes))
    onJoke(filteredJokes)
  }

  return (
    <div className="rounded-lg border border-background-200 bg-white p-4 md:p-5 transition-all hover:border-background-300">
      <div className="flex items-start justify-between gap-3">

        <div className="flex-1 min-w-0 space-y-2">

          <div>
            <span className="text-xs text-foreground-400 bg-background-100 px-2 py-0.5 rounded-md">متن اصلی</span>
            <p className="mt-1 text-sm md:text-base text-foreground-700 leading-relaxed line-clamp-2">{originalJoke}</p>
          </div>

          <div>
            <span className="text-xs text-primary-500 bg-primary-50 px-2 py-0.5 rounded-md">تبدیل شده</span>
            <p className="mt-1 text-sm md:text-base text-foreground-900 leading-relaxed line-clamp-2 font-medium">{transform}</p>
          </div>

        </div>

        <button className="shrink-0 w-8 h-8 rounded-md flex items-center justify-center text-foreground-300 hover:text-red-500 hover:bg-red-50 cursor-pointer transition-all"
          onClick={deleteJoke}>
          <RiCloseLine className="text-lg" />
        </button>
      </div>
    </div>
  )
}

export default HistoryBox