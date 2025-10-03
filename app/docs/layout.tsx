import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import Image from "next/image";
import { Logo } from "@/components/logo";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      nav={{
        title: <Logo />,
      }}
      sidebar={{
        tabs: [
          {
            title: "Machine Learning",
            description: "Machine Learning Docs",
            url: "/docs/ml",
            icon: (
              <Image
                src="/component.svg"
                alt="Library Icon"
                width={30}
                height={30}
              />
            ),
          },
          {
            title: "Deep Learning",
            description: "Deep Learning Docs",
            url: "/docs/dl",
            icon: (
              <Image
                src="/component.svg"
                alt="Library Icon"
                width={30}
                height={30}
              />
            ),
          },
          {
            title: "Mathematics",
            description: "Mathematics Docs",
            url: "/docs/mathematics",
            icon: (
              <Image
                src="/component.svg"
                alt="Library Icon"
                width={30}
                height={30}
              />
            ),
          },
          {
            title: "Natural Language Processing",
            description: "NLP Docs",
            url: "/docs/nlp",
            icon: (
              <Image
                src="/component.svg"
                alt="Library Icon"
                width={30}
                height={30}
              />
            ),
          },
          {
            title: "Statistics",
            description: "Statistics Docs",
            url: "/docs/statistics",
            icon: (
              <Image
                src="/component.svg"
                alt="Library Icon"
                width={30}
                height={30}
              />
            ),
          },
          {
            title: "Architectures",
            description: "Architectures Docs",
            url: "/docs/architectures",
            icon: (
              <Image
                src="/component.svg"
                alt="Library Icon"
                width={30}
                height={30}
              />
            ),
          },
        ],
      }}
      tree={source.pageTree}
      githubUrl="https://deepakbhatter.com"
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
