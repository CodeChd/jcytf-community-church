import Link from "next/link";
import { PER_PAGE } from "@/config/index";

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <div className="paging">
      {page > 1 && (
        <Link href={`/events?page=${page - 1}`}>
          <span className="pagination">Prev</span>
        </Link>
      )}
      {page < lastPage && (
        <Link href={`/events?page=${page + 1}`}>
          <span className="pagination">Next</span>
        </Link>
      )}
    </div>
  );
}
