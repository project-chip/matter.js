[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Thermostat](../modules/cluster_export.Thermostat.md) / SetpointChangeSource

# Enumeration: SetpointChangeSource

[cluster/export](../modules/cluster_export.md).[Thermostat](../modules/cluster_export.Thermostat.md).SetpointChangeSource

The value of the Thermostat setpointChangeSource attribute

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 4.3.7.34

## Table of contents

### Enumeration Members

- [External](cluster_export.Thermostat.SetpointChangeSource.md#external)
- [Manual](cluster_export.Thermostat.SetpointChangeSource.md#manual)
- [Schedule](cluster_export.Thermostat.SetpointChangeSource.md#schedule)

## Enumeration Members

### External

• **External** = ``2``

Externally-initiated setpoint change (e.g., DRLC cluster command, attribute write)

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:252](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L252)

___

### Manual

• **Manual** = ``0``

Manual, user-initiated setpoint change via the thermostat

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:242](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L242)

___

### Schedule

• **Schedule** = ``1``

Schedule/internal programming-initiated setpoint change

#### Defined in

[packages/matter.js/src/cluster/definitions/ThermostatCluster.ts:247](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ThermostatCluster.ts#L247)
