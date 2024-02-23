[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md) / ApplyUpdateAction

# Enumeration: ApplyUpdateAction

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md).ApplyUpdateAction

See Section 11.19.3.6, “Applying a software update” for the semantics of the values. This enumeration is used in
the Action field of the ApplyUpdateResponse command. See (Section 11.19.6.5.4.1, “Action Field”).

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.6.4.2

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

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:131](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L131)

___

### Discontinue

• **Discontinue** = ``2``

The OTA Provider is conveying a desire to rescind a previously provided Software Image.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:136](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L136)

___

### Proceed

• **Proceed** = ``0``

Apply the update.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:126](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L126)
