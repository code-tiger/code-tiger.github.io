import type { CSSProperties } from "react";
import Image from "next/image";

/**
 * How to use:
 *
 * case 1, provide src, alt, and aspectRatio:
 * <ResponsiveImage
 *   src="/images/your-image.jpg"
 *   alt="Your image"
 *   aspectRatio="aspect-square"
 * />
 *
 * case 2, provide src, alt, and wrap with a div with specific width and height:
 * <div className="w-[200px] h-[200px]">
 *   <ResponsiveImage src="/images/your-image.jpg" alt="Your image" />
 * </div>
 */
export default function ResponsiveImage(props: {
  readonly src: string;
  readonly alt: string;
  readonly aspectRatio?: "aspect-square" | "aspect-video";
  readonly imageStyle?: CSSProperties;
  readonly className?: string;
  readonly objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  readonly priority?: boolean;
}) {
  const { src, alt, aspectRatio, imageStyle, className = "", priority = false } = props;

  return (
    <div
      className={["relative", aspectRatio ?? "w-full h-full", className]
        .join(" ")
        .trim()}
    >
      <Image style={imageStyle} src={src} alt={alt} fill unoptimized priority={priority} />
    </div>
  );
}
