export interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    language: string;
  }
  
  export interface CommitData {
    date: string;
    count: number;
  }
  