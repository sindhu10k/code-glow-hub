import { BookOpen, Play, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      title: "Python for Beginners",
      description: "Learn Python from scratch with hands-on examples and real projects.",
      duration: "11 hours",
      students: "11M",
      level: "Beginner",
      color: "text-neon-green",
      borderColor: "border-neon-green/30",
      youtubeLink: "https://youtu.be/UrsmFxEIp5k?si=Ca6RmRU1HV4Tn5u2"
    },
    {
      title: "JavaScript Fundamentals",
      description: "Master modern JavaScript and build interactive web applications.",
      duration: "12 hours",
      students: "4.9M",
      level: "Beginner",
      color: "text-neon-cyan",
      borderColor: "border-neon-cyan/30",
      youtubeLink: "https://youtu.be/VlPiVmYuoqw?si=EzVQsI-Agrv5n81Y"
    },
    {
      title: "React Development",
      description: "Build modern web apps with React, hooks, and component patterns.",
      duration: "20 hours",
      students: "197k",
      level: "Intermediate",
      color: "text-neon-cyan",
      borderColor: "border-neon-cyan/30",
      youtubeLink: "https://youtu.be/LuNPCSNr-nE?si=yJG0H49KZ7_X7Oc2"
    },
    {
      title: "Data Structures & Algorithms",
      description: "Essential programming concepts for technical interviews and problem solving.",
      duration: "100+ hours",
      students: "12.3k",
      level: "Intermediate",
      color: "text-neon-purple",
      borderColor: "border-neon-purple/30",
      youtubeLink: "https://youtube.com/playlist?list=PLQEaRBV9gAFu4ovJ41PywklqI7IyXwr01&si=ZjDyDbx7oKJvAlU8"
    },
    {
      title: "Full Stack Development",
      description: "Complete web development course covering frontend, backend, and databases.",
      duration: "28 hours",
      students: "3M",
      level: "Advanced",
      color: "text-neon-orange",
      borderColor: "border-neon-orange/30",
      youtubeLink: "https://youtu.be/HVjjoMvutj4?si=Itfl3iPtcvN0-RE_"
    },
    {
      title: "Machine Learning Basics",
      description: "Introduction to ML concepts, algorithms, and practical implementations.",
      duration: "4 hours",
      students: "8.9M",
      level: "Intermediate",
      color: "text-neon-green",
      borderColor: "border-neon-green/30",
      youtubeLink: "https://youtu.be/i_LwzRVP7bg?si=qWddFelIab5ouuCp"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-neon-green/20 text-neon-green";
      case "Intermediate": return "bg-neon-cyan/20 text-neon-cyan";
      case "Advanced": return "bg-neon-orange/20 text-neon-orange";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-neon-green">Free</span>{" "}
            <span className="text-gradient">Programming Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn programming with our comprehensive, hands-on courses. 
            From beginner basics to advanced concepts - all completely free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`relative p-6 rounded-xl bg-card border-2 ${course.borderColor} hover:scale-105 transition-all duration-300 group cursor-pointer`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                  </div>
                </div>
                
                <h3 className={`text-xl font-semibold mb-3 group-hover:${course.color} transition-colors`}>
                  {course.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {course.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students}</span>
                </div>
              </div>

              <Button 
                variant="outline" 
                className={`w-full btn-neon group-hover:border-current group-hover:${course.color}`}
              >
                <Play className="mr-2 h-4 w-4" />
                Start Learning
              </Button>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none ${course.borderColor.replace('border', 'bg').replace('/30', '/10')}`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center space-y-4 p-8 rounded-xl bg-gradient-accent/10 border border-accent/30">
            <h3 className="text-2xl font-bold text-gradient">
              🎯 100% Free
            </h3>
            <p className="text-muted-foreground max-w-md">
              No hidden fees, no premium tiers. Quality education should be accessible to everyone.
            </p>
            <Button className="btn-neon-accent">
              Browse All Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
