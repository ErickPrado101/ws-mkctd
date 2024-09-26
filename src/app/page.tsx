import { Header } from "./header" 
import { Hero } from "./hero"
import { ProductComparison } from "./product-comparison"
import { Footer } from "./footer"


export default function FinancialAgencyWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <ProductComparison />
      </main>
      <Footer />
    </div>
  )
}