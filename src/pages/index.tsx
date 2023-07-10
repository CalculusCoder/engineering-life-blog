import PostPreview from "@/components/PostPreview";
import { GetStaticProps } from "next";
import getPostMetadata from "@/components/getPostMetadata";
import { PostMetadata } from "../../PostMetadata";
import NavbarLayout from "@/components/global/NavbarLayout";
import Image from "next/image";

interface HomePageProps {
  posts: PostMetadata[];
}

const HomePage = ({ posts }: HomePageProps) => {
  const postPreviews = posts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <NavbarLayout>
      <div className="mx-auto max-w-sm px-2 sm:px-0 sm:max-w-2xl lg:max-w-6xl">
        <div className="flex justify-center mb-10">
          <Image
            src="https://jgomez.io/assets/images/astronaut.svg"
            alt="landing page"
            width={400}
            height={400}
          />
        </div>
        <header className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {postPreviews}
        </header>
      </div>
    </NavbarLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPostMetadata();
  return {
    props: {
      posts,
    },
  };
};

export default HomePage;
