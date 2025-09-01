import { Layout } from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tweet, TweetData } from '../components/Tweet';
import { Calendar, Link, MapPin } from 'lucide-react';

// Mock data - in a real app, this would come from an API
const manojTweets: TweetData[] = [
    {
    id: '6',
    user: {
      name: 'Manoj',
      username: 'manoj',
      avatar: '/profile.jpg'
    },
    content: 'Just built out my new profile page on this awesome Twitter clone! What do you all think? #React #TypeScript #ShadcnUI',
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    likes: 12,
    retweets: 2,
    replies: 3
  },
  {
    id: '7',
    user: {
      name: 'Manoj',
      username: 'manoj',
      avatar: '/profile.jpg'
    },
    content: 'Dark mode is a game-changer for developer productivity. My eyes are thanking me! 🌙',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
    likes: 45,
    retweets: 8,
    replies: 10
  }
];

const Profile = () => {
  return (
    <Layout>
      <div>
        {/* Cover Photo */}
        <div className="h-48 bg-muted relative">
          <img
            src="/cover.jpg"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4">
          {/* Profile Header */}
          <div className="flex justify-between items-start">
            <div className="relative -mt-20">
              <img
                src="/profile.jpg"
                alt="Manoj"
                className="w-32 h-32 rounded-full border-4 border-background"
              />
            </div>
            <Button variant="outline" className="rounded-full font-bold">
              Edit profile
            </Button>
          </div>

          {/* User Info */}
          <div className="mt-4">
            <h1 className="text-2xl font-bold">Manoj</h1>
            <p className="text-text-secondary">@manoj</p>
          </div>

          <div className="mt-4 text-foreground">
            <p>
              Building cool things with React and TypeScript. Avid open-source contributor.
            </p>
          </div>

          <div className="mt-4 flex items-center gap-4 text-text-secondary">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-1">
              <Link className="w-4 h-4" />
              <a href="#" className="text-primary hover:underline">
                manoj.dev
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Joined August 2024</span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-6">
            <div className="flex items-center gap-1">
              <span className="font-bold">123</span>
              <span className="text-text-secondary">Following</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold">456</span>
              <span className="text-text-secondary">Followers</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="posts" className="w-full mt-4">
          <TabsList className="w-full grid grid-cols-5">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="replies">Replies</TabsTrigger>
            <TabsTrigger value="highlights">Highlights</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <div className="divide-y divide-border">
              {manojTweets.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
