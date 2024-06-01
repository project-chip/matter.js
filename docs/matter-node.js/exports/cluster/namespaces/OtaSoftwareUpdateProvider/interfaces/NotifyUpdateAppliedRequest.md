[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OtaSoftwareUpdateProvider](../README.md) / NotifyUpdateAppliedRequest

# Interface: NotifyUpdateAppliedRequest

Input to the OtaSoftwareUpdateProvider notifyUpdateApplied command

## See

MatterSpecification.v11.Core § 11.19.6.5.25

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvNotifyUpdateAppliedRequest`](../README.md#tlvnotifyupdateappliedrequest)\>

## Properties

### softwareVersion

> **softwareVersion**: `number`

#### Inherited from

`TypeFromSchema.softwareVersion`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:155

***

### updateToken

> **updateToken**: `Uint8Array`

#### Inherited from

`TypeFromSchema.updateToken`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:154
