// Sample Blog Posts
const blogs = [
  {
    title: "Learn HTML in 10 Minutes",
    image: "https://via.placeholder.com/400x200",
    excerpt: "A quick guide to understanding HTML basics for beginners.",
  },
  {
    title: "Why JavaScript is Powerful",
    image: "https://via.placeholder.com/400x200",
    excerpt: "Discover why JavaScript is the backbone of modern web apps.",
  },
  {
    title: "CSS Tips for Beautiful Websites",
    image: "https://via.placeholder.com/400x200",
    excerpt: "Learn styling tricks to make your website look professional.",
  },
  {
    title: "Responsive Web Design",
    image: "https://via.placeholder.com/400x200",
    excerpt: "A guide to making websites look great on all devices.",
  }
];

// Render Blogs
const blogList = document.getElementById("blog-list");
blogs.forEach(blog => {
  const div = document.createElement("div");
  div.classList.add("blog");
  div.innerHTML = `
    <img src="${blog.image}" alt="${blog.title}">
    <div class="blog-content">
      <h3>${blog.title}</h3>
      <p>${blog.excerpt}</p>
      <button>Read More</button>
    </div>
  `;
  blogList.appendChild(div);
});

// Mobile Menu Toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}
