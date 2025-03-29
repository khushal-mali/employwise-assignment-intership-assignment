"use client";

import React, { useState, useRef, useEffect, type HTMLAttributes } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
// import Image, { type StaticImageData } from "next/image";

const Images = [
  "/sweetsImage/auth1.jpg",
  "/sweetsImage/auth2.jpg",
  "/sweetsImage/auth3.jpg",
  "/sweetsImage/auth4.jpg",
  "/sweetsImage/auth5.jpg",
  "/sweetsImage/auth6.jpg",
  "/sweetsImage/auth7.jpg",
  "/sweetsImage/auth8.jpg",
];

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[i]) {
      result[i] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

const ImageColumn = ({
  images,
  className,
  imageClassName,
  msPerPixel = 0,
}: {
  images: string[];
  className?: string;
  imageClassName?: (imageIndex: number) => string;
  msPerPixel: number;
}) => {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {images.concat(images).map((imgSrc, index) => (
        <SweetImage
          key={index}
          imgSrc={imgSrc}
          className={imageClassName?.(index % images.length)}
        />
      ))}
    </div>
  );
};

interface SweetProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

function SweetImage({ imgSrc, className, ...props }: SweetProps) {
  const POSSIBLE_ANIMATION_DELAYS = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];

  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];

  return (
    <div
      className={cn("animate-fade-in rounded-[2.25rem]", className)}
      {...props}
      style={{ animationDelay }}
    >
      <img
        src={imgSrc}
        alt="sweet image"
        width={400}
        height={600}
        className="rounded-lg"
      />
    </div>
  );
}

const AuthImageGrid = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true });
  const columns = splitArray(Images, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -z-50 grid h-screen grid-cols-2 items-start gap-8 px-4 lg:grid-cols-3"
    >
      {isInView ? (
        <>
          <ImageColumn
            images={[...column2, ...column3[1]]}
            imageClassName={(imageIndex) =>
              cn({
                "md:hidden": imageIndex >= column1.length + column3[0].length,
                "lg:hidden": imageIndex >= column1.length,
              })
            }
            msPerPixel={10}
          />
          <ImageColumn
            images={[...column1, ...column3.flat(), ...column2]}
            imageClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
            className="hidden md:block"
          />
          <ImageColumn
            images={column3.flat()}
            msPerPixel={10}
            // className="hidden md:block"
            imageClassName={(imageIndex) =>
              cn({
                "md:hidden": imageIndex >= column1.length + column3[0].length,
                "lg:hidden": imageIndex >= column1.length,
              })
            }
          />
        </>
      ) : null}

      <div className="pointer-events-none absolute inset-x-0 -top-1 h-32 bg-gradient-to-b from-slate-100" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-32 bg-gradient-to-t from-slate-100" />
    </div>
  );
};

export default AuthImageGrid;
