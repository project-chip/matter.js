/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const EnergyEvse = Cluster(
    {
        name: "EnergyEvse", id: 0x99, classification: "application", pics: "EEVSE",

        details: "Electric Vehicle Supply Equipment (EVSE) is equipment used to charge an Electric Vehicle (EV) or " +
            "Plug-In Hybrid Electric Vehicle. This cluster provides an interface to the functionality of Electric " +
            "Vehicle Supply Equipment (EVSE) management." +
            "\n" +
            "Devices targeted by this cluster include Electric Vehicle Supply Equipment (EVSE). The cluster " +
            "generically assumes a signaling protocol (J1772 in NA and IEC61851 in Europe and Asia) between the " +
            "EVSE and Electric Vehicle (EV) that utilizes a pilot signal to manage the states of the charging " +
            "process. [SAE J2847/3_202311] version and IEC61841 define Pilot signal as a modulated DC voltage on " +
            "a single wire." +
            "\n" +
            "Power Line Communication (PLC) is supported by some EVSEs (e.g. for support of ISO 15118 in Europe " +
            "and SAE J2931/4 in NA) and may enable features such as Vehicle to Grid (V2G) or Vehicle to" +
            "\n" +
            "Home (V2H) that allows for bi-directional charging/discharging of electric vehicles." +
            "\n" +
            "More modern EVSE devices may optionally support ISO 15118-20 in Europe and SAE J2836/3 for NA to " +
            "support bi-directional charging (Vehicle to Grid - V2G) and Plug and Charge capabilities." +
            "\n" +
            "This cluster definition assumes AC charging only. DC charging options may be added in future " +
            "revisions of this cluster." +
            "\n" +
            "This cluster supports a safety mechanism that may lockout remote operation until the initial " +
            "latching conditions have been met. Some of the fault conditions defined in SAE J1772, such as " +
            "Ground- Fault Circuit Interrupter (GFCI) or Charging Circuit Interrupting Device (CCID), may require " +
            "clearing by an operator by, for example, pressing a button on the equipment or breaker panel." +
            "\n" +
            "This EVSE cluster is written around support of a single EVSE. Having multiple EVSEs at home or a " +
            "business is managed by backend system and outside scope of this cluster." +
            "\n" +
            "Note that in many deployments the EVSE may be outside the home and may suffer from intermittent " +
            "network connections (e.g. a weak WiFi signal). It also allows for a charging profile to be pre- " +
            "configured, in case there is a temporary communications loss during a charging session.",

        xref: { document: "cluster", section: "9.3" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "9.3.4" } },

        Field({
            name: "PREF", conformance: "M", constraint: "0", description: "ChargingPreferences",

            details: "Since some EVSEs cannot obtain the SoC from the vehicle, some EV charging solutions allow the " +
                "consumer to specify a daily charging target (for adding energy to the EV’s battery). This feature " +
                "allows the consumer to specify how many miles or km of additional range they need for their typical " +
                "daily commute. This range requirement can be converted into a daily energy demand with a target " +
                "charging completion time." +
                "\n" +
                "The EVSE itself can use this information (or may allow a controller such as an EMS) to compute an " +
                "optimized charging schedule." +
                "\n" +
                "An EVSE device which includes a Device Energy Management device with the Device Energy Management " +
                "cluster PFR (Power Forecast Reporting) feature can use the charging preferences information to " +
                "produce its power forecast." +
                "\n" +
                "EVSE devices that support the Device Energy Management cluster’s FA feature can have their charging " +
                "profiles set by a controller device such as an EMS. For example, if the EVSE advertises a simple " +
                "power forecast which allows the EMS to adjust over a wide range of power and time durations, then " +
                "the EVSE may allow the EMS to propose a revised optimized forecast (which is the charging profile). " +
                "For example, a solar PV ESA may also share its Forecast, so enabling an EMS to adjust the EVSE " +
                "forecast to the best time to charge so that any excess solar generation is used to charge the EV." +
                "\n" +
                "See the Device Energy Management Cluster for more details.",

            xref: { document: "cluster", section: "9.3.4.1" }
        }),

        Field({
            name: "SOC", conformance: "P, O", constraint: "1", description: "SoCReporting",

            details: "Vehicles and EVSEs which support ISO 15118 may allow the vehicle to report its battery size and " +
                "state of charge. If the EVSE supports PLC it may have a vehicle connected which optionally supports " +
                "reporting of its battery size and current State of Charge (SoC)." +
                "\n" +
                "If the EVSE supports reporting of State of Charge this feature will only work if a compatible EV is " +
                "connected." +
                "\n" +
                "Note some EVSEs may use other undefined mechanisms to obtain vehicle State of Charge outside the " +
                "scope of this cluster.",

            xref: { document: "cluster", section: "9.3.4.2" }
        }),

        Field({
            name: "PNC", conformance: "P, O", constraint: "2", description: "PlugAndCharge",
            details: "If the EVSE supports PLC, it may be able to support the Plug and Charge feature. e.g. this may allow " +
                "the vehicle ID to be obtained which may allow an energy management system to track energy usage per " +
                "vehicle (e.g. to give the owner an indicative cost of charging, or for work place charging)." +
                "\n" +
                "If the EVSE supports the Plug and Charge feature, it will only work if a compatible EV is connected.",
            xref: { document: "cluster", section: "9.3.4.3" }
        }),

        Field({
            name: "RFID", conformance: "O", constraint: "3", description: "Rfid",

            details: "If the EVSE is fitted with an RFID reader, it may be possible to obtain the User or Vehicle ID from " +
                "an RFID card. This may be used to record a charging session against a specific charging account, and " +
                "may optionally be used to authorize a charging session." +
                "\n" +
                "An RFID event can be generated when a user taps an RFID card onto the RFID reader. The event must be " +
                "subscribed to by the EVSE Management cluster client. This client may use this to enable the EV to " +
                "charge or discharge. The lookup and authorization of RIFD UID is outside the scope of this cluster.",

            xref: { document: "cluster", section: "9.3.4.4" }
        }),

        Field({
            name: "V2X", conformance: "P, O", constraint: "4", description: "V2X",

            details: "If the EVSE can support bi-directional charging, it may be possible to request that the vehicle can " +
                "discharge to the home or grid." +
                "\n" +
                "The charging and discharging may be controlled by a home Energy Management System (EMS) using the " +
                "Device Energy Management cluster of the associated Device Energy Management device. For example, an " +
                "EMS may use the PA (Power Adjustment) feature to continually adjust the charge/discharge current " +
                "to/from the EV so as to minimise the energy flow from/to the grid as the demand in the home and the " +
                "solar supply to the home both fluctuate.",

            xref: { document: "cluster", section: "9.3.4.5" }
        })
    ),

    Attribute({
        name: "State", id: 0x0, type: "StateEnum", access: "R V", conformance: "M", quality: "X",

        details: "Indicates the current status of the EVSE. This higher-level status is partly derived from the " +
            "signaling protocol as communicated between the EVSE and the vehicle through the pilot signal." +
            "\n" +
            "The State attribute shall change when the EVSE detects change of condition of the EV (plugged in or " +
            "unplugged, whether the vehicle is asking for demand or not, and if it is charging or discharging)." +
            "\n" +
            "NOTE" +
            "\n" +
            "SessionEnding is not really a state but a transition. However, the transition period may take a few " +
            "seconds and is useful for some clean up purposes." +
            "\n" +
            "The Fault state is used to indicate that the FaultState attribute is not NoError." +
            "\n" +
            "A null value shall indicate that the state cannot be determined.",

        xref: { document: "cluster", section: "9.3.8.1" }
    }),

    Attribute({
        name: "SupplyState", id: 0x1, type: "SupplyStateEnum", access: "R V", conformance: "M",
        details: "Indicates whether the EV is currently allowed to charge from or discharge to the EVSE.",
        xref: { document: "cluster", section: "9.3.8.2" }
    }),

    Attribute({
        name: "FaultState", id: 0x2, type: "FaultStateEnum", access: "R V", conformance: "M",
        details: "Indicates the type of fault detected by the EVSE (internally or as detected in the pilot signal)." +
            "\n" +
            "When the SupplyState attribute is DisabledError, the FaultState attribute will be one of the values " +
            "listed in FaultStateEnum, except NoError. For all values of SupplyState other than DisabledError, " +
            "the FaultState attribute shall be NoError.",
        xref: { document: "cluster", section: "9.3.8.3" }
    }),

    Attribute({
        name: "ChargingEnabledUntil", id: 0x3, type: "epoch-s", access: "R V", conformance: "M", default: 0,
        quality: "X N",

        details: "Indicates the time, in UTC, that the EVSE will automatically stop current flow to the EV." +
            "\n" +
            "A null value indicates the EVSE is always enabled for charging." +
            "\n" +
            "A value in the past or 0x0 indicates that EVSE charging shall be disabled. The attribute is only set " +
            "via the payload of the EnableCharging command." +
            "\n" +
            "This attribute shall be persisted, for example a temporary power failure should not stop the vehicle " +
            "from being charged.",

        xref: { document: "cluster", section: "9.3.8.4" }
    }),

    Attribute({
        name: "DischargingEnabledUntil", id: 0x4, type: "epoch-s", access: "R V", conformance: "V2X",
        default: 0, quality: "X N",

        details: "Indicates the time, in UTC, that the EVSE will automatically stop current flow from the EV." +
            "\n" +
            "A null value indicates the EVSE is always enabled for discharging." +
            "\n" +
            "A value in the past or 0x0 indicates that EVSE discharging shall be disabled. The attribute is only " +
            "set via the payload of the EnableDischarging command." +
            "\n" +
            "This attribute shall be persisted, for example a temporary power failure should not stop the vehicle " +
            "from being discharged.",

        xref: { document: "cluster", section: "9.3.8.5" }
    }),

    Attribute({
        name: "CircuitCapacity", id: 0x5, type: "amperage-mA", access: "R V", conformance: "M",
        constraint: "min 0", default: 0, quality: "N",
        details: "Indicates the capacity that the circuit that the EVSE is connected to can provide. It is intended to " +
            "allow implementation of a self-managed network of EVSEs. It is assumed that the device will allow " +
            "the setting of such values by an installer.",
        xref: { document: "cluster", section: "9.3.8.6" }
    }),

    Attribute({
        name: "MinimumChargeCurrent", id: 0x6, type: "amperage-mA", access: "R V", conformance: "M",
        constraint: "min 0", default: 6000, quality: "N",
        details: "Indicates the minimum current that can be delivered by the EVSE to the EV." +
            "\n" +
            "The attribute can be set using the EnableCharging command.",
        xref: { document: "cluster", section: "9.3.8.7" }
    }),

    Attribute({
        name: "MaximumChargeCurrent", id: 0x7, type: "amperage-mA", access: "R V", conformance: "M",
        constraint: "min 0", default: 0, quality: "N",

        details: "Indicates the maximum current that can be delivered by the EVSE to the EV." +
            "\n" +
            "This shall represent the actual maximum current offered to the EV at any time. Note that the EV can " +
            "draw less current than this value. For example, the EV may be limiting its power draw based on the " +
            "operating conditions of the battery, such as temperature and state of charge." +
            "\n" +
            "The attribute can be initially set using the EnableCharging command or by adjusting the " +
            "UserMaximumChargeCurrent attribute." +
            "\n" +
            "This attribute value shall be the minimum of:" +
            "\n" +
            "  • CircuitCapacity - Electrician’s installation setting" +
            "\n" +
            "  • CableAssemblyCurrentLimit (detected by the EVSE when the cable is plugged in)" +
            "\n" +
            "  • MaximumChargeCurrent field in the EnableCharging command" +
            "\n" +
            "  • UserMaximumChargeCurrent attribute",

        xref: { document: "cluster", section: "9.3.8.8" }
    }),

    Attribute({
        name: "MaximumDischargeCurrent", id: 0x8, type: "amperage-mA", access: "R V", conformance: "V2X",
        constraint: "min 0", default: 0, quality: "N",

        details: "Indicates the maximum current that can be received by the EVSE from the EV. This attribute can be " +
            "set using the EnableDischarging command." +
            "\n" +
            "This attribute value shall be the minimum of:" +
            "\n" +
            "  • CircuitCapacity - Electrician’s installation setting" +
            "\n" +
            "  • CableAssemblyCurrentLimit (detected by the EVSE when the cable is plugged in)" +
            "\n" +
            "  • MaximumDischargeCurrent field in the EnableDischarging command",

        xref: { document: "cluster", section: "9.3.8.9" }
    }),

    Attribute({
        name: "UserMaximumChargeCurrent", id: 0x9, type: "amperage-mA", access: "RW VM", conformance: "O",
        constraint: "desc", default: 0, quality: "N",

        details: "Indicates a maximum current that can set by the consumer (e.g. via an app) as a preference to " +
            "further reduce the charging rate. This may be desirable if the home owner has a solar PV or battery " +
            "storage system which may only be able to deliver a limited amount of power. The consumer can " +
            "manually control how much they allow the EV to take." +
            "\n" +
            "This attribute value shall be limited by the EVSE to be in the range of:" +
            "\n" +
            "MinimumChargeCurrent <= UserMaximumChargeCurrent <= MaximumChargeCurrent" +
            "\n" +
            "where MinimumChargeCurrent and MaximumChargeCurrent are the values received in the EnableCharging " +
            "command." +
            "\n" +
            "Its default value SHOULD be initialized to the same as the CircuitCapacity attribute. This value " +
            "shall be persisted across reboots to ensure it does not cause charging issues during temporary power " +
            "failures.",

        xref: { document: "cluster", section: "9.3.8.10" }
    }),

    Attribute({
        name: "RandomizationDelayWindow", id: 0xa, type: "elapsed-s", access: "RW VM", conformance: "O",
        constraint: "max 86400", default: 600, quality: "N",

        details: "Indicates the size of a random window over which the EVSE will randomize the start of a charging " +
            "session. This value is in seconds." +
            "\n" +
            "This is a feature that is mandated in some markets (such as UK) where the EVSE should by default " +
            "randomize its start time within the randomization window. By default in the UK this should be 600s." +
            "\n" +
            "For example, if the RandomizationDelayWindow is 600s (i.e. 10 minutes) and if there was a cheap rate " +
            "energy starting at 00:30, then the EVSE must compute a random delay between 0-599s and add this to " +
            "its initial planned start time.",

        xref: { document: "cluster", section: "9.3.8.11" }
    }),

    Attribute({
        name: "NextChargeStartTime", id: 0x23, type: "epoch-s", access: "R V", conformance: "PREF",
        default: null, quality: "X",

        details: "Indicates the time, in UTC, when the EVSE plans to start the next scheduled charge based on the " +
            "charging preferences." +
            "\n" +
            "A null value indicates that there is no scheduled charging (for example, the EVSE Mode is set to use " +
            "Manual mode tag), or that the vehicle is not plugged in with the SupplyState indicating that " +
            "charging is enabled.",

        xref: { document: "cluster", section: "9.3.8.12" }
    }),

    Attribute({
        name: "NextChargeTargetTime", id: 0x24, type: "epoch-s", access: "R V", conformance: "PREF",
        default: null, quality: "X",

        details: "Indicates the time, in UTC, when the EVSE SHOULD complete the next scheduled charge based on the " +
            "charging preferences." +
            "\n" +
            "A null value indicates that there is no scheduled charging (for example, the EVSE Mode is set to use " +
            "Manual mode tag), or that the vehicle is not plugged in with the SupplyState indicating that " +
            "charging is enabled.",

        xref: { document: "cluster", section: "9.3.8.13" }
    }),

    Attribute({
        name: "NextChargeRequiredEnergy", id: 0x25, type: "energy-mWh", access: "R V", conformance: "PREF",
        constraint: "min 0", default: null, quality: "X",

        details: "Indicates the amount of energy that the EVSE is going to attempt to add to the vehicle in the next " +
            "charging target." +
            "\n" +
            "A null value indicates that there is no scheduled charging (for example, the EVSE Mode is set to use " +
            "Manual mode tag), or that the vehicle is not plugged in with the SupplyState indicating that " +
            "charging is enabled, or that the next ChargingTargetStruct is using the TargetSoC value to charge " +
            "the vehicle.",

        xref: { document: "cluster", section: "9.3.8.14" }
    }),

    Attribute({
        name: "NextChargeTargetSoC", id: 0x26, type: "percent", access: "R V", conformance: "PREF",
        default: null, quality: "X",

        details: "Indicates the target SoC the EVSE is going to attempt to reach when the vehicle is next charged." +
            "\n" +
            "A null value indicates that there is no scheduled charging" +
            "\n" +
            "Manual mode tag), or that the vehicle is not plugged in with the SupplyState indicating that " +
            "charging is enabled, or that the next ChargingTargetStruct is using the AddedEnergy value to charge " +
            "the vehicle." +
            "\n" +
            "If the SOC feature is not supported, only the values null and 100% are supported.",

        xref: { document: "cluster", section: "9.3.8.15" }
    }),

    Attribute(
        {
            name: "ApproximateEvEfficiency", id: 0x27, type: "uint16", access: "RW VM", conformance: "[PREF]",
            constraint: "desc", default: null, quality: "X N",

            details: "Indicates the vehicle efficiency rating for a connected vehicle." +
                "\n" +
                "This can be used to help indicate to the user approximately how many miles or km of range will be " +
                "added. It allows user interfaces to display to the user simpler terms that they can relate to " +
                "compared to kWh." +
                "\n" +
                "This is value is stored in km per kWh multiplied by a scaling factor of 1000." +
                "\n" +
                "A null value indicates that the EV efficiency is unknown and the NextChargeRequiredEnergy attribute " +
                "cannot be converted from Wh to miles or km." +
                "\n" +
                "To convert from Wh into Range:" +
                "\n" +
                "AddedRange (km) = AddedEnergy (Wh) x ApproxEVEfficiency (km/kWh x 1000) AddedRange (Miles) = " +
                "AddedEnergy (Wh) x ApproxEVEfficiency (km/kWh x 1000) x 0.6213" +
                "\n" +
                "Example:" +
                "\n" +
                "ApproxEVEfficiency (km/kWh x 1000): 4800 (i.e. 4.8km/kWh x 1000)" +
                "\n" +
                "AddedEnergy (Wh): 10,000" +
                "\n" +
                "AddedRange (km) = 10,000 x 4800 / 1,000,000 = 48 km" +
                "\n" +
                "AddedRange (Miles) = AddedEnergy (Wh) x ApproxEVEfficiency (km/kWh x 1000) x" +
                "\n" +
                "0.6213" +
                "\n" +
                "= 29.82 Miles",

            xref: { document: "cluster", section: "9.3.8.16" }
        }
    ),

    Attribute({
        name: "StateOfCharge", id: 0x30, type: "percent", access: "R V", conformance: "SOC", default: null,
        quality: "X",
        details: "Indicates the state of charge of the EV battery in steps of 1%. The values are in the 0-100%. This " +
            "attribute is only available on EVSEs which can read the state of charge from the vehicle and that " +
            "support the SOC feature. If the StateOfCharge cannot be read from the vehicle it shall be returned " +
            "with a NULL value.",
        xref: { document: "cluster", section: "9.3.8.17" }
    }),

    Attribute({
        name: "BatteryCapacity", id: 0x31, type: "energy-mWh", access: "R V", conformance: "SOC",
        constraint: "min 0", default: null, quality: "X",
        details: "Indicates the capacity of the EV battery in mWh. This value is always positive.",
        xref: { document: "cluster", section: "9.3.8.18" }
    }),

    Attribute({
        name: "VehicleId", id: 0x32, type: "string", access: "R V", conformance: "PNC",
        constraint: "max 32", default: null, quality: "X",
        details: "Indicates the vehicle ID read by the EVSE via ISO-15118 using the PNC feature, if the EVSE supports " +
            "this capability." +
            "\n" +
            "The field may be based on the e-Mobility Account Identifier (EMAID). A null value shall indicate " +
            "that this is unknown.",
        xref: { document: "cluster", section: "9.3.8.19" }
    }),

    Attribute({
        name: "SessionId", id: 0x40, type: "uint32", access: "R V", conformance: "M", default: null,
        quality: "X N",
        xref: { document: "cluster", section: "9.3.8" }
    }),
    Attribute({
        name: "SessionDuration", id: 0x41, type: "elapsed-s", access: "R V", conformance: "M",
        default: null, quality: "X N Q",
        xref: { document: "cluster", section: "9.3.8" }
    }),
    Attribute({
        name: "SessionEnergyCharged", id: 0x42, type: "energy-mWh", access: "R V", conformance: "M",
        constraint: "min 0", default: null, quality: "X N Q",
        xref: { document: "cluster", section: "9.3.8" }
    }),
    Attribute({
        name: "SessionEnergyDischarged", id: 0x43, type: "energy-mWh", access: "R V", conformance: "V2X",
        constraint: "min 0", default: null, quality: "X N Q",
        xref: { document: "cluster", section: "9.3.8" }
    }),

    Event(
        {
            name: "EvConnected", id: 0x0, access: "V", conformance: "M", priority: "info",
            details: "This event shall be generated when the EV is plugged in.",
            xref: { document: "cluster", section: "9.3.10.1" }
        },
        Field({
            name: "SessionId", id: 0x0, type: "uint32", conformance: "M",
            details: "This is the new session ID created after the vehicle is plugged in.",
            xref: { document: "cluster", section: "9.3.10.1.1" }
        })
    ),

    Event(
        {
            name: "EvNotDetected", id: 0x1, access: "V", conformance: "M", priority: "info",
            details: "This event shall be generated when the EV is unplugged or not detected (having been previously " +
                "plugged in). When the vehicle is unplugged then the session is ended.",
            xref: { document: "cluster", section: "9.3.10.2" }
        },

        Field({
            name: "SessionId", id: 0x0, type: "uint32", conformance: "M",
            details: "This field shall indicate the current value of the SessionID attribute.",
            xref: { document: "cluster", section: "9.3.10.2.1" }
        }),
        Field({
            name: "State", id: 0x1, type: "StateEnum", conformance: "M",
            details: "This field shall indicate the value of the State attribute prior to the EV not being detected.",
            xref: { document: "cluster", section: "9.3.10.2.2" }
        }),

        Field({
            name: "SessionDuration", id: 0x2, type: "elapsed-s", conformance: "M",
            details: "This field shall indicate the total duration of the session, from the start of the session when the " +
                "EV was plugged in, until it was unplugged.",
            xref: { document: "cluster", section: "9.3.10.2.3" }
        }),

        Field({
            name: "SessionEnergyCharged", id: 0x3, type: "energy-mWh", conformance: "M", constraint: "min 0",

            details: "This field shall indicate the total amount of energy transferred from the EVSE to the EV during the " +
                "session." +
                "\n" +
                "Note that if bi-directional charging occurs during the session, then this value shall only include " +
                "the sum of energy transferred from the EVSE to the EV, and shall NOT be a net value of charging and " +
                "discharging energy.",

            xref: { document: "cluster", section: "9.3.10.2.4" }
        }),

        Field({
            name: "SessionEnergyDischarged", id: 0x4, type: "energy-mWh", conformance: "V2X",
            constraint: "min 0",

            details: "This field shall indicate the total amount of energy transferred from the EV to the EVSE during the " +
                "session." +
                "\n" +
                "Note that if bi-directional discharging occurs during the session, then this value shall only " +
                "include the sum of energy transferred from the EV to the EVSE, and shall NOT be a net value of " +
                "charging and discharging energy.",

            xref: { document: "cluster", section: "9.3.10.2.5" }
        })
    ),

    Event(
        {
            name: "EnergyTransferStarted", id: 0x2, access: "V", conformance: "M", priority: "info",
            details: "This event shall be generated whenever the EV starts charging or discharging, except when an EV has " +
                "switched between charging and discharging under the control of the PowerAdjustment feature of the " +
                "Device Energy Management cluster of the associated Device Energy Management device.",
            xref: { document: "cluster", section: "9.3.10.3" }
        },

        Field({
            name: "SessionId", id: 0x0, type: "uint32", conformance: "M",
            details: "This field shall indicate the value of the SessionID attribute at the time the event was generated.",
            xref: { document: "cluster", section: "9.3.10.3.1" }
        }),
        Field({
            name: "State", id: 0x1, type: "StateEnum", conformance: "M",
            details: "This field shall indicate the value of the State attribute at the time the event was generated.",
            xref: { document: "cluster", section: "9.3.10.3.2" }
        }),

        Field({
            name: "MaximumCurrent", id: 0x2, type: "amperage-mA", conformance: "M", constraint: "min 0",

            details: "This field shall indicate the value of the maximum charging current at the time the event was " +
                "generated." +
                "\n" +
                "A non-zero value indicates that the EV has been enabled for charging and the value is taken directly " +
                "from the MaximumChargeCurrent attribute. A zero value indicates that the EV has not been enabled for " +
                "charging.",

            xref: { document: "cluster", section: "9.3.10.3.3" }
        }),

        Field({
            name: "MaximumDischargeCurrent", id: 0x3, type: "amperage-mA", conformance: "V2X",
            constraint: "min 0",

            details: "This field shall indicate the value of the maximum discharging current at the time the event was " +
                "generated." +
                "\n" +
                "A non-zero value indicates that the EV has been enabled for discharging and the value is taken " +
                "directly from the MaximumDischargeCurrent attribute. A zero value indicates that the EV has not been " +
                "enabled for discharging.",

            xref: { document: "cluster", section: "9.3.10.3.4" }
        })
    ),

    Event(
        {
            name: "EnergyTransferStopped", id: 0x3, access: "V", conformance: "M", priority: "info",
            details: "This event shall be generated whenever the EV stops charging or discharging, except when an EV has " +
                "switched between charging and discharging under the control of the PowerAdjustment feature of the " +
                "Device Energy Management cluster of the associated Device Energy Management device.",
            xref: { document: "cluster", section: "9.3.10.4" }
        },

        Field({
            name: "SessionId", id: 0x0, type: "uint32", conformance: "M",
            details: "This field shall indicate the value of the SessionID attribute prior to the energy transfer " +
                "stopping.",
            xref: { document: "cluster", section: "9.3.10.4.1" }
        }),

        Field({
            name: "State", id: 0x1, type: "StateEnum", conformance: "M",
            details: "This field shall indicate the value of the State attribute prior to the energy transfer stopping.",
            xref: { document: "cluster", section: "9.3.10.4.2" }
        }),
        Field({
            name: "Reason", id: 0x2, type: "EnergyTransferStoppedReasonEnum", conformance: "M",
            details: "This field shall indicate the reason why the energy transferred stopped.",
            xref: { document: "cluster", section: "9.3.10.4.3" }
        }),

        Field({
            name: "EnergyTransferred", id: 0x4, type: "energy-mWh", conformance: "M", constraint: "min 0",
            details: "This field shall indicate the amount of energy transferred from the EVSE to the EV since the " +
                "previous EnergyTransferStarted event, in mWh.",
            xref: { document: "cluster", section: "9.3.10.4.4" }
        }),

        Field({
            name: "EnergyDischarged", id: 0x5, type: "energy-mWh", conformance: "V2X", constraint: "min 0",
            details: "This field shall indicate the amount of energy transferred from the EV to the EVSE since the " +
                "previous EnergyTransferStarted event, in mWh.",
            xref: { document: "cluster", section: "9.3.10.4.5" }
        })
    ),

    Event(
        {
            name: "Fault", id: 0x4, access: "V", conformance: "M", priority: "critical",

            details: "If the EVSE detects a fault it shall generate a Fault Event. The SupplyState attribute shall be set " +
                "to DisabledError and the type of fault detected by the EVSE shall be stored in the FaultState " +
                "attribute." +
                "\n" +
                "This event shall be generated when the FaultState changes from any error state. i.e. if it changes " +
                "from NoError to any other state and if the error then clears, this would generate 2 events." +
                "\n" +
                "It is assumed that the fault will be cleared locally on the EVSE device. When all faults have been " +
                "cleared, the EVSE device shall set the FaultState attribute to NoError and the SupplyState attribute " +
                "shall be set back to its previous state.",

            xref: { document: "cluster", section: "9.3.10.5" }
        },

        Field({
            name: "SessionId", id: 0x0, type: "uint32", conformance: "M", quality: "X",
            details: "This field shall indicate the value of the SessionID attribute prior to the Fault State being " +
                "changed. A value of null indicates no sessions have occurred before the fault occurred.",
            xref: { document: "cluster", section: "9.3.10.5.1" }
        }),

        Field({
            name: "State", id: 0x1, type: "StateEnum", conformance: "M",
            details: "This field shall indicate the value of the State attribute prior to the Fault State being changed.",
            xref: { document: "cluster", section: "9.3.10.5.2" }
        }),

        Field({
            name: "FaultStatePreviousState", id: 0x2, type: "FaultStateEnum", conformance: "M",
            details: "This field shall indicate the value of the FaultState attribute prior to the Fault State being " +
                "changed.",
            xref: { document: "cluster", section: "9.3.10.5.3" }
        }),

        Field({
            name: "FaultStateCurrentState", id: 0x4, type: "FaultStateEnum", conformance: "M",
            details: "This field shall indicate the current value of the FaultState attribute.",
            xref: { document: "cluster", section: "9.3.10.5.4" }
        })
    ),

    Event(
        {
            name: "Rfid", id: 0x5, access: "V", conformance: "[RFID]", priority: "info",
            details: "This event shall be generated when a RFID card has been read. This allows a controller to register " +
                "the card ID and use this to authenticate and start the charging session.",
            xref: { document: "cluster", section: "9.3.10.6" }
        },

        Field({
            name: "Uid", id: 0x0, type: "octstr", conformance: "M", constraint: "max 10",
            details: "The UID field (ISO 14443A UID) is either 4, 7 or 10 bytes.",
            xref: { document: "cluster", section: "9.3.10.6.1" }
        })
    ),

    Command({
        name: "Disable", id: 0x1, access: "O T", conformance: "M", direction: "request", response: "status",
        details: "Allows a client to disable the EVSE from charging and discharging.",
        xref: { document: "cluster", section: "9.3.9.1" }
    }),

    Command(
        {
            name: "EnableCharging", id: 0x2, access: "O T", conformance: "M", direction: "request",
            response: "status",
            details: "This command allows a client to enable the EVSE to charge an EV, and to provide or update the " +
                "maximum and minimum charge current.",
            xref: { document: "cluster", section: "9.3.9.2" }
        },

        Field({
            name: "ChargingEnabledUntil", id: 0x0, type: "epoch-s", conformance: "M", default: null,
            quality: "X",
            details: "This field shall indicate the expiry time, in UTC, when charging will be automatically disabled." +
                "\n" +
                "A value in the past in this field shall disable the EVSE charging whereas a null value shall enable " +
                "it permanently.",
            xref: { document: "cluster", section: "9.3.9.2.1" }
        }),

        Field({
            name: "MinimumChargeCurrent", id: 0x1, type: "amperage-mA", conformance: "M", constraint: "min 0",
            details: "This field shall indicate the minimum current that can be delivered by the EVSE to the EV in trickle " +
                "mode. The EVSE current limit can be advertised to an EV in 0.6A steps." +
                "\n" +
                "The value of the MinimumChargeCurrent attribute shall be set to the value of this field (see " +
                "MinimumChargeCurrent attribute for further details).",
            xref: { document: "cluster", section: "9.3.9.2.2" }
        }),

        Field({
            name: "MaximumChargeCurrent", id: 0x2, type: "amperage-mA", conformance: "M", constraint: "min 0",

            details: "This field shall indicate the maximum current that can be delivered by the EVSE to the EV. The EVSE " +
                "current limit can be advertised to an EV in 0.6A steps." +
                "\n" +
                "The value of the this field shall be stored by the EVSE to determine the value of " +
                "MaximumChargeCurrent attribute. For example, if the UserMaximumChargeCurrent attribute is adjusted " +
                "below then this value, and then later adjusted above this value, the resulting MaximumChargeCurrent " +
                "attribute will be limited to this value.",

            xref: { document: "cluster", section: "9.3.9.2.3" }
        })
    ),

    Command(
        {
            name: "EnableDischarging", id: 0x3, access: "O T", conformance: "V2X", direction: "request",
            response: "status",
            details: "Upon receipt, this shall allow a client to enable the discharge of an EV, and to provide or update " +
                "the maximum discharge current.",
            xref: { document: "cluster", section: "9.3.9.3" }
        },

        Field({
            name: "DischargingEnabledUntil", id: 0x0, type: "epoch-s", conformance: "M", default: null,
            quality: "X",
            details: "This field shall indicate the expiry time, in UTC, when discharging will be automatically disabled." +
                "\n" +
                "A value in the past in this field shall disable the EVSE discharging whereas a null value shall " +
                "enable EVSE discharging permanently.",
            xref: { document: "cluster", section: "9.3.9.3.1" }
        }),

        Field({
            name: "MaximumDischargeCurrent", id: 0x1, type: "amperage-mA", conformance: "M",
            constraint: "min 0",
            details: "This field shall indicate the maximum current that can be received by the EVSE from the EV. The EVSE " +
                "current limit can be advertised to an EV in 0.6A steps. The value of the MaximumDischargeCurrent " +
                "attribute shall be stored and persisted across reboots by the EVSE to the value of this field.",
            xref: { document: "cluster", section: "9.3.9.3.2" }
        })
    ),

    Command({
        name: "StartDiagnostics", id: 0x4, access: "O T", conformance: "O", direction: "request",
        response: "status",
        details: "Allows a client to put the EVSE into a self-diagnostics mode.",
        xref: { document: "cluster", section: "9.3.9.4" }
    }),

    Command(
        {
            name: "SetTargets", id: 0x5, access: "O T", conformance: "PREF", direction: "request",
            response: "status",
            details: "Allows a client to set the user specified charging targets.",
            xref: { document: "cluster", section: "9.3.9.5" }
        },

        Field(
            {
                name: "ChargingTargetSchedules", id: 0x0, type: "list", conformance: "M", constraint: "max 7",
                details: "This field shall indicate a list of up to 7 sets of daily charging targets together with their " +
                    "associated days of the week. Each of the days of the week may only be included in a single " +
                    "ChargingTargetSchedule within this list field.",
                xref: { document: "cluster", section: "9.3.9.5.1" }
            },

            Field({ name: "entry", type: "ChargingTargetScheduleStruct" })
        )
    ),

    Command({
        name: "GetTargets", id: 0x6, access: "O T", conformance: "PREF", direction: "request",
        response: "GetTargetsResponse",
        details: "Allows a client to retrieve the current set of charging targets.",
        xref: { document: "cluster", section: "9.3.9.6" }
    }),

    Command({
        name: "ClearTargets", id: 0x7, access: "O T", conformance: "PREF", direction: "request",
        response: "status",
        details: "Allows a client to clear all stored charging targets.",
        xref: { document: "cluster", section: "9.3.9.8" }
    }),

    Command(
        {
            name: "GetTargetsResponse", id: 0x0, conformance: "PREF", direction: "response",
            details: "The GetTargetsResponse is sent in response to the GetTargets Command.",
            xref: { document: "cluster", section: "9.3.9.7" }
        },

        Field(
            {
                name: "ChargingTargetSchedules", id: 0x0, type: "list", conformance: "M", constraint: "max 7",
                details: "This field shall indicate a list of up to 7 sets of daily charging targets together with their " +
                    "associated days of the week.",
                xref: { document: "cluster", section: "9.3.9.7.1" }
            },

            Field({ name: "entry", type: "ChargingTargetScheduleStruct" })
        )
    ),

    Datatype(
        { name: "TargetDayOfWeekBitmap", type: "map8", xref: { document: "cluster", section: "9.3.7.1" } },
        Field({ name: "Sunday", constraint: "0", description: "Sunday" }),
        Field({ name: "Monday", constraint: "1", description: "Monday" }),
        Field({ name: "Tuesday", constraint: "2", description: "Tuesday" }),
        Field({ name: "Wednesday", constraint: "3", description: "Wednesday" }),
        Field({ name: "Thursday", constraint: "4", description: "Thursday" }),
        Field({ name: "Friday", constraint: "5", description: "Friday" }),
        Field({ name: "Saturday", constraint: "6", description: "Saturday" })
    ),

    Datatype(
        { name: "StateEnum", type: "enum8", xref: { document: "cluster", section: "9.3.7.2" } },
        Field({ name: "NotPluggedIn", id: 0x0, conformance: "M", description: "The EV is not plugged in." }),
        Field({
            name: "PluggedInNoDemand", id: 0x1, conformance: "M",
            description: "The EV is plugged in, but not demanding current."
        }),
        Field({
            name: "PluggedInDemand", id: 0x2, conformance: "M",
            description: "The EV is plugged in and is demanding current, but EVSE is not allowing current to flow."
        }),
        Field({
            name: "PluggedInCharging", id: 0x3, conformance: "M",
            description: "The EV is plugged in, charging is in progress, and current is flowing"
        }),
        Field({
            name: "PluggedInDischarging", id: 0x4, conformance: "V2X",
            description: "The EV is plugged in, discharging is in progress, and current is flowing"
        }),
        Field({
            name: "SessionEnding", id: 0x5, conformance: "M",
            description: "The EVSE is transitioning from any plugged- in state to NotPluggedIn"
        }),
        Field({ name: "Fault", id: 0x6, conformance: "M", description: "There is a fault (see FaultState attribute)" })
    ),

    Datatype(
        { name: "SupplyStateEnum", type: "enum8", xref: { document: "cluster", section: "9.3.7.3" } },
        Field({
            name: "Disabled", id: 0x0, conformance: "M",
            description: "The EV is not currently allowed to charge or discharge"
        }),
        Field({ name: "ChargingEnabled", id: 0x1, conformance: "M", description: "The EV is currently allowed to charge" }),
        Field({
            name: "DischargingEnabled", id: 0x2, conformance: "[V2X]",
            description: "The EV is currently allowed to discharge"
        }),
        Field({
            name: "DisabledError", id: 0x3, conformance: "M",
            description: "The EV is not currently allowed to charge or discharge due to an error. The error must be cleared before operation can continue."
        }),
        Field({
            name: "DisabledDiagnostics", id: 0x4, conformance: "M",
            description: "The EV is not currently allowed to charge or discharge due to self- diagnostics mode."
        }),
        Field({
            name: "Enabled", id: 0x5, conformance: "[V2X]",
            description: "The EV is currently allowed to charge and discharge"
        })
    ),

    Datatype(
        { name: "FaultStateEnum", type: "enum8", xref: { document: "cluster", section: "9.3.7.4" } },
        Field({ name: "NoError", id: 0x0, conformance: "M", description: "The EVSE is not in an error state." }),
        Field({
            name: "MeterFailure", id: 0x1, conformance: "M",
            description: "The EVSE is unable to obtain electrical measurements."
        }),
        Field({ name: "OverVoltage", id: 0x2, conformance: "M", description: "The EVSE input voltage level is too high." }),
        Field({ name: "UnderVoltage", id: 0x3, conformance: "M", description: "The EVSE input voltage level is too low." }),
        Field({
            name: "OverCurrent", id: 0x4, conformance: "M",
            description: "The EVSE detected charging current higher than allowed by charger."
        }),
        Field({
            name: "ContactWetFailure", id: 0x5, conformance: "M",
            description: "The EVSE detected voltage on charging pins when the contactor is open."
        }),
        Field({
            name: "ContactDryFailure", id: 0x6, conformance: "M",
            description: "The EVSE detected absence of voltage after enabling contactor."
        }),
        Field({ name: "GroundFault", id: 0x7, conformance: "M", description: "The EVSE has an unbalanced current supply." }),
        Field({ name: "PowerLoss", id: 0x8, conformance: "M", description: "The EVSE has detected a loss in power." }),
        Field({
            name: "PowerQuality", id: 0x9, conformance: "M",
            description: "The EVSE has detected another power quality issue (e.g. phase imbalance)."
        }),
        Field({
            name: "PilotShortCircuit", id: 0xa, conformance: "M",
            description: "The EVSE pilot signal amplitude short circuited to ground."
        }),
        Field({ name: "EmergencyStop", id: 0xb, conformance: "M", description: "The emergency stop button was pressed." }),
        Field({
            name: "EvDisconnected", id: 0xc, conformance: "M",
            description: "The EVSE detected that the cable has been disconnected."
        }),
        Field({
            name: "WrongPowerSupply", id: 0xd, conformance: "M",
            description: "The EVSE could not determine proper power supply level."
        }),
        Field({
            name: "LiveNeutralSwap", id: 0xe, conformance: "M",
            description: "The EVSE detected Live and Neutral are swapped."
        }),
        Field({
            name: "OverTemperature", id: 0xf, conformance: "M",
            description: "The EVSE internal temperature is too high."
        }),
        Field({ name: "Other", id: 0xff, conformance: "M", description: "Any other reason." })
    ),

    Datatype(
        { name: "EnergyTransferStoppedReasonEnum", type: "enum8", xref: { document: "cluster", section: "9.3.7.5" } },
        Field({ name: "EvStopped", id: 0x0, conformance: "M", description: "The EV decided to stop" }),
        Field({ name: "EvseStopped", id: 0x1, conformance: "M", description: "The EVSE decided to stop" }),
        Field({ name: "Other", id: 0x2, conformance: "M", description: "An other unknown reason" })
    ),

    Datatype(
        {
            name: "ChargingTargetStruct", type: "struct",

            details: "This represents a single user specified charging target for an EV." +
                "\n" +
                "An EVSE or EMS system optimizer may use this information to take the Time of Use Tariff, grid carbon " +
                "intensity, local generation (solar PV) into account to provide the cheapest and cleanest energy to " +
                "the EV." +
                "\n" +
                "The optimization strategy is not defined here, however in simple terms, the AddedEnergy requirement " +
                "can be fulfilled by knowing the charging Power (W) and the time needed to charge." +
                "\n" +
                "To compute the Charging Time: Required Energy (Wh) = Power (W) x ChargingTime (s) / 3600 Therefore: " +
                "ChargingTime (s) = (3600 x RequiredEnergy (wH)) / Power (W)" +
                "\n" +
                "To compute the charging time: Charging StartTime = TargetTimeMinutesPastMidnight - ChargingTime",

            xref: { document: "cluster", section: "9.3.7.6" }
        },

        Field({
            name: "TargetTimeMinutesPastMidnight", id: 0x0, type: "uint16", conformance: "M",
            constraint: "max 1439", default: 0,

            details: "This field shall indicate the desired charging completion time of the associated day. The time will " +
                "be represented by a 16 bits unsigned integer to designate the minutes since midnight. For example, " +
                "6am will be represented by 360 minutes since midnight and 11:30pm will be represented by 1410 " +
                "minutes since midnight." +
                "\n" +
                "This field is based on local wall clock time. In case of Daylight Savings Time transition which may " +
                "result in an extra hour or one hour less in the day, the charging algorithm should take into account " +
                "the shift appropriately." +
                "\n" +
                "Note that if the TargetTimeMinutesPastMidnight values are too close together (e.g. 2 per day) these " +
                "may overlap. The EVSE may have to coalesce the charging targets into a single target. e.g. if the " +
                "1st charging target cannot be met in the time available, the EVSE may be forced to begin working " +
                "towards the 2nd charging target and immediately continue until both targets have been satisfied (or " +
                "the vehicle becomes full)." +
                "\n" +
                "The EVSE itself cannot predict the behavior of the vehicle (i.e. if it cannot obtain the SoC from " +
                "the vehicle), so should attempt to perform a sensible operation based on these targets. It is " +
                "recommended that the charging schedule is pessimistic (i.e. starts earlier) since the vehicle may " +
                "charge more slowly than the electrical supply may provide power (especially if it is cold)." +
                "\n" +
                "If the user configures large charging targets (e.g. high values of AddedEnergy or SoC) then it is " +
                "expected that the EVSE may need to begin charging immediately, and may not be able to guarantee that " +
                "the vehicle will be able to reach the target.",

            xref: { document: "cluster", section: "9.3.7.6.1" }
        }),

        Field({
            name: "TargetSoC", id: 0x1, type: "percent", conformance: "SOC, O.a+", default: 0,

            details: "This field represents the target SoC that the vehicle should be charged to before the " +
                "TargetTimeMinutesPastMidnight." +
                "\n" +
                "If the EVSE supports the SOC feature and can obtain the SoC of the vehicle:" +
                "\n" +
                "  • the TargetSoC field shall take precedence over the AddedEnergy field." +
                "\n" +
                "  • the EVSE SHOULD charge to the TargetSoC and then stop the charging automatically when it reaches " +
                "    that point." +
                "\n" +
                "  • if the TargetSoC value is set to 100% then the EVSE SHOULD continue to charge the vehicle until " +
                "    the vehicle decides to stop charging." +
                "\n" +
                "If the EVSE does not support the SOC feature or cannot obtain the SoC of the vehicle:" +
                "\n" +
                "  • the AddedEnergy field shall take precedence over the TargetSoC field, and if the EVSE does not " +
                "    support the SOC feature then the TargetSoC field may only take the values null or 100%." +
                "\n" +
                "  • if the AddedEnergy field has not been provided, the EVSE SHOULD assume the vehicle is empty" +
                "\n" +
                "and charge until the vehicle stops demanding a charge.",

            xref: { document: "cluster", section: "9.3.7.6.2" }
        }),

        Field({
            name: "AddedEnergy", id: 0x2, type: "energy-mWh", conformance: "[SOC], O.a+", constraint: "min 0",
            default: 0,

            details: "This field represents the amount of energy that the user would like to have added to the vehicle " +
                "before the TargetTimeMinutesPastMidnight." +
                "\n" +
                "This represents a positive value in mWh that SHOULD be added during the session (i.e. if the vehicle " +
                "charging is stopped and started several times, this equates to the total energy since the vehicle " +
                "has been plugged in)." +
                "\n" +
                "The maximum value (500kWh) is much larger than most EV batteries on the market today. If the client " +
                "tries to set this value too high then the EVSE will need to start charging immediately and continue " +
                "charging until the vehicle stops demanding charge (i.e. it is full). Therefore the maximum value " +
                "should be set based on typical battery size of the vehicles on the market (e.g. 70000Wh), however " +
                "this is up to the client to carefully choose a value." +
                "\n" +
                "NOTE" +
                "\n" +
                "If the EVSE can obtain the Battery Capacity of the vehicle, it SHOULD NOT limit this AddedEnergy " +
                "value to the Battery Capacity of the vehicle, since the EV may also require energy for heating and " +
                "cooling of the battery during charging, or for heating or cooling the cabin.",

            xref: { document: "cluster", section: "9.3.7.6.3" }
        })
    ),

    Datatype(
        {
            name: "ChargingTargetScheduleStruct", type: "struct",
            details: "This represents a set of user specified charging targets for an EV for a set of specified days.",
            xref: { document: "cluster", section: "9.3.7.7" }
        },

        Field({
            name: "DayOfWeekForSequence", id: 0x0, type: "TargetDayOfWeekBitmap", conformance: "M",
            details: "This field shall indicate the days of the week that the charging targets SHOULD be associated to. " +
                "This field is a bitmap and therefore the associated targets could be applied to multiple days.",
            xref: { document: "cluster", section: "9.3.7.8" }
        }),

        Field(
            {
                name: "ChargingTargets", id: 0x1, type: "list", conformance: "M", constraint: "max 10",
                details: "This field shall indicate a list of up to 10 charging targets for each of the associated days of the " +
                    "week.",
                xref: { document: "cluster", section: "9.3.7.9" }
            },

            Field({ name: "entry", type: "ChargingTargetStruct" })
        )
    )
);

MatterDefinition.children.push(EnergyEvse);
