[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](exports_interaction.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Classes

- [EventHandler](../classes/exports_interaction._internal_.EventHandler.md)
- [InteractionMessenger](../classes/exports_interaction._internal_.InteractionMessenger.md)

### Interfaces

- [EventData](../interfaces/exports_interaction._internal_.EventData.md)
- [EventStorageData](../interfaces/exports_interaction._internal_.EventStorageData.md)

### Type Aliases

- [AttributeDataPayload](exports_interaction._internal_.md#attributedatapayload)
- [EventDataPayload](exports_interaction._internal_.md#eventdatapayload)

## Type Aliases

### AttributeDataPayload

Ƭ **AttributeDataPayload**: `Omit`\<[`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvAttributeReportData`](exports_interaction.md#tlvattributereportdata)\>, ``"data"``\> & \{ `payload`: `any` ; `schema`: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`any`\>  }

Type for TlvAttributeReportData where the real data are represented with the schema and the JS value.

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:12

___

### EventDataPayload

Ƭ **EventDataPayload**: `Omit`\<[`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvEventData`](exports_interaction.md#tlveventdata)\>, ``"data"``\> & \{ `payload`: `any` ; `schema`: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`any`\>  }

Type for TlvEventData where the real data are represented with the schema and the JS value.

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:21
