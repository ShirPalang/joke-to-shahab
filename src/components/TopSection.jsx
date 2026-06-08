import { RiSparklingLine } from "react-icons/ri"

function TopSection() {
  return (
    <section className="text-center space-y-3">
      <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-800 text-xs font-medium px-3 py-1.5 rounded-full">
        <RiSparklingLine />
        ابزار رایگان تبدیل جوک
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-foreground-900 leading-tight">
        جوکت رو بفرست،
        <span className="text-primary-600"> شهابش کن!</span>
      </h2>

      <p className="text-sm md:text-base text-foreground-500 max-w-lg mx-auto leading-relaxed">
        جوک خود را وارد کنید تا کلمات
        <strong className="text-accent-700"> جعفر </strong>
        و
        <strong className="text-accent-700"> حیف نون </strong>
        به طور خودکار با
        <strong className="text-primary-600"> شهاب </strong>
        جایگزین شوند.
      </p>
    </section>
  )
}

export default TopSection