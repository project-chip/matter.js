import { Endpoint } from "@project-chip/matter.js/endpoint";
import { Time, Timer } from "@project-chip/matter.js/time";
import { SimulateActionSwitchLongPressCommand, SimulateActionSwitchMultiPressCommand } from "../NamedPipeCommands.js";

const NEUTRAL_SWITCH_POSITION = 0;

export class SwitchSimulator {
    #switchActions = new Array<{ position: number; delay?: number }>();
    #endpoint: Endpoint;
    #executionDelayTimer?: Timer;

    constructor(endpoint: Endpoint) {
        this.#endpoint = endpoint;
    }

    executeActions(actions: { position: number; delay?: number }[]) {
        if (actions.length !== 0 || this.#executionDelayTimer !== undefined) {
            throw new Error("Still unprocessed actions existing ... Invalid state!");
        }
        this.#switchActions = actions;
        this.#processNextAction();
    }

    #processNextAction() {
        if (this.#switchActions.length === 0) {
            this.#executionDelayTimer = undefined;
            return;
        }

        const action = this.#switchActions.shift();
        if (action) {
            this.#endpoint
                .set({
                    switch: {
                        rawPosition: action.position,
                    },
                })
                .then(
                    () => {
                        if (action.delay !== undefined && action.delay > 0) {
                            this.#executionDelayTimer = Time.getTimer("Switch action step", action.delay, () =>
                                this.#processNextAction(),
                            ).start();
                        }
                    },
                    error => console.error("Error setting switch state:", error),
                );
        }
    }

    /**
     * Named pipe handler for simulated long press on an action switch.
     *
     * Usage example:
     *   echo '{"Name": "SimulateActionSwitchLongPress", "EndpointId": 3, "ButtonId": 1, "LongPressDelayMillis": 800,
     * "LongPressDurationMillis": 1000}' > /tmp/chip_all_clusters_fifo_1146610
     *
     * JSON Arguments:
     *   - "Name": Must be "SimulateActionSwitchLongPress"
     *   - "EndpointId": number of endpoint having a switch cluster
     *   - "ButtonId": switch position in the switch cluster for "down" button (not idle)
     *   - "LongPressDelayMillis": Time in milliseconds before the LongPress
     *   - "LongPressDurationMillis": Total duration in milliseconds from start of the press to LongRelease
     */
    static simulateActionSwitchLongPress(endpoint: Endpoint, command: SimulateActionSwitchLongPressCommand) {
        const simulator = new SwitchSimulator(endpoint);

        simulator.executeActions([
            { position: command.ButtonId, delay: command.LongPressDurationMillis }, // LongPressDelayMillis is ignored because just used to send the LogPress event?
            { position: NEUTRAL_SWITCH_POSITION },
        ]);
    }

    /**
     * Named pipe handler for simulated multi-press on an action switch.
     *
     * Usage example:
     *   echo '{"Name": "SimulateActionSwitchMultiPress", "EndpointId": 3, "ButtonId": 1, "MultiPressPressedTimeMillis": 100,
     * "MultiPressReleasedTimeMillis": 350, "MultiPressNumPresses": 2}' > /tmp/chip_all_clusters_fifo_1146610
     *
     * JSON Arguments:
     *   - "Name": Must be "SimulateActionSwitchMultiPress"
     *   - "EndpointId": number of endpoint having a switch cluster
     *   - "ButtonId": switch position in the switch cluster for "down" button (not idle)
     *   - "MultiPressPressedTimeMillis": Pressed time in milliseconds for each press
     *   - "MultiPressReleasedTimeMillis": Released time in milliseconds after each press
     *   - "MultiPressNumPresses": Number of presses to simulate
     */
    static simulateActionSwitchMultiPress(endpoint: Endpoint, command: SimulateActionSwitchMultiPressCommand) {
        const simulator = new SwitchSimulator(endpoint);

        simulator.executeActions([
            {
                position: command.ButtonId,
                delay:
                    command.MultiPressNumPresses *
                    (command.MultiPressPressedTimeMillis + command.MultiPressReleasedTimeMillis),
            },
            { position: NEUTRAL_SWITCH_POSITION },
        ]);
    }
}
