import React from 'react';
import bitcoin from '../../node_modules/cryptocurrency-icons/svg/icon/btc.svg';
import ethereum from '../../node_modules/cryptocurrency-icons/svg/icon/eth.svg';
import xrp from '../../node_modules/cryptocurrency-icons/svg/icon/xrp.svg';
import cryptoCom from '../../node_modules/cryptocurrency-icons/svg/icon/mco.svg';
import chainlink from '../../node_modules/cryptocurrency-icons/svg/icon/link.svg';
import tether from '../../node_modules/cryptocurrency-icons/svg/icon/usdt.svg';
import bitcoinCash from '../../node_modules/cryptocurrency-icons/svg/icon/bch.svg';
import binanceCoin from '../../node_modules/cryptocurrency-icons/svg/icon/bnb.svg';
import ada from '../../node_modules/cryptocurrency-icons/svg/icon/ada.svg';
import chain from '../../node_modules/cryptocurrency-icons/svg/icon/link.svg';
import doge from '../../node_modules/cryptocurrency-icons/svg/icon/doge.svg';
import icn from '../../node_modules/cryptocurrency-icons/svg/icon/icn.svg';
import dot from '../../node_modules/cryptocurrency-icons/svg/icon/pot.svg';
  

 

export const uiIcons = ( cryptomoneda ) => {

  if ( cryptomoneda === 'BTC' ) { return < img src={ bitcoin  } alt='imagen ' />; }
  else if ( cryptomoneda === 'ETH') { return < img src={ ethereum } alt='imagen ' />; }
  else if ( cryptomoneda === 'XRP') { return < img src={ xrp } alt='imagen ' />; }
  else if ( cryptomoneda === 'CRO') { return < img src={ cryptoCom } alt='imagen ' />; }
  else if ( cryptomoneda === 'LINK') { return < img src={ chainlink } alt='imagen ' />; }
  else if ( cryptomoneda === 'USDT') { return < img src={ tether } alt='imagen ' />; }
  else if ( cryptomoneda === 'BCH') { return < img src={ bitcoinCash } alt='imagen ' />; }
  else if ( cryptomoneda === 'BNB') { return < img src={ binanceCoin } alt='imagen' />; }
  else if ( cryptomoneda === 'ADA') { return < img src={ ada } alt='imagen' />; }
  else if ( cryptomoneda === 'LINK') { return < img src={ chain } alt='imagen' />; }
  else if ( cryptomoneda === 'DOGE') { return < img src={ doge } alt='imagen' />; }
  else if ( cryptomoneda === 'DOT') { return < img src={ dot } alt='imagen' />; }
  else if ( cryptomoneda === 'ICP') { return < img src={ icn } alt='imagen' />; }


}

