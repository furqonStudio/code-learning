const Mentor = () => {
  return (
    <div className="relative h-[479px] bg-[#010101]">
      <img
        src="/mentor.png"
        alt="mentor"
        className="absolute top-[80px] left-[75px] z-10"
      />
      <img
        src="/line.png"
        alt="line"
        className="absolute top-[80px] left-[41px] z-3"
      />
      <img
        src="/code.png"
        alt="code"
        className="absolute top-[200px] left-[16px] z-2"
      />
      <img
        src="/triangle.svg"
        alt="triangle"
        className="absolute top-[400px] left-[240px] z-10 rotate-[-39deg]"
      />
      <div className="w-[220px] h-[36px] flex items-center py-3 backdrop-filter backdrop-blur-lg absolute bottom-0 left-0 z-10">
        <div className="flex items-center ml-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <rect
              x="0.814453"
              y="0.972656"
              width="14.9006"
              height="14.9006"
              rx="7.45028"
              stroke="#FF4F4F"
            />
            <rect
              x="2.302"
              y="2.46021"
              width="11.9254"
              height="11.9254"
              rx="5.96271"
              fill="#FF4F4F"
            />
          </svg>
          <p className="text-white font-aeonik text-xs font-thin ml-2">
            · Name (Skill)
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mentor
