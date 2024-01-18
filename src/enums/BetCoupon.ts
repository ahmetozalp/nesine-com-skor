import { IBet } from "./IBET";

export type BetCoupon = {
    toggleOddBet: (match: Match) => (betType: string, selectedOddId: string) => void;
    isSelectedBet: (matchId: string, oddId: string) => boolean;
    selectedBets: IBet[];
    totalPrice: string;
};