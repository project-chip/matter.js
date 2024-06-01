[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/interaction/export](../README.md) / \<internal\>

# \<internal\>

## Index

### Classes

- [InteractionMessenger](classes/InteractionMessenger.md)

### Interfaces

- [AttributePathWithValueVersion](interfaces/AttributePathWithValueVersion.md)
- [EventPathWithEventData](interfaces/EventPathWithEventData.md)

## Type Aliases

### AttributeDataPayload

> **AttributeDataPayload**: `Omit`\<[`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAttributeReportData`](../README.md#tlvattributereportdata)\>, `"data"`\> & `object`

Type for TlvAttributeReportData where the real data are represented with the schema and the JS value.

#### Type declaration

##### payload

> **payload**: `any`

##### schema

> **schema**: [`TlvSchema`](../../../../tlv/export/classes/TlvSchema.md)\<`any`\>

#### Source

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L37)
