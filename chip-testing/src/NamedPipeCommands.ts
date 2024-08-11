export type SimulateLongPressCommand = {
    Name: "SimulateLongPress";
    EndpointId: number;
    ButtonId: number;
    LongPressDelayMillis: number;
    LongPressDurationMillis: number;
};

export type SimulateMultiPressCommand = {
    Name: "SimulateMultiPress";
    EndpointId: number;
    ButtonId: number;
    MultiPressPressedTimeMillis: number;
    MultiPressReleasedTimeMillis: number;
    MultiPressNumPresses: number;
    FeatureMap: number;
    MultiPressMax: number;
};

export type SimulateLatchedPositionCommand = {
    Name: "SimulateLatchPosition";
    EndpointId: number;
    PositionId: number;
};

export type NamedPipeCommand = SimulateLongPressCommand | SimulateMultiPressCommand | SimulateLatchedPositionCommand;
