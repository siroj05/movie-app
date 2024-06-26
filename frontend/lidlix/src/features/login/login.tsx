import { useState } from 'react';
import LoginApi from './login-api';
import { useNavigate } from 'react-router-dom';
import {dbtest} from '../../../fireBaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<any>();
  const navigateTo = useNavigate();

  let res: any;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    res = LoginApi(email, password);
    setMessage(res);
    if (res.isTrue) {
      navigateTo('/');
    }
  };

  // setDoc buat edit/update

  const response = async () => {
    // --------------UPDATE-----------------
    // await setDoc(doc(dbtest, "user", "aRPK2bSN8hWBexrOp0Nl"),{
    //   "firstName" : "jaenudin"
    // })
    // --------------CREATE----------------
    // await addDoc(collection(dbtest,"user"),{
    //   "firstName" : "ismed"
    // })
    // --------------READ BANYAK-----------
    // const a = await getDocs(collection(dbtest, "user"))
    // a.forEach((doc) => {
    //   console.log(doc.data().firstName)
    // })
    // --------------DELETE-----------------
    // await deleteDoc(doc(dbtest, "user", "iduser"))
    // --------------READ DETAIL------------
    // await getDoc(doc(dbtest, "user", "id nya"))
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleSubmit}
                type="button"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </div>
          <p className={message?.isTrue ? 'text-green-600' : 'text-red-600'}>
            {message?.message}
          </p>
          {/* <form className="space-y-6" method="POST">
        </form> */}
        </div>
      </div>
    </>
  );
};

export default Login;

