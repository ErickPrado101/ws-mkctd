import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">FinTech Solutions</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#" className="hover:text-gold-400 transition-colors">Início</Link></li>
            <li><Link href="#" className="hover:text-gold-400 transition-colors">Produtos</Link></li>            
            <li><Link href="#" className="hover:text-gold-400 transition-colors">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}