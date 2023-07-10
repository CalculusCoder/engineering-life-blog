import { PostMetadata } from "../../PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
  return (
    <div>
      <Link href={`/posts/${props.slug}`}>
        <div className="border border-slate-200 p-4 rounded-md shadow-lg bg-white dark:bg-zinc-900">
          <h1 className="font-bold text-violet-600 dark:text-[#f1e0ca] hover:underline">
            {props.title}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-300 ">
            {props.date}
          </p>
          <p className="text-slate-500 dark:text-slate-300">{props.subtitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
