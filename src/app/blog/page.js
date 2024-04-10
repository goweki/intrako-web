import PageTitle from "@/components/pageTitle";
import Blog from "@/components/blog";

export default function BlogPage() {
  //render
  return (
    <main className="grow">
      <PageTitle pageName="Blog" />
      <Blog />
    </main>
  );
}
