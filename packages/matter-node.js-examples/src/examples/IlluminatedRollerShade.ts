/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Include this first to auto-register Crypto, Network and Time Node.js implementations
import "@project-chip/matter-node.js";

import { GoToLiftPercentageRequest, WindowCoveringServer } from "@project-chip/matter.js/behaviors/window-covering";
import { OnOffLightDevice, OnOffLightRequirements } from "@project-chip/matter.js/devices/OnOffLightDevice";
import { WindowCoveringDevice } from "@project-chip/matter.js/devices/WindowCoveringDevice";
import { ServerNode } from "@project-chip/matter.js/node";

/**
 * This example demonstrates implementation of a "composed" device comprising multiple sub-devices
 *
 * Our example device, the Excelsior 1000 EZ-Nite™, is a roller shade with an illuminated valance.
 */

const LiftingWindowCoveringServer = WindowCoveringServer.with("Lift", "AbsolutePosition", "PositionAwareLift");

/**
 * Implementation of the Matter WindowCovering cluster for the shade motor.
 *
 * TODO - some of this should probably move to WindowCoveringServer
 */
class RollerShade extends LiftingWindowCoveringServer {
    get currentPos() {
        return this.state.currentPositionLiftPercent100ths ?? 0;
    }

    get targetPos() {
        return this.state.targetPositionLiftPercent100ths ?? 0;
    }

    set targetPos(position: number) {
        this.state.targetPositionLiftPercent100ths = position ?? 0;
    }

    override async initialize() {
        this.reactTo(this.events.targetPositionLiftPercent100ths$Changed, this.writeTargetToMotor, { offline: true });

        await this.readTargetFromMotor();
        if (this.targetPos === null) {
            this.targetPos = this.currentPos;
        }
    }

    override upOrOpen() {
        // 0 = 0%, fully open
        this.targetPos = 0;
    }

    override downOrClose() {
        // 10000 = 100%, fully closed
        this.targetPos = 10000;
    }

    override stopMotion() {
        this.targetPos = this.currentPos;
    }

    override goToLiftPercentage(this: RollerShade, request: GoToLiftPercentageRequest) {
        this.targetPos = request.liftPercent100thsValue;
    }

    protected async writeTargetToMotor() {
        // For this contrived example we just log the target position and don't actually animate our fake roller shade
        console.log("Window covering target position is now", `${this.targetPos / 100}%`);
    }

    protected async readTargetFromMotor() {
        // Our fake shade is stuck open
        this.state.currentPositionLiftPercent100ths = 0;
    }

    protected set currentPos(value: number) {
        this.state.currentPositionLiftPercent100ths = value;
    }
}

/**
 * Implementation of the OnOff cluster for our valance light.
 */
class ValanceLight extends OnOffLightRequirements.OnOffServer {
    override initialize() {
        this.reactTo(this.events.onOff$Changed, this.#stateChanged);
    }

    #stateChanged(value: boolean) {
        console.log(`Valance is now ${value ? "illuminated" : "dark"}`);
    }
}

/**
 * Our Matter node.
 */
const node = new ServerNode({
    id: "excelsior1000",

    productDescription: {},

    commissioning: {
        passcode: 20202021,
        discriminator: 3840,
    },

    basicInformation: {
        vendorName: "Acme Corporation",
        productName: "Excelsior 1000 EZ-Nite™",
        vendorId: 0xfff1,
        productId: 0x8000,
        serialNumber: "1234-12345-123",
    },

    parts: [
        {
            type: WindowCoveringDevice.with(RollerShade),
            id: "shade",
        },

        {
            type: OnOffLightDevice.with(ValanceLight),
            id: "valance",
        },
    ],
});

await node.run();
