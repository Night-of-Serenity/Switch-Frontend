import {RouterProvider, createBrowserRouter,  } from 'react-router-dom'
import Sidebar from "../components/Sidebar"
import HomePage from '../pages/HomePage'
import GuestPage from '../pages/GuestPage'
import ExplorePage from '../pages/ExplorePage'
import MessagePage from '../pages/MessagePage'
import ProfilePage from '../pages/ProfilePage'
import NotificationPage from '../pages/NotificationPage'


export default function Router() {

   
    const router = createBrowserRouter([
        {
            path: "/guest",
            element: (<GuestPage/>),
          },
            {
              path: "/",
              element: (
                      // <ProtectedRoute>
                          <HomePage/>
                    // </ProtectedRoute>
                 
                  )
            },
              {
                path: "/explore",
                element: <ExplorePage />,
              },
              {
                path: "/notification",
                element: <NotificationPage/>,
              },
              {
                path: "/message",
                element: <MessagePage />,
              },
              {
                path: "/profile",
                element: <ProfilePage />,
              },
              
        
             
          //   ],
          // },
    ])
  
    return (
      <RouterProvider router={router}/>
    )
  }