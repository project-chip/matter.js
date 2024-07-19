[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md) / BootReasonEvent

# Interface: BootReasonEvent

[cluster/export](../modules/cluster_export.md).[GeneralDiagnostics](../modules/cluster_export.GeneralDiagnostics.md).BootReasonEvent

Body of the GeneralDiagnostics bootReason event

**`See`**

MatterSpecification.v11.Core § 11.11.8.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvBootReasonEvent`](../modules/cluster_export.GeneralDiagnostics.md#tlvbootreasonevent)\>

  ↳ **`BootReasonEvent`**

## Table of contents

### Properties

- [bootReason](cluster_export.GeneralDiagnostics.BootReasonEvent.md#bootreason)

## Properties

### bootReason

• **bootReason**: [`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)

This field shall contain the reason for this BootReason event.

**`See`**

MatterSpecification.v11.Core § 11.11.8.4.1

#### Inherited from

TypeFromSchema.bootReason

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:469](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L469)
