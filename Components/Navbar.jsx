import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="max-w-screen-xl flex flex-row justify-between items-center bg-Silver">
        <div className=" p-4 flex flex-row gap-2 ">
          <Image
            src={"/Assets/Images/logoimage.svg"}
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="text-Black font-bold text-2xl">Nexcent</span>
        </div>
        <div className="font-Inter flex flex-row gap-12 justify-between items-center">
          <div>
            <ul className="hidden md:flex md:flex-row gap-6">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Service</a>
              </li>
              <li>
                <a>Feature</a>
              </li>
              <li>
                <a>Product</a>
              </li>
              <li>
                <a>Testimonial</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <div className="hidden sm:flex sm:flex-row gap-4 p-4">
            <a href="#" className="text-Primary  px-4 py-2">
              Login
            </a>
            <a href="#" className="text-white bg-Primary rounded-sm px-4 py-2">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
