import './App.css';
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query"
import { ETHTPSApi } from './services/api/ETHTPSApi';
import Main from './Main';
import { configureStore } from '@reduxjs/toolkit';

const apiClient = new ETHTPSApi('http://localhost:10202');
const queryClient = new QueryClient(apiClient.buildQueryClientConfig())
export default function App(): JSX.Element {
  return <QueryClientProvider client={queryClient}>
    <Main {...apiClient} />
  </QueryClientProvider>
}

/*

    <hr />
    <div className='bottomnavbar'>
      <a href="/Status">
        Status
      </a>
      <div className={'inline'} style={{ marginRight: '10px' }} />
      <a href="https://api.ethtps.info/API/v2/AllData">
        Download data
      </a>
    </div>
    <hr />
    <footer>
      <div className={'inline'}>
        Brought to you by
        <div style={{ marginLeft: '5px' }} className={'trick'}>
          <span>
            Mister_Eth
          </span>
        </div>
        <br></br>
        Donate:
        <a style={{ marginLeft: '5px' }} href="https://app.ens.domains/name/ethtps.eth/details">
          ethtps.eth
        </a>
        <p className={'ul-hover inline'} style={{ marginLeft: '5px' }}>
          (0x466Ef24d68ac9b61670eeE7fC2E001B951aBf482)
        </p>
      </div>
    </footer>
*/