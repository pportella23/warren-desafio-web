import { createContext, useCallback, useState } from 'react';

interface FundsContextValues {
  selectedFund: any[];
  selectedFunds: any[];
  foundedFunds: any[];
  selectFund: (name: string) => void;
  unselectFund: (name: string) => void;
  updateFetchedFunds: (fundsList: any[]) => void;
  updateSelectedFund: (fundsList: any[]) => void;
  updateFoundedFunds: (fundsList: any[]) => void;
  updateSelectedFunds: (fundsList: any[]) => void;
  resetFoundedFunds: () => void;
}
export const FundsContext = createContext({} as FundsContextValues);

export const FundsProvider: React.FC = ({ children }) => {
  const [selectedFunds, setSelectedFunds] = useState([] as any[]);
  const [selectedFund, setSelectedFund] = useState([] as any[]);
  const [foundedFunds, setFoundedFunds] = useState([] as any[]);

  const updateSelectedFund = useCallback((fundsList: any[]) => {
    setSelectedFund(fundsList);
  }, []);

  const updateSelectedFunds = useCallback((fundsList: any[]) => {
    setSelectedFunds(fundsList);
  }, []);

  const updateFoundedFunds = useCallback((fundsList: any[]) => {
    setFoundedFunds(fundsList);
  }, []);

  const updateFetchedFunds = (fundsList: any[]) => {
    const selectedNames = selectedFunds.map((fund) => fund.denom_social);

    const fundsListWithState = fundsList.map((fund) => ({
      ...fund,
      hidden: false,
    }));

    const newFoundedFunds = fundsListWithState.filter(
      (fund) => !selectedNames.includes(fund.denom_social)
    );

    setFoundedFunds((prevFoundedFunds) => [
      ...prevFoundedFunds,
      ...newFoundedFunds,
    ]);
  };

  const resetFoundedFunds = () => {
    setFoundedFunds([]);
  };

  const selectFund = (name: string) => {
    if (selectedFunds.length < 8) {
      const fundsWithoutSelectedName = foundedFunds.filter(
        (fund) => fund.denom_social !== name
      );

      const fundWithSelectedName = foundedFunds.filter(
        (fund) => fund.denom_social === name
      );

      const newSelectedFunds = [...selectedFunds, ...fundWithSelectedName];

      setFoundedFunds(fundsWithoutSelectedName);
      setSelectedFunds(newSelectedFunds);
    }
  };

  const unselectFund = (name: string) => {
    const fundsWithoutSelectedName = selectedFunds.filter(
      (fund) => fund.denom_social !== name
    );

    const fundWithSelectedName = selectedFunds.filter(
      (fund) => fund.denom_social === name
    );

    const newFoundedFunds = [...foundedFunds, ...fundWithSelectedName];

    setSelectedFunds(fundsWithoutSelectedName);
    setFoundedFunds(newFoundedFunds);
  };

  return (
    <FundsContext.Provider
      value={{
        selectedFund,
        selectedFunds,
        foundedFunds,
        selectFund,
        unselectFund,
        updateFetchedFunds,
        updateSelectedFund,
        updateFoundedFunds,
        updateSelectedFunds,
        resetFoundedFunds,
      }}
    >
      {children}
    </FundsContext.Provider>
  );
};
