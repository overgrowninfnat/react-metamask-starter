import React, { useEffect, useState } from 'react'

import AuthPage from './components/AuthPage'
import HomePage from './components/HomePage'

function App() {
  
  const [currentAccount, setCurrentAccount] = useState(null)

  
  // check if Ethereum Provider API is injected by Metamask
  const isMetaMaskInstalled = () => {
    const {ethereum} = window
    return Boolean(ethereum && ethereum.isMetaMask)
  }

  // MetaMask Auth
  const metaMaskAuth = async () => {
    if(!isMetaMaskInstalled) {
      return
    }
    const {ethereum} = window
    try {
      const account = await ethereum.request({
        method: 'eth_requestAccounts'
      })
      setCurrentAccount(account[0])
    } catch (error) {
      setCurrentAccount(null)
    }
  }

  useEffect(() => {
    if(!isMetaMaskInstalled()) {
      alert('You need to install Metamask')
      return
    }
    const {ethereum} = window

    // check if the user is already auth with Metamask
    const isAuth = async () => {
      try {
        const accounts = await ethereum.request({
          method: 'eth_accounts'
        })
        if(accounts.length > 0) {
          setCurrentAccount(accounts[0])
        }else{
          setCurrentAccount(null)
        }
      } catch (error) {
          setCurrentAccount(null)  
      }
    }

    isAuth()

    function handleAccountsChanged(accounts) {
      if(accounts.length === 0) {
        setCurrentAccount(null)
        return
      }
      if(accounts[0] !== currentAccount) {
        setCurrentAccount(accounts[0])
      }
    }

    function handleChainChanged() {
      window.location.reload()
    }

    // listeon on chain changed
    ethereum.on('chainChanged', handleChainChanged)


    //listen on account changed
    ethereum.on('accountsChanged', handleAccountsChanged)

    return () => {
        ethereum.removeListener('chainChanged', handleChainChanged)
        ethereum.removeListener('accountsChanged', handleAccountsChanged)

    }

  }, [currentAccount])

  if(!currentAccount) {
    return <AuthPage metaMaskAuth={metaMaskAuth} />
  }

  return (
      <HomePage currentAccount={currentAccount} />
   ) 
}

export default App;
