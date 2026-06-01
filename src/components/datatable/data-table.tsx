import React from "react";

import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    ColumnDef,
    flexRender,
} from '@tanstack/react-table'

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import OutlinedInput from '@mui/material/OutlinedInput';
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import DataTablePagination from "@/components/datatable/data-table-pagination";

import { useTranslations } from "next-intl";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export default function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const t = useTranslations("datatable");
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })
    return (
        <Paper
            elevation={0}
            sx={(theme) => ({
                marginBottom: theme.spacing(3),
                border: `1px solid ${theme.palette.divider}`
            })}
        >
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                sx={(theme) => ({
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: theme.spacing(2),
                    gap: theme.spacing(2)
                })}
            >
                <OutlinedInput placeholder="Search 100 records..."/>
                <Stack>


                </Stack>
            </Stack>
            <Stack>
                <TableContainer>
                    <Table>
                        <TableHead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableCell key={header.id} colSpan={header.colSpan}>
                                                {header.isPlaceholder ? null : (
                                                    <>
                                                        {flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext(),
                                                        )}
                                                        {header.column.getCanFilter() ? (
                                                            <Box>

                                                            </Box>
                                                        ) : null}
                                                    </>
                                                )}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHead>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => {
                                    return (
                                        <TableRow key={row.id}>
                                            {row.getVisibleCells().map((cell) => {
                                                return (
                                                    <TableCell key={cell.id}>
                                                        {flexRender(
                                                            cell.column.columnDef.cell,
                                                            cell.getContext(),
                                                        )}
                                                    </TableCell>
                                                )
                                            })}
                                        </TableRow>
                                    )
                                })
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={table.getAllColumns().length}
                                        sx={(theme) => ({
                                            width: "100%",
                                            color: (theme.vars || theme).palette.text.secondary,
                                            textAlign: "center"
                                        })}
                                    >
                                        {t("emptyRecords")}
                                    </TableCell>
                                </TableRow>
                            )}

                        </TableBody>
                    </Table>
                </TableContainer>
                <Divider/>
                <DataTablePagination table={table}/>
            </Stack>
        </Paper>
    )
}