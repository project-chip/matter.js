[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md) / NetworkFaultChangeEvent

# Interface: NetworkFaultChangeEvent

[exports/cluster](../modules/exports_cluster.md).[GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md).NetworkFaultChangeEvent

Body of the GeneralDiagnostics networkFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.11.8.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvNetworkFaultChangeEvent`](../modules/exports_cluster.GeneralDiagnostics.md#tlvnetworkfaultchangeevent)\>

  ↳ **`NetworkFaultChangeEvent`**

## Table of contents

### Properties

- [current](exports_cluster.GeneralDiagnostics.NetworkFaultChangeEvent.md#current)
- [previous](exports_cluster.GeneralDiagnostics.NetworkFaultChangeEvent.md#previous)

## Properties

### current

• **current**: [`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]

#### Inherited from

TypeFromSchema.current

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:356

___

### previous

• **previous**: [`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[]

#### Inherited from

TypeFromSchema.previous

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:357
