[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ThreadNetworkDiagnostics](../README.md) / OperationalDatasetComponents

# Interface: OperationalDatasetComponents

## See

MatterSpecification.v11.Core § 11.13.5.7

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvOperationalDatasetComponents`](../README.md#tlvoperationaldatasetcomponents)\>

## Properties

### activeTimestampPresent

> **activeTimestampPresent**: `boolean`

This field shall be True if the Node has an active timestamp present, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.1

#### Inherited from

`TypeFromSchema.activeTimestampPresent`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:316](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L316)

***

### channelMaskPresent

> **channelMaskPresent**: `boolean`

This field shall be True if the Node has available a mask of available channels, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.12

#### Inherited from

`TypeFromSchema.channelMaskPresent`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:395](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L395)

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

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:373](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L373)

***

### delayPresent

> **delayPresent**: `boolean`

This field shall be True if the Node has the Thread network delay set, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.7

#### Inherited from

`TypeFromSchema.delayPresent`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:358](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L358)

***

### extendedPanIdPresent

> **extendedPanIdPresent**: `boolean`

This field shall be True if the Node has an extended Pan ID, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.5

#### Inherited from

`TypeFromSchema.extendedPanIdPresent`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:344](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L344)

***

### masterKeyPresent

> **masterKeyPresent**: `boolean`

This field shall be True if the Node has the Thread master key, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.3

#### Inherited from

`TypeFromSchema.masterKeyPresent`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:330](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L330)

***

### meshLocalPrefixPresent

> **meshLocalPrefixPresent**: `boolean`

This field shall be True if the Node has the mesh local prefix, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.6

#### Inherited from

`TypeFromSchema.meshLocalPrefixPresent`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:351](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L351)

***

### networkNamePresent

> **networkNamePresent**: `boolean`

This field shall be True if the Node has the Thread network’s name, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.4

#### Inherited from

`TypeFromSchema.networkNamePresent`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:337](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L337)

***

### panIdPresent

> **panIdPresent**: `boolean`

This field shall be True if the Node has a Pan ID, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.8

#### Inherited from

`TypeFromSchema.panIdPresent`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:365](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L365)

***

### pendingTimestampPresent

> **pendingTimestampPresent**: `boolean`

This field shall be True if the Node has a pending timestamp is present, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.2

#### Inherited from

`TypeFromSchema.pendingTimestampPresent`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:323](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L323)

***

### pskcPresent

> **pskcPresent**: `boolean`

This field shall be True if the Node has been configured with the Thread network Pskc, else False.

#### See

MatterSpecification.v11.Core § 11.13.5.7.10

#### Inherited from

`TypeFromSchema.pskcPresent`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:380](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L380)

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

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:388](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L388)
