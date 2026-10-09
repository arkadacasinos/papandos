import './p4nda.css'
import { TopBar } from '../components/casino/top-bar'
import { Rail } from '../components/casino/rail'
import { Hero } from '../components/casino/hero'
import { WinnersTicker } from '../components/casino/winners-ticker'
import { CatalogBar } from '../components/casino/catalog-bar'
import { TopGames } from '../components/casino/top-games'
import { SeoArticle } from '../components/casino/seo-article'
import { Footer } from '../components/casino/footer'

export default function Page() {
  return (
    <div className="k9z4-page">
      <TopBar />
      <div className="k9z4-shell">
        <Rail />
        <main className="k9z4-main">
          <Hero />
          <WinnersTicker />
          <CatalogBar />
          <TopGames />
        </main>
      </div>
      <SeoArticle />
      <Footer />
    </div>
  )
}
