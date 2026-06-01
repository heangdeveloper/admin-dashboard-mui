"use client";

import * as React from "react";

import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from "@mui/material/Typography";

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import type { Column, Table } from "@tanstack/react-table";

interface DataTableToolbarProps<TData> extends React.ComponentProps<"div"> {
    table: Table<TData>;
}

export function DataTableToolbar<TData>({
    table
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0;

    const columns = React.useMemo(
        () => table.getAllColumns().filter((column) => column.getCanFilter()),
        [table],
    );

    const onReset = React.useCallback(() => {
        table.resetColumnFilters();
    }, [table]);
    return (
        <Stack
            role="toolbar"
            direction={{ xs: 'column', sm: 'row' }}
            sx={(theme) => ({
                justifyContent: "space-between",
                alignItems: "center",
                padding: theme.spacing(2),
                gap: theme.spacing(2)
            })}
        >
            {columns.map((column) => (
                <DataTableToolbarFilter key={column.id} column={column}/>
            ))}
            {isFiltered && (
                <Button
                    variant="contained"
                    size="medium"
                    color="primary"
                    disableElevation
                    startIcon={<CloseOutlinedIcon />}
                    onClick={onReset}
                >
                    <Typography variant="body1" component="span">Reset</Typography>
                </Button>
            )}
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                sx={(theme) => ({
                    alignItems: "center",
                    [theme.breakpoints.up("sm")]: {
                        width: "auto"
                    },
                    [theme.breakpoints.up("xs")]: {
                        width: "100%"
                    },
                })}
            >
                <Button
                    variant="contained"
                    size="medium"
                    color="primary"
                    disableElevation
                    startIcon={<AddOutlinedIcon />}
                >
                    <Typography variant="body1" component="span">Add Customer</Typography>
                </Button>
            </Stack>
        </Stack>
    )
}

interface DataTableToolbarFilterProps<TData> {
    column: Column<TData>;
}

function DataTableToolbarFilter<TData>({
    column
}: DataTableToolbarFilterProps<TData>) {
    {
        const columnMeta = column.columnDef.meta;
        const onFilterRender = React.useCallback(() => {
            if (!columnMeta?.variant) return null;

            switch (columnMeta.variant) {
                case "text":
                    return (
                        <OutlinedInput
                            placeholder={columnMeta.placeholder ?? columnMeta.label}
                            value={(column.getFilterValue() as string) ?? ""}
                            onChange={(event) => column.setFilterValue(event.target.value)}
                        />
                    );
                default:
                    return null;
            }
        }, [column, columnMeta])

        return onFilterRender();
    }
}