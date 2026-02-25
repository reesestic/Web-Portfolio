export type Course = {
    code: string;
    name: string;
    desc: { text?: string; bold?: string; text2?: string }[];
    skills: string[];
}