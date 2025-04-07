import { ReactNode } from "react";

export interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    language: string;
      forks_count: number;
      watchers_count: number;
    
      visibility?: string;
    
    
  }

  export interface LanguageStats {
    language: string;
    count: number;
    percentage: number;
  }
  
  
  export interface CommitData {
    date: string;
    count: number;
  }
  export interface ProfileStats {
    followers: number;
    following: number;
    public_repos: number;
    public_gists: number;
    created_at: string;
      completeness: number;
      ratio: number;
      avgStars: number;
      accountAge: number;
      mostActiveLanguage: string;
      top_repos: { name: string; stars: number }[];
      repoSizes: { name: string; size: number }[];
    
    
  }

  export interface UserProfile {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    followers: number;
    following: number;
    public_repos: number;
    public_gists: number;
    created_at: string;
  }
  
  
  