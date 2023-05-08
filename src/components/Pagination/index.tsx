import { useState } from "react";

import { Container, InputSearch, PaginationGroup, DividerData } from "./styles";
import { CharactersProps } from "../../pages/allCharacters";

interface PaginationProps {
  data: CharactersProps[];
  pageSize: number;
  renderItem: (item: CharactersProps) => JSX.Element;
}

const Pagination = ({ data, pageSize, renderItem }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const filteredData = data?.filter((item) => {
    return Object.values(item).some((value) =>
      value?.toString()?.toLowerCase()?.includes(searchValue.toLowerCase())
    );
  });

  const currentData = filteredData?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredData?.length / pageSize);

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

      <DividerData>
        {currentData?.map((item) => renderItem(item))}
      </DividerData>
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
