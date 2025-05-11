"use client"
import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useMotionValue, motion, useMotionTemplate, HTMLMotionProps } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 max-sm:flex max-sm:flex-col",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon1,
  icon2,
  icon3,
  icon4,
  idx,
  radius = 350,
  color = "#262626",
  ...props
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon1?: string | StaticImport;
  icon2?: string | StaticImport;
  icon3?: string | StaticImport;
  icon4?: string | StaticImport;
  idx: number;
  radius?: number;
  color?: string;
} & Omit<HTMLMotionProps<"div">, "onMouseMove" | "onMouseEnter" | "onMouseLeave">) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  function handleMouseMove({
    currentTarget,
    clientY,
    clientX,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          delay: idx * 0.2,
          duration: 0.5
        }
      }}
      className={cn(
        "group/bento relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-card p-4 transition duration-200 hover:shadow-2xl",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute h-full z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/bento:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3}
          />
        )}
      </motion.div>

      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <span className="flex gap-3 items-center">
          {icon1 && typeof icon1 !== 'string' && <Image src={icon1} alt="" className="w-18 h-18" />}
          {icon2 && typeof icon2 !== 'string' && <Image src={icon2} alt="" className="w-18 h-18" />}
          {icon3 && typeof icon3 !== 'string' && <Image src={icon3} alt="" className="w-24 h-24"/>}
          {icon4 && typeof icon4 !== 'string' && <Image src={icon4} alt="" className="w-18 h-18"/>}
        </span>  
        <div className="mt-2 mb-2 font-sans font-bold text-blue-700">
          {title}
        </div>
        <div className="font-sans text-sm font-normal text-white ">
          {description}
        </div>
      </div>
    </motion.div>
  );
};