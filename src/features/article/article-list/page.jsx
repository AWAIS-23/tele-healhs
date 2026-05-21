import HeroSection from "./sections/HeroSection";
import ArticleStats from "./sections/ArticleStats";
import LatestArticlesSection from "./sections/LatestArticlesSection";
import NewsUpdatesSection from "./sections/NewsUpdatesSection";
import BrowseByCategorySection from "./sections/BrowseByCategorySection";

export default function ArticleListPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ArticleStats />
      <LatestArticlesSection />
      <NewsUpdatesSection />
      <BrowseByCategorySection />
    </main>
  );
}
