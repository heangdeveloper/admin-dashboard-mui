import TablePagination from '@mui/material/TablePagination';

import type { Table } from "@tanstack/react-table";

interface DataTablePaginationProps<TData> {
    table: Table<TData>;
    pageSizeOptions?: number[];
}

export default function DataTablePagination<TData>({
   table,
   pageSizeOptions = [10, 25, 50, 100],
}: DataTablePaginationProps<TData>) {
    const { pageSize, pageIndex } = table.getState().pagination
    return (
        <TablePagination
            component="div"
            count={table.getFilteredRowModel().rows.length}
            page={pageIndex}
            rowsPerPage={pageSize}
            rowsPerPageOptions={pageSizeOptions}
            onPageChange={(_, page) => {
                table.setPageIndex(page);
            }}
            onRowsPerPageChange={(event) => {
                table.setPageSize(Number(event.target.value));
                table.setPageIndex(0);
            }}
        />
    )
}