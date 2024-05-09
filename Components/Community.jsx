import Image from "next/image";
export default function Community() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center   p-5 md:p-0">
        <div className="text-D_Grey font-Inter text-2xl">
          <h1 className="text-D_Grey text-2xl font-semibold max-w-[28rem] text-center">
            Manage your entire community in a single system
          </h1>
        </div>
        <p className="text-[#717171] text-md text-center pt-3">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="flex flex-col gap-6 md:flex-row pt-4 md:px-[3rem]">
        <div className="flex flex-col  justify-center items-center px-4 pt-4">
          <div className="flex flex-col justify-center items-center bg-white shadow-sm rounded-md p-4">
            <div className="">
              <Image src={"/Assets/Icons/members.svg"} width={50} height={50} />
            </div>
            <h1 className="font-bold text-3xl text-center pt-4">
              Membership <br /> Organisations
            </h1>
            <p className="pt-2 text-center text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-4 pt-4">
          <div className="flex flex-col justify-center items-center bg-white shadow-sm rounded-md p-4">
            <div className="">
              <Image src={"/Assets/Icons/members.svg"} width={50} height={50} />
            </div>
            <h1 className="font-bold text-3xl text-center pt-4 ">
            National <br /> Associations
            </h1>
            <p className="pt-2 text-center text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-4 pt-4">
          <div className="flex flex-col justify-center items-center bg-white shadow-sm rounded-md p-4">
            <div className="">
              <Image src={"/Assets/Icons/members.svg"} width={50} height={50} />
            </div>
            <h1 className="font-bold text-3xl text-center pt-4">
            Clubs And <br /> Groups    
            </h1>
            <p className="pt-2 text-center text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
