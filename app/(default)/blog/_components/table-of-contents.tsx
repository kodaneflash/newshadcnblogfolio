import React from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import slugify from 'slugify';

type TreeNode = {
  text: string;
  slug: string;
  children?: TreeNode[];
};

type Headings = Array<{
  _type: 'block';
  style: string;
  children: Array<{ text: string }>;
}>;

function nestHeadings(headings: Headings): TreeNode[] {
  const treeNodes: TreeNode[] = [];
  const stack: { node: TreeNode; level: number }[] = [];

  headings.forEach((heading) => {
    const level = parseInt(heading.style.replace('h', ''), 10);
    const text = heading.children.map(child => child.text).join('');
    const slug = slugify(text, { lower: true });

    const node: TreeNode = { text, slug, children: [] };

    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    if (stack.length > 0) {
      const parent = stack[stack.length - 1].node;
      parent.children = parent.children || [];
      parent.children.push(node);
    } else {
      treeNodes.push(node);
    }

    stack.push({ node, level });
  });

  return treeNodes;
}

function RenderToc({ elements, level = 1 }: { elements: TreeNode[]; level?: number }) {
  return (
    <ul className={cn('space-y-2', {
      'mt-3': level > 1,
      'ml-4': level > 1,
    })}>
      {elements.map((el) => (
        <li key={el.slug} className="text-sm">
          <Link href={`#${el.slug}`} className="hover:underline text-gray-700 dark:text-gray-300 flex items-center group">
            <span className="mr-2 text-xs text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200">•</span>
            <span>{el.text}</span>
          </Link>
          {el.children && <RenderToc elements={el.children} level={level + 1} />}
        </li>
      ))}
    </ul>
  );
}

export function TableOfContents({ headings }: { headings: Headings }) {
  const treeNodes = nestHeadings(headings);

  return (
    <nav className="toc w-full max-w-xs p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Table of Contents</h2>
      <RenderToc elements={treeNodes} />
    </nav>
  );
}