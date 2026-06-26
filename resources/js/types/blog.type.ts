export interface BlogItem {
    id: number;
    category: {
        value: string;
        label: string;
    };
    image: string;
    title: string;
    created_at: string;
    desc: string;
    subHeading1: string;
    content1: string;
    quote: string;
    subHeading2: string;
    content2: string;
    subHeading3: string;
    content3: string;
}
