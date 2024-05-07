export default function AffiliateAccount() {
  return (
    <>
      <div className="my-4">
        {/* Profile Header */}
        <div className="h-[170px] md:h-[312px] overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWxhbmR8ZW58MHx8MHx8fDA%3D"
            alt="Seller Cover Picture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between contEl lg:items-center relative -translate-y-6 lg:-translate-y-12">
          <div className="flex gap-3 items-end md:items-center">
            <div className="w-[100px] md:w-[200px] aspect-square border-[5px] border-light-grey-clr rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybWVyfGVufDB8fDB8fHww"
                alt="Seller Profile Image"
                className="w-full h-full object-cover"
              />
            </div>
            <span>
              <h3 className="text-lg md:text-2xl font-semibold uppercase">
                ALVAN MARGERINE
              </h3>
              <div className="flex items-center gap-2">
                <p className="text-xs md:text-sm text-grey-clr">
                  Affiliate Marketer
                </p>
                <span className="btn btn-xs bg-amber-600 text-white shadow-none uppercase hover:bg-amber-600">
                  gold
                </span>
              </div>
              <p className="text-xs md:text-sm text-grey-clr">
                alvanmargerine@agromail.com
              </p>
            </span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <button className="btn btn-sm uppercase btn-outline border-2 border-yellow-clr text-yellow-clr hover:bg-yellow-clr hover:text-white hover:border-yellow-clr">
              edit account
            </button>
            <button className="btn uppercase btn-sm btn-outline border-2 border-red-clr text-red-clr hover:text-white hover:bg-red-clr hover:border-red-clr">
              delete account
            </button>
          </div>
        </div>

        {/* Profile data */}
        <div className="block md:flex items-start mt-12 gap-2">
          <div className="basis-2/3 bg-white rounded-lg">
            <p className="text-sm font-semibold p-4 border-b">
              Personal Information
            </p>
            <div className=" p-4">
              <div className="mb-4">
                <p className="uppercase font-semibold text-xs">full name</p>
                <p className="text-sm uppercase">alvan margerine</p>
              </div>
              <div className="mb-4">
                <p className="uppercase font-semibold text-xs">email address</p>
                <p className="text-sm uppercase">alvanmargerine@agromail.com</p>
              </div>

              <div className="mb-4">
                <p className="uppercase font-semibold text-xs">Phone number</p>
                <p className="text-sm uppercase">+23910123456789</p>
              </div>

              <div className="mb-4">
                <p className="uppercase font-semibold text-xs">Home Address</p>
                <p className="text-sm uppercase">
                  2109, SOMEWHERE STREET, SOMEWHERE, LAGOS
                </p>
              </div>

              <div className="mb-4">
                <p className="uppercase font-semibold text-xs">Joined Date</p>
                <p className="text-sm uppercase">JANUARY 21ST, 2023</p>
              </div>

              <div>
                <p className="uppercase font-semibold text-xs">
                  Verification Status
                </p>
                <p className="text-sm uppercase">verified</p>
              </div>
            </div>
          </div>
          <div className="basis-1/3 mt-4 md:mt-0 grid grid-cols-2 gap-2">
            <div className="w-full bg-white rounded-lg">
              <p className="py-2 px-4 border-b text-sm font-semibold">Sales</p>
              <h2 className="text-4xl font-medium p-4">3456</h2>
            </div>
            <div className="w-full bg-white rounded-lg">
              <p className="py-2 px-4 border-b text-sm font-semibold">Links</p>
              <h2 className="text-4xl font-medium p-4">3456</h2>
            </div>
            <div className="w-full bg-white rounded-lg">
              <p className="py-2 px-4 border-b text-sm font-semibold">Carts</p>
              <h2 className="text-4xl font-medium p-4">3456</h2>
            </div>
            <div className="w-full bg-white rounded-lg">
              <p className="py-2 px-4 border-b text-sm font-semibold">
                Balance (NGN)
              </p>
              <h2 className="text-4xl font-medium p-4">234.9k</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
