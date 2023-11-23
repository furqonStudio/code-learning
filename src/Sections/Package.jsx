import PackageLists from '../Components/PackageLists'

const Package = () => {
  return (
    <div className="mt-40">
      <div className="flex flex-col justify-center items-center mb-14">
        <h2 className="font-aeonik font-bold text-4xl w-[320px] text-center">
          Choose your package
        </h2>
        <p className="w-[213px] text-center mt-4">
          We provide various types of packages just for you
        </p>
      </div>
      <PackageLists />
    </div>
  )
}

export default Package
