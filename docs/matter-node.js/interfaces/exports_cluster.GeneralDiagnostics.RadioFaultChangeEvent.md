[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md) / RadioFaultChangeEvent

# Interface: RadioFaultChangeEvent

[exports/cluster](../modules/exports_cluster.md).[GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md).RadioFaultChangeEvent

Body of the GeneralDiagnostics radioFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.11.8.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvRadioFaultChangeEvent`](../modules/exports_cluster.GeneralDiagnostics.md#tlvradiofaultchangeevent)\>

  ↳ **`RadioFaultChangeEvent`**

## Table of contents

### Properties

- [current](exports_cluster.GeneralDiagnostics.RadioFaultChangeEvent.md#current)
- [previous](exports_cluster.GeneralDiagnostics.RadioFaultChangeEvent.md#previous)

## Properties

### current

• **current**: [`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]

#### Inherited from

TypeFromSchema.current

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:340

___

### previous

• **previous**: [`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[]

#### Inherited from

TypeFromSchema.previous

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:341
