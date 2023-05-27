import {
    OptionalAttribute,
    OptionalWritableAttribute,
    Attribute,
    Cluster,
    Command,
    TlvNoResponse
  } from "./Cluster.js";
  import { BitFlag } from "../schema/BitmapSchema.js";
  import {
    TlvEnum,
    TlvUInt16,
    TlvUInt8,
    TlvInt16,
    TlvInt8
  } from "../tlv/TlvNumber.js";
  
  import { TlvNullable } from "../tlv/TlvNullable.js";
  import { TlvField, TlvObject } from "../tlv/TlvObject.js";
  
  const features = {
    heating: BitFlag(0),
    cooling: BitFlag(1),
    occupancySensing: BitFlag(2),
    schedule: BitFlag(3),
    setback: BitFlag(4),
    auto: BitFlag(5)
  };

  export const enum ControlSequenceOfOperation {    
    CoolingOnly = 0,
    CoolingWithReheat = 1,
    HeatingOnly = 2,
    HeatingWithReheat = 3,
    CoolingAndHeating4Pipes = 4,
    CoolingAndHeating4PipesWithReheat = 5,
  };
  
  export const enum ThermostatSystemMode {
    Off = 0,
    Auto = 1,
    Cool = 3,
    Heat = 4,
    EmergencyHeat = 5,
    Precooling = 6,
    FanOnly = 7,
    Dry = 8,
    Sleep = 9,
  };

  export const enum SetpointMode {
    Heat = 0,
    Cool = 1,
    Both = 2,
  }
  
  export const enum ThermostatRunningMode {
    Off = ThermostatSystemMode.Off,
    Cool = ThermostatSystemMode.Cool,
    Heat = ThermostatSystemMode.Heat,
  };

  const commonAttributes = {
    /** Current temperature of this device. */
    localTemperature: Attribute(0x0000, TlvInt16, { default: 2500 }),
  
    /** Minimum heat setpoint limit. */
    minHeatSetpointLimit: OptionalAttribute(0x0003, TlvInt16.bound({ max: 3500, min: 700 }), { default: 700 }),
  
    /** Maximum heat setpoint limit. */
    maxHeatSetpointLimit: OptionalAttribute(0x0004, TlvInt16.bound({ max: 3500, min: 700 }), { default: 3000 }),
  
    /** Minimum cool setpoint limit. */
    minCoolSetpointLimit: OptionalAttribute(0x0005, TlvInt16.bound({ max: 3000, min: 1600 }), { default: 1600 }),
  
    /** Maximum cool setpoint limit. */
    maxCoolSetpointLimit: OptionalAttribute(0x0006, TlvInt16.bound({ max: 3000, min: 1600 }), { default: 3000 }),

    /** Current temperature in Celsius. */
    occupiedCoolingSetpoint: OptionalWritableAttribute(0x0011, TlvInt16, { default: 2000 }),
  
    /** Current temperature in Celsius. */
    occupiedHeatingSetpoint: OptionalWritableAttribute(0x0012, TlvInt16, { default: 2600 }),

    /** minimum setpoint deadband */
    minSetpointDeadBand: OptionalAttribute(0x0019, TlvUInt8, { default: 1 }),

    /** control sequence of operation */
    controlSequenceOfOperation: OptionalAttribute(0x001b, TlvEnum<ControlSequenceOfOperation>(), { default: ControlSequenceOfOperation.CoolingAndHeating4Pipes }),

    /** Indicates the system mode of the thermostat. */
    systemMode: OptionalWritableAttribute(0x001c, TlvEnum<ThermostatSystemMode>(), { default: ThermostatSystemMode.Off }),    

    /** Indicates the running mode of the thermostat. */
    runningMode: Attribute(0x001e, TlvEnum<ThermostatRunningMode>(), { default: ThermostatRunningMode.Off }),    
    
  };

  const SetpointRaiseLowerRequest = TlvObject({
    /** Mode to raise or lower the setpoint. */
    mode: TlvField(0x00, TlvEnum<SetpointMode>()),

    /** Amount to raise or lower the setpoint. */
    amount: TlvField(0x01, TlvInt8),
});

  const commands = {    
    setpointRaiseLower: Command(0x00, SetpointRaiseLowerRequest, 0x00, TlvNoResponse),
  };
  
  export const ThermostatCluster = Cluster({
    id: 0x0201, // thermostat cluster identifier
    name: "Thermostat",
    revision: 4,
    features: features,
    supportedFeatures: { heating: true, cooling: true, occupancySensing: false, schedule: false, setback: false, auto: true },
    attributes: {
      ...commonAttributes,
    },
    commands: commands,
  });