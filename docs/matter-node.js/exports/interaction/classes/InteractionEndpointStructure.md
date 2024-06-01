[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/interaction](../README.md) / InteractionEndpointStructure

# Class: InteractionEndpointStructure

## Constructors

### new InteractionEndpointStructure()

> **new InteractionEndpointStructure**(): [`InteractionEndpointStructure`](InteractionEndpointStructure.md)

#### Returns

[`InteractionEndpointStructure`](InteractionEndpointStructure.md)

## Properties

### attributePaths

> **attributePaths**: [`AttributePath`](../interfaces/AttributePath.md)[]

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:24

***

### attributes

> **attributes**: `Map`\<`string`, [`AnyAttributeServer`](../../cluster/README.md#anyattributeservert)\<`any`\>\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:23

***

### change

> **change**: [`Observable`](../../../util/export/interfaces/Observable.md)\<`any`[], `void`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:29

***

### commandPaths

> **commandPaths**: [`CommandPath`](../interfaces/CommandPath.md)[]

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:28

***

### commands

> **commands**: `Map`\<`string`, [`CommandServer`](../../cluster/classes/CommandServer.md)\<`any`, `any`\>\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:27

***

### endpoints

> **endpoints**: `Map`\<[`EndpointNumber`](../../datatype/README.md#endpointnumber), [`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md)\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:22

***

### eventPaths

> **eventPaths**: [`EventPath`](../interfaces/EventPath.md)[]

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:26

***

### events

> **events**: `Map`\<`string`, [`EventServer`](../../cluster/classes/EventServer.md)\<`any`, `any`\>\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:25

***

### initializeStructureFromEndpoints

> `private` **initializeStructureFromEndpoints**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:33

***

### verifyAndInitializeStructureElementsFromEndpoint

> `private` **verifyAndInitializeStructureElementsFromEndpoint**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:34

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:30

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:31

***

### getAttribute()

> **getAttribute**(`endpointId`, `clusterId`, `attributeId`): `undefined` \| [`AnyAttributeServer`](../../cluster/README.md#anyattributeservert)\<`any`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |
| `attributeId` | [`AttributeId`](../../datatype/README.md#attributeid) |

#### Returns

`undefined` \| [`AnyAttributeServer`](../../cluster/README.md#anyattributeservert)\<`any`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:44

***

### getAttributes()

> **getAttributes**(`filters`, `onlyWritable`?): [`AttributeWithPath`](../interfaces/AttributeWithPath.md)[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filters` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>[] |
| `onlyWritable`? | `boolean` |

#### Returns

[`AttributeWithPath`](../interfaces/AttributeWithPath.md)[]

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:53

***

### getClusterServer()

> **getClusterServer**(`endpointId`, `clusterId`): `undefined` \| [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<`any`, `any`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<`any`, `any`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:42

***

### getCommand()

> **getCommand**(`endpointId`, `clusterId`, `commandId`): `undefined` \| [`CommandServer`](../../cluster/classes/CommandServer.md)\<`any`, `any`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |
| `commandId` | [`CommandId`](../../datatype/README.md#commandid) |

#### Returns

`undefined` \| [`CommandServer`](../../cluster/classes/CommandServer.md)\<`any`, `any`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:50

***

### getCommands()

> **getCommands**(`filters`): [`CommandWithPath`](../interfaces/CommandWithPath.md)[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filters` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`CommandWithPath`](../interfaces/CommandWithPath.md)[]

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:55

***

### getEndpoint()

> **getEndpoint**(`endpointId`): `undefined` \| [`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |

#### Returns

`undefined` \| [`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:40

***

### getEvent()

> **getEvent**(`endpointId`, `clusterId`, `eventId`): `undefined` \| [`EventServer`](../../cluster/classes/EventServer.md)\<`any`, `any`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |
| `eventId` | [`EventId`](../../datatype/README.md#eventid) |

#### Returns

`undefined` \| [`EventServer`](../../cluster/classes/EventServer.md)\<`any`, `any`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:47

***

### getEvents()

> **getEvents**(`filters`): [`EventWithPath`](../interfaces/EventWithPath.md)[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `filters` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>[] |

#### Returns

[`EventWithPath`](../interfaces/EventWithPath.md)[]

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:54

***

### hasAttribute()

> **hasAttribute**(`endpointId`, `clusterId`, `attributeId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |
| `attributeId` | [`AttributeId`](../../datatype/README.md#attributeid) |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:45

***

### hasClusterServer()

> **hasClusterServer**(`endpointId`, `clusterId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:43

***

### hasCommand()

> **hasCommand**(`endpointId`, `clusterId`, `commandId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |
| `commandId` | [`CommandId`](../../datatype/README.md#commandid) |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:51

***

### hasEndpoint()

> **hasEndpoint**(`endpointId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:41

***

### hasEvent()

> **hasEvent**(`endpointId`, `clusterId`, `eventId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |
| `eventId` | [`EventId`](../../datatype/README.md#eventid) |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:48

***

### initializeFromEndpoint()

> **initializeFromEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:32

***

### resolveAttributeName()

> **resolveAttributeName**(`__namedParameters`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:37

***

### resolveCommandName()

> **resolveCommandName**(`__namedParameters`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:39

***

### resolveEventName()

> **resolveEventName**(`__namedParameters`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:38

***

### resolveGenericElementName()

> **resolveGenericElementName**(`nodeId`, `endpointId`, `clusterId`, `elementId`, `elementMap`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | `undefined` \| [`NodeId`](../../datatype/README.md#nodeid) |
| `endpointId` | `undefined` \| [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | `undefined` \| [`ClusterId`](../../datatype/README.md#clusterid) |
| `elementId` | `undefined` \| `number` |
| `elementMap` | `Map`\<`string`, `any`\> |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:36

***

### toHex()

> **toHex**(`value`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` \| `bigint` |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:35

***

### validateAnyPathDataTypes()

> **validateAnyPathDataTypes**(`data`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `object` |
| `data.attributeId`? | [`AttributeId`](../../datatype/README.md#attributeid) |
| `data.clusterId`? | [`ClusterId`](../../datatype/README.md#clusterid) |
| `data.commandId`? | [`CommandId`](../../datatype/README.md#commandid) |
| `data.endpointId`? | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `data.eventId`? | [`EventId`](../../datatype/README.md#eventid) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:56

***

### validateConcreteAttributePath()

> **validateConcreteAttributePath**(`endpointId`, `clusterId`, `attributeId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |
| `attributeId` | [`AttributeId`](../../datatype/README.md#attributeid) |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:46

***

### validateConcreteCommandPath()

> **validateConcreteCommandPath**(`endpointId`, `clusterId`, `commandId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |
| `commandId` | [`CommandId`](../../datatype/README.md#commandid) |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:52

***

### validateConcreteEventPath()

> **validateConcreteEventPath**(`endpointId`, `clusterId`, `eventId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |
| `eventId` | [`EventId`](../../datatype/README.md#eventid) |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionEndpointStructure.d.ts:49
