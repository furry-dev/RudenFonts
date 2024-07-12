import {Font, FontVariants} from "@/types/font.interfaces"


export interface FontCardProps {
    font: Font
    variant?: FontVariants
    link?: string
    downloadLink?: string
}