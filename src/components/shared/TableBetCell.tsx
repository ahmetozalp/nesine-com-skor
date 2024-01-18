import React, { useCallback, useContext } from 'react';
import { betTypes } from '@src/enums';

import Cell from './TableCell';
import BetCouponContext from '@src/context/BasketProvider';

const TableBetCell = React.memo(({ match }: { match: Match }) => {
  const { NID: matchID, OCG: matchOCG, C: matchCode } = match;
  const { toggleOddBet, isSelectedBet } = useContext(BetCouponContext);

  const handleToggleBet = useCallback(toggleOddBet(match), [matchID]);

  return (
    <React.Fragment>
      {betTypes.map((betType) => (
        <React.Fragment key={`${matchCode}_${betType}`}>
          {Object.entries(matchOCG[betType]?.OC ?? {}).map(([oddId, { O: odd }], index) => (
            <Cell
              text={odd}
              key={`${matchID}_${betType}_${odd}_${index}`}
              onClick={() => handleToggleBet(betType, oddId)}
              className={`cursor-pointer ${isSelectedBet(matchID, `${betType}-${oddId}`) && 'bg-green-200'}`}
            />
          ))}
          {Array.from({ length: +betType }, (_, i) => (
            <Cell key={i} className="w-7" />
          ))}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
});

export default TableBetCell;