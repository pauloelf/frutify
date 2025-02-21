'use client';

interface PaginationProps {
  fruitsPerPage: number;
  totalFruits: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  fruitsPerPage,
  totalFruits,
  currentPage,
  onPageChange
}: PaginationProps) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalFruits / fruitsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`px-3 py-1 rounded ${currentPage === number
                ? 'bg-emerald-600 text-emerald-50'
                : 'bg-emerald-300 hover:bg-emerald-400 cursor-pointer'
                }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}