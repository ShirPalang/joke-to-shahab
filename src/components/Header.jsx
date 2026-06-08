import { MdHistory } from "react-icons/md";
import { RiEmotionLaughLine } from "react-icons/ri";

function Header() {
  return (
    <header className="w-full border-b border-background-200 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
            <RiEmotionLaughLine className="text-xl text-primary-600" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-foreground-900">جوک ترانسفورمر</h1>
            <p className="text-xs text-foreground-400">جعفر و حیف نون → شهاب</p>
          </div>
        </div>

        <a href="#" className="flex items-center gap-1 text-sm text-foreground-500 hover:text-primary-600 transition-colors cursor-pointer whitespace-nowrap">
          <MdHistory />
          <span className="hidden sm:inline">تاریخچه</span>
        </a>
      </div>
    </header>
  )
}

export default Header