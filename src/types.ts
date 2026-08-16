export type PageView = 
  | 'home' 
  | 'about' 
  | 'practice-areas' 
  | 'practice-area-detail' 
  | 'resources' 
  | 'resource-detail' 
  | 'contact' 
  | 'entity-guide';

export type PracticeAreaCategory = 'formation' | 'contracts' | 'disputes' | 'transactions' | 'ip';

export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  category: PracticeAreaCategory;
  overview: string;
  whatWeHelpWith: string[];
  keyConsiderations: string[];
  commonScenarios: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
}

export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: {
    sectionHeading: string;
    paragraphs: string[];
  }[];
  keyTakeaways: string[];
  tags: string[];
}

export interface ConsultationRequest {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  matterType: string;
  preferredTime: string;
  details: string;
}
