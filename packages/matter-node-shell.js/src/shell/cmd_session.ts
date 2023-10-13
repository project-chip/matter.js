/**
 * Copyright 2022 Project CHIP Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MatterNode } from "../MatterNode";

export default function commands(theNode: MatterNode) {
    return {
        command: "session",
        describe: "Manage session",
        builder: {},
        handler: async () => {
            if (!theNode.commissioningController) {
                throw new Error("CommissioningController not initialized");
            }

            const sessions = theNode.commissioningController?.getActiveSessionInformation();
            console.log(sessions);
        },
    };
}
