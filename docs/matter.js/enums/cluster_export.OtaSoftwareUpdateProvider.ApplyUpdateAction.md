[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md) / ApplyUpdateAction

# Enumeration: ApplyUpdateAction

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md).ApplyUpdateAction

See Section 11.19.3.6, “Applying a software update” for the semantics of the values. This enumeration is used in
the Action field of the ApplyUpdateResponse command. See (Section 11.19.6.5.4.1, “Action Field”).

**`See`**

MatterSpecification.v11.Core § 11.19.6.4.2

## Table of contents

### Enumeration Members

- [AwaitNextAction](cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md#awaitnextaction)
- [Discontinue](cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md#discontinue)
- [Proceed](cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md#proceed)

## Enumeration Members

### AwaitNextAction

• **AwaitNextAction** = ``1``

Wait at least the given delay time.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:152](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L152)

___

### Discontinue

• **Discontinue** = ``2``

The OTA Provider is conveying a desire to rescind a previously provided Software Image.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:157](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L157)

___

### Proceed

• **Proceed** = ``0``

Apply the update.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:147](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L147)
