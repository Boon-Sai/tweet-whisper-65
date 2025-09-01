import { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export interface TweetData {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  timestamp: Date;
  likes: number;
  retweets: number;
  replies: number;
  isLiked?: boolean;
  isRetweeted?: boolean;
}

interface TweetProps {
  tweet: TweetData;
  onLike?: (id: string) => void;
  onRetweet?: (id: string) => void;
  onReply?: (id: string) => void;
}

export function Tweet({ tweet, onLike, onRetweet, onReply }: TweetProps) {
  const [isLiked, setIsLiked] = useState(tweet.isLiked || false);
  const [isRetweeted, setIsRetweeted] = useState(tweet.isRetweeted || false);
  const [likeCount, setLikeCount] = useState(tweet.likes);
  const [retweetCount, setRetweetCount] = useState(tweet.retweets);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    onLike?.(tweet.id);
  };

  const handleRetweet = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRetweeted(!isRetweeted);
    setRetweetCount(prev => isRetweeted ? prev - 1 : prev + 1);
    onRetweet?.(tweet.id);
  };

  const handleReply = (e: React.MouseEvent) => {
    e.stopPropagation();
    onReply?.(tweet.id);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <article className="tweet-card p-4 border-b border-border">
      <div className="flex gap-3">
        {/* User Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              {tweet.user.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>

        {/* Tweet Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-1 mb-1">
            <span className="font-bold text-foreground hover:underline cursor-pointer">
              {tweet.user.name}
            </span>
            {tweet.user.verified && (
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
            )}
            <span className="text-text-secondary">@{tweet.user.username}</span>
            <span className="text-text-secondary">·</span>
            <span className="text-text-secondary hover:underline cursor-pointer">
              {formatDistanceToNow(tweet.timestamp, { addSuffix: true })}
            </span>
            <div className="ml-auto">
              <button className="text-text-secondary hover:text-foreground hover:bg-muted p-1.5 rounded-full transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Tweet Text */}
          <div className="text-foreground text-[15px] leading-5 mb-3 whitespace-pre-wrap break-words">
            {tweet.content}
          </div>

          {/* Engagement Bar */}
          <div className="flex items-center justify-between max-w-md">
            <button 
              onClick={handleReply}
              className="engagement-btn reply-btn group"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">{tweet.replies > 0 ? formatNumber(tweet.replies) : ''}</span>
            </button>

            <button 
              onClick={handleRetweet}
              className={`engagement-btn retweet-btn group ${isRetweeted ? 'retweeted' : ''}`}
            >
              <Repeat2 className="w-5 h-5" />
              <span className="text-sm">{retweetCount > 0 ? formatNumber(retweetCount) : ''}</span>
            </button>

            <button 
              onClick={handleLike}
              className={`engagement-btn like-btn group ${isLiked ? 'liked' : ''}`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm">{likeCount > 0 ? formatNumber(likeCount) : ''}</span>
            </button>

            <button className="engagement-btn group">
              <Share className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}