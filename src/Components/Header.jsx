import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleToggleNav = () => {
    setIsNavOpen((prev) => !prev)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsNavOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="logo" className="object-none h-8" />
          <h1 className="font-aeonik text-xl font-bold ml-2">macode.</h1>
        </Link>
        <div
          className="lg:hidden relative"
          ref={dropdownRef}
          onClick={handleToggleNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="10"
            viewBox="0 0 19 10"
            fill="none"
            className="cursor-pointer"
          >
            <path d="M0 1H19M0 9H19" stroke="black" strokeWidth="2" />
          </svg>
          {isNavOpen && (
            <div className="absolute right-0 top-8 text-center flex flex-col bg-black bg-opacity-80 rounded-2xl text-[#DDF247]">
              <Link
                to="/"
                className="font-aeonik hover:text-black hover:bg-[#DDF247] px-12 py-4 rounded-t-xl"
              >
                Tutorials
              </Link>
              <Link
                to="/about"
                className="font-aeonik hover:text-black hover:bg-[#DDF247]  py-4"
              >
                Case studies
              </Link>
              <Link
                to="/contact"
                className="font-aeonik hover:text-black hover:bg-[#DDF247]  py-4 rounded-b-xl"
              >
                Resources
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
