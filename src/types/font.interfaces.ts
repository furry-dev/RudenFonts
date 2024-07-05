export type FontCategory = "Bubble" | "Sound" | "Decorative"

export type FontVariants = "Regular" | "Bold" | "Italic" | "BoldItalic"

export interface Font {
    _id: string,
    family: string,
    categories: FontCategory[],
    langs: string[],
    variants: FontVariants[],
    files: { [key in FontVariants]?: string },
    sizeCoeff: number
}