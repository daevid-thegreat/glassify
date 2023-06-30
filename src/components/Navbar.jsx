const Navbar = () => {
  return (
    <>
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

      <nav className="mx-10 my-2 py-2 px-24 glass">
        <ul className="flex items-center justify-center">
          <li className="text-white font-bold hover:text-[#047161] mx-6">
            <a href="#">Home</a>
          </li>

          <li className="text-white font-bold hover:text-[#047161] mx-6">
            <a href="#">About</a>
          </li>

          <li className="text-white font-bold hover:text-[#047161] mx-6">
            <a href="#">Products</a>
          </li>

          <li className="text-white font-bold hover:text-[#047161] mx-6">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar