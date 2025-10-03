"use client";

import React from "react";
import { motion } from "framer-motion";
import { LogoIcon } from "./logo";
import Link from "next/link";

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
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8">
        <path
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="m8 12 2 2 4-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "dl",
    name: "Deep Learning",
    category: "Deep Learning Docs",
    url: "/docs/dl",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8">
        <path d="M12 2L2 19.777h20L12 2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "ml",
    name: "Machine Learning",
    category: "Machine Learning Docs",
    url: "/docs/ml",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8">
        <path
          d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "nlp",
    name: "Natural Language Processing",
    category: "NLP Docs",
    url: "/docs/nlp",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8">
        <path
          d="M15.5 5.5a3 3 0 1 0-3 3h3v-3zM12.5 8.5h-3a3 3 0 1 0 0 6h3v-6zM12.5 17.5h-3a3 3 0 1 0 3 3v-3zM15.5 14.5a3 3 0 1 0 0-6v6z"
          fill="currentColor"
        />
        <circle
          cx="15.5"
          cy="11.5"
          r="3"
          fill="currentColor"
          fillOpacity="0.3"
        />
      </svg>
    ),
  },
  {
    id: "statistics",
    name: "Statistics",
    category: "Statistics Docs",
    url: "/docs/statistics",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8">
        <path
          d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.28c.093.466 0 .933-.466.98l-.747.14v10.264c-.66.42-1.26.42-1.68.047l-3.993-6.414v6.087l1.54.326s0 .933-1.307.933l-3.6-.233c-.094-.466 0-.933.466-1.027l1.214-.373V9.854L8.6 9.434c-.094-.466.14-1.133.793-1.18l3.88-.233 4.14 6.274V8.027l-1.307-.14c-.094-.56.187-1.026.747-1.073l3.333-.233z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "architectures",
    name: "Model Architectures",
    category: "Model Architectures Docs",
    url: "/docs/architectures",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8">
        <path
          d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function LogoShowcase({
  logos = defaultLogos,
  title = "Trusted by industry leaders",
  description = "Connect with the tools your team already uses. Built for modern workflows.",
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
