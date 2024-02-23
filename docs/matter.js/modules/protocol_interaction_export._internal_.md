[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](protocol_interaction_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Classes

- [EventHandler](../classes/protocol_interaction_export._internal_.EventHandler.md)
- [InteractionMessenger](../classes/protocol_interaction_export._internal_.InteractionMessenger.md)

### Interfaces

- [AttributePathWithValueVersion](../interfaces/protocol_interaction_export._internal_.AttributePathWithValueVersion.md)
- [EventPathWithEventData](../interfaces/protocol_interaction_export._internal_.EventPathWithEventData.md)
- [EventStorageData](../interfaces/protocol_interaction_export._internal_.EventStorageData.md)

### Type Aliases

- [AttributeDataPayload](protocol_interaction_export._internal_.md#attributedatapayload)
- [EventDataPayload](protocol_interaction_export._internal_.md#eventdatapayload)

## Type Aliases

### AttributeDataPayload

Ƭ **AttributeDataPayload**: `Omit`\<[`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvAttributeReportData`](protocol_interaction_export.md#tlvattributereportdata)\>, ``"data"``\> & \{ `payload`: `any` ; `schema`: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`any`\>  }

Type for TlvAttributeReportData where the real data are represented with the schema and the JS value.

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:37](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L37)

___

### EventDataPayload

Ƭ **EventDataPayload**: `Omit`\<[`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvEventData`](protocol_interaction_export.md#tlveventdata)\>, ``"data"``\> & \{ `payload`: `any` ; `schema`: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`any`\>  }

Type for TlvEventData where the real data are represented with the schema and the JS value.

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts:48](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/interaction/AttributeDataEncoder.ts#L48)
