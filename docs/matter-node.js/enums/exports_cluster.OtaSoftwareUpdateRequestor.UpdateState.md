[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md) / UpdateState

# Enumeration: UpdateState

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md).UpdateState

**`See`**

MatterSpecification.v11.Core § 11.19.7.4.5

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

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:56

___

### DelayedOnApply

• **DelayedOnApply** = ``6``

Indicate a Node waiting caused by AwaitNextAction response.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:60

___

### DelayedOnQuery

• **DelayedOnQuery** = ``3``

Indicate a Node waiting after a Busy response.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:48

___

### DelayedOnUserConsent

• **DelayedOnUserConsent** = ``8``

Indicate a Node is capable of user consent.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:68

___

### Downloading

• **Downloading** = ``4``

Indicate a Node currently in the process of downloading a software update.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:52

___

### Idle

• **Idle** = ``1``

Indicate a Node not yet in the process of software update.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:40

___

### Querying

• **Querying** = ``2``

Indicate a Node in the process of querying an OTA Provider.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:44

___

### RollingBack

• **RollingBack** = ``7``

Indicate a Node in the process of recovering to a previous version.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:64

___

### Unknown

• **Unknown** = ``0``

Current state is not yet determined.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:36
