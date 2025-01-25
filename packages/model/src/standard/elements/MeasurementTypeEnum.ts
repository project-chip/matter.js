/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const MeasurementTypeEnum = Datatype(
    { name: "MeasurementTypeEnum", type: "enum16", xref: { document: "cluster", section: "2.1.4.2" } },
    Field({ name: "Unspecified", id: 0x0, conformance: "M" }),
    Field({ name: "Voltage", id: 0x1, conformance: "M", description: "Voltage in millivolts (mV)" }),
    Field({ name: "ActiveCurrent", id: 0x2, conformance: "M", description: "Active current in milliamps (mA)" }),
    Field({ name: "ReactiveCurrent", id: 0x3, conformance: "M", description: "Reactive current in milliamps (mA)" }),
    Field({ name: "ApparentCurrent", id: 0x4, conformance: "M", description: "Apparent current in milliamps (mA)" }),
    Field({ name: "ActivePower", id: 0x5, conformance: "M", description: "Active power in milliwatts (mW)" }),
    Field({
        name: "ReactivePower", id: 0x6, conformance: "M",
        description: "Reactive power in millivolt-amps reactive (mVAR)"
    }),
    Field({ name: "ApparentPower", id: 0x7, conformance: "M", description: "Apparent power in millivolt-amps (mVA)" }),
    Field({ name: "RmsVoltage", id: 0x8, conformance: "M", description: "Root mean squared voltage in millivolts (mV)" }),
    Field({ name: "RmsCurrent", id: 0x9, conformance: "M", description: "Root mean squared current in milliamps (mA)" }),
    Field({ name: "RmsPower", id: 0xa, conformance: "M", description: "Root mean squared power in milliwatts (mW)" }),
    Field({ name: "Frequency", id: 0xb, conformance: "M", description: "AC frequency in millihertz (mHz)" }),
    Field({ name: "PowerFactor", id: 0xc, conformance: "M", description: "Power Factor ratio in+/- 1/100ths of a percent." }),
    Field({ name: "NeutralCurrent", id: 0xd, conformance: "M", description: "AC neutral current in milliamps (mA)" }),
    Field({ name: "ElectricalEnergy", id: 0xe, conformance: "M", description: "Electrical energy in milliwatt-hours (mWh)" })
);

MatterDefinition.children.push(MeasurementTypeEnum);
