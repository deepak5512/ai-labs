import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import Image from "next/image";
import { Logo } from "@/components/logo";
import {
  IconAi,
  IconChartDots2,
  IconDeviceImacCog,
  IconLanguageHiragana,
  IconSquareRoot2,
} from "@tabler/icons-react";
import { BrainCircuit } from "lucide-react";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      nav={{
        title: <Logo />,
      }}
      sidebar={{
        tabs: [
          {
            title: "Statistics",
            description: "Stats basics",
            url: "/docs/statistics",
            icon: <IconChartDots2 width={20} height={20} />,
          },
          {
            title: "Mathematics",
            description: "Math concepts",
            url: "/docs/mathematics",
            icon: <IconSquareRoot2 width={20} height={20} />,
          },
          {
            title: "Machine Learning",
            description: "ML guides",
            url: "/docs/ml",
            icon: <IconDeviceImacCog width={20} height={20} />,
          },
          {
            title: "Deep Learning",
            description: "DL resources",
            url: "/docs/dl",
            icon: <BrainCircuit width={20} height={20} />,
          },
          {
            title: "NLP",
            description: "Language docs",
            url: "/docs/nlp",
            icon: <IconLanguageHiragana width={20} height={20} />,
          },
          {
            title: "Architectures",
            description: "Model types",
            url: "/docs/architectures",
            icon: <IconAi width={20} height={20} />,
          },
        ],
      }}
      tree={source.pageTree}
      githubUrl="https://github.com/deepak5512/ai-labs"
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
