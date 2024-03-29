[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md) / SecurityPolicy

# Interface: SecurityPolicy

[cluster/export](../modules/cluster_export.md).[ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md).SecurityPolicy

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSecurityPolicy`](../modules/cluster_export.ThreadNetworkDiagnostics.md#tlvsecuritypolicy)\>

  ↳ **`SecurityPolicy`**

## Table of contents

### Properties

- [flags](cluster_export.ThreadNetworkDiagnostics.SecurityPolicy.md#flags)
- [rotationTime](cluster_export.ThreadNetworkDiagnostics.SecurityPolicy.md#rotationtime)

## Properties

### flags

• **flags**: `number`

This field shall specify the flags as specified in Thread 1.3.0 section 8.10.1.15. This attribute shall be
null when there is no dataset configured.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.6.2

#### Inherited from

TypeFromSchema.flags

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:295](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L295)

___

### rotationTime

• **rotationTime**: `number`

This field shall specify the interval of time, in hours, that Thread security keys are rotated. This
attribute shall be null when there is no dataset configured.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.6.1

#### Inherited from

TypeFromSchema.rotationTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:287](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L287)
