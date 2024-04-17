/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimeFormatLocalizationServer } from "../../../../src/behavior/definitions/time-format-localization/TimeFormatLocalizationServer.js";
import { ConstraintError } from "../../../../src/behavior/errors.js";
import { TimeFormatLocalization } from "../../../../src/cluster/definitions/TimeFormatLocalizationCluster.js";
import { ServerNode } from "../../../../src/node/ServerNode.js";
import { MockServerNode } from "../../../node/mock-server-node.js";

function createEndpoint() {
    return MockServerNode.create(
        ServerNode.RootEndpoint.with(
            TimeFormatLocalizationServer.with("CalendarFormat").set({
                supportedCalendarTypes: [
                    TimeFormatLocalization.CalendarType.Buddhist,
                    TimeFormatLocalization.CalendarType.Chinese,
                    TimeFormatLocalization.CalendarType.Coptic,
                ],
            }),
        ),
    );
}

describe("TimeFormatLocalizationServer", () => {
    it("accepts valid date formats", async () => {
        const endpoint = await createEndpoint();
        await endpoint.act(agent => {
            agent.timeFormatLocalization.state.activeCalendarType = TimeFormatLocalization.CalendarType.Chinese;
        });
    });

    it("rejects invalid date formats", async () => {
        const endpoint = await createEndpoint();
        expect(() =>
            endpoint.act(agent => {
                agent.timeFormatLocalization.state.activeCalendarType = TimeFormatLocalization.CalendarType.Gregorian;
            }),
        ).throws(
            ConstraintError,
            'Validating node0.timeFormatLocalization.state: Constraint "in supportedCalendarTypes": Value 4 is not one of the values allowed by "in" constraint (135)',
        );
    });
});
