import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto flex">
        <Sidebar />
        <main className="flex-1 border-x border-border min-h-screen">
          {children}
        </main>
        <div className="w-80 p-4 hidden lg:block">
          {/* Right sidebar content - trends, who to follow, etc. */}
          <div className="bg-card rounded-2xl p-4 border border-border">
            <h2 className="text-xl font-bold mb-4">What's happening</h2>
            <div className="space-y-3">
              <div className="hover:bg-muted p-2 rounded-lg cursor-pointer transition-colors">
                <p className="text-sm text-text-secondary">Trending in Technology</p>
                <p className="font-semibold">React 19</p>
                <p className="text-sm text-text-secondary">42.1K posts</p>
              </div>
              <div className="hover:bg-muted p-2 rounded-lg cursor-pointer transition-colors">
                <p className="text-sm text-text-secondary">Trending</p>
                <p className="font-semibold">JavaScript</p>
                <p className="text-sm text-text-secondary">28.3K posts</p>
              </div>
              <div className="hover:bg-muted p-2 rounded-lg cursor-pointer transition-colors">
                <p className="text-sm text-text-secondary">Technology · Trending</p>
                <p className="font-semibold">TypeScript</p>
                <p className="text-sm text-text-secondary">15.7K posts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}