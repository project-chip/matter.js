[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md) / NotifyUpdateAppliedRequest

# Interface: NotifyUpdateAppliedRequest

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md).NotifyUpdateAppliedRequest

Input to the OtaSoftwareUpdateProvider notifyUpdateApplied command

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.22

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvNotifyUpdateAppliedRequest`](../modules/exports_cluster.OtaSoftwareUpdateProvider.md#tlvnotifyupdateappliedrequest)\>

  ↳ **`NotifyUpdateAppliedRequest`**

## Table of contents

### Properties

- [softwareVersion](exports_cluster.OtaSoftwareUpdateProvider.NotifyUpdateAppliedRequest.md#softwareversion)
- [updateToken](exports_cluster.OtaSoftwareUpdateProvider.NotifyUpdateAppliedRequest.md#updatetoken)

## Properties

### softwareVersion

• **softwareVersion**: `number`

#### Inherited from

TypeFromSchema.softwareVersion

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:155

___

### updateToken

• **updateToken**: `Uint8Array`

#### Inherited from

TypeFromSchema.updateToken

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:154
