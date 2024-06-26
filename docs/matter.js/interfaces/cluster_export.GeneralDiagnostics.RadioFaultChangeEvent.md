[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md) / RadioFaultChangeEvent

# Interface: RadioFaultChangeEvent

[cluster/export](../modules/cluster_export.md).[GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md).RadioFaultChangeEvent

Body of the GeneralDiagnostics radioFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.11.8.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvRadioFaultChangeEvent`](../modules/cluster_export.GeneralDiagnostics.md#tlvradiofaultchangeevent)\>

  ↳ **`RadioFaultChangeEvent`**

## Table of contents

### Properties

- [current](cluster_export.GeneralDiagnostics.RadioFaultChangeEvent.md#current)
- [previous](cluster_export.GeneralDiagnostics.RadioFaultChangeEvent.md#previous)

## Properties

### current

• **current**: [`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.11.4.2, “RadioFaultEnum”.

**`See`**

MatterSpecification.v11.Core § 11.11.8.2.1

#### Inherited from

TypeFromSchema.current

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:410](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L410)

___

### previous

• **previous**: [`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.11.4.2,
“RadioFaultEnum”.

**`See`**

MatterSpecification.v11.Core § 11.11.8.2.2

#### Inherited from

TypeFromSchema.previous

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:418](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L418)
