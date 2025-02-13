'use client'

import { DepositAddress } from '@/components/deposit-address'
import { Press_Start_2P } from 'next/font/google'
import Link from 'next/link'
import { ArrowLeft, Wallet } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CustomImage } from "@/components/ui/custom-image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import eth32 from 'cryptocurrency-icons/32/color/eth.png'
import usdc32 from 'cryptocurrency-icons/32/color/usdc.png'
import { BalanceDropdown } from "@/components/balance-dropdown"
import { WithdrawAddress } from "@/components/withdraw-address"
import { useWallet } from '@/app/providers'

const pressStart2P = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p'
})

export default function CashierPage() {
  const { isConnected, connect } = useWallet()

  return (
    <div className={`min-h-screen bg-black text-[#63e211] ${pressStart2P.variable} font-press-start-2p`}>
      {/* Header */}
      <header className="border-b border-green-900/50 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container max-w-[1400px] flex h-20 items-center justify-between px-0">
          <div className="flex items-center gap-6 pl-6">
            <Link href="/" className="flex items-center gap-2">
              <CustomImage
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
            <Button className="bg-[#63e211] text-black hover:bg-[#7fff00] shadow-md shadow-[#63e211]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 font-press-start-2p">
              CASHIER
            </Button>
          </div>
        </div>
      </header>

      {/* Added mb-[30px] here */}
      <div className="mb-[30px]" />

      {/* Main Content */}
      <div className="container py-8 relative">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-[#63e211] hover:bg-[#63e211]/20 font-press-start-2p">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Cashier Content */}
          <div className={`transition-all duration-200 ${!isConnected ? 'blur-sm pointer-events-none' : ''}`}>
            <h1 className="text-2xl font-press-start-2p text-[#63e211] mb-8 text-center">Funds Management</h1>
            
            <Tabs defaultValue="deposit" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-[#1a4d1a] font-press-start-2p">
                <TabsTrigger 
                  value="deposit"
                  className="data-[state=active]:bg-[#63e211] data-[state=active]:text-black font-press-start-2p"
                >
                  DEPOSIT
                </TabsTrigger>
                <TabsTrigger 
                  value="withdraw"
                  className="data-[state=active]:bg-[#63e211] data-[state=active]:text-black font-press-start-2p"
                >
                  WITHDRAW
                </TabsTrigger>
              </TabsList>

              <TabsContent value="deposit">
                <div className="mt-6">
                  <Tabs defaultValue="8bet" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-[#1a4d1a] font-press-start-2p">
                      <TabsTrigger 
                        value="8bet"
                        className="data-[state=active]:bg-[#63e211] data-[state=active]:text-black flex items-center gap-2 font-press-start-2p"
                      >
                        <CustomImage
                          src="/wagiebetlogocoin1.png"
                          alt="8BET"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        8BET
                      </TabsTrigger>
                      <TabsTrigger 
                        value="eth"
                        className="data-[state=active]:bg-[#63e211] data-[state=active]:text-black flex items-center gap-2 font-press-start-2p"
                      >
                        <Image
                          src={eth32}
                          alt="ETH"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        ETH
                      </TabsTrigger>
                      <TabsTrigger 
                        value="usdc"
                        className="data-[state=active]:bg-[#63e211] data-[state=active]:text-black flex items-center gap-2 font-press-start-2p"
                      >
                        <Image
                          src={usdc32}
                          alt="USDC"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        USDC
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="8bet">
                      <div className="mt-6">
                        <DepositAddress 
                          tokenName="8BET"
                          tokenAddress="0x8bet...contract"
                          network="Ethereum"
                          icon="/wagiebetlogocoin1.png"
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="eth">
                      <div className="mt-6">
                        <DepositAddress 
                          tokenName="ETH"
                          tokenAddress="0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
                          network="Ethereum"
                          icon={eth32.src}
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="usdc">
                      <div className="mt-6">
                        <DepositAddress 
                          tokenName="USDC"
                          tokenAddress="0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
                          network="Ethereum"
                          icon={usdc32.src}
                        />
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </TabsContent>

              <TabsContent value="withdraw">
                <div className="mt-6">
                  <Tabs defaultValue="8bet" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-[#1a4d1a] font-press-start-2p">
                      <TabsTrigger 
                        value="8bet"
                        className="data-[state=active]:bg-[#63e211] data-[state=active]:text-black flex items-center gap-2 font-press-start-2p"
                      >
                        <CustomImage
                          src="/wagiebetlogocoin1.png"
                          alt="8BET"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        8BET
                      </TabsTrigger>
                      <TabsTrigger 
                        value="eth"
                        className="data-[state=active]:bg-[#63e211] data-[state=active]:text-black flex items-center gap-2 font-press-start-2p"
                      >
                        <Image
                          src={eth32}
                          alt="ETH"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        ETH
                      </TabsTrigger>
                      <TabsTrigger 
                        value="usdc"
                        className="data-[state=active]:bg-[#63e211] data-[state=active]:text-black flex items-center gap-2 font-press-start-2p"
                      >
                        <Image
                          src={usdc32}
                          alt="USDC"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        USDC
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="8bet">
                      <div className="mt-6">
                        <WithdrawAddress 
                          tokenName="8BET"
                          tokenAddress="0xF4b7B9ab55A2eeb3bD6123B8f45B0abfFd5089c7"
                          network="Ethereum"
                          icon="/wagiebetlogocoin1.png"
                          balance="0.00"
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="eth">
                      <div className="mt-6">
                        <WithdrawAddress 
                          tokenName="ETH"
                          tokenAddress="0xF4b7B9ab55A2eeb3bD6123B8f45B0abfFd5089c7"
                          network="Ethereum"
                          icon={eth32.src}
                          balance="0.00"
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="usdc">
                      <div className="mt-6">
                        <WithdrawAddress 
                          tokenName="USDC"
                          tokenAddress="0xF4b7B9ab55A2eeb3bD6123B8f45B0abfFd5089c7"
                          network="Ethereum"
                          icon={usdc32.src}
                          balance="0.00"
                        />
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Connect Wallet Overlay */}
          {!isConnected && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
              <div className="text-center space-y-8 p-8 rounded-lg bg-[#0d260d]/80 border border-[#63e211]/20 max-w-md w-full mx-4">
                <h2 className="text-xl font-press-start-2p text-[#63e211]">Connect Wallet to Access Cashier</h2>
                <Button 
                  onClick={() => connect()}
                  className="bg-[#63e211] text-black hover:bg-[#7fff00] shadow-md shadow-[#63e211]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 font-press-start-2p flex items-center gap-2 mx-auto"
                >
                  <Wallet className="h-4 w-4" />
                  CONNECT WALLET
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 