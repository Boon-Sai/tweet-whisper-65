import { useState } from 'react';
import { Layout } from '../components/Layout';
import { ComposeTweet } from '../components/ComposeTweet';
import { Tweet, TweetData } from '../components/Tweet';

// Mock data for initial tweets
const mockTweets: TweetData[] = [
  {
    id: '1',
    user: {
      name: 'Sarah Chen',
      username: 'sarahdev',
      avatar: 'SC',
      verified: true
    },
    content: 'Just shipped a new feature using React Server Components! The developer experience is incredible. No more prop drilling, cleaner architecture, and better performance out of the box 🚀\n\nWhat are your thoughts on RSCs?',
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
    likes: 127,
    retweets: 23,
    replies: 8
  },
  {
    id: '2',
    user: {
      name: 'Alex Rodriguez',
      username: 'alexcodes',
      avatar: 'AR'
    },
    content: 'Hot take: TypeScript has made me a better JavaScript developer, not just a TypeScript developer.\n\nThe type safety forces you to think more clearly about your data structures and function contracts.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    likes: 89,
    retweets: 12,
    replies: 15
  },
  {
    id: '3',
    user: {
      name: 'Emma Johnson',
      username: 'emmaj_design',
      avatar: 'EJ',
      verified: true
    },
    content: 'Working on a new design system and the attention to detail in shadcn/ui is *chef\'s kiss* 👨‍🍳💋\n\nThe accessibility, customization options, and TypeScript support make it a joy to work with.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    likes: 234,
    retweets: 45,
    replies: 22
  },
  {
    id: '4',
    user: {
      name: 'Marcus Thompson',
      username: 'marcust_dev',
      avatar: 'MT'
    },
    content: 'TIL: You can use CSS Grid to create responsive layouts without media queries!\n\n```css\ngrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n```\n\nThis simple line creates a self-adapting grid. Mind = blown 🤯',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
    likes: 156,
    retweets: 34,
    replies: 12
  },
  {
    id: '5',
    user: {
      name: 'Tech News Daily',
      username: 'technewsdaily',
      avatar: 'TN',
      verified: true
    },
    content: 'BREAKING: New React 19 RC released with exciting features:\n\n✅ React Compiler\n✅ Server Components improvements\n✅ Better hydration\n✅ Enhanced dev tools\n\nThe future of React looks bright! 🌟',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
    likes: 445,
    retweets: 128,
    replies: 67
  }
];

const Index = () => {
  const [tweets, setTweets] = useState<TweetData[]>(mockTweets);

  const handleNewTweet = (content: string) => {
    const newTweet: TweetData = {
      id: Date.now().toString(),
      user: {
        name: 'Manoj',
        username: 'manoj',
        avatar: '/profile.jpg'
      },
      content,
      timestamp: new Date(),
      likes: 0,
      retweets: 0,
      replies: 0
    };

    setTweets([newTweet, ...tweets]);
  };

  const handleLike = (tweetId: string) => {
    // In a real app, this would make an API call
    console.log('Liked tweet:', tweetId);
  };

  const handleRetweet = (tweetId: string) => {
    // In a real app, this would make an API call
    console.log('Retweeted tweet:', tweetId);
  };

  const handleReply = (tweetId: string) => {
    // In a real app, this would open a reply modal
    console.log('Replying to tweet:', tweetId);
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header */}
        <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border z-10">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-bold">Home</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-text-secondary">✨</span>
            </div>
          </div>
        </div>

        {/* Compose Tweet */}
        <ComposeTweet onTweet={handleNewTweet} />

        {/* Tweet Feed */}
        <div className="divide-y divide-border">
          {tweets.map((tweet) => (
            <Tweet
              key={tweet.id}
              tweet={tweet}
              onLike={handleLike}
              onRetweet={handleRetweet}
              onReply={handleReply}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="p-8 text-center">
          <button className="text-primary hover:underline">
            Show more tweets
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;