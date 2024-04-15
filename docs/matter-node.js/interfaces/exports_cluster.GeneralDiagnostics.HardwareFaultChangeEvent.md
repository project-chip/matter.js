[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md) / HardwareFaultChangeEvent

# Interface: HardwareFaultChangeEvent

[exports/cluster](../modules/exports_cluster.md).[GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md).HardwareFaultChangeEvent

Body of the GeneralDiagnostics hardwareFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.11.8.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvHardwareFaultChangeEvent`](../modules/exports_cluster.GeneralDiagnostics.md#tlvhardwarefaultchangeevent)\>

  ↳ **`HardwareFaultChangeEvent`**

## Table of contents

### Properties

- [current](exports_cluster.GeneralDiagnostics.HardwareFaultChangeEvent.md#current)
- [previous](exports_cluster.GeneralDiagnostics.HardwareFaultChangeEvent.md#previous)

## Properties

### current

• **current**: [`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.11.4.1,
“HardwareFaultEnum”.

**`See`**

MatterSpecification.v11.Core § 11.11.8.1.1

#### Inherited from

TypeFromSchema.current

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:317

___

### previous

• **previous**: [`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section

11.11.4.1, “HardwareFaultEnum”.

**`See`**

MatterSpecification.v11.Core § 11.11.8.1.2

#### Inherited from

TypeFromSchema.previous

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:325
