import HeroSection from "./sections/HeroSection";
import KeyTakeawaysSection from "./sections/KeyTakeawaysSection";
import ArticleContentSection from "./sections/ArticleContentSection";

export default function ArticleDetailPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <KeyTakeawaysSection />
      <ArticleContentSection />
    </main>
  );
}
