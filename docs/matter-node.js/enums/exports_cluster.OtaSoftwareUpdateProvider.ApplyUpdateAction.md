[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md) / ApplyUpdateAction

# Enumeration: ApplyUpdateAction

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md).ApplyUpdateAction

See Section 11.19.3.6, “Applying a software update” for the semantics of the values. This enumeration is used in
the Action field of the ApplyUpdateResponse command. See (Section 11.19.6.5.4.1, “Action Field”).

**`See`**

MatterCoreSpecificationV1_1 § 11.19.6.4.2

## Table of contents

### Enumeration Members

- [AwaitNextAction](exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md#awaitnextaction)
- [Discontinue](exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md#discontinue)
- [Proceed](exports_cluster.OtaSoftwareUpdateProvider.ApplyUpdateAction.md#proceed)

## Enumeration Members

### AwaitNextAction

• **AwaitNextAction** = ``1``

Wait at least the given delay time.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:108

___

### Discontinue

• **Discontinue** = ``2``

The OTA Provider is conveying a desire to rescind a previously provided Software Image.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:112

___

### Proceed

• **Proceed** = ``0``

Apply the update.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:104
