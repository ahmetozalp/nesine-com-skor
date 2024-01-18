import { BetType } from '@src/enums';
import React from 'react';

const MatchInfo = React.lazy(() => import('./TableRowInfo'));
const EventTitle = React.lazy(() => import('./TableRowEventTitle'));
const BetCell = React.lazy(() => import('./TableBetCell'));
const Cell = React.lazy(() => import('./TableCell'));

const TableRowMatch = React.memo(({ match }: { match: Match }) => {
  const { N: matchName, T: matchTime, OCG: matchOCG, C: matchCode } = match;
  const title = `${match.D} ${match.DAY} ${match.LN}`;

  return (
    <React.Suspense fallback={null}>
      <MatchInfo title={title} />
      <tr className="divide-x divide-gray-200 hover-bg-gray-100 font-light">
        <EventTitle
          text={
            <React.Fragment>
              <b className="font-bold mr-1">{matchCode}</b>
              {`${matchTime} ${matchName}`}
            </React.Fragment>
          }
        />
        <Cell text="Yorumlar" />
        <Cell text={matchOCG[BetType.MatchResult].MBS} />
        <BetCell match={match} />
        <Cell text="3" />
      </tr>
    </React.Suspense>
  );
});

export default TableRowMatch;