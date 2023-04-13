"use client";

import React from "react";
import clsx from "clsx";
import CustomHtml from "@modules/ui/components/CustomHtml";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ReadingProgress } from "@/modules/ui/components/ReadingProgress";

const mdText = `# Titre principal\n\n## Sous-titre 1\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac eros metus. Sed posuere eros quis enim luctus, sed commodo ipsum maximus. Donec vehicula gravida magna eget lobortis. Morbi eu ultrices purus, vel dignissim nulla. Curabitur vitae tristique velit. Ut et placerat ex, eu tempus nulla. Sed a ullamcorper sapien. Sed nec lorem ut magna consequat tristique vel vitae lectus.\n\n### Sous-sous-titre 1\n\nPraesent nec odio at ante fringilla varius. Morbi a justo id lorem aliquam malesuada. Aenean volutpat lectus vel imperdiet elementum. Nullam fermentum nibh a felis feugiat, in bibendum mauris malesuada. Maecenas ac dolor euismod, ullamcorper libero eu, bibendum lectus. Nam dignissim, lacus nec rhoncus pharetra, velit odio dignissim libero, sit amet rhoncus lectus magna sit amet tellus.\n\n### Sous-sous-titre 2\n\nAenean vel turpis id massa hendrerit fringilla eget at ex. Vestibulum hendrerit, sapien in ultrices vestibulum, est arcu pretium sapien, nec fringilla nibh nibh quis dolor. Aliquam vel aliquam velit. Fusce a magna vitae nisl gravida blandit eget a ante. Integer sed justo libero. Donec auctor, erat sed blandit sagittis, quam mauris consequat neque, vel feugiat risus justo vitae nibh.\n\n## Sous-titre 2\n\nSed non lorem non odio aliquam rutrum. Vestibulum vel felis ac ipsum pharetra sodales. Fusce tempor libero at ex aliquam, ac mattis eros tincidunt. Nam accumsan, urna eu placerat imperdiet, lectus lacus fringilla arcu, vitae porttitor velit lectus eu odio. Integer sit amet imperdiet mauris, eu lacinia nibh. Phasellus bibendum dolor vel ante sagittis, sed aliquam nisi ultrices. Fusce tristique ligula nec diam sagittis, at commodo augue fringilla.\n\n### Sous-sous-titre 1\n\nAliquam in tincidunt leo. Nullam eget orci nibh. In vel bibendum felis, sit amet feugiat massa. Proin ut augue a odio aliquet finibus vitae vel nulla. Vestibulum at purus quis justo interdum dapibus non non odio. In rhoncus varius orci, eu faucibus lectus. Vestibulum sit amet interdum nisl.\n\n### Sous-sous-titre 2\n\nMauris faucibus diam vitae dui ultrices, id bibendum velit laoreet. Nullam posuere augue a eros tincidunt, in dapibus eros placerat. Sed pulvinar enim euismod leo consectetur, a consequat orci finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse aliquet, lacus quis pharetra commodo, tellus leo facilisis nunc, nec iaculis quam tellus`;

type Props = {
  params: {
    slug: string;
  };
};

const Page: React.FC<Props> = ({ params }) => {
  return (
    <div className="flex justify-center">
      <ReadingProgress />
      <div className="py-20 max-w-3xl space-y-6">
        <span>
          {new Date().toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          , 5 min read
        </span>
        <CustomHtml.H2>{params.slug}</CustomHtml.H2>
        <ReactMarkdown
          className={clsx(cssH1, cssH2, cssH3, cssP, "space-y-10 pt-20")}
        >
          {mdText}
        </ReactMarkdown>
      </div>
    </div>
  );
};
const cssH1 = "prose-h1:text-5xl prose-h1:font-bold";
const cssH2 = "prose-h2:text-4xl prose-h2:font-bold";
const cssH3 = "prose-h3:text-3xl prose-h3:font-bold";
const cssP = "prose-p:text-xl";
export default Page;
