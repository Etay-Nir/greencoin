import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-background-card border-b border-border">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* Modern GreenCoin Logo */}
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center relative overflow-hidden group">
                {/* Coin Base */}
                <svg className="w-6 h-6 text-white transform group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  {/* Leaf/Growth Symbol */}
                  <path 
                    d="M8 12C8 12 9 8 12 8C15 8 16 12 16 12" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M12 8C12 8 14 10 14 12" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  {/* G for GreenCoin */}
                  <path 
                    d="M13 14H12C11.4477 14 11 13.5523 11 13V11C11 10.4477 11.4477 10 12 10H13" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                {/* Animated Glow Effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
              </div>
              <span className="ml-3 text-lg font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">GreenCoin</span>
            </Link>
          </div>
          
          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/cryptocurrencies" className="text-text-secondary hover:text-text-primary text-sm">
              Cryptocurrencies
            </Link>
            <Link href="/portfolio" className="text-text-secondary hover:text-text-primary text-sm">
              Portfolio
            </Link>
            <Link href="/news" className="text-text-secondary hover:text-text-primary text-sm">
              News
            </Link>
            <Link href="/learn" className="text-text-secondary hover:text-text-primary text-sm">
              Learn
            </Link>
            <Link href="/about" className="text-text-secondary hover:text-text-primary text-sm">
              About
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-text-secondary hover:text-text-primary text-sm">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 