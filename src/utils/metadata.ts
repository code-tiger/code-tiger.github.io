import type { Metadata } from "next";
import { PROFILE_PICTURE_URL } from "@/constants/config";

const SITE_URL = "https://code-tiger.github.io";
const DEFAULT_TITLE = "Yeh Hsuan Ting";
const DEFAULT_DESCRIPTION =
  "I am a software developer who is passionate about building great products";
const DEFAULT_OG_IMAGE = PROFILE_PICTURE_URL;

export function createMetadata({
  title,
  description,
  pathname,
}: {
  title?: string;
  description?: string;
  pathname?: string;
} = {}): Metadata {
  const finalTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;

  return {
    metadataBase: new URL(SITE_URL),
    title: finalTitle,
    description: description || DEFAULT_DESCRIPTION,
    openGraph: {
      title: finalTitle,
      description: description || DEFAULT_DESCRIPTION,
      url: pathname ? `${SITE_URL}${pathname}` : SITE_URL,
      siteName: DEFAULT_TITLE,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: description || DEFAULT_DESCRIPTION,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
