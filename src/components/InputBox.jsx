import { useState } from "react"
import { RiMagicLine } from "react-icons/ri"

function InputBox({ onJoke }) {

  const [joke, setJoke] = useState('')
  const [buttonStatus, setButtonStatus] = useState(true)
  const [jokLenght, setJokeLength] = useState(0)

  const buttonStatusHandler = () => {
    joke.length !== 0 ? setButtonStatus(false) : setButtonStatus(true)
  }

  const replaceJoke = () => {

    const currentJokes = JSON.parse(localStorage.getItem('joke-to-shahab')) || []

    let result = joke

    result = result.replace(/جعفر/g, 'شهاب');

    result = result.replace(/حیف نون/g, 'شهاب');

    result = result.replace(/جفر/g, 'شهاب');

    result = result.replace(/غضنفر/g, 'شهاب');
    
    const id = currentJokes.length === 0 ? 1 : (currentJokes[0].id + 1)

    const jokeObject = { id, originalJoke: joke, transform: result }

    localStorage.setItem('joke-to-shahab', JSON.stringify([jokeObject, ...currentJokes]))
    console.log(id);


    onJoke(JSON.parse(localStorage.getItem('joke-to-shahab')))
  }

  return (
    <section className="rounded-xl border border-background-200 bg-white p-5 md:p-6">

      <div className="relative">
        <textarea placeholder="جوک خود را اینجا بنویسید..."
          rows="5" maxlength="2000"
          class="w-full rounded-lg border-2 border-background-200 bg-white p-4 md:p-5 text-base md:text-lg text-foreground-900 placeholder:text-foreground-300 
      focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all resize-none leading-relaxed" dir="rtl"
          value={joke}
          onChange={e => setJoke(e.target.value)}
          onKeyUp={() => {
            buttonStatusHandler()
            setJokeLength(joke.length)
          }}>
        </textarea>

        <div class="absolute bottom-3 left-3 text-xs text-foreground-400 select-none">
          {jokLenght}/۲۰۰۰
        </div>

      </div>

      <button
        className="mt-4 w-full rounded-lg bg-primary-500 px-6 py-3 text-base md:text-lg font-semibold text-white whitespace-nowrap cursor-pointer 
      transition-all hover:bg-primary-600 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary-500"
        disabled={buttonStatus}
        onClick={replaceJoke}>
        <RiMagicLine className="inline" /> تبدیل کن!
      </button>
    </section>
  )
}

export default InputBox