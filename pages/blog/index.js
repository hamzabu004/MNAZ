import BlogCard from "@/components/BlogCard";
import { useState, useEffect, Fragment } from "react";
import Head from "next/head";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/blog/all") 
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []); 

  return (
    <Fragment>
      <Head>
        <title>Trust Deed Investing Blog | MNAZ</title>
      </Head>
      <div className="container">
        <div className="flex flex-wrap gap-4 w-full justify-evenly py-[2rem] px-[10px]">
          {blogs.map((blog, index) => (
            <BlogCard key={index} data={blog} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Blog;

