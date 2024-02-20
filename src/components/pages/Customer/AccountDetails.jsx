import React from "react";

function AccountDetails() {
  const updatedState = JSON.parse(sessionStorage.getItem("myObject"));
  console.log(updatedState);
  return (
    <section className="h-[100%] w-[100%] relative" data-aos="zoom-in">
      <section className="rounded-md border-2 py-1.5 w-[97%] bg-white absolute top-4 left-3">
        <div className="ps-4 py-3 uppercase font-semibold">Account Details</div>
        <form className="p-2 ps-20 ">
          <div className="flex gap-[12rem] w-[99%] mb-4">
            <label htmlFor="name" className="text-[rgb(145,142,143)]">
              Name
            </label>
            <input
              className="w-[30%] rounded-md  py-1.5 pl-2  text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter Name"
              id="name"
              name="name"
              value={updatedState && updatedState.name}
            />
          </div>
          <div className="flex gap-[12rem] w-[99%] mb-4">
            <label htmlFor="email" className="text-[rgb(145,142,143)]">
              Email
            </label>
            <input
              className="w-[30%] rounded-md  py-1.5 pl-2 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="email"
              id="emailID"
              name="emailID"
              value={updatedState && updatedState.email}
            />
          </div>
          <div className="flex gap-[7.5rem] w-[99%] mb-4">
            <label htmlFor="name" className="text-[rgb(145,142,143)]">
              Phone number
            </label>
            <input
              className=" w-[30%] rounded-md  py-1.5 pl-2 pr-20 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter Name"
              id="name"
              name="phoneNumber"
              value={updatedState && updatedState.phoneNumber}
            />
          </div>

          <div className="flex gap-[11rem] w-[99%] mb-4">
            <label htmlFor="branchaddress" className="text-[rgb(145,142,143)]">
              Address
            </label>
            <input
              className="w-[30%] rounded-md  pt-1 ps-2 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              id="branchaddress"
              type="text"
              name="addressLine"
              value={updatedState && updatedState?.address?.addressLine}
              cols={30}
              rows={3}
            />
          </div>
          {/* <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
              Country
            </label>
            <select
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              name="country"
              id="country"
              value={updatedState && updatedState?.address?.country}
              onChange={e => {
                console.log(e.target.value);
                setCon(
                  Country.getAllCountries().filter(ele => {
                    return ele.name == e.target.value;
                  })[0].isoCode
                );
                handleChange(e);
              }}
            >
              <option disabled value="" className="text-gray-400">
                -- Select The Country --
              </option>
              {Country.getAllCountries().map(city => {
                return <option value={city.name}>{city.name}</option>;
              })}
            </select>
          </div>

          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
              State
            </label>
            <select
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              name="state"
              id="state"
              value={updatedState && updatedState?.address?.state}
              onChange={e => {
                setStat(
                  State.getStatesOfCountry(cou).find(
                    ele => ele.name === e.target.value
                  )?.isoCode
                );
                setStat(e => {
                  console.log(e);
                });
                setUpdatedState({
                  ...updatedState,
                  address: {
                    ...updatedState.address,
                    [e.target.name]: e.target.value,
                  },
                });
              }}
            >
              <option disabled value="" className="text-gray-400">
                -- Select The State --
              </option>
              {State.getStatesOfCountry(
                cou == null
                  ? Country.getAllCountries().filter(ele => {
                      return ele.name == updatedState?.address?.country;
                    })[0]?.isoCode
                  : cou
              )?.map(region => (
                <option key={region.isoCode} value={region.name}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
              City
            </label>
            <select
              className="w-[80%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              name="city"
              id="city"
              value={updatedState && updatedState?.address?.city}
              onChange={e => {
                handleChange(e);
              }}
            >
              <option disabled value="" className="text-gray-400">
                -- Select The City --
              </option>

              {City.getCitiesOfState(
                cou == null
                  ? Country.getAllCountries().filter(ele => {
                      return ele.name == updatedState?.address?.country;
                    })[0]?.isoCode
                  : cou,
                stat == null
                  ? State.getStatesOfCountry(
                      cou == null
                        ? Country.getAllCountries().filter(ele => {
                            return ele.name == updatedState?.address?.country;
                          })[0]?.isoCode
                        : cou
                    ).filter(ele => {
                      return ele.name == updatedState?.address?.state;
                    })[0]?.isoCode
                  : stat
              ).map(city => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div> */}
          <div className="flex gap-[11rem] w-[99%] mb-4">
            <label htmlFor="bankname" className="text-[rgb(145,142,143)]">
              Pincode
            </label>
            <input
              className="w-[30%] rounded-md  py-1.5 pl-2 pr-20 text-gray-900   "
              type="tel"
              pattern="[0-9]{6}"
              placeholder="Enter here..."
              id="pincode"
              name="pincode"
              value={updatedState && updatedState.address.pincode}
            />
          </div>

          <div className="flex gap-[13rem] w-[99%] mb-4">
            <div className="mb-3">
              <label htmlFor="dob" className="text-[rgb(145,142,143)] ">
                DOB
              </label>
            </div>
            <input
              className="w-[30%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900  placeholder:text-gray-400 "
              type="text"
              id="dob"
              name="dateOfBirth"
              value={updatedState && updatedState?.dateOfBirth?.substr(0, 10)}
            />
          </div>
          <div className="flex gap-[12rem] w-[99%] mb-4">
            <label htmlFor="name" className="text-[rgb(145,142,143)]">
              Status
            </label>
            <select
              className="w-[30%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Enter Name"
              id="status"
              name="status"
              value={updatedState && updatedState.status}
            >
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
            </select>
          </div>
          <div className="flex gap-[12rem] w-[99%] mb-4">
            <label htmlFor="name" className="text-[rgb(145,142,143)]">
              PanNumber
            </label>
            <input
              className="w-[30%] rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
              type="text"
              id="panNumber"
              name="panNumber"
              value={updatedState && updatedState.panNumber}
            />
          </div>

          {/* <div className="flex justify-end pt-4">
            <Button type="submit" name="Update Account"></Button>
          </div> */}
        </form>
      </section>
    </section>
  );
}

export default AccountDetails;
