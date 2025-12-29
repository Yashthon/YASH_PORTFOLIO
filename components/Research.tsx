import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Users, Calendar, Award } from "lucide-react";

export default function Research() {
  const publications = [
    {
      title: "An Analysis of Financial Fraud Detection Methods Using AI",
      journal: "Vidhyayana Journal",
      conference: "IAAR Conference",
      date: "May 2023",
      type: "Published Author",
      description: "Comprehensive analysis of artificial intelligence techniques for detecting financial fraud, exploring machine learning algorithms and their effectiveness in real-world scenarios.",
      keywords: ["AI", "Fraud Detection", "Machine Learning", "Financial Technology"],
      icon: "🏅"
    },
    {
      title: "Sentiment Analysis of Emotion Detection Using NLP",
      journal: "Springer's Algorithms for Intelligent Systems",
      conference: "4th ICCCT Conference",
      date: "October 2022",
      venue: "Rajasthan Institute of Engineering and Technology",
      type: "Springer Publication",
      description: "Advanced natural language processing techniques for emotion detection and sentiment analysis, published in Springer's prestigious series.",
      keywords: ["NLP", "Sentiment Analysis", "Emotion Detection", "Machine Learning"],
      icon: "📘"
    }
  ];

  const books = [
    {
      title: "Broken Lines, Unbroken Spirits",
      type: "Army Fiction Novel",
      description: "A compelling military fiction novel exploring the resilience of soldiers and the bonds forged in the line of duty.",
      platforms: ["Available in Print", "Digital Format"],
      genre: "Military Fiction",
      icon: "📖"
    }
  ];

  const podcasts = [
    {
      title: "Broken Lines, Unbroken Spirits",
      description: "Engaging discussions on technology, military history, and personal development.",
      platforms: [
        { name: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/broken-lines-unbroken-spirits-in-%E0%A4%B9-%E0%A4%A8-%E0%A4%A6/id1823431566" },
        { name: "Spotify", url: "https://open.spotify.com/show/5XCXqiQSqw1o9cI2ew4KCz?si=4eefc4d31af64d2b" }
      ],
      type: "Technology & Military Podcast",
      icon: "🎙️"
    }
  ];

  const patent = {
    title: "Method of Object Detection and Traffic Control Based on Artificial Intelligence",
    applicationNo: "202221071202",
    office: "Delhi, India",
    description: "Utilizes YOLO-based object detection, image processing, and dynamic signal timer reset based on real-time traffic density and threshold logic. Includes features for emergency alerting, rule violation detection (e-challan), and cloud-based data storage.",
    keywords: ["YOLO", "Object Detection", "Traffic Control", "AI", "Computer Vision"],
    icon: "⚡"
  };

  const conferences = [
    {
      name: "ICCCT 2022",
      role: "Conference Presenter",
      venue: "Rajasthan Institute of Engineering and Technology",
      date: "October 2022",
      description: "Presented research on sentiment analysis and emotion detection using natural language processing",
      icon: "🧠"
    }
  ];

  return (
    <section id="research" className="py-20 px-4 subtle-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Research, Publications & Creative Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My contributions to scientific research, academic publications, and creative endeavors
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Publications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Academic Publications
            </h3>
            
            <div className="grid gap-6">
              {publications.map((pub, index) => (
                <Card 
                  key={index} 
                  className="glass-effect hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{pub.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-2">{pub.title}</h4>
                            <div className="text-sm text-muted-foreground mb-2">
                              <span className="font-medium">{pub.journal}</span>
                              {pub.conference && (
                                <>
                                  {" • "}
                                  <span>Presented at {pub.conference}</span>
                                </>
                              )}
                              {pub.venue && (
                                <>
                                  {" • "}
                                  <span>{pub.venue}</span>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary" className="mb-1">
                              {pub.type}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {pub.date}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {pub.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {pub.keywords.map((keyword) => (
                            <Badge 
                              key={keyword} 
                              variant="outline" 
                              className="text-xs hover-lift transition-smooth"
                            >
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Patent */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              Patent
            </h3>
            
            <Card className="glass-effect hover-lift animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{patent.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">{patent.title}</h4>
                        <div className="text-sm text-muted-foreground mb-2">
                          <span className="font-medium">Application No: {patent.applicationNo}</span>
                          {" • "}
                          <span>Patent Office: {patent.office}</span>
                        </div>
                      </div>
                      <Badge variant="secondary">
                        Patent Filed
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {patent.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {patent.keywords.map((keyword) => (
                        <Badge 
                          key={keyword} 
                          variant="outline" 
                          className="text-xs hover-lift transition-smooth"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conference Presentations */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Conference Presentations
            </h3>
            
            <div className="grid gap-6">
              {conferences.map((conf, index) => (
                <Card 
                  key={index} 
                  className="glass-effect hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{conf.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-2">{conf.name}</h4>
                            <div className="text-sm text-muted-foreground mb-2">
                              <span className="font-medium">{conf.venue}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary" className="mb-1">
                              {conf.role}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {conf.date}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {conf.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Books & Publications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Books & Creative Works
            </h3>
            
            <div className="grid gap-6">
              {books.map((book, index) => (
                <Card 
                  key={index} 
                  className="glass-effect hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{book.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-2">{book.title}</h4>
                            <div className="text-sm text-muted-foreground mb-2">
                              <span className="font-medium">{book.genre}</span>
                            </div>
                          </div>
                          <Badge variant="secondary">
                            {book.type}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {book.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {book.platforms.map((platform) => (
                            <Badge 
                              key={platform} 
                              variant="outline" 
                              className="text-xs hover-lift transition-smooth"
                            >
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Podcasts */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Podcasts & Media
            </h3>
            
            <div className="grid gap-6">
              {podcasts.map((podcast, index) => (
                <Card 
                  key={index} 
                  className="glass-effect hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{podcast.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-2">{podcast.title}</h4>
                          </div>
                          <Badge variant="secondary">
                            {podcast.type}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {podcast.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {podcast.platforms.map((platform) => (
                            <a 
                              key={platform.name}
                              href={platform.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block"
                            >
                              <Badge 
                                variant="outline" 
                                className="text-xs hover-lift transition-smooth cursor-pointer hover:bg-primary hover:text-primary-foreground"
                              >
                                Available on {platform.name}
                              </Badge>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}