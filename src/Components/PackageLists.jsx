import Button from './Button'

const PackageLists = () => {
  return (
    <div>
      <div className="w-[343px] bg-[#F4F4F4] px-10 py-14 rounded-xl flex flex-col gap-12 text-center m-auto my-6">
        <div>
          <h3 className="font-aeonik text-xl">DEVELOPMENT</h3>
          <div className="flex font-aeonik gap-1 mt-6 justify-center">
            <p>$</p>
            <p className="font-bold text-4xl">10</p>
          </div>
        </div>
        <p className="font-aeonik font-extralight text-lg ">
          1 Module Javascript <br />1 Module Human Resources
        </p>
        <Button
          text="Buy Now"
          rounded={true}
          className="flex justify-center bg-white text-[#DDF247] w-[267px] m-auto hover:scale-95 transition-transform"
        />
      </div>
      <div className="w-[343px] bg-[#010101] px-10 py-14 rounded-xl flex flex-col gap-12 text-center m-auto text-white relative my-6">
        <img
          src="/new.svg"
          alt="new"
          className="absolute top-[130px] lef-[42px]"
        />
        <div>
          <h3 className="font-aeonik text-xl">IT & SOFTWARE</h3>
          <div className="flex font-aeonik gap-1 mt-6 justify-center">
            <p>$</p>
            <p className="font-bold text-4xl">30</p>
          </div>
        </div>
        <p className="font-aeonik font-extralight text-lg ">
          1 Module Javascript <br />1 Module Human Resources <br />2 Module
          Sales Teams <br />
          Pack Marketing Skills <br />5 Module Study Case
        </p>
        <Button
          text="Buy Now"
          color="yellow"
          rounded={true}
          className="flex justify-center"
        />
      </div>
      <div className="w-[343px] bg-[#F4F4F4] px-10 py-14 rounded-xl flex flex-col gap-12 text-center m-auto my-6">
        <div>
          <h3 className="font-aeonik text-xl">BUSINESS</h3>
          <div className="flex font-aeonik gap-1 mt-6 justify-center">
            <p>$</p>
            <p className="font-bold text-4xl">30</p>
          </div>
        </div>
        <p className="font-aeonik font-extralight text-lg ">
          1 Module Javascript <br />1 Module Human Resources <br />2 Module
          Sales Teams
        </p>
        <Button
          text="Buy Now"
          rounded={true}
          className="flex justify-center bg-white text-[#DDF247] w-[267px] m-auto hover:scale-95 transition-transform"
        />
      </div>
    </div>
  )
}

export default PackageLists
