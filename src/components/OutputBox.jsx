import { RiArrowDownLine, RiFileCopyLine, RiFileTextLine, RiSparkling2Line } from "react-icons/ri"
import toast from "react-hot-toast"

function OutputBox({ data }) {

  return (
    <section className="rounded-xl border border-background-200 bg-white p-5 md:p-6" style={{ display: data.length !== 0 ? 'block' : 'none' }}>

      <div className="w-full space-y-4">

        <div className="rounded-lg border-2 border-background-200 bg-background-50 p-4 md:p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground-700"><RiFileTextLine className="inline" /> متن اصلی</h3>
            <span class="text-xs text-foreground-400 bg-background-100 px-2 py-1 rounded-md">{data[0]?.originalJoke?.length} کاراکتر</span>

          </div>
          <p className="text-base md:text-lg text-foreground-800 leading-relaxed whitespace-pre-wrap">{data[0]?.originalJoke}</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
            <RiArrowDownLine />
          </div>
        </div>

        <div className="rounded-lg border-2 border-primary-400 p-4 md:p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-primary-700"><RiSparkling2Line className="inline" /> جوک تبدیل شده</h3>

            <button className="flex items-center gap-1 text-xs font-medium text-primary-600 hover:text-primary-700 
            bg-primary-100 hover:bg-primary-200 px-3 py-1.5 rounded-md cursor-pointer transition-all whitespace-nowrap"
              onClick={() => { 
                navigator.clipboard.writeText(data[0]?.transform) 
                toast.success("کپی شد")
                }}><RiFileCopyLine /> کپی کن</button>
          </div>

          <p className="text-base md:text-lg text-foreground-900 leading-relaxed whitespace-pre-wrap font-medium">{data[0]?.transform}</p>
        </div>
      </div>
    </section>
  )
}

export default OutputBox