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

#### Inherited from

TypeFromSchema.current

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:405](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L405)

___

### previous

• **previous**: [`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]

#### Inherited from

TypeFromSchema.previous

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:406](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L406)
