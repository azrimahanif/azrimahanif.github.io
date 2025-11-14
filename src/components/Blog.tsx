import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Loader2 } from "lucide-react";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories: string[];
  guid: string;
}

interface MediumFeedItem {
  title: string;
  link: string;
  pubDate?: string;
  description?: string;
  categories?: string[];
  guid?: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Auto-load azrimahanif profile on component mount
  useEffect(() => {
    fetchMediumPosts("azrimahanif");
  }, []);

  const fetchMediumPosts = async (username: string) => {
    setLoading(true);
    setError("");
    try {
      // Clean username - remove @ if present
      const cleanUsername = username.replace('@', '');
      
      // Try multiple approaches to fetch Medium posts
      const approaches = [
        // Approach 1: Use Vite proxy with RSS2JSON (most reliable)
        async () => {
          const rssUrl = `https://medium.com/feed/@${cleanUsername}`;
          const response = await fetch(
            `/api/rss2json/api.json?rss_url=${encodeURIComponent(rssUrl)}`
          );
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const data = await response.json();
          
          if (!data.items || data.items.length === 0) {
            throw new Error("No posts found");
          }
          
          const mediumPosts: MediumPost[] = data.items.map((item: MediumFeedItem) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate ? new Date(item.pubDate).toLocaleDateString() : '',
            description: item.description
              ? item.description.replace(/<[^>]*>/g, '').substring(0, 200) + '...'
              : 'No description available',
            categories: item.categories || [],
            guid: item.guid || item.link
          }));
          
          return mediumPosts;
        },
        
        // Approach 2: Use Vite proxy with allorigins for raw XML
        async () => {
          const rssUrl = `https://medium.com/feed/@${cleanUsername}`;
          const response = await fetch(`/api/allorigins/raw?url=${encodeURIComponent(rssUrl)}`);
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const xmlText = await response.text();
          
          // Parse XML manually since we're getting raw XML
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlText, "text/xml");
          const items = xmlDoc.querySelectorAll("item");
          
          if (items.length === 0) {
            throw new Error("No posts found");
          }
          
          const mediumPosts: MediumPost[] = Array.from(items).map((item) => {
            const title = item.querySelector("title")?.textContent || "";
            const link = item.querySelector("link")?.textContent || "";
            const pubDate = item.querySelector("pubDate")?.textContent || "";
            const description = item.querySelector("description")?.textContent || "";
            const categories = Array.from(item.querySelectorAll("category")).map(cat => cat.textContent || "");
            
            return {
              title,
              link,
              pubDate: pubDate ? new Date(pubDate).toLocaleDateString() : '',
              description: description.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
              categories,
              guid: link
            };
          });
          
          return mediumPosts;
        },
        
        // Approach 3: Fallback to direct RSS2JSON (may have CORS issues)
        async () => {
          const rssUrl = `https://medium.com/feed/@${cleanUsername}`;
          const response = await fetch(
            `https://rss2json.com/api.json?rss_url=${encodeURIComponent(rssUrl)}`
          );
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const data = await response.json();
          
          if (!data.items || data.items.length === 0) {
            throw new Error("No posts found");
          }
          
          const mediumPosts: MediumPost[] = data.items.map((item: MediumFeedItem) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate ? new Date(item.pubDate).toLocaleDateString() : '',
            description: item.description
              ? item.description.replace(/<[^>]*>/g, '').substring(0, 200) + '...'
              : 'No description available',
            categories: item.categories || [],
            guid: item.guid || item.link
          }));
          
          return mediumPosts;
        }
      ];
      
      let lastError: Error | null = null;
      
      // Try each approach until one works
      for (const approach of approaches) {
        try {
          const mediumPosts = await approach();
          setPosts(mediumPosts);
          return; // Success, exit early
        } catch (err) {
          lastError = err as Error;
          console.warn('Approach failed:', err);
          // Continue to next approach
        }
      }
      
      // If all approaches failed
      throw lastError || new Error('All fetch approaches failed');
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch posts';
      
      if (errorMessage.includes('No posts found')) {
        setPosts([]);
        setError("No posts found. Your Medium profile exists but doesn't have any published posts yet.");
      } else {
        setError(`Could not connect to Medium profile. ${errorMessage}`);
      }
      console.error('Error fetching Medium posts:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="blog" className="py-20 px-6 texture-wood">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Sharing insights, experiences, and best practices in data engineering and machine learning
          </p>
          
          {error && (
            <div className="text-center mt-4">
              <p className="text-destructive">{error}</p>
              <p className="text-sm text-muted-foreground mt-2">
                Try publishing your first post on Medium or check if your username is correct
              </p>
            </div>
          )}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Loading blog posts...</p>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={post.guid} className="hover:shadow-earth transition-all duration-300 hover:-translate-y-1 bg-card border-organic shadow-natural texture-paper animate-fade-in">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-muted-foreground">{post.pubDate}</span>
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground line-clamp-2 leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {post.categories.slice(0, 3).map((category, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-primary/30 hover:bg-primary/10">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 h-auto text-primary hover:text-primary/80"
                    onClick={() => window.open(post.link, '_blank')}
                  >
                    Read on Medium →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          !error && (
            <div className="text-center text-muted-foreground">
              <p>No blog posts found.</p>
            </div>
          )
        )}

        {posts.length > 0 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open(`https://medium.com/@azrimahanif`, '_blank')}
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
