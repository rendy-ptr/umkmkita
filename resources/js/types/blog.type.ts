export interface ContentBlock {
    subheading: string;
    paragraph: string;
}

export interface Comment {
    id: number;
    user_id?: number | null;
    name?: string | null;
    email?: string | null;
    content: string;
    created_at: string;
    user?: {
        id: number;
        name: string;
    };
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
    user_id?: number;
    user?: {
        id: number;
        name: string;
    };
    comments?: Comment[];
    comments_count?: number;
}
