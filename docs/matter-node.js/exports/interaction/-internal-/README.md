[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/interaction](../README.md) / \<internal\>

# \<internal\>

## Index

### Namespaces

- [SubscriptionOptions](namespaces/SubscriptionOptions/README.md)

### Classes

- [InteractionMessenger](classes/InteractionMessenger.md)

### Interfaces

- [SubscriptionOptions](interfaces/SubscriptionOptions.md)

## References

### Configuration

Re-exports [Configuration](namespaces/SubscriptionOptions/interfaces/Configuration.md)

## Type Aliases

### AttributeDataPayload

> **AttributeDataPayload**: `Omit`\<[`TypeFromSchema`](../../tlv/README.md#typefromschemas)\<*typeof* [`TlvAttributeReportData`](../README.md#tlvattributereportdata)\>, `"data"`\> & `object`

Type for TlvAttributeReportData where the real data are represented with the schema and the JS value.

#### Type declaration

##### payload

> **payload**: `any`

##### schema

> **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`any`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/AttributeDataEncoder.d.ts:12
