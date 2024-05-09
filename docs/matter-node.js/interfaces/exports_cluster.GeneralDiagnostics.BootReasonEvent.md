[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md) / BootReasonEvent

# Interface: BootReasonEvent

[exports/cluster](../modules/exports_cluster.md).[GeneralDiagnostics](../modules/exports_cluster.GeneralDiagnostics.md).BootReasonEvent

Body of the GeneralDiagnostics bootReason event

**`See`**

MatterSpecification.v11.Core § 11.11.8.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvBootReasonEvent`](../modules/exports_cluster.GeneralDiagnostics.md#tlvbootreasonevent)\>

  ↳ **`BootReasonEvent`**

## Table of contents

### Properties

- [bootReason](exports_cluster.GeneralDiagnostics.BootReasonEvent.md#bootreason)

## Properties

### bootReason

• **bootReason**: [`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md)

This field shall contain the reason for this BootReason event.

**`See`**

MatterSpecification.v11.Core § 11.11.8.4.1

#### Inherited from

TypeFromSchema.bootReason

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:377
