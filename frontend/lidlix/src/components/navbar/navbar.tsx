import React from 'react';
import CollapseProfile from './collapse-profile';
export default function MainNavbar() {

  return (
    <div data-theme="dracula">
      <div className="navbar bg-base-100">
        <div className="flex justify-between w-full">
          <a className="btn btn-ghost text-xl">UPI Store</a>
          <div className='w-1/2'>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-full md:w-auto" />
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className=" z-[1] shadow menu menu-md rounded dropdown-content bg-indigo-950 w-96">
              <CollapseProfile/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
