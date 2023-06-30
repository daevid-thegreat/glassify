const Navbar = () => {
  return (
    <div className="glass mt-6 flex content-center justify-between px-10 py-5 mx-10 border">
      <div className="flex">
        <img src="/GLASSIFY.png" alt="logo" width={175} height={100} />
      </div>

      <div className="flex items-center space-x-5">
          <span className=" text-sm text-white">
            Call us: <a className="text-md font-bold" href="tel:+1-800-555-1234">+1-800-555-1234</a>
          </span>

          <span className=" text-sm text-white">
            Email us: <a className="text-md font-bold" href="mailto:glass@glassify.com">glass@glassify.com</a>
          </span>
      </div>
      
    </div>
  )
}

export default Navbar