import {
  pgTable,
  text,
  serial,
  integer,
  boolean,
  timestamp,
  json,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  dateOfBirth: text("date_of_birth"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const symptomAssessments = pgTable("symptom_assessments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id"),
  symptoms: json("symptoms").$type<string[]>(),
  responses: json("responses").$type<Record<string, string>>(),
  riskScore: integer("risk_score").notNull(),
  riskLevel: text("risk_level").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const periodEntries = pgTable("period_entries", {
  id: serial("id").primaryKey(),
  userId: integer("user_id"),
  date: text("date").notNull(),
  flow: text("flow"),
  symptoms: json("symptoms").$type<string[]>(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const forumPosts = pgTable("forum_posts", {
  id: serial("id").primaryKey(),
  userId: integer("user_id"),
  title: text("title").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  likes: integer("likes").default(0),
  replies: integer("replies").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertSymptomAssessmentSchema = createInsertSchema(
  symptomAssessments,
).omit({
  id: true,
  createdAt: true,
});

export const insertPeriodEntrySchema = createInsertSchema(periodEntries).omit({
  id: true,
  createdAt: true,
});

export const insertForumPostSchema = createInsertSchema(forumPosts).omit({
  id: true,
  likes: true,
  replies: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertSymptomAssessment = z.infer<
  typeof insertSymptomAssessmentSchema
>;
export type SymptomAssessment = typeof symptomAssessments.$inferSelect;
export type InsertPeriodEntry = z.infer<typeof insertPeriodEntrySchema>;
export type PeriodEntry = typeof periodEntries.$inferSelect;
export type InsertForumPost = z.infer<typeof insertForumPostSchema>;
export type ForumPost = typeof forumPosts.$inferSelect;
