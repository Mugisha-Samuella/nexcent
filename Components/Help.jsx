import Image from "next/image";
export default function Help() {
  return (
    <>
      <div className="bg-[#F5F7FA] flex flex-col md:flex-row justify-center items-center px-2 md:gap-[7rem] md:p-10">
        <div className="pt-5 md:max-w-[28rem] px-4">
          <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold text-D_Grey">
            Helping a local{" "}
            <span className="text-Primary"> business reinvent itself</span>
          </h1>
          <p className="pt-4 text-[#717171]">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pt-7 px-2 md:gap-[3rem]">
          <div className="flex flex-row gap-6 md:gap-[5rem]">
            <div className="flex flex-row gap-2 md:gap-4">
              <Image src={"/Assets/Icons/members.svg"} width={40} height={40} />
              <div>
                <h1 className="text-D_Grey font-bold text-lg">2,245,341</h1>
                <p className="text-[#717171] text-sm">Members</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 md:gap-4">
              <Image src={"/Assets/Icons/clubs.svg"} width={40} height={40} />
              <div>
                <h1 className="text-D_Grey font-bold text-lg">46,328</h1>
                <p className="text-[#717171] text-sm">Clubs</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6  md:gap-[4rem]">
            <div className="flex flex-row gap-2 md:gap-4">
              <Image src={"/Assets/Icons/bookings.svg"} width={40} height={40} />
              <div>
                <h1 className="text-D_Grey font-bold text-lg">828,867</h1>
                <p className="text-[#717171] text-sm">Event Bookings</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 md:gap-4">
              <Image src={"/Assets/Icons/payment.svg"} width={40} height={40} />
              <div>
                <h1 className="text-D_Grey font-bold text-lg">1,926,436</h1>
                <p className="text-[#717171] text-sm">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
