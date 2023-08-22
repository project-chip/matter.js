[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md) / UpdateState

# Enumeration: UpdateState

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md).UpdateState

**`See`**

MatterCoreSpecificationV1_1 § 11.19.7.4.5

## Table of contents

### Enumeration Members

- [Applying](exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md#applying)
- [DelayedOnApply](exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md#delayedonapply)
- [DelayedOnQuery](exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md#delayedonquery)
- [DelayedOnUserConsent](exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md#delayedonuserconsent)
- [Downloading](exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md#downloading)
- [Idle](exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md#idle)
- [Querying](exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md#querying)
- [RollingBack](exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md#rollingback)
- [Unknown](exports_cluster.OtaSoftwareUpdateRequestor.UpdateState.md#unknown)

## Enumeration Members

### Applying

• **Applying** = ``5``

Indicate a Node currently in the process of verifying and applying a software update.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:46

___

### DelayedOnApply

• **DelayedOnApply** = ``6``

Indicate a Node waiting caused by AwaitNextAction response.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:50

___

### DelayedOnQuery

• **DelayedOnQuery** = ``3``

Indicate a Node waiting after a Busy response.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:38

___

### DelayedOnUserConsent

• **DelayedOnUserConsent** = ``8``

Indicate a Node is capable of user consent.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:58

___

### Downloading

• **Downloading** = ``4``

Indicate a Node currently in the process of downloading a software update.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:42

___

### Idle

• **Idle** = ``1``

Indicate a Node not yet in the process of software update.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:30

___

### Querying

• **Querying** = ``2``

Indicate a Node in the process of querying an OTA Provider.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:34

___

### RollingBack

• **RollingBack** = ``7``

Indicate a Node in the process of recovering to a previous version.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:54

___

### Unknown

• **Unknown** = ``0``

Current state is not yet determined.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:26
