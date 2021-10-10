import React from "react";
import CoverImage from "../components/cover-image";
import { Link } from "gatsby";

export default function HeroPost({ title, coverImage, excerpt, slug }) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} fluid={coverImage.large} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link to={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
