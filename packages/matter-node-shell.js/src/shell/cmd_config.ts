/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@project-chip/matter-node.js/log";
import { Argv } from "yargs";
import { MatterNode } from "../MatterNode";
import { setLogLevel } from "../app";

export default function commands(theNode: MatterNode) {
    return {
        command: "config",
        describe: "Manage global configuration",
        builder: (yargs: Argv) =>
            yargs
                // LogLevel
                .command("loglevel", "Manage LogLevel", yargs => {
                    return yargs
                        .command(
                            "* [action]",
                            "get/delete log level",
                            yargs => {
                                return yargs.positional("action", {
                                    describe: "get/delete",
                                    choices: ["get", "delete"] as const,
                                    default: "get",
                                    type: "string",
                                });
                            },
                            async argv => doLogLevel(theNode, argv),
                        )
                        .command(
                            "set <value>",
                            "set log level",
                            yargs => {
                                return yargs.positional("value", {
                                    describe: "log level to set",
                                    type: "string",
                                    choices: ["fatal", "error", "warn", "info", "debug"] as const,
                                    demandOption: true,
                                });
                            },
                            async argv => doLogLevel(theNode, { action: "set", ...argv }),
                        );
                })

                // BLE HCI number (Linux)
                .command("ble-hci", "Manage BLE HCI ID (Linux)", yargs => {
                    return yargs
                        .command(
                            "* [action]",
                            "get/delete BLE HCI ID of the device (Linux only)",
                            yargs => {
                                return yargs.positional("action", {
                                    describe: "get/delete",
                                    choices: ["get", "delete"] as const,
                                    default: "get",
                                    type: "string",
                                });
                            },
                            async argv => doBleHci(theNode, argv),
                        )
                        .command(
                            "set <value>",
                            "set BLE HCI ID of the device (Linux only)",
                            yargs => {
                                return yargs.positional("value", {
                                    describe: "HCI ID to set",
                                    type: "number",
                                    demandOption: true,
                                });
                            },
                            async argv => doBleHci(theNode, { action: "set", ...argv }),
                        );
                })

                // Commissioning Wi-Fi credentials
                .command("wifi-credentials", "Manage Wi-Fi credentials used in commissioning process", yargs => {
                    return yargs
                        .command(
                            "* [action]",
                            "get/set Wi-Fi credentials",
                            yargs => {
                                return yargs.positional("action", {
                                    describe: "get/delete",
                                    choices: ["get", "delete"] as const,
                                    default: "get",
                                    type: "string",
                                });
                            },
                            async argv => doWifiCredentials(theNode, argv),
                        )
                        .command(
                            "set <wifi-ssid> <wifi-password>",
                            "set Wi-Fi credentials",
                            yargs => {
                                return yargs
                                    .positional("wifi-ssid", {
                                        describe: "SSID of the Wifi network to commission",
                                        type: "string",
                                        demandOption: true,
                                    })
                                    .positional("wifi-password", {
                                        describe: "Password of the Wifi network to commission",
                                        type: "string",
                                        demandOption: true,
                                    });
                            },
                            async argv => doWifiCredentials(theNode, { action: "set", ...argv }),
                        );
                })

                // Commissioning Thread credentials
                .command("thread-credentials", "Manage Thread credentials used in commissioning process", yargs => {
                    return yargs
                        .command(
                            "* [action]",
                            "get/set thread network credentials",
                            yargs => {
                                return yargs.positional("action", {
                                    describe: "get/delete",
                                    choices: ["get", "delete"] as const,
                                    default: "get",
                                    type: "string",
                                });
                            },
                            async argv => doThreadCredentials(theNode, argv),
                        )
                        .command(
                            "set <thread-name> <thread-operational-dataset>",
                            "set thread networkcredentials",
                            yargs => {
                                return yargs
                                    .positional("thread-name", {
                                        describe: "Thread network name to commission",
                                        type: "string",
                                        demandOption: true,
                                    })
                                    .positional("thread-operational-dataset", {
                                        describe: "Thread network operational dataset to commission",
                                        type: "string",
                                        demandOption: true,
                                    });
                            },
                            async argv => doThreadCredentials(theNode, { action: "set", ...argv }),
                        );
                }),
        handler: async (argv: any) => {
            argv.unhandled = true;
        },
    };
}

