[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md) / UpdateState

# Enumeration: UpdateState

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md).UpdateState

**`See`**

MatterSpecification.v11.Core § 11.19.7.4.5

## Table of contents

### Enumeration Members

- [Applying](cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md#applying)
- [DelayedOnApply](cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md#delayedonapply)
- [DelayedOnQuery](cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md#delayedonquery)
- [DelayedOnUserConsent](cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md#delayedonuserconsent)
- [Downloading](cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md#downloading)
- [Idle](cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md#idle)
- [Querying](cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md#querying)
- [RollingBack](cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md#rollingback)
- [Unknown](cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md#unknown)

## Enumeration Members

### Applying

• **Applying** = ``5``

Indicate a Node currently in the process of verifying and applying a software update.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L84)

___

### DelayedOnApply

• **DelayedOnApply** = ``6``

Indicate a Node waiting caused by AwaitNextAction response.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L89)

___

### DelayedOnQuery

• **DelayedOnQuery** = ``3``

Indicate a Node waiting after a Busy response.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L74)

___

### DelayedOnUserConsent

• **DelayedOnUserConsent** = ``8``

Indicate a Node is capable of user consent.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L99)

___

### Downloading

• **Downloading** = ``4``

Indicate a Node currently in the process of downloading a software update.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L79)

___

### Idle

• **Idle** = ``1``

Indicate a Node not yet in the process of software update.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L64)

___

### Querying

• **Querying** = ``2``

Indicate a Node in the process of querying an OTA Provider.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L69)

___

### RollingBack

• **RollingBack** = ``7``

Indicate a Node in the process of recovering to a previous version.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L94)

___

### Unknown

• **Unknown** = ``0``

Current state is not yet determined.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L59)
