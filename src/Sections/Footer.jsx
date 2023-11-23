import Button from '../Components/Button'

const Footer = () => {
  return (
    <div className="bg-black text-white relative mt-36 flex flex-col justify-center items-center h-[750px]">
      <div className="absolute bg-[#DDF247] rounded-xl top-[-110px] text-black flex flex-col justify-center items-center p-8">
        <h2 className="font-code font-extrabold text-2xl w-[258px] text-center">
          Start upgrading your skills free for this month
        </h2>
        <p className="font-aeonik w-[258px] text-center text-sm mt-5 mb-5">
          Build your site for free and take as long as you need
        </p>
        <div className="flex flex-col gap-4 w-full">
          <Button
            text="Try Yourself"
            color="black"
            className="flex justify-center bg-opacity-50 text-white w-full"
          />
          <Button
            text="Get started"
            color="black"
            icon="arrowRight"
            className="flex justify-center w-full h-10"
          />
        </div>
      </div>
      <div className="absolute bottom-0">
        <div className="flex gap-5 justify-center">
          <img src="public\logo2.svg" alt="logo2" />
          <p className="font-aeonik font-bold text-4xl">Macode</p>
        </div>
        <ul className="font-extralight text-xl opacity-50 text-center space-y-8 mt-14">
          <li>
            <a href="">Tutorials</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
          <li>
            <a href="">Case Studies</a>
          </li>
        </ul>
        <div className="flex flex-col justify-center items-center gap-6 mt-14">
          <hr className="w-[343px]" />
          <img src="public\social-media.svg" alt="social-media" />
          <hr className="w-[343px]" />
        </div>
        <p className="font-aeonik text-xl text-center py-9">
          <span className="opacity-50">© 2021 Copyright. </span>
          <span className="text-[#DDF247]">Macode.io</span>
        </p>
      </div>
    </div>
  )
}

export default Footer
