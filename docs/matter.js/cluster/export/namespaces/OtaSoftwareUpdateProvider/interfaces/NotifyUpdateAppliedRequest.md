[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OtaSoftwareUpdateProvider](../README.md) / NotifyUpdateAppliedRequest

# Interface: NotifyUpdateAppliedRequest

Input to the OtaSoftwareUpdateProvider notifyUpdateApplied command

## See

MatterSpecification.v11.Core § 11.19.6.5.25

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvNotifyUpdateAppliedRequest`](../README.md#tlvnotifyupdateappliedrequest)\>

## Properties

### softwareVersion

> **softwareVersion**: `number`

#### Inherited from

`TypeFromSchema.softwareVersion`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:180](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L180)

***

### updateToken

> **updateToken**: `Uint8Array`

#### Inherited from

`TypeFromSchema.updateToken`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:179](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L179)
