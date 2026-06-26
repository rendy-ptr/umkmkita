export interface SolutionItem {
    icon: string;
    title: string;
    desc: string;
}

export interface ContentBlock {
    subheading: string;
    paragraph: string;
}

export interface PortfolioItem {
    id: number;
    category: string[];
    hero_image?: string;
    title: string;
    description: string;
    tagline: string;
    client: string;
    year: string;
    service: string;
    challenge: string;
    solution: {
        text: string;
        items: SolutionItem[];
    };
    content_blocks?: ContentBlock[];
    gallery?: string[];
}
