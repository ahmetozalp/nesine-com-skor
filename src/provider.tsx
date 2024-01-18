import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import BetCouponContext from './context/BasketProvider';
import BetCouponManager from './common/BetCouponManager';
import { SelectedBetsMap } from './enums';

const queryClient = new QueryClient();
function Provider({ children }: { children: React.ReactNode }) {
  const [selectedBets, setSelectedBets] = useState<SelectedBetsMap>(new Map());
  const betCouponManager = new BetCouponManager({ selectedBets, setSelectedBets });

  return (
    <React.Suspense fallback={null}>
       <QueryClientProvider client={queryClient}>
         <BetCouponContext.Provider value={betCouponManager}>
           {children}
        </BetCouponContext.Provider>
       </QueryClientProvider>
       
    </React.Suspense>
  );
}

export default Provider;