const Button = ({ color, text, icon, rounded, onClick, className }) => {
  const getColorClass = () => {
    switch (color) {
      case 'black':
        return 'bg-[#010101] hover:bg-[#010101] text-white'
      case 'yellow':
        return 'bg-[#DDF247] text-black'
      // Tambahkan warna lain sesuai kebutuhan
      // default:
      //   return 'bg-gray-500 hover:bg-gray-700'
    }
  }

  const getRoundedClass = () => {
    return rounded ? 'rounded-[10px]' : ''
  }

  const renderIcon = () => {
    let iconColor = 'white' // Default stroke color

    switch (color) {
      case 'black':
        iconColor = 'white'
        break
      case 'yellow':
        iconColor = 'black'
        break
      // Add cases for other colors if needed
      default:
        break
    }

    switch (icon) {
      case 'arrowRight':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            className="ml-5"
          >
            <path
              d="M36.2368 21.625L9.01319 21.625M36.2368 21.625L28.6354 14.5M36.2368 21.625L28.6354 29.2264"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case 'arrowUp':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            className="ml-5"
          >
            <path
              d="M32.25 12L13 31.25M32.25 12L20.75 11.75M32.25 12L32.5 22.5"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case 'arrowRight2':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            className="ml-5"
          >
            <path
              d="M36.2368 21.625L9.01319 21.625M36.2368 21.625L28.6354 14.5M36.2368 21.625L28.6354 29.2264"
              stroke="#DDF247"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      default:
        return null
    }
  }

  const getHoverClass = () => {
    // Tambahkan kelas hover sesuai dengan warna tombol
    switch (color) {
      case 'black':
        return 'hover:scale-95 transition-transform'
      case 'yellow':
        return 'hover:scale-95 transition-transform'
      // Tambahkan warna lain sesuai kebutuhan
      // default:
      //   return 'hover:bg-gray-500'
    }
  }

  return (
    <button
      className={`font-medium font-aeonik py-2 px-5  ${getColorClass()} ${getRoundedClass()} ${getHoverClass()} ${className} flex items-center`}
      onClick={onClick}
    >
      {text}
      {renderIcon()}
    </button>
  )
}

export default Button
