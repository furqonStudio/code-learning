import Button from '../Components/Button'

const Trial = () => {
  return (
    <div className="px-4 py-5">
      <h2 className="font-aeonik font-medium text-4xl mt-8">
        The language for building web pages
      </h2>
      <p className="font-extralight mt-5">
        Go live on a fast, reliable, and hassle-free hosting network that scales
        with your business <br /> with one click and go code!
      </p>
      <div className="mt-8">
        <Button
          text="Try it Yourself"
          icon="arrowRight2"
          className="w-full flex justify-center text-[#DDF247] bg-black hover:scale-95 transition-transform"
        />
      </div>
      <div className="relative mt-20">
        <img src="public\code2.svg" alt="code2" />
        <img
          src="public\triangle.svg"
          alt="triangle"
          className="absolute top-[146px] left-[246px]"
        />
      </div>
    </div>
  )
}

export default Trial
