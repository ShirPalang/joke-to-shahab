import { RiHeart2Line } from 'react-icons/ri'

function Footer() {
  return (
    <footer className='w-full border-t border-background-200 bg-secondary-50 py-6 mt-8'>
      <div className='max-w-3xl mx-auto px-4 md:px-6 text-center'>
        <p className='text-xs md:text-sm text-foreground-400'>
          ساخته شده با <RiHeart2Line className='inline text-red-500'/> برای شهاب
        </p>
      </div>
    </footer>
  )
}

export default Footer