[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](index.md) / <internal\>

# Module: <internal\>

## Table of contents

### Enumerations

- [BitRangeType](../enums/index._internal_.BitRangeType.md)
- [TagControl](../enums/index._internal_.TagControl.md)

### Enumeration Members

- [Enum](index._internal_.md#enum)
- [Flag](index._internal_.md#flag)
- [Number](index._internal_.md#number)

### Classes

- [AttributeClient](../classes/index._internal_.AttributeClient.md)
- [Base38Schema](../classes/index._internal_.Base38Schema.md)
- [GaloisField](../classes/index._internal_.GaloisField.md)
- [InteractionMessenger](../classes/index._internal_.InteractionMessenger.md)
- [ManualPairingCodeSchema](../classes/index._internal_.ManualPairingCodeSchema.md)
- [NamedHandler](../classes/index._internal_.NamedHandler.md)
- [OnOffBaseDevice](../classes/index._internal_.OnOffBaseDevice.md)
- [QrPairingCodeSchema](../classes/index._internal_.QrPairingCodeSchema.md)
- [UdpConnection](../classes/index._internal_.UdpConnection.md)

### Interfaces

- [AttributeOptions](../interfaces/index._internal_.AttributeOptions.md)
- [CachedAttributeInfo](../interfaces/index._internal_.CachedAttributeInfo.md)
- [MrpParameters](../interfaces/index._internal_.MrpParameters.md)
- [PathValueVersion](../interfaces/index._internal_.PathValueVersion.md)
- [scenesTableEntry](../interfaces/index._internal_.scenesTableEntry.md)

### Type Aliases

- [AtLeastOne](index._internal_.md#atleastone)
- [AttributeGetters](index._internal_.md#attributegetters)
- [BitRange](index._internal_.md#bitrange)
- [ClientAttributeGetters](index._internal_.md#clientattributegetters)
- [ClientAttributeSetters](index._internal_.md#clientattributesetters)
- [ClientAttributeSubscribers](index._internal_.md#clientattributesubscribers)
- [ClusterExtend](index._internal_.md#clusterextend)
- [CommandHandlers](index._internal_.md#commandhandlers)
- [CommissioningServerCommands](index._internal_.md#commissioningservercommands)
- [ErrorHandler](index._internal_.md#errorhandler)
- [GetterTypeFromSpec](index._internal_.md#gettertypefromspec)
- [GetterTypeFromSpec](index._internal_.md#gettertypefromspec-1)
- [HandlerFunction](index._internal_.md#handlerfunction)
- [LengthConstraints](index._internal_.md#lengthconstraints)
- [LengthConstraints](index._internal_.md#lengthconstraints-1)
- [MakeAttributeMandatory](index._internal_.md#makeattributemandatory)
- [MakeAttributesMandatory](index._internal_.md#makeattributesmandatory)
- [MandatoryCommandNames](index._internal_.md#mandatorycommandnames)
- [MandatoryFieldNames](index._internal_.md#mandatoryfieldnames)
- [MaskFromBitSchema](index._internal_.md#maskfrombitschema)
- [MaskOffsetFromBitSchema](index._internal_.md#maskoffsetfrombitschema)
- [MatterServerRecordWithExpire](index._internal_.md#matterserverrecordwithexpire)
- [OnOffBaseDeviceCommands](index._internal_.md#onoffbasedevicecommands)
- [OptionalAttributeConf](index._internal_.md#optionalattributeconf)
- [OptionalCommandNames](index._internal_.md#optionalcommandnames)
- [OptionalFieldNames](index._internal_.md#optionalfieldnames)
- [ServerAttributeGetters](index._internal_.md#serverattributegetters)
- [ServerAttributeSetters](index._internal_.md#serverattributesetters)
- [ServerAttributeSubscribers](index._internal_.md#serverattributesubscribers)
- [SupportedComplexStorageTypes](index._internal_.md#supportedcomplexstoragetypes)
- [SupportedStorageBaseTypes](index._internal_.md#supportedstoragebasetypes)
- [TypeForMandatoryFields](index._internal_.md#typeformandatoryfields)
- [TypeForOptionalFields](index._internal_.md#typeforoptionalfields)
- [TypeFromField](index._internal_.md#typefromfield)
- [Unsigned](index._internal_.md#unsigned)
- [UseOptionalAttributes](index._internal_.md#useoptionalattributes)
- [WritableAttributeNames](index._internal_.md#writableattributenames)

### Variables

- [QrCodeDataSchema](index._internal_.md#qrcodedataschema)
- [TlvCommissioningSuccessFailureResponse](index._internal_.md#tlvcommissioningsuccessfailureresponse)

### Functions

- [BitRange](index._internal_.md#bitrange-1)
- [ClusterExtend](index._internal_.md#clusterextend-1)
- [MakeAttributesMandatory](index._internal_.md#makeattributesmandatory-1)
- [UseOptionalAttributes](index._internal_.md#useoptionalattributes-1)

## Enumeration Members

### Enum

• **Enum**: ``2``

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L13)

___

### Flag

• **Flag**: ``0``

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L11)

___

### Number

• **Number**: ``1``

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L12)

## Type Aliases

### AtLeastOne

Ƭ **AtLeastOne**<`T`\>: [`T`, ...T[]]

Array types

**`License`**

Copyright 2022 The node-matter Authors
SPDX-License-Identifier: Apache-2.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/matter.js/src/util/Array.ts:9](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Array.ts#L9)

___

### AttributeGetters

Ƭ **AttributeGetters**<`A`\>: { [P in keyof A as \`get${Capitalize<string & P\>}\`]?: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L44)

___

### BitRange

Ƭ **BitRange**<`T`, `TType`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TType` | extends [`BitRangeType`](../enums/index._internal_.BitRangeType.md) = [`BitRangeType`](../enums/index._internal_.BitRangeType.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_type?` | `T` |
| `length` | `number` |
| `offset` | `number` |
| `type` | `TType` |

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L16)

[packages/matter.js/src/schema/BitmapSchema.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L17)

___

### ClientAttributeGetters

Ƭ **ClientAttributeGetters**<`A`\>: { [P in keyof A as \`get${Capitalize<string & P\>}Attribute\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClient.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/ClusterClient.ts#L19)

___

### ClientAttributeSetters

Ƭ **ClientAttributeSetters**<`A`\>: { [P in WritableAttributeNames<A\> as \`set${Capitalize<string & P\>}Attribute\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClient.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/ClusterClient.ts#L21)

___

### ClientAttributeSubscribers

Ƭ **ClientAttributeSubscribers**<`A`\>: { [P in keyof A as \`subscribe${Capitalize<string & P\>}Attribute\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClient.ts:22](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/ClusterClient.ts#L22)

___

### ClusterExtend

Ƭ **ClusterExtend**<`F`, `SF`, `A`, `C`, `E`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster.Events.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes?` | `A` |
| `commands?` | `C` |
| `events?` | `E` |
| `supportedFeatures` | `SF` |

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:135](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L135)

[packages/matter.js/src/cluster/Cluster.ts:144](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L144)

___

### CommandHandlers

Ƭ **CommandHandlers**<`T`, `A`\>: [`Merge`](util.md#merge)<{ [P in MandatoryCommandNames<T\>]: CommandHandler<T[P], A\> }, { [P in OptionalCommandNames<T\>]?: CommandHandler<T[P], A\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `A` | extends [`AttributeServers`](cluster.md#attributeservers)<`any`\> |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:46](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L46)

___

### CommissioningServerCommands

Ƭ **CommissioningServerCommands**: `Object`

Commands exposed by the CommissioningServer

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `testEventTrigger` | [`CommandHandler`](cluster.md#commandhandler)<typeof `GeneralDiagnosticsCluster.commands.testEventTrigger`, `any`\> | Provide a means for certification tests to trigger some test-plan-specific events. |

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:92](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L92)

___

### ErrorHandler

Ƭ **ErrorHandler**<`T`, `E`\>: (`error`: `E`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends `Error` |

#### Type declaration

▸ (`error`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `E` |

##### Returns

`T`

#### Defined in

[packages/matter.js/src/common/TryCatchHandler.ts:8](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/common/TryCatchHandler.ts#L8)

___

### GetterTypeFromSpec

Ƭ **GetterTypeFromSpec**<`A`\>: `A` extends [`OptionalAttribute`](cluster.md#optionalattribute)<infer T\> ? `T` \| `undefined` : [`AttributeJsType`](cluster.md#attributejstype)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](cluster.md#attribute)<`any`\> |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClient.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/ClusterClient.ts#L18)

___

### GetterTypeFromSpec

Ƭ **GetterTypeFromSpec**<`A`\>: `A` extends [`OptionalAttribute`](cluster.md#optionalattribute)<infer T\> ? `T` \| `undefined` : [`AttributeJsType`](cluster.md#attributejstype)<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](cluster.md#attribute)<`any`\> |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L69)

___

### HandlerFunction

Ƭ **HandlerFunction**: (...`args`: `any`[]) => `Promise`<`any`\> \| `any`

#### Type declaration

▸ (`...args`): `Promise`<`any`\> \| `any`

**`License`**

Copyright 2022 The matter.js Authors
SPDX-License-Identifier: Apache-2.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`Promise`<`any`\> \| `any`

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:7](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/NamedHandler.ts#L7)

___

### LengthConstraints

Ƭ **LengthConstraints**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `length?` | `number` |
| `maxLength?` | `number` |
| `minLength?` | `number` |

#### Defined in

[packages/matter.js/src/tlv/TlvArray.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvArray.ts#L11)

___

### LengthConstraints

Ƭ **LengthConstraints**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `length?` | `number` |
| `maxLength?` | `number` |
| `minLength?` | `number` |

#### Defined in

[packages/matter.js/src/tlv/TlvString.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvString.ts#L13)

___

### MakeAttributeMandatory

Ƭ **MakeAttributeMandatory**<`A`\>: `A` extends [`OptionalWritableAttribute`](cluster.md#optionalwritableattribute)<infer T\> ? [`WritableAttribute`](cluster.md#writableattribute)<`T`\> : `A` extends [`OptionalAttribute`](cluster.md#optionalattribute)<infer T\> ? [`Attribute`](cluster.md#attribute)<`T`\> : `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](cluster.md#attribute)<`any`\> |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:54](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L54)

___

### MakeAttributesMandatory

Ƭ **MakeAttributesMandatory**<`T`, `C`\>: { [K in keyof T]: K extends keyof C ? MakeAttributeMandatory<T[K]\> : T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`OptionalAttributeConf`](index._internal_.md#optionalattributeconf)<`T`\> |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:55](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L55)

[packages/matter.js/src/cluster/server/ClusterServer.ts:57](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L57)

___

### MandatoryCommandNames

Ƭ **MandatoryCommandNames**<`C`\>: { [K in keyof C]: C[K] extends OptionalCommand<any, any\> ? never : K }[keyof `C`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L42)

___

### MandatoryFieldNames

Ƭ **MandatoryFieldNames**<`F`\>: { [K in keyof F]: F[K] extends OptionalFieldType<any\> ? never : K }[keyof `F`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](tlv.md#tlvfields) |

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L26)

___

### MaskFromBitSchema

Ƭ **MaskFromBitSchema**<`T`\>: { [K in keyof T]: number }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](schema.md#bitschema) |

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L35)

___

### MaskOffsetFromBitSchema

Ƭ **MaskOffsetFromBitSchema**<`T`\>: { [K in keyof T]: Object }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BitSchema`](schema.md#bitschema) |

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L36)

___

### MatterServerRecordWithExpire

Ƭ **MatterServerRecordWithExpire**: [`MatterServer`](common.md#matterserver) & { `expires`: `number`  }

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsScanner.ts#L18)

___

### OnOffBaseDeviceCommands

Ƭ **OnOffBaseDeviceCommands**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `identify` | [`CommandHandler`](cluster.md#commandhandler)<typeof `IdentifyCluster.commands.identify`, `any`\> |

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/OnOffDevices.ts#L19)

___

### OptionalAttributeConf

Ƭ **OptionalAttributeConf**<`T`\>: { [K in OptionalAttributeNames<T\>]?: true }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:53](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L53)

___

### OptionalCommandNames

Ƭ **OptionalCommandNames**<`C`\>: { [K in keyof C]: C[K] extends OptionalCommand<any, any\> ? K : never }[keyof `C`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L43)

___

### OptionalFieldNames

Ƭ **OptionalFieldNames**<`F`\>: { [K in keyof F]: F[K] extends OptionalFieldType<any\> ? K : never }[keyof `F`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](tlv.md#tlvfields) |

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L27)

___

### ServerAttributeGetters

Ƭ **ServerAttributeGetters**<`A`\>: { [P in keyof A as \`get${Capitalize<string & P\>}Attribute\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:70](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L70)

___

### ServerAttributeSetters

Ƭ **ServerAttributeSetters**<`A`\>: { [P in keyof A as \`set${Capitalize<string & P\>}Attribute\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:71](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L71)

___

### ServerAttributeSubscribers

Ƭ **ServerAttributeSubscribers**<`A`\>: { [P in keyof A as \`subscribe${Capitalize<string & P\>}Attribute\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:72](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L72)

___

### SupportedComplexStorageTypes

Ƭ **SupportedComplexStorageTypes**: ([`SupportedStorageBaseTypes`](index._internal_.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](index._internal_.md#supportedcomplexstoragetypes))[] \| { `[key: string]`: [`SupportedStorageBaseTypes`](index._internal_.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](index._internal_.md#supportedcomplexstoragetypes) \| ``null`` \| `undefined`;  } \| [[`SupportedStorageBaseTypes`](index._internal_.md#supportedstoragebasetypes), [`SupportedStorageBaseTypes`](index._internal_.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](index._internal_.md#supportedcomplexstoragetypes) \| ``null`` \| `undefined`][] \| `Map`<[`SupportedStorageBaseTypes`](index._internal_.md#supportedstoragebasetypes), [`SupportedStorageBaseTypes`](index._internal_.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](index._internal_.md#supportedcomplexstoragetypes)\> \| ``null`` \| `undefined`

Supported combined types to stringify the data for the storage that can be used as values.

#### Defined in

[packages/matter.js/src/storage/StringifyTools.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/StringifyTools.ts#L38)

___

### SupportedStorageBaseTypes

Ƭ **SupportedStorageBaseTypes**: `string` \| `number` \| `boolean` \| `bigint` \| [`ByteArray`](util.md#bytearray-1) \| [`AttributeId`](../classes/datatype.AttributeId.md) \| [`ClusterId`](../classes/datatype.ClusterId.md) \| [`CommandId`](../classes/datatype.CommandId.md) \| [`EndpointNumber`](../classes/datatype.EndpointNumber.md) \| [`EventId`](../classes/datatype.EventId.md) \| [`FabricId`](../classes/datatype.FabricId.md) \| [`FabricIndex`](../classes/datatype.FabricIndex.md) \| [`GroupId`](../classes/datatype.GroupId.md) \| [`NodeId`](../classes/datatype.NodeId.md) \| [`VendorId`](../classes/datatype.VendorId.md)

Supported base types to stringify the data for the storage that can be used as keys and also values.

#### Defined in

[packages/matter.js/src/storage/StringifyTools.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/StringifyTools.ts#L20)

___

### TypeForMandatoryFields

Ƭ **TypeForMandatoryFields**<`F`, `MF`\>: { [K in MF]: TypeFromField<F[K]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](tlv.md#tlvfields) |
| `MF` | extends keyof `F` |

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:29](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L29)

___

### TypeForOptionalFields

Ƭ **TypeForOptionalFields**<`F`, `MF`\>: { [K in MF]?: TypeFromField<F[K]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`TlvFields`](tlv.md#tlvfields) |
| `MF` | extends keyof `F` |

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L30)

___

### TypeFromField

Ƭ **TypeFromField**<`F`\>: `F` extends [`FieldType`](../interfaces/tlv.FieldType.md)<infer T\> ? `T` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`FieldType`](../interfaces/tlv.FieldType.md)<`any`\> |

#### Defined in

[packages/matter.js/src/tlv/TlvObject.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/tlv/TlvObject.ts#L28)

___

### Unsigned

Ƭ **Unsigned**<`Type`\>: { [Property in keyof Type as Exclude<Property, "signature"\>]: Type[Property] }

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

[packages/matter.js/src/certificate/CertificateManager.ts:239](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/certificate/CertificateManager.ts#L239)

___

### UseOptionalAttributes

Ƭ **UseOptionalAttributes**<`C`, `A`\>: [`Cluster`](cluster.md#cluster)<`C`[``"features"``], `C`[``"supportedFeatures"``], [`MakeAttributesMandatory`](index._internal_.md#makeattributesmandatory-1)<`C`[``"attributes"``], `A`\>, `C`[``"commands"``], `C`[``"events"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `A` | extends [`OptionalAttributeConf`](index._internal_.md#optionalattributeconf)<`C`[``"attributes"``]\> |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:64](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L64)

[packages/matter.js/src/cluster/server/ClusterServer.ts:67](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L67)

___

### WritableAttributeNames

Ƭ **WritableAttributeNames**<`A`\>: { [K in keyof A]: A[K] extends WritableAttribute<any\> ? K : never }[keyof `A`] \| { [K in keyof A]: A[K] extends OptionalWritableAttribute<any\> ? K : never }[keyof `A`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClient.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/ClusterClient.ts#L20)

## Variables

### QrCodeDataSchema

• `Const` **QrCodeDataSchema**: [`ByteArrayBitmapSchemaInternal`](../classes/schema.ByteArrayBitmapSchemaInternal.md)<{ `discoveryCapabilities`: [`BitField`](schema.md#bitfield-1) ; `discriminator`: [`BitField`](schema.md#bitfield-1) ; `flowType`: [`BitFieldEnum`](schema.md#bitfieldenum-1)<[`CommissionningFlowType`](../enums/schema.CommissionningFlowType.md)\> ; `passcode`: [`BitField`](schema.md#bitfield-1) ; `productId`: [`BitField`](schema.md#bitfield-1) ; `vendorId`: [`BitField`](schema.md#bitfield-1) ; `version`: [`BitField`](schema.md#bitfield-1)  }\>

See [MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 5.1.3.1 Table 35

#### Defined in

[packages/matter.js/src/schema/PairingCodeSchema.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/PairingCodeSchema.ts#L40)

___

### TlvCommissioningSuccessFailureResponse

• `Const` **TlvCommissioningSuccessFailureResponse**: [`ObjectSchema`](../classes/tlv.ObjectSchema.md)<{ `debugText`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`CommissioningError`](../enums/cluster.CommissioningError.md)\>  }\>

Used by the following commands as response payload:
ArmFailSafeResponse,

**`See`**

 - [MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.9.7.3
CommissioningCompleteResponse,
 - [MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.9.7.7
CommissioningCompleteResponse,
 - [MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.9.7.7

#### Defined in

[packages/matter.js/src/cluster/GeneralCommissioningCluster.ts:73](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/GeneralCommissioningCluster.ts#L73)

## Functions

### BitRange

▸ **BitRange**<`T`, `TType`\>(`type`, `offset`, `length`): [`BitRange`](index._internal_.md#bitrange-1)<`T`, `TType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TType` | extends [`BitRangeType`](../enums/index._internal_.BitRangeType.md) = [`BitRangeType`](../enums/index._internal_.BitRangeType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `TType` |
| `offset` | `number` |
| `length` | `number` |

#### Returns

[`BitRange`](index._internal_.md#bitrange-1)<`T`, `TType`\>

#### Defined in

[packages/matter.js/src/schema/BitmapSchema.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/schema/BitmapSchema.ts#L17)

___

### ClusterExtend

▸ **ClusterExtend**<`F`, `SF_BASE`, `A_BASE`, `C_BASE`, `E_BASE`, `SF_EXTEND`, `A_EXTEND`, `C_EXTEND`, `E_EXTEND`\>(`«destructured»`, `«destructured»`): [`Cluster`](cluster.md#cluster)<`F`, [`Merge`](util.md#merge)<`SF_BASE`, `SF_EXTEND`\>, [`Merge`](util.md#merge)<`A_BASE`, `A_EXTEND`\>, [`Merge`](util.md#merge)<`C_BASE`, `C_EXTEND`\>, [`Merge`](util.md#merge)<`E_BASE`, `E_EXTEND`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](schema.md#bitschema) |
| `SF_BASE` | extends [`TypeFromBitSchema`](schema.md#typefrombitschema)<`F`\> |
| `A_BASE` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C_BASE` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E_BASE` | extends [`Events`](../interfaces/cluster.Events.md) |
| `SF_EXTEND` | extends [`TypeFromBitSchema`](schema.md#typefrombitschema)<`F`\> |
| `A_EXTEND` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C_EXTEND` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E_EXTEND` | extends [`Events`](../interfaces/cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Cluster`](cluster.md#cluster)<`F`, `SF_BASE`, `A_BASE`, `C_BASE`, `E_BASE`\> |
| `«destructured»` | [`ClusterExtend`](index._internal_.md#clusterextend-1)<`F`, `SF_EXTEND`, `A_EXTEND`, `C_EXTEND`, `E_EXTEND`\> |

#### Returns

[`Cluster`](cluster.md#cluster)<`F`, [`Merge`](util.md#merge)<`SF_BASE`, `SF_EXTEND`\>, [`Merge`](util.md#merge)<`A_BASE`, `A_EXTEND`\>, [`Merge`](util.md#merge)<`C_BASE`, `C_EXTEND`\>, [`Merge`](util.md#merge)<`E_BASE`, `E_EXTEND`\>\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:145](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L145)

___

### MakeAttributesMandatory

▸ **MakeAttributesMandatory**<`T`, `C`\>(`attributes`, `conf`): [`MakeAttributesMandatory`](index._internal_.md#makeattributesmandatory-1)<`T`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`OptionalAttributeConf`](index._internal_.md#optionalattributeconf)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `T` |
| `conf` | `C` |

#### Returns

[`MakeAttributesMandatory`](index._internal_.md#makeattributesmandatory-1)<`T`, `C`\>

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:57](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L57)

___

### UseOptionalAttributes

▸ **UseOptionalAttributes**<`C`, `A`\>(`cluster`, `conf`): [`UseOptionalAttributes`](index._internal_.md#useoptionalattributes-1)<`C`, `A`\>

Forces the presence of the specified optional attributes, so they can be used in the command handlers

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](cluster.md#cluster)<`any`, `any`, `any`, `any`, `any`, `C`\> |
| `A` | extends [`OptionalAttributeConf`](index._internal_.md#optionalattributeconf)<`C`[``"attributes"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | `C` |
| `conf` | `A` |

#### Returns

[`UseOptionalAttributes`](index._internal_.md#useoptionalattributes-1)<`C`, `A`\>

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServer.ts:67](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/server/ClusterServer.ts#L67)
