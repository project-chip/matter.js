[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md) / ChangeReason

# Enumeration: ChangeReason

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md).ChangeReason

**`See`**

MatterSpecification.v11.Core § 11.19.7.4.15

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

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:172](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L172)

___

### Failure

• **Failure** = ``2``

The reason for a state change is the failure of a prior operation.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:162](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L162)

___

### Success

• **Success** = ``1``

The reason for a state change is the success of a prior operation.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:157](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L157)

___

### TimeOut

• **TimeOut** = ``3``

The reason for a state change is a time-out.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:167](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L167)

___

### Unknown

• **Unknown** = ``0``

The reason for a state change is unknown.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:152](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L152)
