import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/components/getPostMetadata";
import { getPostContent } from "../../../posts";
import { GetStaticPaths, GetStaticProps } from "next";
import NavbarLayout from "@/components/global/NavbarLayout";

const PostPage = ({ post }: any) => {
  return (
    <NavbarLayout>
      <div className="mx-auto max-w-sm px-2 sm:px-0 sm:max-w-2xl">
        <header className="text-center text-violet-400 dark:text-white text-3xl font-bold mb-3 p-3">
          {post.title}
        </header>
        <p className="text-slate-500 dark:text-slate-300 text-center mb-16">
          {post.date}, By {post.author}
        </p>

        <article className="prose prose-img:rounded-2xl prose-img:shadow-[-30px_30px_10px_10px_#00000024] dark:prose-h2:text-violet-300 dark:prose-blockquote:text-[#f1e0ca] dark:prose-h4:text-slate-200 dark:prose-a:text-slate-200 dark:prose-strong:text-[#f1e0ca] dark:text-slate-200 lg:prose-xl">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </NavbarLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostContent(slug);
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPostMetadata();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
