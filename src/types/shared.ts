import { ReactNode } from "react";

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
  icon: ReactNode;
  title: string;
  description: string;
};
