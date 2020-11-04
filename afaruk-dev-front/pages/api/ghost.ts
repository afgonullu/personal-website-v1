import GhostContentAPI from "@tryghost/content-api";

const { CONTENT_API_KEY, BLOG_URL } = process.env
// Create API instance with site credentials
const api = new GhostContentAPI({
    url: BLOG_URL,
    key: CONTENT_API_KEY,
    version: "v3"
  });

  export async function getAllPosts() {
    return await api.posts
      .browse({
        include: "tags,authors",
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getFeaturedPostsByTag(tag) {
    return await api.posts
      .browse({
        filter: `tag:${tag}+featured:true`,
        include: "tags,authors",
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getPages() {
    return await api.pages
      .browse({
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }

//   // fetch 5 posts, including related tags and authors
// api.posts.browse({
//   filter: 'tag:fiction+tag:-fables'
// })
// .then((posts) => {
//   posts.forEach((post) => {
//       console.log(post.title);
//   });
// })
// .catch((err) => {
//   console.error(err);
// });

// Common Filters
// featured:true - all resources with a field featured that is set to true.
// featured:true+feature_image:null - looks for featured posts which don't have a feature image set by using + (and).
// tag:hash-noimg - tag is an alias for tags.slug and hash-noimg would be the slug for an internal tag called #NoImg. This filter would allow us to find any post that has this internal tag.
// tags:[photo, video, audio] - filters posts which have any one of the listed tags, [] (grouping) is more efficient than using or when querying the same field.
// primary_author:my-author - primary_author is an alias for the first author, allowing for filtering based on the first author.
// published_at:>'2017-06-03 23:43:12' - looks for posts published after a date, using a date string wrapped in single quotes and the > operator