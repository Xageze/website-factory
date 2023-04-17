import { ImageType } from "@modules/miscellaneous/type";
import React from "react";
import clsx from "clsx";
import CustomHtml from "@modules/ui/components/CustomHtml";

type FeatureType = {
  title?: string;
  icon?: ImageType;
  svg?: React.ReactNode;
};

type Props = {
  features: Array<FeatureType>;
  title?: string;
  text?: string;
  className?: string;
};

export const FeatureSection: React.FC<Props> = ({
  title,
  text,
  features,
  className,
}) => {
  return (
    <div className={clsx("bg-slate-800", className)}>
      <div className="container mx-auto px-3 sm:px-6 text-center text-white">
        {title && <CustomHtml.H3>{title}</CustomHtml.H3>}
        {text && (
          <CustomHtml.P className="text-gray-200 pt-4">{text}</CustomHtml.P>
        )}

        {/* Features List */}
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-10 pt-20">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  "text-gray-300 hover:text-white transition-colors",
                  "flex flex-col items-center"
                )}
              >
                <div className="bg-slate-700 w-20 h-20 rounded-2xl flex items-center justify-center">
                  {feature.svg}
                </div>
                <CustomHtml.H5 className="pt-3">{feature.title}</CustomHtml.H5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
