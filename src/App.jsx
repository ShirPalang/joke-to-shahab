import Header from "./components/Header"
import TopSection from "./components/TopSection"
import InputBox from "./components/InputBox"
import HistorySection from "./components/HistorySection"
import OutputBox from "./components/OutputBox"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import { Toaster } from 'react-hot-toast';

function App() {

  const [allJokes, setAllJokes] = useState([])

  const localJokes = localStorage.getItem('joke-to-shahab') || null

  useEffect(() => {
    if (localJokes)
      setAllJokes(JSON.parse(localJokes))
  }, [])

  const jokeHandler = input => {
    setAllJokes(input)
  }


  return (
    <div className="bg-background-50 overflow-x-hidden">
      {/* header section */}
      <Header />

      {/* main */}
      <main className="max-w-3xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-10">
        {/* top section */}
        <TopSection />

        {/* input section */}
        <InputBox onJoke={jokeHandler} />

        {/* output section */}
        <OutputBox data={allJokes} />

        {/* history section */}
        <HistorySection data={allJokes} onJoke={jokeHandler} />
      </main>

      {/* footer section */}
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
