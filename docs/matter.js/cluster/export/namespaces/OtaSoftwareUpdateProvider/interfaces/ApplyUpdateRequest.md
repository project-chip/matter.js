[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OtaSoftwareUpdateProvider](../README.md) / ApplyUpdateRequest

# Interface: ApplyUpdateRequest

Input to the OtaSoftwareUpdateProvider applyUpdateRequest command

## See

MatterSpecification.v11.Core § 11.19.6.5.19

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvApplyUpdateRequest`](../README.md#tlvapplyupdaterequest)\>

## Properties

### newVersion

> **newVersion**: `number`

#### Inherited from

`TypeFromSchema.newVersion`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L127)

***

### updateToken

> **updateToken**: `Uint8Array`

#### Inherited from

`TypeFromSchema.updateToken`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:126](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L126)
