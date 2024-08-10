export type SimulateActionSwitchLongPressCommand = {
    Name: "SimulateActionSwitchLongPress";
    EndpointId: number;
    ButtonId: number;
    LongPressDelayMillis: number;
    LongPressDurationMillis: number;
};

export type SimulateActionSwitchMultiPressCommand = {
    Name: "SimulateActionSwitchMultiPress";
    EndpointId: number;
    ButtonId: number;
    MultiPressPressedTimeMillis: number;
    MultiPressReleasedTimeMillis: number;
    MultiPressNumPresses: number;
};

export type SimulateLatchedPositionCommand = {
    Name: "SimulateLatchPosition";
    EndpointId: number;
    PositionId: number;
};

export type NamedPipeCommand =
    | SimulateActionSwitchLongPressCommand
    | SimulateActionSwitchMultiPressCommand
    | SimulateLatchedPositionCommand;
