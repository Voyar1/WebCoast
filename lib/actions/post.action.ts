import { fetchAPI } from "../api";

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getPostsInfo() {
  const data = await fetchAPI(`
query NewQuery {
  posts {
    nodes {
      excerpt(format: RENDERED)
      postId
      slug
      title
    }
  }
}
  `);
  return data?.posts;
}
