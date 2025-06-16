
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Loader2 } from "lucide-react";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories: string[];
  guid: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [mediumUsername, setMediumUsername] = useState("azrimahanif");
  const [error, setError] = useState("");

  // Auto-load your profile on component mount
  useEffect(() => {
    fetchMediumPosts("azrimahanif");
  }, []);

  const fetchMediumPosts = async (username: string) => {
    setLoading(true);
    setError("");
    
    try {
      // Clean username - remove @ if present
      const cleanUsername = username.replace('@', '');
      
      // Try different RSS URL formats
      const rssUrls = [
        `https://medium.com/feed/@${cleanUsername}`,
        `https://medium.com/feed/${cleanUsername}`,
        `https://${cleanUsername}.medium.com/feed`
      ];
      
      let data = null;
      let lastError = null;
      
      for (const rssUrl of rssUrls) {
        try {
          console.log(`Trying RSS URL: ${rssUrl}`);
          const response = await fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
          );
          
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }
          
          const result = await response.json();
          console.log(`RSS result for ${rssUrl}:`, result);
          
          if (result.status === 'ok' && result.items && result.items.length > 0) {
            data = result;
            break;
          } else if (result.status === 'ok' && result.items && result.items.length === 0) {
            // Profile exists but no posts yet
            data = result;
            break;
          }
        } catch (err) {
          lastError = err;
          console.log(`Failed to fetch from ${rssUrl}:`, err);
        }
      }
      
      if (!data) {
        throw lastError || new Error('Could not fetch from any RSS URL');
      }
      
      if (data.items.length === 0) {
        setPosts([]);
        setError("No posts found. Your Medium profile exists but doesn't have any published posts yet.");
        return;
      }
      
      const mediumPosts: MediumPost[] = data.items.map((item: any) => ({
        title: item.title,
        link: item.link,
        pubDate: new Date(item.pubDate).toLocaleDateString(),
        description: item.description ? 
          item.description.replace(/<[^>]*>/g, '').substring(0, 200) + '...' : 
          'No description available',
        categories: item.categories || [],
        guid: item.guid
      }));
      
      setPosts(mediumPosts);
      console.log(`Successfully loaded ${mediumPosts.length} posts`);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch posts';
      setError(`Could not connect to Medium profile. ${errorMessage}`);
      console.error('Error fetching Medium posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mediumUsername.trim()) {
      fetchMediumPosts(mediumUsername.trim());
    }
  };

  return (
    <section id="blog" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Sharing insights, experiences, and best practices in data engineering and machine learning
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
            <Input
              type="text"
              placeholder="Enter Medium username (e.g., azrimahanif or @azrimahanif)"
              value={mediumUsername}
              onChange={(e) => setMediumUsername(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Load Posts"}
            </Button>
          </form>
          
          {error && (
            <div className="text-center mt-4">
              <p className="text-red-600">{error}</p>
              <p className="text-sm text-slate-500 mt-2">
                Try publishing your first post on Medium or check if your username is correct
              </p>
            </div>
          )}
        </div>

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={post.guid} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-slate-500">{post.pubDate}</span>
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-800 line-clamp-2 leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {post.categories.slice(0, 3).map((category, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start p-0 h-auto text-blue-600 hover:text-blue-700"
                    onClick={() => window.open(post.link, '_blank')}
                  >
                    Read on Medium →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          !loading && !error && (
            <div className="text-center text-slate-500">
              <p>Loading your Medium posts...</p>
            </div>
          )
        )}

        {posts.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open(`https://medium.com/@${mediumUsername.replace('@', '')}`, '_blank')}
            >
              View All Posts on Medium
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
