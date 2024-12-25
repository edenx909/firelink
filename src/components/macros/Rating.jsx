import { motion } from "motion/react";

const Rating = ({ gameData }) => {
  const rating = Math.round(gameData[0]?.rating) || 0;
  const maxWidth = 12;

  const greenBarWidth = (rating / 100) * maxWidth;

  return (
    <div className="relative">
      <div
        className="h-1 rounded bg-red-500"
        style={{ width: `${maxWidth}rem` }}
      />
      <motion.div
        className="absolute inset-0 h-1 rounded bg-green-400"
        initial={{ width: 0 }}
        whileInView={{ width: `${greenBarWidth}rem` }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeIn" }}
      />
    </div>
  );
};

export default Rating;
