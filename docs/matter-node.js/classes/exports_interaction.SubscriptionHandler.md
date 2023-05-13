[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / SubscriptionHandler

# Class: SubscriptionHandler

[exports/interaction](../modules/exports_interaction.md).SubscriptionHandler

## Table of contents

### Constructors

- [constructor](exports_interaction.SubscriptionHandler.md#constructor)

### Properties

- [attributeListeners](exports_interaction.SubscriptionHandler.md#attributelisteners)
- [attributes](exports_interaction.SubscriptionHandler.md#attributes)
- [fabric](exports_interaction.SubscriptionHandler.md#fabric)
- [lastUpdateTimeMs](exports_interaction.SubscriptionHandler.md#lastupdatetimems)
- [maxInterval](exports_interaction.SubscriptionHandler.md#maxinterval)
- [maxIntervalCeilingMs](exports_interaction.SubscriptionHandler.md#maxintervalceilingms)
- [minIntervalFloorMs](exports_interaction.SubscriptionHandler.md#minintervalfloorms)
- [outstandingAttributeUpdates](exports_interaction.SubscriptionHandler.md#outstandingattributeupdates)
- [peerNodeId](exports_interaction.SubscriptionHandler.md#peernodeid)
- [sendInterval](exports_interaction.SubscriptionHandler.md#sendinterval)
- [sendUpdateMessage](exports_interaction.SubscriptionHandler.md#sendupdatemessage)
- [sendUpdatesActivated](exports_interaction.SubscriptionHandler.md#sendupdatesactivated)
- [server](exports_interaction.SubscriptionHandler.md#server)
- [subscriptionId](exports_interaction.SubscriptionHandler.md#subscriptionid)
- [updateTimer](exports_interaction.SubscriptionHandler.md#updatetimer)

### Methods

- [activateSendingUpdates](exports_interaction.SubscriptionHandler.md#activatesendingupdates)
- [attributeChangeListener](exports_interaction.SubscriptionHandler.md#attributechangelistener)
- [cancel](exports_interaction.SubscriptionHandler.md#cancel)
- [getMaxInterval](exports_interaction.SubscriptionHandler.md#getmaxinterval)
- [sendInitialReport](exports_interaction.SubscriptionHandler.md#sendinitialreport)
- [sendUpdate](exports_interaction.SubscriptionHandler.md#sendupdate)

## Constructors

### constructor

• **new SubscriptionHandler**(`subscriptionId`, `server`, `fabric`, `peerNodeId`, `attributes`, `minIntervalFloor`, `maxIntervalCeiling`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `server` | [`MatterDevice`](index.MatterDevice.md) |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `peerNodeId` | [`NodeId`](exports_datatype.NodeId.md) |
| `attributes` | [`AttributeWithPath`](../interfaces/exports_interaction.AttributeWithPath.md)[] |
| `minIntervalFloor` | `number` |
| `maxIntervalCeiling` | `number` |

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:29

## Properties

### attributeListeners

• `Private` **attributeListeners**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:23

___

### attributes

• `Private` `Readonly` **attributes**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:19

___

### fabric

• `Private` `Readonly` **fabric**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:17

___

### lastUpdateTimeMs

• `Private` **lastUpdateTimeMs**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:20

___

### maxInterval

• `Private` `Readonly` **maxInterval**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:25

___

### maxIntervalCeilingMs

• `Private` `Readonly` **maxIntervalCeilingMs**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:28

___

### minIntervalFloorMs

• `Private` `Readonly` **minIntervalFloorMs**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:27

___

### outstandingAttributeUpdates

• `Private` **outstandingAttributeUpdates**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:22

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:18

___

### sendInterval

• `Private` `Readonly` **sendInterval**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:26

___

### sendUpdateMessage

• `Private` **sendUpdateMessage**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:36

___

### sendUpdatesActivated

• `Private` **sendUpdatesActivated**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:24

___

### server

• `Private` `Readonly` **server**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:16

___

### subscriptionId

• `Readonly` **subscriptionId**: `number`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:15

___

### updateTimer

• `Private` **updateTimer**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:21

## Methods

### activateSendingUpdates

▸ **activateSendingUpdates**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:31

___

### attributeChangeListener

▸ **attributeChangeListener**(`path`, `schema`, `version`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\> |
| `schema` | [`TlvSchema`](exports_tlv.TlvSchema.md)<`any`\> |
| `version` | `number` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:34

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:35

___

### getMaxInterval

▸ **getMaxInterval**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:30

___

### sendInitialReport

▸ **sendInitialReport**(`messenger`, `session`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messenger` | [`InteractionServerMessenger`](exports_interaction.InteractionServerMessenger.md) |
| `session` | [`SecureSession`](exports_session.SecureSession.md)<[`MatterDevice`](index.MatterDevice.md)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:33

___

### sendUpdate

▸ **sendUpdate**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/SubscriptionHandler.d.ts:32
