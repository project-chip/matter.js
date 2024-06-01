[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OtaSoftwareUpdateRequestor](../README.md) / UpdateState

# Enumeration: UpdateState

## See

MatterSpecification.v11.Core § 11.19.7.4.5

## Enumeration Members

### Applying

> **Applying**: `5`

Indicate a Node currently in the process of verifying and applying a software update.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:56

***

### DelayedOnApply

> **DelayedOnApply**: `6`

Indicate a Node waiting caused by AwaitNextAction response.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:60

***

### DelayedOnQuery

> **DelayedOnQuery**: `3`

Indicate a Node waiting after a Busy response.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:48

***

### DelayedOnUserConsent

> **DelayedOnUserConsent**: `8`

Indicate a Node is capable of user consent.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:68

***

### Downloading

> **Downloading**: `4`

Indicate a Node currently in the process of downloading a software update.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:52

***

### Idle

> **Idle**: `1`

Indicate a Node not yet in the process of software update.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:40

***

### Querying

> **Querying**: `2`

Indicate a Node in the process of querying an OTA Provider.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:44

***

### RollingBack

> **RollingBack**: `7`

Indicate a Node in the process of recovering to a previous version.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:64

***

### Unknown

> **Unknown**: `0`

Current state is not yet determined.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:36
