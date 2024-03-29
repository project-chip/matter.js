[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md) / NetworkFaultChangeEvent

# Interface: NetworkFaultChangeEvent

[cluster/export](../modules/cluster_export.md).[GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md).NetworkFaultChangeEvent

Body of the GeneralDiagnostics networkFaultChange event

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.11.8.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvNetworkFaultChangeEvent`](../modules/cluster_export.GeneralDiagnostics.md#tlvnetworkfaultchangeevent)\>

  ↳ **`NetworkFaultChangeEvent`**

## Table of contents

### Properties

- [current](cluster_export.GeneralDiagnostics.NetworkFaultChangeEvent.md#current)
- [previous](cluster_export.GeneralDiagnostics.NetworkFaultChangeEvent.md#previous)

## Properties

### current

• **current**: [`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]

#### Inherited from

TypeFromSchema.current

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:423](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L423)

___

### previous

• **previous**: [`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]

#### Inherited from

TypeFromSchema.previous

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:424](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L424)
