import React from "react";
import Link from "next/link";

type Article = {
  id: number;
  author: string;
  title: string;
  date: string;
  body: string;
  image: string;
  tags: string[];
  readTime: string;
  selectedForYou?: boolean;
  memberOnly?: boolean;
  reactions: {
    dislikes: number;
    likes: number;
  };
  views: number;
};

type ArticleListProps = {
  articles: Article[];
};

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="py-8 px-4 bg-gray-50">
      {articles.map((article) => (
        <Link key={article.id} href={`/pages/posts/${article.id}`}>
          <div className="flex flex-col md:flex-row py-6 border-b border-gray-200 bg-white shadow-lg rounded-lg p-6 mb-4 cursor-pointer">
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1">
                {article.author} · {article.date}
              </div>
              <div className="text-2xl font-semibold text-gray-800 mb-2">
                {article.title}
              </div>
              <div className="text-gray-700 mb-4">{article.body}</div>
              <div className="flex flex-wrap items-center space-x-2 mt-2 text-sm text-gray-500">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 rounded-full px-2 py-1 mb-1"
                  >
                    {tag}
                  </span>
                ))}
                <span>{article.readTime}</span>
                {article.selectedForYou && (
                  <span className="text-indigo-500 font-semibold">
                    · Selected for you
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                <span>Views: {article.views}</span>
                <span>Likes: {article.reactions.likes}</span>
                <span>Dislikes: {article.reactions.dislikes}</span>
              </div>
            </div>
            <img
              src={article.image}
              alt={article.title}
              className="w-full md:w-32 h-32 object-cover mt-4 md:mt-0 ml-0 md:ml-4 rounded-lg shadow-md"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;
