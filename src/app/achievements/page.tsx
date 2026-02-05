
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Medal, Zap, Calendar, Target, ShieldCheck, Moon, Sun, Trophy, BrainCircuit, CheckCircle2, Wind, Crown, Hash, Milestone, Atom, FlaskConical, Calculator, Sunrise, Activity, HelpCircle, CalendarCheck, FileQuestion, BookOpen, Clock, Bot, TrendingUp, Goal, BookCopy, Star, Brain, Flame, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

const achievementCategories = [
  {
    title: 'Milestones & Performance',
    icon: <Rocket className="w-6 h-6" />,
    description: "For reaching major goals and excelling in tests.",
    achievements: [
       {
        icon: <Target className="w-8 h-8 text-green-400" />,
        title: "100 Questions",
        description: "Successfully solved 100 questions.",
        unlocked: true,
        progress: 100,
        goal: 100,
        rarity: 'Common'
      },
      {
        icon: <Hash className="w-8 h-8 text-sky-400" />,
        title: "500 Questions Club",
        description: "Successfully solve 500 questions.",
        unlocked: true,
        progress: 500,
        goal: 500,
        rarity: 'Rare'
      },
      {
        icon: <Milestone className="w-8 h-8 text-purple-400" />,
        title: "1000 Questions",
        description: "A grand achievement of solving 1000 questions.",
        unlocked: false,
        progress: 750,
        goal: 1000,
        rarity: 'Epic'
      },
       {
        icon: <ShieldCheck className="w-8 h-8 text-red-400" />,
        title: "Test Topper",
        description: "Achieved the highest score in a mock test.",
        unlocked: false,
        progress: 0,
        goal: 1,
        rarity: 'Epic'
      },
       {
        icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
        title: "Perfect Score",
        description: "Get 100% on any mock test.",
        unlocked: false,
        progress: 0,
        goal: 1,
        rarity: 'Epic'
      },
      {
        icon: <TrendingUp className="w-8 h-8 text-lime-400" />,
        title: "Steady Improver",
        description: "Improve your mock test score by 20% or more.",
        unlocked: true,
        progress: 1,
        goal: 1,
        rarity: 'Rare'
      },
    ]
  },
  {
    title: 'Consistency & Dedication',
    icon: <Flame className="w-6 h-6" />,
    description: "Rewarding your commitment and daily effort.",
    achievements: [
      {
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
        title: "Study Streak: 7 Days",
        description: "Studied consistently for a whole week.",
        unlocked: true,
        progress: 7,
        goal: 7,
        rarity: 'Common'
      },
      {
        icon: <Calendar className="w-8 h-8 text-blue-400" />,
        title: "Monthly Marathon",
        description: "Completed a full month of dedicated study.",
        unlocked: true,
        progress: 30,
        goal: 30,
        rarity: 'Rare'
      },
      {
        icon: <Award className="w-8 h-8 text-purple-400" />,
        title: "Focus Champion",
        description: "Completed a 4-hour continuous study session.",
        unlocked: true,
        progress: 4,
        goal: 4,
        rarity: 'Rare'
      },
      {
        icon: <Moon className="w-8 h-8 text-indigo-400" />,
        title: "Night Owl",
        description: "Studied past midnight for 3 consecutive days.",
        unlocked: true,
        progress: 3,
        goal: 3,
        rarity: 'Common'
      },
      {
        icon: <Sunrise className="w-8 h-8 text-orange-500" />,
        title: "Early Bird",
        description: "Study before 6 AM for 5 days in a row.",
        unlocked: false,
        progress: 2,
        goal: 5,
        rarity: 'Common'
      },
       {
        icon: <Clock className="w-8 h-8 text-cyan-500" />,
        title: "Time Master",
        description: "Spend over 24 hours studying in total.",
        unlocked: true,
        progress: 24,
        goal: 24,
        rarity: 'Rare'
      },
    ]
  },
  {
    title: 'Mastery & Exploration',
    icon: <BrainCircuit className="w-6 h-6" />,
    description: "For mastering subjects and exploring the platform.",
    achievements: [
       {
        icon: <Medal className="w-8 h-8 text-orange-400" />,
        title: "Chapter Master",
        description: "Mastered a full chapter by completing all its questions.",
        unlocked: false,
        progress: 0,
        goal: 1,
        rarity: 'Rare'
      },
      {
        icon: <Atom className="w-8 h-8 text-blue-500" />,
        title: "Physics Specialist",
        description: "Master 5 chapters in Physics.",
        unlocked: true,
        progress: 5,
        goal: 5,
        rarity: 'Rare'
      },
      {
        icon: <FlaskConical className="w-8 h-8 text-green-600" />,
        title: "Chemistry Specialist",
        description: "Master 5 chapters in Chemistry.",
        unlocked: false,
        progress: 3,
        goal: 5,
        rarity: 'Rare'
      },
      {
        icon: <Calculator className="w-8 h-8 text-red-500" />,
        title: "Maths Specialist",
        description: "Master 5 chapters in Mathematics.",
        unlocked: false,
        progress: 1,
        goal: 5,
        rarity: 'Rare'
      },
      {
        icon: <Bot className="w-8 h-8 text-indigo-600" />,
        title: "AI Collaborator",
        description: "Use the AI Tagger for 10 different questions.",
        unlocked: true,
        progress: 10,
        goal: 10,
        rarity: 'Common'
      },
       {
        icon: <HelpCircle className="w-8 h-8 text-sky-500" />,
        title: "Doubt Destroyer",
        description: "Get 20 doubts solved using the AI Doubt Solver.",
        unlocked: false,
        progress: 12,
        goal: 20,
        rarity: 'Common'
      },
    ]
  },
   {
    title: 'Legendary Feats',
    icon: <Crown className="w-6 h-6" />,
    description: "The ultimate recognition of your exceptional skills.",
    achievements: [
      {
        icon: <Crown className="w-8 h-8 text-amber-400" />,
        title: "Consistency King",
        description: "Maintain a study streak for 30 consecutive days.",
        unlocked: false,
        progress: 15,
        goal: 30,
        rarity: 'Legendary'
      },
      {
        icon: <Activity className="w-8 h-8 text-rose-500" />,
        title: "Marathon Runner",
        description: "Complete a study session longer than 6 hours.",
        unlocked: false,
        progress: 4,
        goal: 6,
        rarity: 'Legendary'
      },
      {
        icon: <Wind className="w-8 h-8 text-teal-400" />,
        title: "Speed Demon",
        description: "Complete a full mock test in half the allotted time with over 80% accuracy.",
        unlocked: false,
        progress: 0,
        goal: 1,
        rarity: 'Legendary'
      },
    ]
  },
];

