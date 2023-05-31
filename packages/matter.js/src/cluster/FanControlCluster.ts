import { OptionalAttribute, WritableAttribute, OptionalWritableAttribute, Attribute, Cluster } from "./Cluster.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { TlvBitmap, TlvEnum, TlvUInt8 } from "../tlv/TlvNumber.js";
import { TlvNullable } from "../tlv/TlvNullable.js";

const featureMap = {
    multiSpeed: BitFlag(0), // Bit 0: Multi-Speed
    autoMode: BitFlag(1), // Bit 1: Auto Mode
    rocking: BitFlag(2), // Bit 2: Rocking
    windEmulation: BitFlag(3), // Bit 3: Wind Emulation
};

export const enum FanMode {
    Off = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    On = 4,
    Auto = 5,
    Smart = 6
}

export const enum FanModeSequence {
    OffLowMedHigh = 0,
    OffLowHigh = 1,
    OffLowMedHighAuto = 2,
    OffLowHighAuto = 3,
    OffOnAuto = 4,
    OffOn = 5,
}

const TlvRockBitmap = TlvBitmap(TlvUInt8, {
    rockLeftRight: BitFlag(0), // Bit 0: Rock Left-Right
    rockUpDown: BitFlag(1), // Bit 1: Rock Up-Down
    rockRound: BitFlag(2), // Bit 2: Rock Round
});

const TlvWindBitmap = TlvBitmap(TlvUInt8, {
    sleepWind: BitFlag(0), // Bit 0
    naturalWind: BitFlag(1), // Bit 1
});

const commonAttributes = {
    // Current fan mode
    fanMode: WritableAttribute(0x0000, TlvEnum<FanMode>(), { default: FanMode.Off }),

    // Fan mode sequence
    fanModeSequence: WritableAttribute(0x0001, TlvEnum<FanModeSequence>(), { default: FanModeSequence.OffLowMedHighAuto }),

    // Fan percent setting
    percentSetting: WritableAttribute(0x0002, TlvNullable(TlvUInt8), { default: 0 }),

    // Fan percent current
    percentCurrent: Attribute(0x0003, TlvUInt8, { default: 0 }),

    // Maximum fan speed
    speedMax: OptionalAttribute(0x0004, TlvUInt8.bound({ min: 1, max: 100 }), { default: 100 }),

    // Fan speed setting
    speedSetting: OptionalWritableAttribute(0x0005, TlvNullable(TlvUInt8.bound({ min: 1, max: 100 })), { default: 0 }),

    // Fan speed current
    speedCurrent: OptionalAttribute(0x0006, TlvUInt8.bound({ min: 1, max: 100 }), { default: 0 }),

    // Support for rocking feature
    rockSupport: OptionalAttribute(0x0007, TlvRockBitmap, { default: { rockLeftRight: true, rockUpDown: true, rockRound: true } }),

    // Rocking setting
    rockSetting: OptionalWritableAttribute(0x0008, TlvRockBitmap, { default: { rockLeftRight: false, rockUpDown: false, rockRound: false } }),

    // Support for wind feature
    windSupport: OptionalAttribute(0x0009, TlvWindBitmap, { default: { sleepWind: true, naturalWind: true } }),

    // Wind setting
    windSetting: OptionalWritableAttribute(0x000A, TlvWindBitmap, { default: { sleepWind: false, naturalWind: false } }),

};

export const FanControlCluster = Cluster({
    id: 0x0202, // Fan Control cluster identifier
    name: "Fan Control",
    revision: 2,
    features: featureMap,
    supportedFeatures: {
        autoMode: true,
        multiSpeed: true,
        rocking: true,
        windEmulation: true
    },
    attributes: {
        ...commonAttributes,
    },
});