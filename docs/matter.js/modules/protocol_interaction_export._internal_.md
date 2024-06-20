[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](protocol_interaction_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Classes

- [InteractionMessenger](../classes/protocol_interaction_export._internal_.InteractionMessenger.md)

### Interfaces

- [AttributePathWithValueVersion](../interfaces/protocol_interaction_export._internal_.AttributePathWithValueVersion.md)
- [EventPathWithEventData](../interfaces/protocol_interaction_export._internal_.EventPathWithEventData.md)

### Type Aliases

- [AttributeDataPayload](protocol_interaction_export._internal_.md#attributedatapayload)

## Type Aliases

### AttributeDataPayload

Ƭ **AttributeDataPayload**: `Omit`\<[`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvAttributeReportData`](protocol_interaction_export.md#tlvattributereportdata)\>, ``"data"``\> & \{ `payload`: `any` ; `schema`: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`any`\>  }

Type for TlvAttributeReportData where the real data are represented with the schema and the JS value.

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:37](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L37)
