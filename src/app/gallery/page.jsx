"use client";
import { products } from "@/lib/products.js";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const galleryPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 3 }}
    >
      <div className="h-full overflow-y-auto overflow-x-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
        {products.map((product) => (
          <Link href={`/gallery/${product.id}`}  key={product.id}>
          <motion.div
           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="border p-4 rounded-lg shadow-lg"
          >
            <motion.div className="">
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-auto"
                whileHover={{ scale: 1.1 }}
                width={500}
                height={300}
              />
            </motion.div>

            <motion.h3
              className="text-lg font-bold"
              whileHover={{ scale: 1.05 }}
            >
              {product.name}
            </motion.h3>
            <p>{product.description}</p>
          </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default galleryPage;
