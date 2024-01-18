import { BetCoupon } from '@src/enums';
import { createContext } from 'react';

const BetCouponContext = createContext<BetCoupon>(null);
export default BetCouponContext;