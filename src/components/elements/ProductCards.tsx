import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaCarSide, FaRepeat, FaTractor, FaTrailer } from "react-icons/fa6";

const ProductCards = () => {
  const { t } = useTranslation();

  const products = [
    {
      key: "bil",
      icon: <FaCarSide className="text-2xl" />,
      href: "/priser/bil-korekort",
    },
    {
      key: "trailer",
      icon: <FaTrailer className="text-2xl" />,
      href: "/priser/trailer-korekort",
    },
    {
      key: "traktor",
      icon: <FaTractor className="text-2xl" />,
      href: "/priser/traktor-korekort",
    },
    {
      key: "generhvervelse",
      icon: <FaRepeat className="text-2xl" />,
      href: "/priser/generhvervelse-korekort",
    },
  ];

  return (
    <div className="flex justify-evenly gap-5 flex-col md:flex-row items-center">
      {products.map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <Link
            href={product.href}
            className="flex rounded-xl bg-base-200 ring-2 p-2 ring-base-300 md:hover:bg-base-300 active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300 ease-in-out gap-3 shadow-lg relative max-w-[650px] xl:max-w-[500px]"
          >
            <div className="px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-3">
              <h2 className="text-xs sm:text-xl font-semibold">
                {t(`productCards.${product.key}.title`)}
              </h2>
              {product.icon}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductCards;
