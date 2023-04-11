import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const page: React.FC<Props> = ({ params }) => {
  return (
    <div className="flex justify-center">
      <div className="py-20 max-w-3xl text-center space-x-3 space-y-3">
        <span>
          {new Date().toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
        <span>·</span>
        <span>5 min read</span>
        <h1 className="text-5xl font-bold ">{params.slug}</h1>
        <div className="text-left space-y-10 pt-40 text-xl">
          <p>
            Inspired by Lee&apos;s blog, where every blog post is showing the
            number of views it has, I wanted to do something similar for my
            page. I&apos;m also using Next.js 13 with the new app router but
            instead of storing the page views in a mysql database, I&apos;ll be
            using Upstash Redis. Here&apos;s an example of what we&apos;ll be
            building. Each card on the home page will show the number of views
            it has.
          </p>
          <p>
            Why Redis? Redis already comes with 2 great commands that make it
            trivial to deduplicate and to increment a counter. In order to get a
            more accurate counter, I want to debounce the incrementing of the
            counter. If a user refreshes the page, the counter should only be
            incremented once. We can do this really easily with Redis&apos; SET
            command. It has a NX option that will only set the key if it
            doesn&apos;t exist yet and an EX option that will expire the key
            after a given amount of seconds. By combining both of these options
            we can ensure a single user does not increment the counter multiple
            times within a given timeframe. The second command is INCR which
            will increment a given key by 1 atomically.
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
