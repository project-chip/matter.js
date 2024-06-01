[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/general-commissioning/export](../../../README.md) / [GeneralCommissioningBehavior](../README.md) / State

# Interface: State

## Extends

- [`StateType`](../../../-internal-/README.md#statetype)

## Properties

### basicCommissioningInfo

> **basicCommissioningInfo**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

This attribute shall describe critical parameters needed at the beginning of commissioning flow. See
BasicCommissioningInfo for more information.

#### See

MatterSpecification.v11.Core § 11.9.5.2

#### Type declaration

##### failSafeExpiryLengthSeconds

> **failSafeExpiryLengthSeconds**: [`FieldType`](../../../../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall contain a conservative initial duration (in seconds) to set in the FailSafe for the
commissioning flow to complete successfully. This may vary depending on the speed or sleepiness of the
Commissionee. This value, if used in the ArmFailSafe command’s ExpiryLengthSeconds field SHOULD allow a
Commissioner to proceed with a nominal commissioning without having to-rearm the fail-safe, with some margin.

###### See

MatterSpecification.v11.Core § 11.9.4.3.1

##### maxCumulativeFailsafeSeconds

> **maxCumulativeFailsafeSeconds**: [`FieldType`](../../../../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

This field shall contain a conservative value in seconds denoting the maximum total duration for which a
fail safe timer can be re-armed. See Section 11.9.6.2.1, “Fail Safe Context”.

The value of this field shall be greater than or equal to the FailSafeExpiryLengthSeconds. Absent additional
guidelines, it is RECOMMENDED that the value of this field be aligned with Section 5.4.2.3, “Announcement
Duration” and default to 900 seconds.

###### See

MatterSpecification.v11.Core § 11.9.4.3.2

#### Inherited from

`StateType.basicCommissioningInfo`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:259](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L259)

***

### breadcrumb

> **breadcrumb**: `number` \| `bigint`

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

#### See

MatterSpecification.v11.Core § 11.9.5.1

#### Inherited from

`StateType.breadcrumb`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:251](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L251)

***

### locationCapability

> **locationCapability**: [`RegulatoryLocationType`](../../../../../../../cluster/export/namespaces/GeneralCommissioning/enumerations/RegulatoryLocationType.md)

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

#### See

MatterSpecification.v11.Core § 11.9.5.4

#### Inherited from

`StateType.locationCapability`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:287](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L287)

***

### regulatoryConfig

> **regulatoryConfig**: [`RegulatoryLocationType`](../../../../../../../cluster/export/namespaces/GeneralCommissioning/enumerations/RegulatoryLocationType.md)

This attribute shall indicate the regulatory configuration for the product.

Note that the country code is part of Basic Information Cluster and therefore NOT listed on the
RegulatoryConfig attribute.

#### See

MatterSpecification.v11.Core § 11.9.5.3

#### Inherited from

`StateType.regulatoryConfig`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:269](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L269)

***

### supportsConcurrentConnection

> **supportsConcurrentConnection**: `boolean`

This attribute shall indicate whether this device supports "concurrent connection flow" commissioning
mode (see Section 5.5, “Commissioning Flows”). If false, the device only supports "non-concurrent
connection flow" mode.

#### See

MatterSpecification.v11.Core § 11.9.5.5

#### Inherited from

`StateType.supportsConcurrentConnection`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:300](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L300)
