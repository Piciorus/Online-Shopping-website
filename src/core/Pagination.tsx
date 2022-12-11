import React from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  handleNextPage: (page: number) => void;
  handlePrevPage: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div className="flex justify-center pt-5">
      <button onClick={() => handlePrevPage(currentPage)} />

      <span className="bg-zinc-800 text-white px-3 py-2 text-sm">
        Page {currentPage} of {totalPages}
      </span>

      <button onClick={() => handleNextPage(currentPage)} />
    </div>
  );
};

export default Pagination;
