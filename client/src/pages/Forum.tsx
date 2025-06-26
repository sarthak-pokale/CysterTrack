import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MessageCircle, Heart, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ForumPost {
  id: number;
  title: string;
  content: string;
  category: string;
  likes: number;
  replies: number;
  createdAt: string;
}

export default function Forum() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["/api/forum-posts", selectedCategory === "all" ? undefined : selectedCategory],
    queryFn: async () => {
      const url = selectedCategory === "all" 
        ? "/api/forum-posts" 
        : `/api/forum-posts?category=${selectedCategory}`;
      const response = await fetch(url);
      return response.json();
    },
  });

  const categories = [
    { id: "all", name: "All Categories", icon: MessageCircle, color: "text-primary" },
    { id: "General Discussion", name: "General Discussion", icon: MessageCircle, color: "text-primary" },
    { id: "PCOS Support", name: "PCOS Support", icon: Heart, color: "text-accent" },
    { id: "Diet & Nutrition", name: "Diet & Nutrition", icon: User, color: "text-orange-600" },
    { id: "Fitness & Exercise", name: "Fitness & Exercise", icon: User, color: "text-green-600" },
    { id: "Mental Health", name: "Mental Health", icon: User, color: "text-purple-600" },
    { id: "Fertility & TTC", name: "Fertility & TTC", icon: User, color: "text-pink-600" },
    { id: "Ask the Experts", name: "Ask the Experts", icon: User, color: "text-blue-600" },
  ];

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return "1 day ago";
    return `${Math.floor(diffInHours / 24)} days ago`;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "PCOS Support":
        return "bg-accent/20 text-accent";
      case "General Discussion":
        return "bg-primary/20 text-primary";
      case "Diet & Nutrition":
        return "bg-orange-200 text-orange-700";
      case "Mental Health":
        return "bg-purple-200 text-purple-700";
      default:
        return "bg-neutral-200 text-neutral-700";
    }
  };

  const defaultAvatars = [
    "https://images.unsplash.com/photo-1494790108755-2616b9a3b464?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
  ];

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">Community Forum</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Connect with other women, share experiences, and get support on your health journey
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Forum Categories */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <li key={category.id}>
                        <button
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center w-full text-left p-2 rounded-md transition-colors ${
                            selectedCategory === category.id
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-neutral-600 hover:text-primary hover:bg-neutral-50"
                          }`}
                        >
                          <IconComponent className={`h-4 w-4 mr-2 ${category.color}`} />
                          {category.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Forum Posts */}
          <div className="lg:col-span-3">
            <Card>
              {/* Forum Header */}
              <div className="p-6 border-b border-neutral-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-neutral-800">Recent Discussions</h2>
                  <Button className="bg-primary text-white hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    New Post
                  </Button>
                </div>
              </div>

              {/* Forum Posts List */}
              <div className="divide-y divide-neutral-200">
                {isLoading ? (
                  <div className="p-6 text-center">
                    <p className="text-neutral-600">Loading posts...</p>
                  </div>
                ) : posts.length === 0 ? (
                  <div className="p-6 text-center">
                    <p className="text-neutral-600">No posts found in this category.</p>
                  </div>
                ) : (
                  posts.map((post: ForumPost, index: number) => (
                    <div key={post.id} className="p-6 hover:bg-neutral-50 transition-colors">
                      <div className="flex items-start space-x-4">
                        <img
                          src={defaultAvatars[index % defaultAvatars.length]}
                          alt="User avatar"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-neutral-800 hover:text-primary cursor-pointer">
                              {post.title}
                            </h3>
                            <span className="text-sm text-neutral-500">
                              {formatTimeAgo(post.createdAt)}
                            </span>
                          </div>
                          <p className="text-neutral-600 mb-3">{post.content}</p>
                          <div className="flex items-center space-x-4 text-sm text-neutral-500">
                            <span className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              Anonymous
                            </span>
                            <span className="flex items-center">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              {post.replies} replies
                            </span>
                            <span className="flex items-center">
                              <Heart className="h-4 w-4 mr-1" />
                              {post.likes} likes
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(post.category)}`}>
                              {post.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Pagination */}
              <div className="p-6 border-t border-neutral-200">
                <div className="flex justify-center space-x-2">
                  <Button variant="outline">Previous</Button>
                  <Button className="bg-primary text-white">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
