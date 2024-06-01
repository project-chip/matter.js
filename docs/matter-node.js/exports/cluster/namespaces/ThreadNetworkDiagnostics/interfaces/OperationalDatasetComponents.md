[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ThreadNetworkDiagnostics](../README.md) / OperationalDatasetComponents

# Interface: OperationalDatasetComponents

## See

MatterSpecification.v11.Core § 11.13.5.7

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvOperationalDatasetComponents`](../README.md#tlvoperationaldatasetcomponents)\>

## Properties

### activeTimestampPresent

> **activeTimestampPresent**: `boolean`

This field shall be True if the Node has an active timestamp present, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.1

#### Inherited from

`TypeFromSchema.activeTimestampPresent`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:264

***

### channelMaskPresent

> **channelMaskPresent**: `boolean`

This field shall be True if the Node has available a mask of available channels, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.12

#### Inherited from

`TypeFromSchema.channelMaskPresent`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:332

***

### channelPresent

> **channelPresent**: `boolean`

This field shall be True if the Node has configured an operational channel for the Thread network, else
False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.9

#### Inherited from

`TypeFromSchema.channelPresent`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:313

***

### delayPresent

> **delayPresent**: `boolean`

This field shall be True if the Node has the Thread network delay set, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.7

#### Inherited from

`TypeFromSchema.delayPresent`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:300

***

### extendedPanIdPresent

> **extendedPanIdPresent**: `boolean`

This field shall be True if the Node has an extended Pan ID, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.5

#### Inherited from

`TypeFromSchema.extendedPanIdPresent`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:288

***

### masterKeyPresent

> **masterKeyPresent**: `boolean`

This field shall be True if the Node has the Thread master key, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.3

#### Inherited from

`TypeFromSchema.masterKeyPresent`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:276

***

### meshLocalPrefixPresent

> **meshLocalPrefixPresent**: `boolean`

This field shall be True if the Node has the mesh local prefix, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.6

#### Inherited from

`TypeFromSchema.meshLocalPrefixPresent`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:294

***

### networkNamePresent

> **networkNamePresent**: `boolean`

This field shall be True if the Node has the Thread network’s name, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.4

#### Inherited from

`TypeFromSchema.networkNamePresent`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:282

***

### panIdPresent

> **panIdPresent**: `boolean`

This field shall be True if the Node has a Pan ID, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.8

#### Inherited from

`TypeFromSchema.panIdPresent`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:306

***

### pendingTimestampPresent

> **pendingTimestampPresent**: `boolean`

This field shall be True if the Node has a pending timestamp is present, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.2

#### Inherited from

`TypeFromSchema.pendingTimestampPresent`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:270

***

### pskcPresent

> **pskcPresent**: `boolean`

This field shall be True if the Node has been configured with the Thread network Pskc, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.10

#### Inherited from

`TypeFromSchema.pskcPresent`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:319

***

### securityPolicyPresent

> **securityPolicyPresent**: `boolean`

This field shall be True if the Node has been configured with the Thread network security policies, else
False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.11

#### Inherited from

`TypeFromSchema.securityPolicyPresent`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:326
