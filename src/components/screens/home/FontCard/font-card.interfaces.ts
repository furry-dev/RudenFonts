type fontFormat = "woff" | "woff2" | "ttf" | "eot" | "otf"

export interface FontCardProps {
    fontName: string
    fontUrl: string
    format: fontFormat
}