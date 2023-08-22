[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md) / UpdateState

# Enumeration: UpdateState

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md).UpdateState

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.7.4.5

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

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:75](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L75)

___

### DelayedOnApply

• **DelayedOnApply** = ``6``

Indicate a Node waiting caused by AwaitNextAction response.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:80](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L80)

___

### DelayedOnQuery

• **DelayedOnQuery** = ``3``

Indicate a Node waiting after a Busy response.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:65](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L65)

___

### DelayedOnUserConsent

• **DelayedOnUserConsent** = ``8``

Indicate a Node is capable of user consent.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:90](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L90)

___

### Downloading

• **Downloading** = ``4``

Indicate a Node currently in the process of downloading a software update.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:70](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L70)

___

### Idle

• **Idle** = ``1``

Indicate a Node not yet in the process of software update.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:55](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L55)

___

### Querying

• **Querying** = ``2``

Indicate a Node in the process of querying an OTA Provider.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:60](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L60)

___

### RollingBack

• **RollingBack** = ``7``

Indicate a Node in the process of recovering to a previous version.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:85](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L85)

___

### Unknown

• **Unknown** = ``0``

Current state is not yet determined.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L50)
