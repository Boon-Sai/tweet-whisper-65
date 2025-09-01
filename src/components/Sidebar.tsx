import { Home, Search, Bell, Mail, Bookmark, User, MoreHorizontal, Hash } from 'lucide-react';
import { Button } from './ui/button';

const menuItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Search, label: 'Explore' },
  { icon: Bell, label: 'Notifications' },
  { icon: Mail, label: 'Messages' },
  { icon: Bookmark, label: 'Bookmarks' },
  { icon: Hash, label: 'Communities' },
  { icon: User, label: 'Profile' },
  { icon: MoreHorizontal, label: 'More' },
];

export function Sidebar() {
  return (
    <div className="w-64 h-screen p-4 xl:px-6 flex flex-col">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
          <span className="text-background font-bold text-lg">𝕏</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                className={`flex items-center gap-4 w-full p-3 rounded-full hover:bg-muted transition-colors text-left ${
                  item.active ? 'font-bold' : ''
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xl hidden xl:block">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Tweet Button */}
        <Button className="gradient-primary w-full mt-6 py-3 text-lg font-bold rounded-full hover:opacity-90 transition-opacity">
          <span className="hidden xl:block">Post</span>
          <span className="xl:hidden">+</span>
        </Button>
      </nav>

      {/* User Profile */}
      <div className="mt-auto">
        <div className="flex items-center gap-3 p-3 rounded-full hover:bg-muted transition-colors cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">JD</span>
          </div>
          <div className="hidden xl:block flex-1">
            <p className="font-semibold">John Doe</p>
            <p className="text-text-secondary text-sm">@johndoe</p>
          </div>
          <MoreHorizontal className="w-5 h-5 hidden xl:block" />
        </div>
      </div>
    </div>
  );
}