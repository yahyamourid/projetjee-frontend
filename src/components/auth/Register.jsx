import axios from "axios";
import { useState } from "react"
import React from 'react'

const Register = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState({
    nom:"",
    prenom:"",
    dateNaissance:"",
    role:"",
    email: "",
    password: ""
  })

  const [err, setErr] = useState("")

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user); 
  }

  
  

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const submit = async () => {
    console.log(user)
    const res = await axios.post("http://localhost:3030/api/users/register", user)
    console.log(res.data)
    // setUser({
    //   email:"",
    //   password:""
    // })
  }

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className='dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16 min-h-screen'>
        <main class="w-full max-w-lg  mx-auto p-6">
          <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="p-4 sm:p-7">
              <div class="text-center">
                <h1 class="block  text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
                <p class="mt-2   text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?
                  <a class="text-blue-600 ml-2 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples/html/signup.html">
                    Sign in here
                  </a>
                </p>
              </div>


              <div class="mt-5">

                <div class="grid gap-y-4">

                  <div>
                    <label for="nom" class="block text-sm mb-2 dark:text-white">Nom </label>
                    <div class="relative">
                      <input type="text" id="nom" name="nom" value={user.nom} onChange={handleInput} class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error" />
                      <div class="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>

                  </div>
                  <div>
                    <label for="prenom" class="block text-sm mb-2 dark:text-white">Prenom</label>
                    <div class="relative">
                      <input type="text" id="prenom" name="prenom" value={user.prenom} onChange={handleInput} class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error" />
                      <div class="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>

                  </div>
                  <div>
                    <label for="dateNaissance" class="block text-sm mb-2 dark:text-white">Date de Naissance </label>
                    <div class="relative">
                      <input type="date" id="dateNaissance" name="dateNaissance" value={user.dateNaissance} onChange={handleInput} class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error" />
                      <div class="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                  </div>
                  <div>
                    <label for="role" class="block text-sm mb-2 dark:text-white">Role</label>
                    <div class="relative">
                      <select 
    class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error"
    id="role"
    name="role"
    value={user.role}
    onChange={handleInput}  
   >

                        <option value="">Choose</option>
                        <option value="etudiant">Etudiant</option>
                        <option value="prof">Professeur</option>

                      </select>
                    

                    </div>

                  </div>
                  <div>
                    <label for="email" class="block text-sm mb-2 dark:text-white">Email address</label>
                    <div class="relative">
                      <input type="email" id="email" name="email" value={user.email} onChange={handleInput} class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error" />
                      <div class="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                  </div>

                  <div>
                    <div class="flex justify-between items-center">
                      <label for="password" class="block text-sm mb-2 dark:text-white">Password</label>
                    </div>
                    <div class="relative">
                      <input type="password" id="password" name="password" value={user.password} onChange={handleInput} class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="password-error" />
                      <div class="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                  </div>



                 


                  <button onClick={submit} class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Sign up </button>
                </div>


              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleDarkMode}
              className="bg-gray-200 dark:bg-gray-700 rounded-full p-2 focus:outline-none focus:ring focus:border-blue-300"
            >
              {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </main>
      </div>
    </div>


  )
}

export default Register