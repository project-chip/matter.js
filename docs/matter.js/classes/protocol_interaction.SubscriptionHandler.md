[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction](../modules/protocol_interaction.md) / SubscriptionHandler

# Class: SubscriptionHandler

[protocol/interaction](../modules/protocol_interaction.md).SubscriptionHandler

## Table of contents

### Constructors

- [constructor](protocol_interaction.SubscriptionHandler.md#constructor)

### Properties

- [attributeListeners](protocol_interaction.SubscriptionHandler.md#attributelisteners)
- [attributes](protocol_interaction.SubscriptionHandler.md#attributes)
- [fabric](protocol_interaction.SubscriptionHandler.md#fabric)
- [lastUpdateTimeMs](protocol_interaction.SubscriptionHandler.md#lastupdatetimems)
- [maxInterval](protocol_interaction.SubscriptionHandler.md#maxinterval)
- [maxIntervalCeilingMs](protocol_interaction.SubscriptionHandler.md#maxintervalceilingms)
- [minIntervalFloorMs](protocol_interaction.SubscriptionHandler.md#minintervalfloorms)
- [outstandingAttributeUpdates](protocol_interaction.SubscriptionHandler.md#outstandingattributeupdates)
- [peerNodeId](protocol_interaction.SubscriptionHandler.md#peernodeid)
- [sendInterval](protocol_interaction.SubscriptionHandler.md#sendinterval)
- [sendUpdatesActivated](protocol_interaction.SubscriptionHandler.md#sendupdatesactivated)
- [server](protocol_interaction.SubscriptionHandler.md#server)
- [subscriptionId](protocol_interaction.SubscriptionHandler.md#subscriptionid)
- [updateTimer](protocol_interaction.SubscriptionHandler.md#updatetimer)

### Methods

- [activateSendingUpdates](protocol_interaction.SubscriptionHandler.md#activatesendingupdates)
- [attributeChangeListener](protocol_interaction.SubscriptionHandler.md#attributechangelistener)
- [cancel](protocol_interaction.SubscriptionHandler.md#cancel)
- [getMaxInterval](protocol_interaction.SubscriptionHandler.md#getmaxinterval)
- [sendInitialReport](protocol_interaction.SubscriptionHandler.md#sendinitialreport)
- [sendUpdate](protocol_interaction.SubscriptionHandler.md#sendupdate)
- [sendUpdateMessage](protocol_interaction.SubscriptionHandler.md#sendupdatemessage)

## Constructors

### constructor

• **new SubscriptionHandler**(`subscriptionId`, `server`, `fabric`, `peerNodeId`, `attributes`, `minIntervalFloor`, `maxIntervalCeiling`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `server` | [`MatterDevice`](index.MatterDevice.md) |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `peerNodeId` | [`NodeId`](datatype.NodeId.md) |
| `attributes` | [`AttributeWithPath`](../interfaces/protocol_interaction.AttributeWithPath.md)[] |
| `minIntervalFloor` | `number` |
| `maxIntervalCeiling` | `number` |

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:47](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L47)

## Properties

### attributeListeners

• `Private` **attributeListeners**: `Map`<`string`, (`value`: `any`, `version`: `number`) => `void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L40)

___

### attributes

• `Private` `Readonly` **attributes**: [`AttributeWithPath`](../interfaces/protocol_interaction.AttributeWithPath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:52](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L52)

___

### fabric

• `Private` `Readonly` **fabric**: [`Fabric`](fabric.Fabric.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:50](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L50)

___

### lastUpdateTimeMs

• `Private` **lastUpdateTimeMs**: `number` = `0`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L37)

___

### maxInterval

• `Private` `Readonly` **maxInterval**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L42)

___

### maxIntervalCeilingMs

• `Private` `Readonly` **maxIntervalCeilingMs**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L45)

___

### minIntervalFloorMs

• `Private` `Readonly` **minIntervalFloorMs**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L44)

___

### outstandingAttributeUpdates

• `Private` **outstandingAttributeUpdates**: `Map`<`string`, [`PathValueVersion`](../interfaces/index._internal_.PathValueVersion.md)<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L39)

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: [`NodeId`](datatype.NodeId.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:51](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L51)

___

### sendInterval

• `Private` `Readonly` **sendInterval**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L43)

___

### sendUpdatesActivated

• `Private` **sendUpdatesActivated**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L41)

___

### server

• `Private` `Readonly` **server**: [`MatterDevice`](index.MatterDevice.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L49)

___

### subscriptionId

• `Readonly` **subscriptionId**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:48](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L48)

___

### updateTimer

• `Private` **updateTimer**: [`Timer`](../interfaces/time.Timer.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L38)

## Methods

### activateSendingUpdates

▸ **activateSendingUpdates**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:80](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L80)

___

### attributeChangeListener

▸ **attributeChangeListener**(`path`, `schema`, `version`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\> |
| `schema` | [`TlvSchema`](tlv.TlvSchema.md)<`any`\> |
| `version` | `number` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:138](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L138)

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:143](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L143)

___

### getMaxInterval

▸ **getMaxInterval**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:76](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L76)

___

### sendInitialReport

▸ **sendInitialReport**(`messenger`, `session`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messenger` | [`InteractionServerMessenger`](protocol_interaction.InteractionServerMessenger.md) |
| `session` | [`SecureSession`](session.SecureSession.md)<[`MatterDevice`](index.MatterDevice.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:115](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L115)

___

### sendUpdate

▸ **sendUpdate**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:89](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L89)

___

### sendUpdateMessage

▸ `Private` **sendUpdateMessage**(`values`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`PathValueVersion`](../interfaces/index._internal_.PathValueVersion.md)<`any`\>[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:156](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L156)
