import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  MoreHorizontal,
  Hash,
} from 'lucide-react'
import { Button } from './ui/button'
import { NavLink } from 'react-router-dom'

const menuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Search, label: 'Explore', path: '/explore' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
  { icon: Mail, label: 'Messages', path: '/messages' },
  { icon: Bookmark, label: 'Bookmarks', path: '/bookmarks' },
  { icon: Hash, label: 'Communities', path: '/communities' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: MoreHorizontal, label: 'More', path: '/more' },
]

export function Sidebar() {
  return (
    <div className="w-64 h-screen p-4 xl:px-6 flex flex-col">
      {/* Logo */}
      <div className="mb-8">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
            <span className="text-background font-bold text-lg">𝕏</span>
          </div>
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full p-3 rounded-full hover:bg-muted transition-colors text-left ${
                    isActive ? 'font-bold' : ''
                  }`
                }
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xl hidden xl:block">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Tweet Button */}
        <NavLink to="/">
          <Button className="gradient-primary w-full mt-6 py-3 text-lg font-bold rounded-full hover:opacity-90 transition-opacity">
            <span className="hidden xl:block">Post</span>
            <span className="xl:hidden">+</span>
          </Button>
        </NavLink>
      </nav>

      {/* User Profile */}
      <div className="mt-auto">
        <div className="flex items-center gap-3 p-3 rounded-full hover:bg-muted transition-colors cursor-pointer">
          <img
            src="/profile.jpg"
            alt="Manoj"
            className="w-10 h-10 rounded-full"
          />
          <div className="hidden xl:block flex-1">
            <p className="font-semibold">Manoj</p>
            <p className="text-text-secondary text-sm">@manoj</p>
          </div>
          <MoreHorizontal className="w-5 h-5 hidden xl:block" />
        </div>
      </div>
    </div>
  )
}