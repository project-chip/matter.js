[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md) / OperationalDatasetComponents

# Interface: OperationalDatasetComponents

[cluster/export](../modules/cluster_export.md).[ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md).OperationalDatasetComponents

**`See`**

MatterSpecification.v11.Core § 11.13.5.7

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvOperationalDatasetComponents`](../modules/cluster_export.ThreadNetworkDiagnostics.md#tlvoperationaldatasetcomponents)\>

  ↳ **`OperationalDatasetComponents`**

## Table of contents

### Properties

- [activeTimestampPresent](cluster_export.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#activetimestamppresent)
- [channelMaskPresent](cluster_export.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#channelmaskpresent)
- [channelPresent](cluster_export.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#channelpresent)
- [delayPresent](cluster_export.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#delaypresent)
- [extendedPanIdPresent](cluster_export.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#extendedpanidpresent)
- [masterKeyPresent](cluster_export.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#masterkeypresent)
- [meshLocalPrefixPresent](cluster_export.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#meshlocalprefixpresent)
- [networkNamePresent](cluster_export.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#networknamepresent)
- [panIdPresent](cluster_export.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#panidpresent)
- [pendingTimestampPresent](cluster_export.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#pendingtimestamppresent)
- [pskcPresent](cluster_export.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#pskcpresent)
- [securityPolicyPresent](cluster_export.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#securitypolicypresent)

## Properties

### activeTimestampPresent

• **activeTimestampPresent**: `boolean`

This field shall be True if the Node has an active timestamp present, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.1

#### Inherited from

TypeFromSchema.activeTimestampPresent

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:311](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L311)

___

### channelMaskPresent

• **channelMaskPresent**: `boolean`

This field shall be True if the Node has available a mask of available channels, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.12

#### Inherited from

TypeFromSchema.channelMaskPresent

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:390](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L390)

___

### channelPresent

• **channelPresent**: `boolean`

This field shall be True if the Node has configured an operational channel for the Thread network, else
False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.9

#### Inherited from

TypeFromSchema.channelPresent

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:368](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L368)

___

### delayPresent

• **delayPresent**: `boolean`

This field shall be True if the Node has the Thread network delay set, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.7

#### Inherited from

TypeFromSchema.delayPresent

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:353](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L353)

___

### extendedPanIdPresent

• **extendedPanIdPresent**: `boolean`

This field shall be True if the Node has an extended Pan ID, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.5

#### Inherited from

TypeFromSchema.extendedPanIdPresent

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:339](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L339)

___

### masterKeyPresent

• **masterKeyPresent**: `boolean`

This field shall be True if the Node has the Thread master key, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.3

#### Inherited from

TypeFromSchema.masterKeyPresent

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:325](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L325)

___

### meshLocalPrefixPresent

• **meshLocalPrefixPresent**: `boolean`

This field shall be True if the Node has the mesh local prefix, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.6

#### Inherited from

TypeFromSchema.meshLocalPrefixPresent

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:346](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L346)

___

### networkNamePresent

• **networkNamePresent**: `boolean`

This field shall be True if the Node has the Thread network’s name, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.4

#### Inherited from

TypeFromSchema.networkNamePresent

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:332](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L332)

___

### panIdPresent

• **panIdPresent**: `boolean`

This field shall be True if the Node has a Pan ID, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.8

#### Inherited from

TypeFromSchema.panIdPresent

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:360](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L360)

___

### pendingTimestampPresent

• **pendingTimestampPresent**: `boolean`

This field shall be True if the Node has a pending timestamp is present, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.2

#### Inherited from

TypeFromSchema.pendingTimestampPresent

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:318](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L318)

___

### pskcPresent

• **pskcPresent**: `boolean`

This field shall be True if the Node has been configured with the Thread network Pskc, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.10

#### Inherited from

TypeFromSchema.pskcPresent

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:375](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L375)

___

### securityPolicyPresent

• **securityPolicyPresent**: `boolean`

This field shall be True if the Node has been configured with the Thread network security policies, else
False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.11

#### Inherited from

TypeFromSchema.securityPolicyPresent

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:383](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L383)
