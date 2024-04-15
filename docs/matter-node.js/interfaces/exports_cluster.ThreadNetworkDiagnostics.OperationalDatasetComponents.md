[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ThreadNetworkDiagnostics](../modules/exports_cluster.ThreadNetworkDiagnostics.md) / OperationalDatasetComponents

# Interface: OperationalDatasetComponents

[exports/cluster](../modules/exports_cluster.md).[ThreadNetworkDiagnostics](../modules/exports_cluster.ThreadNetworkDiagnostics.md).OperationalDatasetComponents

**`See`**

MatterSpecification.v11.Core § 11.13.5.7

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvOperationalDatasetComponents`](../modules/exports_cluster.ThreadNetworkDiagnostics.md#tlvoperationaldatasetcomponents)\>

  ↳ **`OperationalDatasetComponents`**

## Table of contents

### Properties

- [activeTimestampPresent](exports_cluster.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#activetimestamppresent)
- [channelMaskPresent](exports_cluster.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#channelmaskpresent)
- [channelPresent](exports_cluster.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#channelpresent)
- [delayPresent](exports_cluster.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#delaypresent)
- [extendedPanIdPresent](exports_cluster.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#extendedpanidpresent)
- [masterKeyPresent](exports_cluster.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#masterkeypresent)
- [meshLocalPrefixPresent](exports_cluster.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#meshlocalprefixpresent)
- [networkNamePresent](exports_cluster.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#networknamepresent)
- [panIdPresent](exports_cluster.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#panidpresent)
- [pendingTimestampPresent](exports_cluster.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#pendingtimestamppresent)
- [pskcPresent](exports_cluster.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#pskcpresent)
- [securityPolicyPresent](exports_cluster.ThreadNetworkDiagnostics.OperationalDatasetComponents.md#securitypolicypresent)

## Properties

### activeTimestampPresent

• **activeTimestampPresent**: `boolean`

This field shall be True if the Node has an active timestamp present, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.1

#### Inherited from

TypeFromSchema.activeTimestampPresent

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:260

___

### channelMaskPresent

• **channelMaskPresent**: `boolean`

This field shall be True if the Node has available a mask of available channels, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.12

#### Inherited from

TypeFromSchema.channelMaskPresent

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:328

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

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:309

___

### delayPresent

• **delayPresent**: `boolean`

This field shall be True if the Node has the Thread network delay set, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.7

#### Inherited from

TypeFromSchema.delayPresent

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:296

___

### extendedPanIdPresent

• **extendedPanIdPresent**: `boolean`

This field shall be True if the Node has an extended Pan ID, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.5

#### Inherited from

TypeFromSchema.extendedPanIdPresent

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:284

___

### masterKeyPresent

• **masterKeyPresent**: `boolean`

This field shall be True if the Node has the Thread master key, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.3

#### Inherited from

TypeFromSchema.masterKeyPresent

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:272

___

### meshLocalPrefixPresent

• **meshLocalPrefixPresent**: `boolean`

This field shall be True if the Node has the mesh local prefix, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.6

#### Inherited from

TypeFromSchema.meshLocalPrefixPresent

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:290

___

### networkNamePresent

• **networkNamePresent**: `boolean`

This field shall be True if the Node has the Thread network’s name, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.4

#### Inherited from

TypeFromSchema.networkNamePresent

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:278

___

### panIdPresent

• **panIdPresent**: `boolean`

This field shall be True if the Node has a Pan ID, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.8

#### Inherited from

TypeFromSchema.panIdPresent

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:302

___

### pendingTimestampPresent

• **pendingTimestampPresent**: `boolean`

This field shall be True if the Node has a pending timestamp is present, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.2

#### Inherited from

TypeFromSchema.pendingTimestampPresent

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:266

___

### pskcPresent

• **pskcPresent**: `boolean`

This field shall be True if the Node has been configured with the Thread network Pskc, else False.

**`See`**

MatterSpecification.v11.Core § 11.13.5.7.10

#### Inherited from

TypeFromSchema.pskcPresent

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:315

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

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:322
