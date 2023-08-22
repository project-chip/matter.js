[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md) / ChangeReason

# Enumeration: ChangeReason

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md).ChangeReason

This value shall indicate that the reason for a state change is unknown.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.7.4.15

## Table of contents

### Enumeration Members

- [DelayByProvider](cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md#delaybyprovider)
- [Failure](cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md#failure)
- [Success](cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md#success)
- [TimeOut](cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md#timeout)
- [Unknown](cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md#unknown)

## Enumeration Members

### DelayByProvider

• **DelayByProvider** = ``4``

The reason for a state change is a request by the OTA Provider to wait.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:158](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L158)

___

### Failure

• **Failure** = ``2``

The reason for a state change is the failure of a prior operation.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:148](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L148)

___

### Success

• **Success** = ``1``

The reason for a state change is the success of a prior operation.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:143](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L143)

___

### TimeOut

• **TimeOut** = ``3``

The reason for a state change is a time-out.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:153](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L153)

___

### Unknown

• **Unknown** = ``0``

The reason for a state change is unknown.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:138](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L138)
