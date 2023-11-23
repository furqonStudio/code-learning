const Tutor = () => {
  return (
    <div className="mt-8">
      <h2 className="font-aeonik font-medium text-4xl text-center">
        Get up and running fast together
      </h2>
      <div className="mt-16 mb-14 text-center flex flex-col gap-7 items-center">
        <img
          src="public\university.svg"
          alt="university"
          className="w-11 h-11"
        />
        <h3 className="font-aeonik font-bold text-4xl">University</h3>
        <p className="w-[224px]">
          Browse hundreds of in-depth videos, courses, and guides to get up and
          running fast
        </p>
      </div>
      <hr className="w-[227px] m-auto" />
      <div className="mt-14 mb-14 text-center flex flex-col gap-8 items-center">
        <img src="public\showcase.svg" alt="university" className="w-11 h-11" />
        <h3 className="font-aeonik font-bold text-4xl">Showcase</h3>
        <p className="w-[224px]">
          Get inspired by the incredible websites built by members of the
          community
        </p>
      </div>
      <img src="public\tutor.svg" alt="tutor" className="m-auto" />
    </div>
  )
}

export default Tutor
