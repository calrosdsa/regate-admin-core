"use client"
import { useAppSelector } from "@/context/reduxHooks";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import UserSideBar from "./UserSidebar";
import { usePathname } from "next/navigation";
import { adminRoutes } from "@/core/util/routes";
//  import { useRouter } from "next/router";


const SideBar = () =>{
   const user = useAppSelector(state => state.account.user)
   const pathname = usePathname()
    // const router = useRouter()

    return(
        <div className=" shadow-xl">

<aside className=" z-40 w-64 h-screen" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">

         {user != null &&
         <UserSideBar
         user={user}
         />
         }


         {/* <li>
         <Link href={adminRoutes.dashboad.main} className={`${pathname == adminRoutes.dashboad.main && "bg-gray-200 dark:bg-gray-700"}
                     flex items-center w-full p-2 text-gray-900 transition duration-75 group hover:bg-gray-200 dark:text-white
                      dark:hover:bg-gray-700`}>
               <svg aria-hidden="true" 
                className={`w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white
                ${pathname == adminRoutes.dashboad.main && " dark:text-white"}`}
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span className="ml-3">Dashboard</span>
            </Link>
         </li> */}

         <li>
         <Disclosure as={"div"} defaultOpen={true}>
         {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center w-full p-2 text-gray-900 transition duration-75  group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
              <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400
               group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              {/* <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg> */}
                  <span className="flex-1 ml-3 text-left whitespace-nowrap" >Administrar</span>
                  <svg  className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4  text-sm text-gray-500">
              <ul id="dropdown-example" className="space-y-2 py-1">
                  <li>
                     <Link href={adminRoutes.manage.empresas} 
                     className={`${pathname == adminRoutes.manage.empresas && "bg-gray-200 dark:bg-gray-700"}
                     flex items-center w-full p-2 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-200
                     dark:text-white dark:hover:bg-gray-700`}>Empresas</Link>
                  </li>
                  {/* <li>
                     <Link href={adminRoutes.manage.users} 
                     className={`${pathname == adminRoutes.manage.users && "bg-gray-200 dark:bg-gray-700"}
                     flex items-center w-full p-2 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700`}>Usuarios</Link>
                  </li> */}

                  {/* <li>
                     <Link href={adminRoutes.manage.establecimientos} 
                     className={`${pathname == adminRoutes.manage.establecimientos && "bg-gray-200 dark:bg-gray-700"}
                     flex items-center w-full p-2 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700`}>Establecimientos</Link>
                  </li> */}

            </ul>
              </Disclosure.Panel>
            </>
          )}

    </Disclosure>
         </li>



         <li>
         <Disclosure as={"div"} defaultOpen={true}>
         {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center w-full p-2 text-gray-900 transition duration-75  group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
               className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400
               group-hover:text-gray-900 dark:group-hover:text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

              {/* <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg> */}
                  <span className="flex-1 ml-3 text-left whitespace-nowrap" >Data</span>
                  <svg  className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4  text-sm text-gray-500">
              <ul id="dropdown-example" className="space-y-2 py-1">
                  <li>
                     <Link href={adminRoutes.data.labels} 
                     className={`${pathname == adminRoutes.data.labels && "bg-gray-200 dark:bg-gray-700"}
                     flex items-center w-full p-2 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-200
                     truncate dark:text-white dark:hover:bg-gray-700`}>Etiquetas</Link>
                  </li>
                  {/* <li>
                     <Link href={adminRoutes.manage.users} 
                     className={`${pathname == adminRoutes.manage.users && "bg-gray-200 dark:bg-gray-700"}
                     flex items-center w-full p-2 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700`}>Usuarios</Link>
                  </li> */}

                  {/* <li>
                     <Link href={adminRoutes.manage.establecimientos} 
                     className={`${pathname == adminRoutes.manage.establecimientos && "bg-gray-200 dark:bg-gray-700"}
                     flex items-center w-full p-2 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700`}>Establecimientos</Link>
                  </li> */}

            </ul>
              </Disclosure.Panel>
            </>
          )}

    </Disclosure>
         </li>


         <li>
            <Link href={adminRoutes.depositos} className={`${pathname == adminRoutes.depositos && "bg-gray-200 dark:bg-gray-700"}
                     flex items-center w-full p-2 text-gray-900 transition duration-75 group hover:bg-gray-200 dark:text-white
                      dark:hover:bg-gray-700`}>
               {/* <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> */}
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
               className={`w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white
               ${pathname == adminRoutes.depositos && " dark:text-white"}`}>
               <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
               <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
               </svg>
               <span className="ml-3">Depósitos</span>
            </Link>
         </li>

         <li>
            <Link href={adminRoutes.system.cronjobs} className={`${pathname == adminRoutes.system.cronjobs && "bg-gray-200 dark:bg-gray-700"}
                     flex items-center w-full p-2 text-gray-900 transition duration-75 group hover:bg-gray-200 dark:text-white
                      dark:hover:bg-gray-700`}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
               className={`w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white
               ${pathname == adminRoutes.system.cronjobs && " dark:text-white"}`}>
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
               </svg>
               <span className="ml-3">Cron Jobs</span>
            </Link>
         </li>

    
         <li>
            <Link  href={adminRoutes.notifications.root} className={`${pathname == adminRoutes.notifications.root && "bg-gray-200 dark:bg-gray-700"}
                     flex items-center w-full p-2 text-gray-900 transition duration-75 group hover:bg-gray-200 dark:text-white
                      dark:hover:bg-gray-700`}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
              className={`w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white
              ${pathname == adminRoutes.notifications.root && " dark:text-white"}`}>
  <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
</svg>

               <span className="flex-1 ml-3 whitespace-nowrap">Notificaciones</span>
            </Link>
         </li>

        
         {/* <li>
            <Link href="admin/establecimientos" className="flex items-center p-2 text-gray-900  dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Establecimientos</span>
            </Link>
         </li> */}
         {/* <li>
            <a href="#" className="flex items-center p-2 text-gray-900  dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900  dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900  dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900  dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900  dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </a>
         </li> */}
      </ul>
   </div>
</aside>

        </div>
    )
}

export default SideBar;