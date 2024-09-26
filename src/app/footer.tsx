import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Insight Empreendedor</h3>
            <p className="text-sm">Fornecendo as melhores soluções de máquinas de cartão de crédito para empresas de todos os tamanhos.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-gold-400 transition-colors">Sobre nós</Link></li>
              <li><Link href="#" className="text-sm hover:text-gold-400 transition-colors">Produtdos</Link></li>
              <li><Link href="#" className="text-sm hover:text-gold-400 transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contate-nos</h4>            
            <p className="text-sm">Tlefone: </p>
            <p className="text-sm">Email: </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2024 FinTech Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}