import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Drawer, {drawerClasses} from '@mui/material/Drawer';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from '@mui/material/Typography';
import {
    Bell
} from 'lucide-react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import { useTranslations } from "next-intl";
import {secondary} from "@/theme/colors";

export default function Notification() {
    const t = useTranslations("notification");
    const [openNotification, setOpenNotification] = React.useState(false);

    const toggleNotification = (newOpenNotification: boolean) => () => {
        setOpenNotification(newOpenNotification);
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <>
            <IconButton size="medium" color="secondary" onClick={toggleNotification(true)}>
                <Badge badgeContent={4} color="primary">
                    <Bell/>
                </Badge>
            </IconButton>
            <Drawer
                open={openNotification}
                onClose={toggleNotification(false)}
                anchor="right"
                sx={(theme) => ({
                    [`& .${drawerClasses.paper}`]: {
                        [theme.breakpoints.up("xs")]: {
                            width: "340px",
                        },
                        [theme.breakpoints.up("sm")]: {
                            width: "440px",
                        },
                    },
                })}
            >
                <Card>
                    <CardHeader
                        sx={(theme) => ({
                            display: "flex",
                            alignItems: "center",
                            padding: theme.spacing(2.25),
                            '& .MuiCardHeader-action': {
                                margin: 0
                            }
                        })}
                        title={t("header.notification")}
                        action={
                            <Link href="#"
                                underline="hover"
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: "400"
                                }}
                            >{t("header.make_all_as_read")}</Link>
                        }
                    />
                    <Divider/>
                    <Stack
                        flexDirection="row"
                        sx={(theme) => ({
                            alignItems: "center",
                            paddingTop: theme.spacing(1.5),
                            paddingBottom: theme.spacing(1.5),
                            paddingLeft: theme.spacing(2.5),
                            paddingRight: theme.spacing(2.5),
                            gap: theme.spacing(1.25),
                            borderBottomWidth: 1,
                            borderBottomStyle: "solid",
                            borderBottomColor: theme.palette.divider
                        })}
                    >
                        <Chip
                            label={
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            lineHeight: 1.5
                                        }}
                                    >{t("subheader.all")}</Typography>
                                    <Avatar
                                        sx={(theme) => ({
                                            width: "20px",
                                            height: "20px",
                                            marginLeft: theme.spacing(0.5),
                                            fontSize: "12px",
                                            color: (theme.vars || theme).palette.secondary.lightest,
                                            backgroundColor: (theme.vars || theme).palette.primary.main,
                                        })}
                                    >11</Avatar>
                                </Box>
                            }
                            size="medium"
                            color="primary"
                            onClick={handleClick}
                        />
                        <Chip
                            label={t("subheader.unread")}
                            size="medium"
                            color="secondary"
                            variant="outlined"
                            onClick={handleClick}
                        />
                    </Stack>
                    <Box>
                        <SimpleBar className="mui-1i5n482">
                            <List>
                                <ListItemButton
                                    sx={(theme) => ({
                                        borderBottom: `1px solid ${theme.palette.divider}`,
                                        [theme.breakpoints.up("xs")]: {
                                            padding: theme.spacing(1.25),
                                        },
                                        [theme.breakpoints.up("sm")]: {
                                            padding: theme.spacing(2.25),
                                        },
                                    })}
                                >
                                    <ListItemAvatar>
                                        <Avatar>A</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{
                                            marginTop: 0,
                                            marginBottom: 0
                                        }}
                                    >
                                        <Typography component="h4" variant="subtitle2"
                                            sx={(theme) => ({
                                                display: "flex",
                                                alignItems: "center",
                                                flexDirection: "row",
                                                fontWeight: 600,
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                gap: theme.spacing(0.25),
                                                [theme.breakpoints.up("xs")]: {
                                                    maxWidth: "254px"
                                                },
                                                [theme.breakpoints.up("sm")]: {
                                                    maxWidth: "320px"
                                                },
                                            })}
                                        >
                                            Annete Black
                                            <Typography component="p" variant="body1"
                                                sx={{
                                                    fontSize: "12px",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                }}
                                            >completed Create new component</Typography>
                                        </Typography>
                                        <Stack
                                            flexDirection="column"
                                            component="span"
                                            sx={(theme) => ({
                                                gap: theme.spacing(1.5)
                                            })}
                                        >
                                            <Typography
                                                component="span"
                                                variant="caption"
                                                sx={(theme) => ({
                                                    display: "flex",
                                                    alignItems: "center",
                                                    flexDirection: "row",
                                                    fontSize: "12px",
                                                    color: theme.palette.text.secondary
                                                })}
                                            >2d ago</Typography>
                                        </Stack>
                                    </ListItemText>
                                    <Box
                                        sx={(theme) => ({
                                            width: "6px",
                                            height: "6px",
                                            borderRadius: "50%",
                                            backgroundColor: theme.palette.primary.main
                                        })}
                                    ></Box>
                                </ListItemButton>

                            </List>
                        </SimpleBar>
                    </Box>
                    <Stack
                        sx={(theme) => ({
                            paddingTop: theme.spacing(1.25),
                            paddingBottom: theme.spacing(1.25),
                            borderTopWidth: 1,
                            borderTopStyle: "solid",
                            borderTopColor: theme.palette.divider,
                            boxShadow: "none"
                        })}
                    >
                        <Button size="medium" color="primary" variant="text" disableElevation>{t("footer.view_all_notifications")}</Button>
                    </Stack>
                </Card>
            </Drawer>
        </>
    )
}