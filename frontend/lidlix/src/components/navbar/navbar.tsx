import React from 'react';

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
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Keranjang</a></li>
              <li><a>Wishlist</a></li>
              <li><a>Keluar</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
