import { Category, Course, Resource, InsertCategory, InsertCourse, InsertResource } from "@shared/schema";

export interface IStorage {
  // Categories
  getCategories(): Promise<Category[]>;
  getCategory(id: number): Promise<Category | undefined>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  
  // Courses
  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  getCourseBySlug(slug: string): Promise<Course | undefined>;
  getCoursesByCategory(categoryId: number): Promise<Course[]>;
  
  // Resources
  getResources(): Promise<Resource[]>;
  getResource(id: number): Promise<Resource | undefined>;
}

export class MemStorage implements IStorage {
  private categories: Map<number, Category>;
  private courses: Map<number, Course>;
  private resources: Map<number, Resource>;

  constructor() {
    this.categories = new Map([
      [1, { id: 1, name: "Programming", slug: "programming", description: "Learn programming fundamentals" }],
      [2, { id: 2, name: "Web Development", slug: "web-development", description: "Master web technologies" }],
      [3, { id: 3, name: "Data Science", slug: "data-science", description: "Explore data analysis" }]
    ]);

    this.courses = new Map([
      [1, { 
        id: 1, 
        title: "Python Fundamentals",
        slug: "python-fundamentals",
        description: "Learn Python programming from scratch",
        categoryId: 1,
        image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
        level: "Beginner",
        duration: "6 weeks"
      }],
      [2, {
        id: 2,
        title: "Web Development Bootcamp",
        slug: "web-development-bootcamp",
        description: "Complete web development course",
        categoryId: 2,
        image: "https://images.unsplash.com/photo-1486486955648-a4f22566c598",
        level: "Intermediate",
        duration: "12 weeks"
      }]
    ]);

    this.resources = new Map([
      [1, {
        id: 1,
        title: "Programming Cheat Sheet",
        description: "Quick reference for programming concepts",
        url: "/resources/programming-cheat-sheet.pdf",
        type: "PDF"
      }]
    ]);
  }

  // Categories
  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategory(id: number): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(c => c.slug === slug);
  }

  // Courses
  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: number): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async getCourseBySlug(slug: string): Promise<Course | undefined> {
    return Array.from(this.courses.values()).find(c => c.slug === slug);
  }

  async getCoursesByCategory(categoryId: number): Promise<Course[]> {
    return Array.from(this.courses.values()).filter(c => c.categoryId === categoryId);
  }

  // Resources
  async getResources(): Promise<Resource[]> {
    return Array.from(this.resources.values());
  }

  async getResource(id: number): Promise<Resource | undefined> {
    return this.resources.get(id);
  }
}

export const storage = new MemStorage();
