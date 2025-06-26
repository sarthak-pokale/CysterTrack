import { 
  users, 
  symptomAssessments, 
  periodEntries, 
  forumPosts,
  type User, 
  type InsertUser,
  type SymptomAssessment,
  type InsertSymptomAssessment,
  type PeriodEntry,
  type InsertPeriodEntry,
  type ForumPost,
  type InsertForumPost
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Symptom assessment methods
  createSymptomAssessment(assessment: InsertSymptomAssessment): Promise<SymptomAssessment>;
  getSymptomAssessmentsByUser(userId: number): Promise<SymptomAssessment[]>;

  // Period tracking methods
  createPeriodEntry(entry: InsertPeriodEntry): Promise<PeriodEntry>;
  getPeriodEntriesByUser(userId: number): Promise<PeriodEntry[]>;
  getPeriodEntriesByUserAndMonth(userId: number, year: number, month: number): Promise<PeriodEntry[]>;

  // Forum methods
  createForumPost(post: InsertForumPost): Promise<ForumPost>;
  getForumPosts(category?: string): Promise<ForumPost[]>;
  getForumPost(id: number): Promise<ForumPost | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private symptomAssessments: Map<number, SymptomAssessment>;
  private periodEntries: Map<number, PeriodEntry>;
  private forumPosts: Map<number, ForumPost>;
  private currentUserId: number;
  private currentAssessmentId: number;
  private currentEntryId: number;
  private currentPostId: number;

  constructor() {
    this.users = new Map();
    this.symptomAssessments = new Map();
    this.periodEntries = new Map();
    this.forumPosts = new Map();
    this.currentUserId = 1;
    this.currentAssessmentId = 1;
    this.currentEntryId = 1;
    this.currentPostId = 1;

    // Add some sample forum posts
    this.seedForumPosts();
  }

  private seedForumPosts() {
    const samplePosts: Omit<ForumPost, 'id'>[] = [
      {
        userId: null,
        title: "Tips for managing PCOS naturally?",
        content: "Hi everyone! I was recently diagnosed with PCOS and I'm looking for natural ways to manage symptoms. Has anyone had success with specific diets or supplements?",
        category: "PCOS Support",
        likes: 8,
        replies: 12,
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      },
      {
        userId: null,
        title: "Irregular periods - when to see a doctor?",
        content: "My periods have been really irregular for the past 6 months. Sometimes I skip entirely, other times they last too long. Should I be concerned?",
        category: "General Discussion",
        likes: 15,
        replies: 18,
        createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
      },
      {
        userId: null,
        title: "Low carb diet success story!",
        content: "I wanted to share my success with a low-carb diet for PCOS. After 3 months, my periods are more regular and I've lost 15 pounds!",
        category: "Diet & Nutrition",
        likes: 32,
        replies: 25,
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      },
      {
        userId: null,
        title: "Dealing with anxiety and mood swings",
        content: "Does anyone else struggle with severe mood swings? I feel like PCOS is affecting my mental health. Looking for coping strategies.",
        category: "Mental Health",
        likes: 9,
        replies: 14,
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      }
    ];

    samplePosts.forEach(post => {
      const id = this.currentPostId++;
      this.forumPosts.set(id, { ...post, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id, 
      createdAt: new Date() 
    };
    this.users.set(id, user);
    return user;
  }

  async createSymptomAssessment(insertAssessment: InsertSymptomAssessment): Promise<SymptomAssessment> {
    const id = this.currentAssessmentId++;
    const assessment: SymptomAssessment = {
      ...insertAssessment,
      id,
      createdAt: new Date()
    };
    this.symptomAssessments.set(id, assessment);
    return assessment;
  }

  async getSymptomAssessmentsByUser(userId: number): Promise<SymptomAssessment[]> {
    return Array.from(this.symptomAssessments.values()).filter(
      assessment => assessment.userId === userId
    );
  }

  async createPeriodEntry(insertEntry: InsertPeriodEntry): Promise<PeriodEntry> {
    const id = this.currentEntryId++;
    const entry: PeriodEntry = {
      ...insertEntry,
      id,
      createdAt: new Date()
    };
    this.periodEntries.set(id, entry);
    return entry;
  }

  async getPeriodEntriesByUser(userId: number): Promise<PeriodEntry[]> {
    return Array.from(this.periodEntries.values()).filter(
      entry => entry.userId === userId
    );
  }

  async getPeriodEntriesByUserAndMonth(userId: number, year: number, month: number): Promise<PeriodEntry[]> {
    return Array.from(this.periodEntries.values()).filter(entry => {
      if (entry.userId !== userId) return false;
      const entryDate = new Date(entry.date);
      return entryDate.getFullYear() === year && entryDate.getMonth() === month;
    });
  }

  async createForumPost(insertPost: InsertForumPost): Promise<ForumPost> {
    const id = this.currentPostId++;
    const post: ForumPost = {
      ...insertPost,
      id,
      likes: 0,
      replies: 0,
      createdAt: new Date()
    };
    this.forumPosts.set(id, post);
    return post;
  }

  async getForumPosts(category?: string): Promise<ForumPost[]> {
    const allPosts = Array.from(this.forumPosts.values());
    if (category) {
      return allPosts.filter(post => post.category === category);
    }
    return allPosts.sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }

  async getForumPost(id: number): Promise<ForumPost | undefined> {
    return this.forumPosts.get(id);
  }
}

export const storage = new MemStorage();
