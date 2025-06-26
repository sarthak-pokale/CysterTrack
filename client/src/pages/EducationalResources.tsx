import { BookOpen, FileText, Video, Download, Search, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EducationalResources() {
  const articles = [
    {
      title: "Understanding PCOS: A Comprehensive Guide",
      description: "Everything you need to know about Polycystic Ovary Syndrome",
      readTime: "15 min read",
      category: "Basics",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      title: "Diet and PCOS: Foods That Help and Hurt",
      description: "Science-based nutrition strategies for managing PCOS symptoms",
      readTime: "12 min read",
      category: "Nutrition",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      title: "Exercise and PCOS: Best Workouts for Hormone Balance",
      description: "Effective exercise routines for women with PCOS",
      readTime: "10 min read",
      category: "Fitness",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      title: "PCOS and Mental Health: Managing Anxiety and Depression",
      description: "Addressing the psychological aspects of PCOS",
      readTime: "8 min read",
      category: "Mental Health",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      title: "Fertility and PCOS: Your Options Explained",
      description: "Understanding fertility challenges and treatment options",
      readTime: "20 min read",
      category: "Fertility",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      title: "Latest PCOS Research: New Treatments and Hope",
      description: "Recent scientific developments in PCOS treatment",
      readTime: "14 min read",
      category: "Research",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
  ];

  const videos = [
    {
      title: "PCOS 101: What Every Woman Should Know",
      duration: "25:30",
      speaker: "Dr. Sarah Johnson",
      thumbnail: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      title: "Meal Planning for PCOS Success",
      duration: "18:45",
      speaker: "Maria Rodriguez, RD",
      thumbnail: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      title: "Exercise Routines for Hormone Balance",
      duration: "22:15",
      speaker: "Emily Chen, PT",
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
  ];

  const downloadableResources = [
    {
      title: "PCOS Meal Planning Guide",
      description: "30-page comprehensive guide with meal plans and recipes",
      type: "PDF",
      size: "2.4 MB",
    },
    {
      title: "Symptom Tracking Journal",
      description: "Printable journal for tracking symptoms and cycles",
      type: "PDF",
      size: "850 KB",
    },
    {
      title: "Exercise Program for PCOS",
      description: "12-week structured workout plan",
      type: "PDF",
      size: "1.8 MB",
    },
    {
      title: "Supplement Guide",
      description: "Evidence-based supplement recommendations",
      type: "PDF",
      size: "1.2 MB",
    },
  ];

  const researchStudies = [
    {
      title: "Metformin in the Treatment of PCOS: A Meta-Analysis",
      journal: "Journal of Endocrinology",
      year: "2024",
      summary: "Comprehensive analysis of metformin effectiveness in PCOS management",
    },
    {
      title: "Inositol Supplementation and Ovarian Function in PCOS",
      journal: "Reproductive Sciences",
      year: "2023",
      summary: "Study on inositol's impact on ovulation and insulin sensitivity",
    },
    {
      title: "Lifestyle Interventions vs. Medical Treatment in PCOS",
      journal: "Fertility & Sterility",
      year: "2023",
      summary: "Comparison of lifestyle changes and medication approaches",
    },
  ];

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Educational Resources
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Access comprehensive articles, guides, and research about PCOS/PCOD and women's health
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-4 w-4" />
            <Input 
              placeholder="Search resources..." 
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                          {article.category}
                        </span>
                        <div className="flex items-center text-xs text-neutral-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-800 mb-2">{article.title}</h3>
                      <p className="text-neutral-600 text-sm mb-4">{article.description}</p>
                      <Button variant="ghost" className="text-primary hover:text-blue-700 p-0">
                        Read Article →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-t-lg">
                        <Video className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-neutral-800 mb-2">{video.title}</h3>
                      <p className="text-neutral-600 text-sm mb-4">with {video.speaker}</p>
                      <Button variant="ghost" className="text-primary hover:text-blue-700 p-0">
                        Watch Video →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="downloads" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {downloadableResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-neutral-800 mb-2">{resource.title}</h3>
                        <p className="text-neutral-600 text-sm mb-3">{resource.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-neutral-500">{resource.type} • {resource.size}</span>
                          <Button size="sm" className="bg-primary text-white hover:bg-blue-700">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research" className="mt-8">
            <div className="space-y-6">
              {researchStudies.map((study, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-neutral-800 mb-2">{study.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-3">
                          <span>{study.journal}</span>
                          <span>•</span>
                          <span>{study.year}</span>
                        </div>
                        <p className="text-neutral-600 mb-4">{study.summary}</p>
                        <Button variant="outline" size="sm">
                          Read Full Study
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Newsletter Signup */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">Stay Updated</h3>
            <p className="text-neutral-600 mb-6">
              Get the latest research, articles, and health tips delivered to your inbox
            </p>
            <div className="flex max-w-md mx-auto space-x-3">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-primary text-white hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}