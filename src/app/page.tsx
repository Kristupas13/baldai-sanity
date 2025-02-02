import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "./sanity/client";
import Navbar from "./components/navbar";
import mainPhoto from "./../assets/main.jpg";
import Image from "next/image";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };


export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <div className="relative flex-grow bg-red-500">
        <Image className="object-cover object-[0%_75%] hover:brightness-50 transition-all duration-300 ease-in-out" fill src={mainPhoto} alt="main" />
      </div>
      {/*
      <div className="container mx-auto bg-red-50 h-full max-w-3xl p-8">
        <h1 className="text-4xl font-bold mb-8">Posts</h1>
        <ul className="flex flex-col gap-y-4">
          {posts.map((post) => (
            <li className="hover:underline" key={post._id}>
              <Link href={`/${post.slug.current}`}>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      */}
    </main>
  );
}