const rarityStyles = {
  Common: "border-green-500/50 hover:shadow-green-500/20",
  Rare: "border-blue-500/50 hover:shadow-blue-500/20",
  Epic: "border-purple-500/50 hover:shadow-purple-500/20",
  Legendary: "border-amber-500/50 hover:shadow-amber-500/20",
};

const unlockedCount = achievementCategories.flatMap(c => c.achievements).filter(a => a.unlocked).length;
const totalCount = achievementCategories.flatMap(c => c.achievements).length;

export default function AchievementsPage() {
  return (
    <div className="p-6 md:p-10 animate-fade-in-up">
      <div className="space-y-12">
        <header className="space-y-2 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">Your Achievements</h1>
          <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Track your progress and celebrate your milestones. You've unlocked {unlockedCount} out of {totalCount} badges!
          </p>
        </header>

        {achievementCategories.map((category) => (
          <Card key={category.title} className="bg-secondary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                </div>
                <span className="font-headline text-2xl">{category.title}</span>
              </CardTitle>
              <CardDescription>
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.achievements.map((achievement) => {
                  const progressPercentage = achievement.goal > 0 ? (achievement.progress / achievement.goal) * 100 : 0;
                  return (
                    <Card 
                        key={achievement.title}
                        className={cn(
                            "p-4 flex flex-col text-center items-center gap-4 transition-all duration-300 ease-in-out group border-2",
                            "bg-background/40 backdrop-blur-sm",
                            achievement.unlocked 
                                ? `hover:scale-105 ${rarityStyles[achievement.rarity as keyof typeof rarityStyles]}`
                                : "opacity-60 grayscale hover:opacity-80"
                        )}
                    >
                        <div className={cn(
                            "w-20 h-20 rounded-full flex items-center justify-center transition-all relative overflow-hidden",
                             achievement.unlocked 
                                ? "bg-gradient-to-br from-background to-secondary" 
                                : "bg-muted/30"
                        )}>
                             <div className={cn("absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity", rarityStyles[achievement.rarity as keyof typeof rarityStyles]?.replace('hover:shadow', 'bg-gradient-to-br from-transparent to-'))}></div>
                            {achievement.icon}
                        </div>
                        <div className="space-y-1 flex-1">
                            <h3 className="text-lg font-bold font-headline">{achievement.title}</h3>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                        <div className="w-full space-y-2">
                             {achievement.goal > 0 && (
                                <>
                                    <Progress value={progressPercentage} className="h-2" />
                                    <p className="text-xs text-muted-foreground">{achievement.progress} / {achievement.goal}</p>
                                </>
                             )}
                            <Badge variant={achievement.unlocked ? "default" : "outline"} className={cn("transition-colors font-bold", achievement.unlocked ? "bg-green-500/80 border-green-500" : "")}>
                                {achievement.unlocked ? "Unlocked" : "Locked"}
                            </Badge>
                        </div>
                    </Card>
                )})}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
