import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import api from 'api';
import { FundsContext } from 'contexts/Funds';
import { FilterContext } from 'contexts/Filters';
import useDebounce from 'hooks/useDebounce';

import Screen from 'components/Screen';
import HeaderHome from 'components/HeaderHome';
import FundCard from 'components/FundCard';
import Loading from 'components/Loading';
import Tab from 'components/Tabs/Tab';
import Modal from 'components/Modal';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header``;

const List = styled.div`
  margin-top: 32px;
  padding-left: 24px;
  padding-right: 24px;
  height: 100%;
`;

const BottomLoading = styled.div`
  padding-top: 24px; ;
`;
const BottomLoadingSearch = styled.div`
  position: relative;
  width: 100wv;
  height: 40vh; ;
`;

const Footer = styled.footer`
  padding: 20px 24px 24px 24px;
`;

const Center = styled.p`
  flex: 1;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const { selectedFilters } = useContext(FilterContext);
  const [detailedFund, setDetailedFund] = useState({});
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const debouncedSearchText = useDebounce(searchText, 1000);

  const { foundedFunds, updateFetchedFunds, resetFoundedFunds } = useContext(
    FundsContext
  );

  const handleClickDetailButton = async (id: any) => {
    const fundDetail = foundedFunds.find((fund) => fund.id === id);
    setIsDetailModalOpen(true);
    setDetailedFund(fundDetail);
  };

  const handleOnChangeText = async (searchText: string) => {
    setSearchText(searchText);
  };

  useEffect(() => {
    setIsLoading(!!searchText);
  }, [searchText]);

  useEffect(() => {
    resetFoundedFunds();
  }, [debouncedSearchText]);

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        setIsLoading(true);
        const { data } = await api.get('/transactions');
        let filteredData: any[] = [];
        let transaction: any[] = [];

        if (
          selectedFilters.titulos.length != 0 &&
          selectedFilters.status.length != 0
        ) {
          {
            selectedFilters.titulos.map((titulo: string) => {
              selectedFilters.status.map((stat: string) => {
                transaction = data.filter(
                  (d: any) =>
                    d.title.toLowerCase() == titulo.toLowerCase() &&
                    d.status.toLowerCase() == stat.toLowerCase()
                );
                transaction.map((transac: any) => {
                  if (!filteredData.includes(transac)) {
                    filteredData.push(...transaction);
                  }
                });
              });
            });
          }
        } else if (selectedFilters.titulos.length != 0) {
          {
            selectedFilters.titulos.map((titulo: string) => {
              filteredData.push(
                ...data.filter(
                  (d: any) => d.title.toLowerCase() == titulo.toLowerCase()
                )
              );
            });
          }
        } else if (selectedFilters.status.length != 0) {
          {
            selectedFilters.status.map((stat: string) => {
              filteredData.push(
                ...data.filter(
                  (d: any) => d.status.toLowerCase() == stat.toLowerCase()
                )
              );
            });
          }
        } else {
          filteredData = data;
        }

        if (debouncedSearchText != '') {
          transaction = filteredData.filter((d: any) =>
            d.title.toLowerCase().includes(debouncedSearchText.toLowerCase())
          );
          filteredData = transaction;
        }
        updateFetchedFunds(filteredData);
      } catch (e) {
        console.error(e);
        updateFetchedFunds([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFunds();
  }, [debouncedSearchText]);

  const handleCloseModal = () => {
    setIsDetailModalOpen(false);
  };

  return (
    <Screen>
      <Container>
        <Header>
          <HeaderHome onChangeHandler={handleOnChangeText} />
        </Header>
        <Tab title="Transações">
          {isLoading ? (
            <BottomLoadingSearch>
              <Loading />
            </BottomLoadingSearch>
          ) : foundedFunds.length ? (
            <List>
              {foundedFunds.map((fund) => (
                <FundCard
                  onClickDetails={() => handleClickDetailButton(fund.id)}
                  fund={fund}
                  key={fund.id}
                />
              ))}
              {isLoading && (
                <BottomLoading>
                  <Loading />
                </BottomLoading>
              )}
            </List>
          ) : (
            <Center>Nenhum fundo encontrado</Center>
          )}
        </Tab>
        <Footer></Footer>
      </Container>
      <Modal
        isOpen={isDetailModalOpen}
        onClose={handleCloseModal}
        details={detailedFund}
      />
    </Screen>
  );
}
