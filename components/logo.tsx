"use client";

import { motion } from "framer-motion";
import { IconAffiliate } from "@tabler/icons-react";

export const Logo = () => {
  return (
    <div className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
      <IconAffiliate className="h-5 w-6 text-black dark:text-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        AI Labs
      </motion.span>
    </div>
  );
};

export const LogoIcon = () => {
  return (
    <div className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
      <IconAffiliate className="h-8 w-8 shrink-0 text-black dark:text-white" />
    </div>
  );
};
