"use client";

import * as React from 'react';
import Container from '@mui/material/Container';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import DataTable from "@/components/datatable/data-table";
import DataTableColumnHeader from "@/components/datatable/data-table-column-header";

import {
    Column,
    ColumnDef
} from "@tanstack/react-table";

import { useTranslations } from "next-intl";

interface Customer {
    id: number;
    name: string;
    branch: string;
    package: string,
    qty: string,
    price: string;
}

export default function Page() {
    const t = useTranslations("walkinPage");
    const columns = React.useMemo<ColumnDef<Customer>[]>(
        () => [
            {
                id: "name",
                accessorKey: "name",
                header: ({ column } : { column: Column<Customer, unknown> }) => (
                    <DataTableColumnHeader column={column} label={t("table.header.name")}/>
                ),
                cell: ({ cell }) => <div className="w-full py-4">{cell.getValue<Customer["name"]>()}</div>,
            },
            {
                id: "branch",
                accessorKey: "branch",
                header: ({ column } : { column: Column<Customer, unknown> }) => (
                    <DataTableColumnHeader column={column} label={t("table.header.branch")}/>
                ),
                cell: ({ cell }) => <div className="w-full py-4">{cell.getValue<Customer["branch"]>()}</div>,
            },
            {
                id: "package",
                accessorKey: "package",
                header: ({ column } : { column: Column<Customer, unknown> }) => (
                    <DataTableColumnHeader column={column} label={t("table.header.package")}/>
                ),
                cell: ({ cell }) => <div className="w-full py-4">{cell.getValue<Customer["package"]>()}</div>,
            },
            {
                id: "qty",
                accessorKey: "qty",
                header: ({ column } : { column: Column<Customer, unknown> }) => (
                    <DataTableColumnHeader column={column} label={t("table.header.quantity")}/>
                ),
                cell: ({ cell }) => <div className="w-full py-4">{cell.getValue<Customer["qty"]>()}</div>,
            },
            {
                id: "price",
                accessorKey: "price",
                header: ({ column } : { column: Column<Customer, unknown> }) => (
                    <DataTableColumnHeader column={column} label={t("table.header.price")}/>
                ),
                cell: ({ cell }) => <div className="w-full py-4">{cell.getValue<Customer["price"]>()}</div>,
            },
            {
                id: "action",
                header: ({ column } : { column: Column<Customer, unknown> }) => (
                    <DataTableColumnHeader column={column} label={t("table.header.action")}/>
                ),
                cell: ({ cell }) => {
                    return (
                        <Stack>

                        </Stack>
                    )
                },
            },
        ],
        [],
    );

    const data: Customer[] = [];
    return (
        <Container
            maxWidth="xl"
            sx={{
                paddingX: 0
            }}
        >
            <Paper
                elevation={0}
                sx={(theme) => ({
                    marginBottom: theme.spacing(3)
                })}
            >

            </Paper>
            <DataTable columns={columns} data={data}/>
        </Container>
    )
}