
"use client";

import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

export const CustomToggle = ({ checked, onChange }: { checked: boolean, onChange: (checked: boolean) => void }) => {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-[25px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75",
        checked ? 'bg-green-500' : 'bg-gray-600'
      )}
      aria-label="Toggle Lights"
    >
      <motion.span
        aria-hidden="true"
        animate={{ x: checked ? 25 : 0 }}
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        className="pointer-events-none inline-block h-[21px] w-[21px] transform rounded-full bg-white shadow-lg ring-0"
      />
    </button>
  );
};
