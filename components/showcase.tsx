"use client";

import React from "react";
import { motion } from "framer-motion";
import { LogoIcon } from "./logo";
import Link from "next/link";
import {
  IconAi,
  IconChartDots2,
  IconDeviceImacCog,
  IconLanguageHiragana,
  IconSquareRoot2,
} from "@tabler/icons-react";
import { BrainCircuit } from "lucide-react";

interface Logo {
  id: string;
  name: string;
  svg: React.ReactNode;
  category?: string;
  url?: string;
}

interface LogoShowcaseProps {
  logos?: Logo[];
  title?: string;
  description?: string;
  // buttonText?: string;
  // onButtonClick?: () => void;
}

const defaultLogos: Logo[] = [
  {
    id: "maths",
    name: "Mathematics",
    category: "Mathematics Docs",
    url: "/docs/mathematics",
    svg: <IconSquareRoot2 />,
  },
  {
    id: "dl",
    name: "Deep Learning",
    category: "Deep Learning Docs",
    url: "/docs/dl",
    svg: <BrainCircuit />,
  },
  {
    id: "ml",
    name: "Machine Learning",
    category: "Machine Learning Docs",
    url: "/docs/ml",
    svg: <IconDeviceImacCog />,
  },
  {
    id: "nlp",
    name: "Natural Language Processing",
    category: "NLP Docs",
    url: "/docs/nlp",
    svg: <IconLanguageHiragana />,
  },
  {
    id: "statistics",
    name: "Statistics",
    category: "Statistics Docs",
    url: "/docs/statistics",
    svg: <IconChartDots2 />,
  },
  {
    id: "architectures",
    name: "Model Architectures",
    category: "Model Architectures Docs",
    url: "/docs/architectures",
    svg: <IconAi />,
  },
];

export default function LogoShowcase({
  logos = defaultLogos,
  title = "Explore AI Labs Knowledge Base",
  description = "Browse documentation and resources for mathematics, machine learning, deep learning, NLP, & much more.",
  // buttonText = "View all integrations",
  // onButtonClick,
}: LogoShowcaseProps) {
  return (
    <section className="relative mt-12 overflow-hidden bg-white md:mt-20 dark:bg-neutral-950">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="relative">
          {/* Central spotlight effect */}
          <div className="bg-gradient-radial pointer-events-none absolute inset-0 from-blue-50/50 via-transparent to-transparent dark:from-blue-950/20"></div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 items-center gap-8 md:grid-cols-3 md:gap-12"
          >
            {/* Left Column */}
            <div className="space-y-6">
              {logos.slice(0, 3).map((logo, index) => (
                <LogoCard key={logo.id} logo={logo} delay={index * 0.1} />
              ))}
            </div>

            {/* Center - Main Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                stiffness: 200,
              }}
              className="flex justify-center"
            >
              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-75 blur-xl transition-all duration-500 group-hover:blur-2xl"></div>

                {/* Main card */}
                <div className="relative rounded-3xl border border-gray-200/50 bg-white p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 group-hover:scale-105 dark:border-gray-700/50 dark:bg-gray-900">
                  <div className="flex items-center justify-center">
                    <LogoIcon />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      AI Labs
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Powered By Eloqer
                    </p>
                  </div>
                </div>

                {/* Connection lines */}
                <div className="absolute top-1/2 -left-8 hidden h-px w-8 bg-gradient-to-r from-transparent to-gray-500 md:block dark:to-gray-600"></div>
                <div className="absolute top-1/2 -right-8 hidden h-px w-8 bg-gradient-to-l from-transparent to-gray-500 md:block dark:to-gray-600"></div>
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="space-y-6">
              {logos.slice(3, 6).map((logo, index) => (
                <LogoCard key={logo.id} logo={logo} delay={(index + 3) * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button
            onClick={onButtonClick}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl dark:bg-white dark:text-gray-900"
          >
            {buttonText}
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}

interface LogoCardProps {
  logo: Logo;
  delay: number;
}

const LogoCard: React.FC<LogoCardProps> = ({ logo, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
      className="group relative"
    >
      <Link href={logo.url || "#"}>
        <div className="flex items-center gap-4 rounded-2xl border border-gray-200/30 bg-white/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-gray-300 hover:bg-white hover:shadow-lg dark:border-gray-700/30 dark:bg-gray-900/50 dark:hover:border-gray-600 dark:hover:bg-gray-900">
          {/* Logo container */}
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-700 transition-colors duration-300 group-hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:group-hover:bg-gray-700">
            {logo.svg}
          </div>

          {/* Logo info */}
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-medium text-gray-900 dark:text-white">
              {logo.name}
            </h3>
            {logo.category && (
              <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                {logo.category}
              </p>
            )}
          </div>

          {/* Connection indicator */}
          <div className="h-2 w-2 flex-shrink-0 rounded-full bg-green-500 opacity-60 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
      </Link>
    </motion.div>
  );
};
