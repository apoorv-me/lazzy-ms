import React from 'react';
import { useState } from 'react';

export default function Wallet() {
  const [wallets, setWallets] = useState([
    {
      name: 'Metamask',
      icon: 'img/house.jpg',
      description:
        'Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide.',
      link: 'https://metamask.io/',
      badge: 'Most Popular'
    },
    {
      name: 'Bitski',
      icon: 'img/images.jpg',
      description:
        'Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide.',
      link: 'https://bitski.com/',
      badge: ''
    },
    {
      name: 'Fortmatic',
      icon: 'img/images.jpg',
      description:
        'Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide.',
      link: 'https://fortmatic.com/',
      badge: ''
    },
    {
      name: 'WalletConnect',
      icon: 'img/images.jpg',
      description:
        'Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide.',
      link: 'https://walletconnect.org/',
      badge: ''
    },
    {
      name: 'Coinbase Wallet',
      icon: 'img/images.jpg',
      description:
        'Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide.',
      link: 'https://www.coinbase.com/',
      badge: ''
    },
    {
      name: 'Arkane',
      icon: 'img/images.jpg',
      description:
        'Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide.',
      link: 'https://arkane.io/',
      badge: ''
    },
    {
      name: 'Authereum',
      icon: 'img/images.jpg',
      description:
        'Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide.',
      link: 'https://authereum.com/',
      badge: ''
    },
    {
      name: 'Torus',
      icon: 'img/images.jpg',
      description:
        'Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide.',
      link: 'https://torus.io/',
      badge: 'Most Simple'
    }
  ]);
  return (
    <>
      <div className='w-full py-16'>
        <div className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {wallets.map((wallet, index) => (
            <a
              href={wallet.link}
              className='p-6 bg-white/[0.01] hover:bg-white/[0.03] rounded-xl border border-gray-600 shadow-lg'
              key={wallet.name}
            >
              <div className='flex flex-row items-center justify-between'>
                <img
                  src={wallet.icon}
                  alt={wallet.name}
                  className='w-16 h-16'
                />
                {wallet.badge && (
                <div className='bg-gray-500 py-1 px-2 rounded-lg text-white font-bold'>
                  <span>{wallet.badge}</span>
                </div>
                )}
              </div>
              <div className='flex flex-col items-start mt-4'>
                <h3 className='text-xl font-bold text-white'>{wallet.name}</h3>
                <p className='text-gray-400 text-sm'>{wallet.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
