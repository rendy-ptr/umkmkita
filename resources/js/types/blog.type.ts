export interface ContentBlock {
    subheading: string;
    paragraph: string;
}

export interface BlogItem {
    id: number;
    title: string;
    description: string;
    hero_image: string;
    quote?: string | null;
    content_blocks?: ContentBlock[] | null;
    category: string[];
    is_published: boolean;
    published_at: string;
    created_at: string;
}
