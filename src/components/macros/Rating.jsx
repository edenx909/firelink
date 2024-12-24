import { motion } from "motion/react";

const Rating = ({ gameData }) => {
  const rating = Math.round(gameData[0]?.rating) || 0;
  const maxWidth = 12;

  const greenBarWidth = (rating / 100) * maxWidth;

  return (
    <div className="relative">
      <div
        className="h-1 bg-red-500 rounded"
        style={{ width: `${maxWidth}rem` }}
      />
      <motion.div
        className="h-1 bg-green-400 rounded absolute inset-0"
        initial={{ width: 0 }}
        whileInView={{ width: `${greenBarWidth}rem` }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeIn" }}
      />
    </div>
  );
};

export default Rating;
