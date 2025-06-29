/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * This is simple command line application that demonstrates device control using the @matter/node API.
 *
 * This API is a work in progress and is not yet fully implemented.
 */

import { ServerNode } from "@matter/main";
import { OnOffClient } from "@matter/main/behaviors/on-off";

// Create the controller
const controller = await ServerNode.create();

const [, , command, ...args] = process.argv.slice(2);

switch (command) {
    case "commission":
        // Validation
        if (controller.nodes.get("device")) {
            die("There is already a device commissioned");
        }

        // Process arguments
        const passcode = Number.parseInt(args[0]);
        const discriminator = Number.parseInt(args[1]);
        if (process.argv.length !== 4 || Number.isNaN(passcode) || Number.isNaN(discriminator)) {
            die(`Usage: ${process.argv[0]} commission <passcode> <discriminator>`);
        }

        // This is the actual commissioning
        await controller.nodes.commission({ id: "device", passcode, discriminator });

        break;

    case "toggle":
        {
            // Validation
            const node = controller.nodes.get("device");
            if (node === undefined) {
                die("Cannot toggle because there is no commissioned device");
            }

            // Invocation
            await node.commandsOf(OnOffClient).toggle();
        }

        break;

    case "decommission":
        {
            // Validation
            const node = controller.nodes.get("device");
            if (node === undefined) {
                die("Cannot decommission because there is no commissioned device");
            }

            // Decommission
            await node.delete();
        }
        break;

    default:
        die(
            `Unsupported command ${process.argv[1] ?? "(none)"}.  Supported commands: commission, toggle, decommission`,
        );
}

/**
 * Report command line error and exit.
 */
function die(message: string): never {
    console.log(message);
    process.exit(1);
}
