[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](exports_interaction.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### References

- [Configuration](exports_interaction._internal_.md#configuration)

### Namespaces

- [SubscriptionOptions](exports_interaction._internal_.SubscriptionOptions.md)

### Classes

- [InteractionMessenger](../classes/exports_interaction._internal_.InteractionMessenger.md)

### Interfaces

- [SubscriptionOptions](../interfaces/exports_interaction._internal_.SubscriptionOptions-1.md)

### Type Aliases

- [AttributeDataPayload](exports_interaction._internal_.md#attributedatapayload)

## References

### Configuration

Re-exports [Configuration](../interfaces/exports_interaction._internal_.SubscriptionOptions.Configuration.md)

## Type Aliases

### AttributeDataPayload

Ƭ **AttributeDataPayload**: `Omit`\<[`TypeFromSchema`](exports_tlv.md#typefromschema)\<typeof [`TlvAttributeReportData`](exports_interaction.md#tlvattributereportdata)\>, ``"data"``\> & \{ `payload`: `any` ; `schema`: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`any`\>  }

Type for TlvAttributeReportData where the real data are represented with the schema and the JS value.

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:12
