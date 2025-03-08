export default function Navbar() {
  return (
    <div className="h-[164px] ">
      <div className="flex justify-between items-center h-full ">
        <div className="text-[38px] font-medium ">FreshHarvest</div>
        <nav className="flex gap-10 justify-center items-center h-full">
          <a href="#" className="text-lg text-[20px] font-medium">
            Home
          </a>
          <a href="#" className="text-lg text-[20px] font-medium ">
            About us
          </a>
          <a href="#" className="text-lg text-[20px] font-medium">
            Shop
          </a>

          <a
            href="#"
            className="text-lg text-white bg-black px-6 py-3.5 rounded-md"
          >
            Login
          </a>
        </nav>
      </div>
    </div>
  );
}
