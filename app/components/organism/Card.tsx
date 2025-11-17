'use client'

import Image, { StaticImageData } from 'next/image'

type CardProps = {
  image: StaticImageData
  title: string
  description: string
  link?: string
}

function Card({ image, title, description, link = "#" }: CardProps) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 hover:scale-105 hover:shadow-lg transition-all ">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-[180px] object-cover rounded-t-2xl transition-transform cursor-pointer duration-500 ease-in-out transform hover:scale-125"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="font-semibold text-lg text-gray-800 mb-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>
        <a
          href={link}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}

export default Card
