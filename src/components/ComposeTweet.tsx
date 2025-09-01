import { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Image, MapPin, Smile, Calendar } from 'lucide-react';

interface ComposeTweetProps {
  onTweet?: (content: string) => void;
}

export function ComposeTweet({ onTweet }: ComposeTweetProps) {
  const [content, setContent] = useState('');
  const maxLength = 280;

  const handleSubmit = () => {
    if (content.trim() && onTweet) {
      onTweet(content.trim());
      setContent('');
    }
  };

  const isOverLimit = content.length > maxLength;
  const isNearLimit = content.length > maxLength * 0.8;

  return (
    <div className="border-b border-border p-4">
      <div className="flex gap-3">
        {/* User Avatar */}
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-semibold">JD</span>
        </div>

        {/* Compose Area */}
        <div className="flex-1">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What is happening?!"
            className="border-none resize-none text-xl placeholder:text-muted-foreground bg-transparent focus-visible:ring-0 p-0 min-h-[120px]"
          />

          {/* Tweet Options */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-4">
              <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                <Image className="w-5 h-5" />
              </button>
              <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                <MapPin className="w-5 h-5" />
              </button>
              <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                <Smile className="w-5 h-5" />
              </button>
              <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                <Calendar className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              {/* Character Counter */}
              {content && (
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8">
                    <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="hsl(var(--muted))"
                        strokeWidth="2"
                      />
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke={isOverLimit ? "hsl(var(--destructive))" : isNearLimit ? "hsl(45 93% 47%)" : "hsl(var(--primary))"}
                        strokeWidth="2"
                        strokeDasharray={`${2 * Math.PI * 14}`}
                        strokeDashoffset={`${2 * Math.PI * 14 * (1 - Math.min(content.length / maxLength, 1))}`}
                        className="transition-all"
                      />
                    </svg>
                    {isNearLimit && (
                      <span className={`absolute inset-0 flex items-center justify-center text-xs font-semibold ${
                        isOverLimit ? 'text-destructive' : 'text-muted-foreground'
                      }`}>
                        {isOverLimit ? maxLength - content.length : ''}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Post Button */}
              <Button
                onClick={handleSubmit}
                disabled={!content.trim() || isOverLimit}
                className="gradient-primary font-bold rounded-full px-6 hover:opacity-90 disabled:opacity-50 transition-opacity"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}