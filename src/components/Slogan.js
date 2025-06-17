import React from 'react';
import { motion } from 'framer-motion';

/**
 * A reusable slogan component that renders an array of slogans with animated effects.
 * @param slogans - Array of slogan objects, each with 'prefix' and 'highlight' text.
 * @example
 * const slogans = [
 *   { prefix: 'Where', highlight: 'DEDICATION' },
 *   { prefix: 'Meets', highlight: 'DISTINCTION' }
 * ];
 * <SloganSection slogans={slogans} />
 */
export default function Slogan({ slogans }) {
  return (
    <div className="flex flex-col items-center justify-center my-20 space-y-12">
      {slogans.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -150 : 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.4, duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-3xl"
        >
          <p className="text-4xl md:text-5xl lg:text-6xl font-light text-center whitespace-pre-line drop-shadow-md">
            {item.prefix}{' '}
            <motion.span
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.4 + 0.2, duration: 0.5, ease: 'easeOut' }}
              className="text-primary uppercase font-extrabold tracking-wide"
            >
              {item.highlight}
            </motion.span>
          </p>
        </motion.div>
      ))}
    </div>
  );
}
