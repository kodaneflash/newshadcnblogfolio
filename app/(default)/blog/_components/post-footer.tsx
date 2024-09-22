import { formatDate } from "@/lib/date-format";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const PostFooter = ({
  author,
  authorImg,
  publishedAt,
  categories,
  tags,
}: {
  author: string;
  authorImg: string;
  publishedAt: string;
  categories: { title: string; slug: string }[];
  tags: { title: string; color: string }[];
}) => (
  <div className="flex flex-col space-y-4 mt-4">
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarImage src={authorImg} alt={author} />
        <AvatarFallback>
          {author
            .split(" ")
            .map((name: string) => name[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium">{author}</p>
        <p className="text-xs text-muted-foreground">
          Published on {formatDate(publishedAt)}
        </p>
      </div>
    </div>
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <span
          key={category.slug}
          className="text-xs bg-secondary text-secondary-foreground rounded-full px-2 py-1"
        >
          {category.title}
        </span>
      ))}
      {tags.map((tag) => (
        <span
          key={tag.title}
          className="text-xs text-white rounded-full px-2 py-1"
          style={{ backgroundColor: tag.color }}
        >
          {tag.title}
        </span>
      ))}
    </div>
  </div>
);
