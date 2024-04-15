[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/general-commissioning/export](../modules/behavior_definitions_general_commissioning_export.md) / [GeneralCommissioningBehavior](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior.md) / State

# Interface: State

[behavior/definitions/general-commissioning/export](../modules/behavior_definitions_general_commissioning_export.md).[GeneralCommissioningBehavior](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_general_commissioning_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [basicCommissioningInfo](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior.State.md#basiccommissioninginfo)
- [breadcrumb](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior.State.md#breadcrumb)
- [locationCapability](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior.State.md#locationcapability)
- [regulatoryConfig](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior.State.md#regulatoryconfig)
- [supportsConcurrentConnection](behavior_definitions_general_commissioning_export.GeneralCommissioningBehavior.State.md#supportsconcurrentconnection)

## Properties

### basicCommissioningInfo

• **basicCommissioningInfo**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `failSafeExpiryLengthSeconds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `maxCumulativeFailsafeSeconds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>

This attribute shall describe critical parameters needed at the beginning of commissioning flow. See
BasicCommissioningInfo for more information.

**`See`**

MatterSpecification.v11.Core § 11.9.5.2

#### Inherited from

StateType.basicCommissioningInfo

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:255](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L255)

___

### breadcrumb

• **breadcrumb**: `number` \| `bigint`

This attribute allows for the storage of a client-provided small payload which Administrators and
Commissioners may write and then subsequently read, to keep track of their own progress. This may be
used by the Commissioner to avoid repeating already-executed actions upon re-establishing a
commissioning link after an error.

On start/restart of the server, such as when a device is power-cycled, this attribute shall be reset to
zero.

Some commands related to commissioning also have a side-effect of updating or resetting this attribute
and this is specified in their respective functional descriptions.

The format of the value within this attribute is unspecified and its value is not otherwise used by the
functioning of any cluster, other than being set as a side-effect of commands where this behavior is
described.

**`See`**

MatterSpecification.v11.Core § 11.9.5.1

#### Inherited from

StateType.breadcrumb

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:247](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L247)

___

### locationCapability

• **locationCapability**: [`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md)

LocationCapability is statically set by the manufacturer and indicates if this Node needs to be told an
exact RegulatoryLocation. For example a Node which is "Indoor Only" would not be certified for outdoor
use at all, and thus there is no need for a commissioner to set or ask the user about whether the device
will be used inside or outside. However a device which states its capability is "Indoor/Outdoor" means
it would like clarification if possible.

For Nodes without radio network interfaces (e.g. Ethernet-only devices), the value IndoorOutdoor shall
always be used.

The default value of the RegulatoryConfig attribute is the value of LocationCapability attribute. This
means devices always have a safe default value, and Commissioners which choose to implement smarter
handling can.

**`See`**

MatterSpecification.v11.Core § 11.9.5.4

#### Inherited from

StateType.locationCapability

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:283](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L283)

___

### regulatoryConfig

• **regulatoryConfig**: [`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md)

This attribute shall indicate the regulatory configuration for the product.

Note that the country code is part of Basic Information Cluster and therefore NOT listed on the
RegulatoryConfig attribute.

**`See`**

MatterSpecification.v11.Core § 11.9.5.3

#### Inherited from

StateType.regulatoryConfig

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:265](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L265)

___

### supportsConcurrentConnection

• **supportsConcurrentConnection**: `boolean`

This attribute shall indicate whether this device supports "concurrent connection flow" commissioning
mode (see Section 5.5, “Commissioning Flows”). If false, the device only supports "non-concurrent
connection flow" mode.

**`See`**

MatterSpecification.v11.Core § 11.9.5.5

#### Inherited from

StateType.supportsConcurrentConnection

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:296](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L296)
