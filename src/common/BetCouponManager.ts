import { BetCoupon, BetType, SelectedBetsMap, SetSelectedBets } from "@src/enums";

export default class BetCouponManager implements BetCoupon {
    bets: SelectedBetsMap;
    setBets: SetSelectedBets;
  
    constructor({ selectedBets, setSelectedBets }: { selectedBets: SelectedBetsMap; setSelectedBets: SetSelectedBets }) {
      this.bets = selectedBets;
      this.setBets = setSelectedBets;
    }
  
    toggleOddBet = (match: Match) => {
      return (betType: BetType, selectedOddId: string) => {
        const { NID: matchId, OCG: matchOCG } = match;
        const oddId = `${betType}-${selectedOddId}`;
  
        this.setBets((prev) => {
          if (prev.get(matchId)?.oddId === oddId) prev.delete(matchId);
          else
            prev.set(matchId, {
              match,
              oddId,
              selectedOdd: matchOCG[betType].OC[selectedOddId],
            });
  
          return new Map(prev);
        });
      };
    };
  
    isSelectedBet = (matchId: string, oddId: string) => {
      if (!this.bets.has(matchId)) return false;
      return this.bets.get(matchId)?.oddId === oddId;
    };
  
    get selectedBets() {
      return Array.from(this.bets.values()).reverse();
    }
  
    get totalPrice() {
      return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(
        this.bets.size > 0
          ? parseFloat(this.selectedBets.reduce((total, { selectedOdd: { O: odd } }) => total * parseFloat(odd), 1).toFixed(2))
          : 0,
      );
    }
  }