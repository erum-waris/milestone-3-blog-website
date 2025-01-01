"use client"

import { useState } from "react";
import Button from "./Button";
import CommentSection from "./CommentSection";
import Image from "next/image";
import Heading from "./Heading";
import { FaStar } from "react-icons/fa";

interface Blog {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const BlogCardsection: React.FC = () => {
  // Define the blogs array
  const blogs: Blog[] = [
    { id: 1, title: "Father & Son", description: "A father is a selfless leader guiding his loyal sons, who bring joy and pride to the family.", imageUrl: "/images/sup-dad.jpg" },
    { id: 2, title: "family Bond", description: "Family bond is unconditional love, trust, and lifelong connection.", imageUrl: "/images/family-2.jpg" },
    { id: 3, title: "Mother & Daughter", description: "Mothers and daughters share an eternal, instinctual, and inseparable bond.", imageUrl: "/images/mother-daughter.jpg" },
    { id: 4, title: "Sisters Together", description: "Sisters are loving, supportive, and forever connected family treasures.", imageUrl: "/images/sisters.jpg" },
    { id: 5, title: "Counseling of Parents", description: "Guiding parents to raise resilient and confident children effectively.", imageUrl: "/images/parents.jpg" },
    { id: 6, title: "Brothers Together", description: "Brothers are loyal, protective, and lifelong bonding family companions.", imageUrl: "/images/brothers.jpg" },
  ];

  // Define the ratings state with the type Record<number, number>
  const [ratings, setRatings] = useState<Record<number, number>>({});

  // Handle setting the rating for a specific blog
  const handleRating = (blogId: number, star: number): void => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [blogId]: star, // Update the rating for the specific blog
    }));
  };

  return (
    <div>
      <div className="md:max-w-7xl w-auto mx-auto py-8 px-4">
        <Heading text="Blogs" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-md rounded overflow-hidden flex flex-col">
              <Image
                src={blog.imageUrl}
                alt={`${blog.title}`}
                width={400}
                height={300}
                className="w-full h-[70%] object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <div className="flex gap-2 my-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className={`text-lg sm:text-xl ${
                        star <= (ratings[blog.id] || 0) ? "text-yellow-500" : "text-gray-400"
                      }`}
                      onClick={() => handleRating(blog.id, star)}
                    >
                      <FaStar />
                    </button>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button label="Read More" href={`/blogs/${blog.id}`}/>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CommentSection />
      </div>
    </div>
  );
};

export default BlogCardsection;