async function doLogLevel(
    theNode: MatterNode,
    args: {
        action: string;
        value?: string;
    },
) {
    const { action, value } = args;
    switch (action) {
        case "get":
            console.log(`Current Loglevel: ${await theNode.Store.get<string>("LogLevel", "info")}`);
            break;
        case "set":
            if (value === undefined) {
                console.log(`Can not change Loglevel: New Loglevel value not provided`);
                return;
            }
            await theNode.Store.set("LogLevel", value);
            console.log(`New Loglevel:" ${value}"`);
            setLogLevel(value);
            break;
        case "delete":
            await theNode.Store.delete("LogLevel");
            console.log(`Loglevel Reset to "info"`);
            setLogLevel("info");
            break;
    }
}

async function doBleHci(
    theNode: MatterNode,
    args: {
        action: string;
        value?: number;
    },
) {
    const { action, value } = args;
    switch (action) {
        case "get":
            console.log(`Current BLE HCI ID: ${await theNode.Store.get<number>("BleHciId", 0)}`);
            break;
        case "set":
            if (value === undefined) {
                console.log(`Can not change HCI ID: New HCI ID value not provided`);
            }
            await theNode.Store.set("BleHciId", value);
            console.log(`New HCI ID:" ${value}". Please restart the shell for teh changes to take effect.`);
            break;
        case "delete":
            await theNode.Store.delete("BleHciId");
            console.log(`BLE HCI ID reset to default (0). Please restart the shell for teh changes to take effect.`);
            break;
    }
}

async function doWifiCredentials(
    theNode: MatterNode,
    args: {
        action: string;
        wifiSsid?: string;
        wifiPassword?: string;
    },
) {
    const { action, wifiSsid, wifiPassword } = args;
    switch (action) {
        case "get":
            console.log(
                `Current Wifi-Credentials: SSID="${await theNode.Store.get<string>(
                    "WiFiSsid",
                    "-",
                )}, Password="${Logger.maskString(await theNode.Store.get<string>("WiFiPassword", ""))}"`,
            );
            break;
        case "set":
            if (wifiSsid === undefined || wifiPassword === undefined) {
                console.log(`Can not change Wi-Fi credentials: New values not provided`);
            }
            await theNode.Store.set("WiFiSsid", wifiSsid);
            await theNode.Store.set("WiFiPassword", wifiPassword);
            console.log(
                `New Wifi-Credentials: SSID="${await theNode.Store.get<string>(
                    "WiFiSsid",
                    "-",
                )}, Password="${Logger.maskString(await theNode.Store.get<string>("WiFiPassword"))}"`,
            );
            break;
        case "delete":
            await theNode.Store.delete("WiFiSsid");
            await theNode.Store.delete("WiFiPassword");
            console.log(`Wi-Fi credentials were deleted`);
    }
}

async function doThreadCredentials(
    theNode: MatterNode,
    args: {
        action: string;
        threadName?: string;
        threadOperationalDataset?: string;
    },
) {
    const { action, threadName, threadOperationalDataset } = args;
    switch (action) {
        case "get":
            console.log(
                `Current Thread network credentials: name="${await theNode.Store.get<string>(
                    "ThreadName",
                    "-",
                )}, Operational-Dataset="${Logger.maskString(
                    await theNode.Store.get<string>("ThreadOperationalDataset", ""),
                )}"`,
            );
            break;
        case "set":
            if (threadName === undefined || threadOperationalDataset === undefined) {
                console.log(`Can not change Thread network credentials: New values not provided`);
                return;
            }
            await theNode.Store.set("ThreadName", threadName);
            await theNode.Store.set("ThreadOperationalDataset", threadOperationalDataset);
            console.log(
                `New Wifi-Credentials: SSID="${await theNode.Store.get<string>(
                    "ThreadName",
                    "-",
                )}, OperationalDataset="${Logger.maskString(
                    await theNode.Store.get<string>("ThreadOperationalDataset"),
                )}"`,
            );
            break;
        case "delete":
            await theNode.Store.delete("ThreadName");
            await theNode.Store.delete("ThreadOperationalDataset");
            console.log(`Thread network credentials were deleted`);
    }
}
