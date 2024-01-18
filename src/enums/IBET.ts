export type IBet = {
    match: Match;
    selectedOdd: Odd;
    oddId: string;
};

  export type SelectedBetsMap = Map<string, IBet>;
  export type SetSelectedBets = React.Dispatch<React.SetStateAction<SelectedBetsMap>>;