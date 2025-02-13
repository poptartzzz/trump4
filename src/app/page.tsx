'use client'

import Link from "next/link"
import Image from "next/image"
import { Press_Start_2P } from 'next/font/google'
import { useEffect, useState } from 'react'
import { BalanceDropdown } from "@/components/balance-dropdown"
import { PromoBanner } from "@/components/promo-banner"
import { TrollBox } from "@/components/troll-box"
import { 
  LayoutDashboard,
  Gift,
  LineChart,
  Trophy,
  Coins,
  FileText,
  ShoppingCart,
  MessageCircle,
  Twitter,
  Flame,
  Banknote
} from 'lucide-react'
import { 
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const pressStart2P = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p'
})

export default function Home() {
  const [winAmounts, setWinAmounts] = useState<number[]>([])

  useEffect(() => {
    setWinAmounts(Array.from({ length: 8 }, () => Number((Math.random() * 1000).toFixed(2))))
  }, [])

  return (
    <div className={`min-h-screen bg-black text-[#63e211] ${pressStart2P.variable} flex flex-col`}>
      {/* Promo Banner */}
      <PromoBanner />

      {/* Top Navigation */}
      <header className="border-b border-green-900/50 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex h-20 items-center justify-between w-full">
          <div className="flex items-center gap-6 pl-6">
            <Link href="#" className="flex items-center gap-2">
              <Image
                src="/8BETbanner.png"
                alt="8BET Logo"
                width={300}
                height={100}
                className="h-20 w-auto"
                priority
                quality={100}
              />
            </Link>
          </div>
          <div className="flex items-center gap-4 pr-6">
            <BalanceDropdown />
            <Link href="/account">
              <Button 
                variant="outline"
                className="border-[#63e211]/20 bg-[#1a4d1a] text-[#63e211] hover:bg-[#63e211]/20 font-press-start-2p"
              >
                ACCOUNT
              </Button>
            </Link>
            <Link href="/cashier">
              <Button className="bg-[#63e211] text-black hover:bg-[#7fff00] shadow-md shadow-[#63e211]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 font-press-start-2p">
                CASHIER
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Added mb-[30px] here */}
      <div className="mb-[30px]" />

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[280px,1fr,340px] min-h-0">
        {/* Sidebar Navigation */}
        <aside className="space-y-4 lg:space-y-6 p-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#1a4d1a] to-[#0d260d] shadow-lg shadow-[#63e211]/10 px-3 py-2">
              <Image
                src="/wagiebetlogocoin1.png"
                alt="Currency icon"
                className="rounded-full"
                height={24}
                width={24}
              />
              <div>
                <div className="font-semibold font-press-start-2p text-[#63e211]">8BET Coin</div>
                <div className="text-sm text-red-400">-6.13%</div>
              </div>
            </div>
          </div>

          {/* DASHBOARD Section */}
          <div className="space-y-1">
            <h2 className="px-3 text-xs font-semibold text-[#63e211]/50 font-press-start-2p">Dashboard</h2>
            <nav className="space-y-1">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#63e211] hover:bg-[#63e211]/20 hover:text-green-300 font-press-start-2p"
              >
                <LayoutDashboard className="h-4 w-4" />
                Wagering
              </Link>
              <Link
                href="/lottery"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#63e211] hover:bg-[#63e211]/20 hover:text-green-300 font-press-start-2p"
              >
                <Gift className="h-4 w-4" />
                Lottery
              </Link>
              <Link
                href="/futures"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#63e211] hover:bg-[#63e211]/20 hover:text-green-300 font-press-start-2p"
              >
                <LineChart className="h-4 w-4" />
                Futures
              </Link>
              <Link
                href="/rewards"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#63e211] hover:bg-[#63e211]/20 hover:text-green-300 font-press-start-2p"
              >
                <Trophy className="h-4 w-4" />
                Rewards
              </Link>
            </nav>
          </div>

          {/* 8BIT Token Section */}
          <div className="space-y-1">
            <h2 className="px-3 text-xs font-semibold text-[#63e211]/50 font-press-start-2p">8bit Token</h2>
            <nav className="space-y-1">
              <Link
                href="/staking"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#63e211] hover:bg-[#63e211]/20 hover:text-green-300 font-press-start-2p"
              >
                <Coins className="h-4 w-4" />
                Staking
              </Link>
              <Link
                href="/litepaper"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#63e211] hover:bg-[#63e211]/20 hover:text-green-300 font-press-start-2p"
              >
                <FileText className="h-4 w-4" />
                Litepaper
              </Link>
              <Link
                href="https://uniswap.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#63e211] hover:bg-[#63e211]/20 hover:text-green-300 font-press-start-2p"
              >
                <ShoppingCart className="h-4 w-4" />
                Buy 8bet
              </Link>
              <Link
                href="https://dexscreener.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#63e211] hover:bg-[#63e211]/20 hover:text-green-300 font-press-start-2p"
              >
                <LineChart className="h-4 w-4" />
                Chart
              </Link>
            </nav>
          </div>

          {/* SOCIALS Section */}
          <div className="space-y-1">
            <h2 className="px-3 text-xs font-semibold text-[#63e211]/50 font-press-start-2p">Socials</h2>
            <nav className="space-y-1">
              <Link
                href="https://t.me/8beteth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#63e211] hover:bg-[#63e211]/20 hover:text-green-300 font-press-start-2p"
              >
                <MessageCircle className="h-4 w-4" />
                Telegram
              </Link>
              <Link
                href="https://x.com/8beteth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#63e211] hover:bg-[#63e211]/20 hover:text-green-300 font-press-start-2p"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </Link>
              <Link
                href="/litepaper"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#63e211] hover:bg-[#63e211]/20 hover:text-green-300 font-press-start-2p"
              >
                <FileText className="h-4 w-4" />
                Litepaper
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="space-y-4 lg:space-y-6 min-h-0 p-6">
          {/* Wagering Games */}
          <section className="h-auto w-full">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-[#63e211]" />
                <h2 className="font-semibold text-[#63e211] font-press-start-2p">WAGERING GAMES</h2>
              </div>
            </div>
            <ScrollArea className="w-full">
              <div className="flex space-x-4 pb-4">
                {[
                  { name: 'FLAPPY PEPE', amount: winAmounts[0], image: '/pepejumpimg.png' },
                  { name: 'TANKZ', amount: winAmounts[1], image: '/wojaktanks.png' },
                  { name: 'ETHRIS', amount: winAmounts[2], image: '/pepetetris.png' },
                  { name: 'BOUNCE', amount: winAmounts[3], image: '/pepejbounce.png' },
                ].map((game, i) => (
                  <Card 
                    key={i} 
                    className="min-w-[220px] max-w-[220px] bg-gradient-to-br from-[#1a4d1a] to-[#0d260d] shadow-lg shadow-[#63e211]/10 backdrop-blur-sm border border-[#63e211]/20 transform transition-all duration-200 hover:scale-105"
                  >
                    <CardContent className="p-4">
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <Image
                          src={game.image}
                          alt={`${game.name} thumbnail`}
                          className="object-cover"
                          fill
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent" />
                      </div>
                      <div className="mt-3 space-y-3">
                        <div className="text-sm font-medium text-[#63e211] font-press-start-2p">{game.name}</div>
                        
                        {/* Pot Amount */}
                        <div className="flex items-center gap-2 bg-black/30 p-2 rounded-lg">
                          <Banknote className="h-4 w-4 text-[#63e211]" />
                          <span className="text-sm text-[#63e211] font-press-start-2p">
                            ${(game.amount * 100).toFixed(2)}
                          </span>
                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-2 gap-2">
                          <Button 
                            className="bg-[#63e211] text-black hover:bg-[#7fff00] shadow-md shadow-[#63e211]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 font-press-start-2p text-[10px]"
                          >
                            WAGER
                          </Button>
                          <Button 
                            variant="outline"
                            className="border-[#ff6666] bg-[#ff6666]/20 text-[#ff6666] hover:bg-[#ff6666]/30 font-press-start-2p text-[10px]"
                          >
                            PRACTICE
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="bg-[#63e211]/20" />
            </ScrollArea>
          </section>

          {/* 8BET Coin Stats */}
          <section className="rounded-xl bg-gradient-to-br from-[#1a4d1a] to-[#0d260d] p-4 lg:p-6 backdrop-blur-sm shadow-xl shadow-[#63e211]/10 border border-[#63e211]/20">
            <div className="mb-4 lg:mb-6 flex items-center gap-4">
              <Image
                src="/wagiebetlogocoin1.png"
                alt="8BET Coin"
                className="rounded-full"
                height={48}
                width={48}
              />
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-[#63e211] font-press-start-2p">8BET COIN</h2>
                <div className="text-xs lg:text-sm text-[#63e211]">
                  24h Volume: $0.00 • Holders: 0
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <div className="text-xs lg:text-sm text-[#63e211]">24h 8BET Revenue</div>
                <div className="text-xl lg:text-2xl font-bold text-[#63e211] font-press-start-2p">$0.00</div>
                <div className="text-xs lg:text-sm text-orange-400">↑ 0.00%</div>
              </div>
              <div>
                <div className="text-xs lg:text-sm text-[#63e211]">24h 8BET Burnt</div>
                <div className="text-xl lg:text-2xl font-bold text-[#63e211] font-press-start-2p">0</div>
                <div className="text-xs lg:text-sm text-green-500 font-press-start-2p text-[#63e211]">$0.00</div>
              </div>
            </div>
            <div className="mt-4 lg:mt-6 flex gap-4 flex-col sm:flex-row">
              <Link 
                href="https://uniswap.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#63e211] text-black hover:bg-[#7fff00] shadow-md shadow-[#63e211]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 font-press-start-2p">
                  TRADE 8BET
                </Button>
              </Link>
              <Link href="/account">
                <Button 
                  variant="outline" 
                  className="border-[#ff6666] text-[#ff6666] hover:bg-[#ff6666]/20 font-press-start-2p"
                >
                  VIEW DASHBOARD
                </Button>
              </Link>
            </div>
          </section>
        </main>

        {/* Troll Box Section */}
        <aside className="hidden lg:block p-6">
          <TrollBox />
        </aside>
      </div>
    </div>
  )
}
