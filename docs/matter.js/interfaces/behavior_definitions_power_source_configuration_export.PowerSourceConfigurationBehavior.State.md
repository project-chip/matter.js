[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/power-source-configuration/export](../modules/behavior_definitions_power_source_configuration_export.md) / [PowerSourceConfigurationBehavior](../modules/behavior_definitions_power_source_configuration_export.PowerSourceConfigurationBehavior.md) / State

# Interface: State

[behavior/definitions/power-source-configuration/export](../modules/behavior_definitions_power_source_configuration_export.md).[PowerSourceConfigurationBehavior](../modules/behavior_definitions_power_source_configuration_export.PowerSourceConfigurationBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_power_source_configuration_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [sources](behavior_definitions_power_source_configuration_export.PowerSourceConfigurationBehavior.State.md#sources)

## Properties

### sources

• **sources**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

This list shall contain the set of all power sources capable of participating in the power system of
this Node. Each entry in the list shall be the endpoint number of an endpoint having a Power Source
cluster, which corresponds to a physical power source. The endpoint number shall be unique within the
list.

The order of power sources on a Node is defined by the Order attribute of its associated Power Source
cluster provided on the endpoint. List entries shall be sorted in increasing order, that is, an entry
with a lower order shall have a lower index than any entry with a higher order. Multiple entries may
have the same order, there are no restrictions on their relative sorting.

**`See`**

MatterSpecification.v11.Core § 11.6.4.1

#### Inherited from

StateType.sources

#### Defined in

[packages/matter.js/src/cluster/definitions/PowerSourceConfigurationCluster.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/PowerSourceConfigurationCluster.ts#L39)
