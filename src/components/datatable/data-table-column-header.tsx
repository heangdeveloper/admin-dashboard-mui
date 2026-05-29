import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import type { Column } from "@tanstack/react-table";

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';

interface DataTableColumnHeaderProps<TData, TValue> {
    column: Column<TData, TValue>;
    label: string;
}

export default function DataTableColumnHeader<TData, TValue>({
     column,
     label,
}: DataTableColumnHeaderProps<TData, TValue>) {

    return (
        <Stack
            flexDirection="row"
            sx={(theme) => ({
                alignItems: "center",
                gap: theme.spacing()
            })}
        >
            {label}
            <Box>
                <Stack>
                    {column.getCanSort() &&
                        (column.getIsSorted() === "desc" ? (
                            <ArrowDropDownOutlinedIcon/>
                        ) : column.getIsSorted() === "asc" ? (
                            <ArrowDropUpOutlinedIcon/>
                        ) : (
                        ""
                    ))}
                </Stack>
            </Box>
        </Stack>
    )
}