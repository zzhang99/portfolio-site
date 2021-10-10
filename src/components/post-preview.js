import React from "react";
import CoverImage from "./cover-image";
import { Link } from "gatsby";

export default function PostPreview({ title, coverImage, excerpt, slug }) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} fluid={coverImage.small} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link to={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
