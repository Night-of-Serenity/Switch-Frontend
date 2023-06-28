import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import GuestPage from "../pages/GuestPage";
import ExplorePage from "../pages/ExplorePage";
import MessagePage from "../pages/MessagePage";
import ProfilePage from "../pages/ProfilePage";
import NotificationPage from "../pages/NotificationPage";
import SettingPage from "../pages/SettingPage";
import ProtectedRoute from "../pages/ProtectRoute";
import RedirectIfAuthenticate from "../pages/RedirectIfAuthenticate";
import FriendProfilePage from "../pages/FriendProfilePage";
import CommentPage from "../pages/CommentPage";
import TrendsByIdPage from "../pages/TrendsByIdPage";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/guest",
            element: (
                <RedirectIfAuthenticate>
                    <GuestPage />
                </RedirectIfAuthenticate>
            ),
        },
        {
            path: "/",
            element: (
                <ProtectedRoute>
                    <HomePage />
                </ProtectedRoute>
            ),
        },
        {
            path: "/explore",
            element: (
                <ProtectedRoute>
                    <ExplorePage />
                </ProtectedRoute>
            ),
        },
        {
            path: "/trend/:tagId",
            element: (
                <ProtectedRoute>
                    <TrendsByIdPage />
                </ProtectedRoute>
            ),
        },
        {
            path: "/notification",
            element: (
                <ProtectedRoute>
                    <NotificationPage />
                </ProtectedRoute>
            ),
        },
        {
            path: "/message",
            element: (
                <ProtectedRoute>
                    <MessagePage />
                </ProtectedRoute>
            ),
        },
        {
            path: "/comment",
            element: (
                <ProtectedRoute>
                    <CommentPage />
                </ProtectedRoute>
            ),
        },
        {
            path: "/profile/:tab",
            element: (
                <ProtectedRoute>
                    <ProfilePage />
                </ProtectedRoute>
            ),
        },
        {
            path: "/friend",
            element: (
                <ProtectedRoute>
                    <FriendProfilePage />
                </ProtectedRoute>
            ),
        },
        {
            path: "/setting",
            element: (
                <ProtectedRoute>
                    <SettingPage />
                </ProtectedRoute>
            ),
        },
    ]);

    return <RouterProvider router={router} />;
}
