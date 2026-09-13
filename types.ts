export interface MasterclassChapter {
  id: string;
  number: string;
  title: string;
  duration: string;
  keyPrinciple: string;
  summary: string;
  takeaway: string;
}

export interface ExpertProfile {
  id: string;
  name: string;
  title: string;
  institution: string;
  domain: string;
  quote: string;
}

export interface MultilingualGreeting {
  code: string;
  language: string;
  nativeName: string;
  phrase: string;
  transliteration?: string;
}
