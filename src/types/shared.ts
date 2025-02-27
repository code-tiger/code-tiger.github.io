import type { IconType } from "react-icons";

export type Technology = {
  name: string;
  Icon: React.ElementType;
};

export type ProjectDatum = {
  title: string;
  description: string;
  tags: string[];
  alt: string;
  imageUrl: string;
};

export type Service = {
  Icon: IconType;
  title: string;
  description: string;
  colorHex: string;
};
