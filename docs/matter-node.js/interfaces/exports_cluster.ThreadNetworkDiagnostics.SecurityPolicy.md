[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ThreadNetworkDiagnostics](../modules/exports_cluster.ThreadNetworkDiagnostics.md) / SecurityPolicy

# Interface: SecurityPolicy

[exports/cluster](../modules/exports_cluster.md).[ThreadNetworkDiagnostics](../modules/exports_cluster.ThreadNetworkDiagnostics.md).SecurityPolicy

**`See`**

MatterSpecification.v11.Core § 11.13.5.6

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSecurityPolicy`](../modules/exports_cluster.ThreadNetworkDiagnostics.md#tlvsecuritypolicy)\>

  ↳ **`SecurityPolicy`**

## Table of contents

### Properties

- [flags](exports_cluster.ThreadNetworkDiagnostics.SecurityPolicy.md#flags)
- [rotationTime](exports_cluster.ThreadNetworkDiagnostics.SecurityPolicy.md#rotationtime)

## Properties

### flags

• **flags**: `number`

This field shall specify the flags as specified in Thread 1.3.0 section 8.10.1.15. This attribute shall be
null when there is no dataset configured.

**`See`**

MatterSpecification.v11.Core § 11.13.5.6.2

#### Inherited from

TypeFromSchema.flags

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:244

___

### rotationTime

• **rotationTime**: `number`

This field shall specify the interval of time, in hours, that Thread security keys are rotated. This
attribute shall be null when there is no dataset configured.

**`See`**

MatterSpecification.v11.Core § 11.13.5.6.1

#### Inherited from

TypeFromSchema.rotationTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:237
