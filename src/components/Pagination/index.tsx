import React, { useState } from "react";
import {
  Container,
  InputSearch,
  PaginationGroup,
  DividerData,
  WrapperLoading,
} from "./styles";
import LoadingCharacterCard from "../../components/LoadingSkeleton";
import { CharactersProps } from "../../pages/allCharacters";

interface PaginationProps {
  data: CharactersProps[];
  pageSize: number;
  renderItem: (item: CharactersProps) => JSX.Element;
  isLoading: boolean;
}

const Pagination = ({
  data,
  pageSize,
  renderItem,
  isLoading,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const filteredData = data?.filter(item => {
    const lowercaseSearchValue = searchValue.toLowerCase();
    return Object.values(item).some(value =>
      String(value).toLowerCase().includes(lowercaseSearchValue)
    );
  });

  const currentData = filteredData?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredData?.length / pageSize);

  const renderLoadingCards = () => {
    const loadingCards = Array.from({ length: 10 }, (_, index) => (
      <LoadingCharacterCard key={index} />
    ));
    return (
      <>
        <WrapperLoading>{loadingCards}</WrapperLoading>
        <WrapperLoading>{loadingCards}</WrapperLoading>
      </>
    );
  };

  return (
    <Container>
      <InputSearch>
        <input
          placeholder="Search..."
          type="text"
          id="search"
          autoComplete="off"
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setCurrentPage(1)}
        />
      </InputSearch>

      {isLoading ? (
        renderLoadingCards()
      ) : (
        <DividerData>
          {currentData?.map(item => renderItem(item))}
        </DividerData>
      )}

      <PaginationGroup>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous Page
        </button>
        <p>
          Page {currentPage} / {totalPages}
        </p>
        <button
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next Page
        </button>
      </PaginationGroup>
    </Container>
  );
};

export default Pagination;