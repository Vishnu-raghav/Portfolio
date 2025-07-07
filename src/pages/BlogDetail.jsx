import { useParams, Link } from "react-router-dom";
import blogimg from "../assets/b-1.jpg";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "How I Got My First Client",
content: `
## Starting Out in College

During my first year of college, I decided to learn a skill outside of my coursework. I was drawn to web development and began learning through free tutorials and small projects.

After a few months, I created a basic portfolio to showcase what I had learned. It wasn’t perfect, but it reflected my progress. Once I felt confident enough, I started looking for my first real project.

---

## Reaching Out Locally

Instead of waiting for work to come to me, I decided to reach out to people in my local area. I messaged the owner of a small café nearby and introduced myself:

> “Hi, I build websites. If you or someone you know ever needs help getting their business online, feel free to reach out.”

He didn’t need a website at that time, but a few days later, he replied with a lead:

> “A friend of mine runs a school. He might be interested.”

---

## The School Client

The café owner shared the school owner’s contact with me. I got in touch with him, introduced myself, and explained that I build clean and functional websites for businesses and institutions.

We had a brief conversation over the phone. I shared my past work and explained how a website could help showcase the school online.

After some discussion, he agreed to move forward.

---

## The Project

I started the project immediately. Over the next 10 days, I designed and developed a fully responsive website for the school. I kept the design simple, clear, and easy to navigate — something parents and students could use comfortably.

When I delivered the project, he was happy with the result and made the payment.

It wasn’t a big amount, but it was the first time someone trusted me and paid for my work. That meant a lot.

---

## Key Takeaways

- Don’t wait for work to come — reach out and start the conversation.
- You don’t need a big portfolio or years of experience to get started.
- Most opportunities come through people around you — even casual connections.
- A simple message can lead to real work.

---

## Final Thoughts

My first client didn’t come from a freelance website or job board. It came from a simple message to someone nearby.

If you’re getting started, let people know what you do. Your first opportunity might be one message away.
`
,
    image: blogimg,
    tag: "Freelancing",
    date: "July 7, 2025",
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog)
    return (
      <div className="text-center text-red-500 mt-20">Blog not found!</div>
    );

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero */}
      <div className="relative h-[250px] md:h-[420px] w-full overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover brightness-60"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-10 left-5 md:left-16 max-w-3xl z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs bg-white/10 text-purple-300 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10"
          >
            {blog.tag}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold mt-3 text-white"
          >
            {blog.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-300 mt-2"
          >
            {blog.date}
          </motion.p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 mt-14 pb-24">
        {blog.content.trim().split("\n\n").map((block, i) => {
          if (block.startsWith("##")) {
            return (
              <motion.h2
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-semibold text-white mb-3 mt-10"
              >
                {block.replace("##", "").trim()}
              </motion.h2>
            );
          } else if (block.startsWith(">")) {
            return (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border-l-4 border-purple-500 pl-4 italic text-gray-400 my-4"
              >
                {block.replace(/^>\s*/, "")}
              </motion.blockquote>
            );
          } else if (block.startsWith("-") || block.startsWith("1.")) {
            return (
              <motion.ul
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="list-disc pl-6 space-y-2 text-sm text-gray-300"
              >
                {block.split("\n").map((line, j) => (
                  <li key={j}>{line.replace(/^[-\d.]\s*/, "")}</li>
                ))}
              </motion.ul>
            );
          } else {
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-base text-gray-300 mb-4"
              >
                {block}
              </motion.p>
            );
          }
        })}

        {/* Back Button */}
        <div className="pt-10">
          <Link
            to="/"
            className="inline-block text-sm text-purple-400 hover:text-pink-500 transition duration-200"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
