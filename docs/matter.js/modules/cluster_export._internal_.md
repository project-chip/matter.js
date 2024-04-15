[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Interfaces

- [AttributeOptions](../interfaces/cluster_export._internal_.AttributeOptions.md)
- [CachedAttributeInfo](../interfaces/cluster_export._internal_.CachedAttributeInfo.md)
- [CachedCommandInfo](../interfaces/cluster_export._internal_.CachedCommandInfo.md)
- [CachedEventInfo](../interfaces/cluster_export._internal_.CachedEventInfo.md)
- [CommandOptions](../interfaces/cluster_export._internal_.CommandOptions.md)
- [ConditionalAttributeOptions](../interfaces/cluster_export._internal_.ConditionalAttributeOptions.md)
- [ConditionalCommandOptions](../interfaces/cluster_export._internal_.ConditionalCommandOptions.md)
- [ConditionalEventOptions](../interfaces/cluster_export._internal_.ConditionalEventOptions.md)
- [EventOptions](../interfaces/cluster_export._internal_.EventOptions.md)
- [scenesTableEntry](../interfaces/cluster_export._internal_.scenesTableEntry.md)

### Type Aliases

- [AttributeGetters](cluster_export._internal_.md#attributegetters)
- [AttributeHandlers](cluster_export._internal_.md#attributehandlers)
- [AttributeSetters](cluster_export._internal_.md#attributesetters)
- [AttributeValidators](cluster_export._internal_.md#attributevalidators)
- [ClientAttributeGetters](cluster_export._internal_.md#clientattributegetters)
- [ClientAttributeListeners](cluster_export._internal_.md#clientattributelisteners)
- [ClientAttributeSetters](cluster_export._internal_.md#clientattributesetters)
- [ClientAttributeSubscribers](cluster_export._internal_.md#clientattributesubscribers)
- [ClientEventGetters](cluster_export._internal_.md#clienteventgetters)
- [ClientEventListeners](cluster_export._internal_.md#clienteventlisteners)
- [ClientEventSubscribers](cluster_export._internal_.md#clienteventsubscribers)
- [ClientGlobalAttributeGetters](cluster_export._internal_.md#clientglobalattributegetters)
- [ClusterExtend](cluster_export._internal_.md#clusterextend)
- [CommandHandlers](cluster_export._internal_.md#commandhandlers)
- [CommandServers](cluster_export._internal_.md#commandservers)
- [GetterTypeFromSpec](cluster_export._internal_.md#gettertypefromspec)
- [GetterTypeFromSpec](cluster_export._internal_.md#gettertypefromspec-1)
- [MakeAttributeMandatory](cluster_export._internal_.md#makeattributemandatory)
- [MakeAttributesMandatory](cluster_export._internal_.md#makeattributesmandatory)
- [MandatoryAttributeServers](cluster_export._internal_.md#mandatoryattributeservers)
- [MandatoryCommandNames](cluster_export._internal_.md#mandatorycommandnames)
- [OptionalAttributeConf](cluster_export._internal_.md#optionalattributeconf)
- [OptionalAttributeServers](cluster_export._internal_.md#optionalattributeservers)
- [OptionalCommandNames](cluster_export._internal_.md#optionalcommandnames)
- [ServerAttributeGetters](cluster_export._internal_.md#serverattributegetters)
- [ServerAttributeSetters](cluster_export._internal_.md#serverattributesetters)
- [ServerAttributeSubscribers](cluster_export._internal_.md#serverattributesubscribers)
- [ServerEventTriggers](cluster_export._internal_.md#servereventtriggers)
- [UseOptionalAttributes](cluster_export._internal_.md#useoptionalattributes)
- [WritableAttributeNames](cluster_export._internal_.md#writableattributenames)

### Functions

- [ClusterExtend](cluster_export._internal_.md#clusterextend-1)
- [MakeAttributesMandatory](cluster_export._internal_.md#makeattributesmandatory-1)
- [UseOptionalAttributes](cluster_export._internal_.md#useoptionalattributes-1)

## Type Aliases

### AttributeGetters

Ƭ **AttributeGetters**\<`A`\>: \{ [P in keyof A as \`$\{string & P}AttributeGetter\`]?: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L92)

___

### AttributeHandlers

Ƭ **AttributeHandlers**\<`A`\>: [`Merge`](util_export.md#merge)\<[`AttributeGetters`](cluster_export._internal_.md#attributegetters)\<`A`\>, [`Merge`](util_export.md#merge)\<[`AttributeSetters`](cluster_export._internal_.md#attributesetters)\<`A`\>, [`AttributeValidators`](cluster_export._internal_.md#attributevalidators)\<`A`\>\>\>

Handlers to process cluster commands

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L133)

___

### AttributeSetters

Ƭ **AttributeSetters**\<`A`\>: \{ [P in keyof A as \`$\{string & P}AttributeSetter\`]?: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L100)

___

### AttributeValidators

Ƭ **AttributeValidators**\<`A`\>: \{ [P in keyof A as \`$\{string & P}AttributeValidator\`]?: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L106)

___

### ClientAttributeGetters

Ƭ **ClientAttributeGetters**\<`A`\>: `Omit`\<\{ [P in keyof A as \`get$\{Capitalize\<string & P\>}Attribute\`]: Function }, keyof [`GlobalAttributes`](cluster_export.md#globalattributes)\<`any`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L72)

___

### ClientAttributeListeners

Ƭ **ClientAttributeListeners**\<`A`\>: \{ [P in keyof A as \`add$\{Capitalize\<string & P\>}AttributeListener\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L103)

___

### ClientAttributeSetters

Ƭ **ClientAttributeSetters**\<`A`\>: \{ [P in WritableAttributeNames\<A\> as \`set$\{Capitalize\<string & P\>}Attribute\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L89)

___

### ClientAttributeSubscribers

Ƭ **ClientAttributeSubscribers**\<`A`\>: \{ [P in keyof A as \`subscribe$\{Capitalize\<string & P\>}Attribute\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L94)

___

### ClientEventGetters

Ƭ **ClientEventGetters**\<`E`\>: \{ [P in keyof E as \`get$\{Capitalize\<string & P\>}Event\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L111)

___

### ClientEventListeners

Ƭ **ClientEventListeners**\<`E`\>: \{ [P in keyof E as \`add$\{Capitalize\<string & P\>}EventListener\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L127)

___

### ClientEventSubscribers

Ƭ **ClientEventSubscribers**\<`E`\>: \{ [P in keyof E as \`subscribe$\{Capitalize\<string & P\>}Event\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L117)

___

### ClientGlobalAttributeGetters

Ƭ **ClientGlobalAttributeGetters**\<`F`\>: \{ [P in GlobalAttributeNames\<F\> as \`get$\{Capitalize\<string & P\>}Attribute\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](schema_export.md#bitschema) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L81)

___

### ClusterExtend

Ƭ **ClusterExtend**\<`F`, `SF`, `A`, `C`, `E`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes?` | `A` |
| `commands?` | `C` |
| `events?` | `E` |
| `supportedFeatures` | `SF` |

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:920](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L920)

[packages/matter.js/src/cluster/Cluster.ts:933](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L933)

___

### CommandHandlers

Ƭ **CommandHandlers**\<`T`, `AS`, `ES`\>: [`Merge`](util_export.md#merge)\<\{ [P in MandatoryCommandNames\<T\>]: CommandHandler\<T[P], AS, ES\> }, \{ [P in OptionalCommandNames\<T\>]?: CommandHandler\<T[P], AS, ES\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `AS` | extends [`AttributeServers`](cluster_export.md#attributeservers)\<`any`\> |
| `ES` | extends [`EventServers`](cluster_export.md#eventservers)\<`any`\> |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L127)

___

### CommandServers

Ƭ **CommandServers**\<`C`\>: \{ [P in keyof C]: SignatureFromCommandSpec\<C[P]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:109](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L109)

___

### GetterTypeFromSpec

Ƭ **GetterTypeFromSpec**\<`A`\>: `A` extends [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<infer T, `any`\> ? `T` \| `undefined` : [`AttributeJsType`](cluster_export.md#attributejstype)\<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`any`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L70)

___

### GetterTypeFromSpec

Ƭ **GetterTypeFromSpec**\<`A`\>: `A` extends [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<infer T, `any`\> ? `T` \| `undefined` : [`AttributeJsType`](cluster_export.md#attributejstype)\<`A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`any`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:217](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L217)

___

### MakeAttributeMandatory

Ƭ **MakeAttributeMandatory**\<`A`\>: `A` extends [`OptionalWritableFabricScopedAttribute`](../interfaces/cluster_export.OptionalWritableFabricScopedAttribute.md)\<infer T, `any`\> ? [`WritableFabricScopedAttribute`](../interfaces/cluster_export.WritableFabricScopedAttribute.md)\<`T`, `any`\> : `A` extends [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<infer T, `any`\> ? [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`T`, `any`\> : `A` extends [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<infer T, `any`\> ? [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`T`, `any`\> : `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`any`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L158)

___

### MakeAttributesMandatory

Ƭ **MakeAttributesMandatory**\<`T`, `C`\>: \{ [K in keyof T]: K extends keyof C ? MakeAttributeMandatory\<T[K]\> : T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`OptionalAttributeConf`](cluster_export._internal_.md#optionalattributeconf)\<`T`\> |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:166](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L166)

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:170](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L170)

___

### MandatoryAttributeServers

Ƭ **MandatoryAttributeServers**\<`A`\>: `Omit`\<\{ [P in MandatoryAttributeNames\<A\>]: A[P] extends FabricScopedAttribute\<any, any\> ? FabricScopedAttributeServer\<AttributeJsType\<A[P]\>\> : A[P] extends WritableFabricScopedAttribute\<any, any\> ? FabricScopedAttributeServer\<AttributeJsType\<A[P]\>\> : A[P] extends FixedAttribute\<any, any\> ? FixedAttributeServer\<AttributeJsType\<A[P]\>\> : AttributeServer\<AttributeJsType\<A[P]\>\> }, keyof [`GlobalAttributes`](cluster_export.md#globalattributes)\<`any`\>\>

Cluster attributes accessible on the cluster server

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L55)

___

### MandatoryCommandNames

Ƭ **MandatoryCommandNames**\<`C`\>: \{ [K in keyof C]: C[K] extends OptionalCommand\<any, any, any\> ? never : K }[keyof `C`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L86)

___

### OptionalAttributeConf

Ƭ **OptionalAttributeConf**\<`T`\>: \{ [K in OptionalAttributeNames\<T\>]?: true }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:157](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L157)

___

### OptionalAttributeServers

Ƭ **OptionalAttributeServers**\<`A`\>: \{ [P in OptionalAttributeNames\<A\>]?: A[P] extends OptionalWritableFabricScopedAttribute\<any, any\> ? FabricScopedAttributeServer\<AttributeJsType\<A[P]\>\> : A[P] extends OptionalFixedAttribute\<any, any\> ? FixedAttributeServer\<AttributeJsType\<A[P]\>\> : AttributeServer\<AttributeJsType\<A[P]\>\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L67)

___

### OptionalCommandNames

Ƭ **OptionalCommandNames**\<`C`\>: \{ [K in keyof C]: C[K] extends OptionalCommand\<any, any, any\> ? K : never }[keyof `C`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L89)

___

### ServerAttributeGetters

Ƭ **ServerAttributeGetters**\<`A`\>: \{ [P in MandatoryAttributeNames\<A\> as \`get$\{Capitalize\<string & P\>}Attribute\`]: Function } & \{ [P in OptionalAttributeNames\<A\> as \`get$\{Capitalize\<string & P\>}Attribute\`]?: Function } & \{ [P in FabricScopedAttributeNames\<A\> as \`get$\{Capitalize\<string & P\>}Attribute\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:219](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L219)

___

### ServerAttributeSetters

Ƭ **ServerAttributeSetters**\<`A`\>: \{ [P in NonFixedAttributeNames\<A\> as \`set$\{Capitalize\<string & P\>}Attribute\`]: Function } & \{ [P in FabricScopedAttributeNames\<A\> as \`set$\{Capitalize\<string & P\>}Attribute\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L226)

___

### ServerAttributeSubscribers

Ƭ **ServerAttributeSubscribers**\<`A`\>: \{ [P in NonFixedAttributeNames\<A\> as \`subscribe$\{Capitalize\<string & P\>}Attribute\`]: Function } & \{ [P in FabricScopedAttributeNames\<A\> as \`subscribe$\{Capitalize\<string & P\>}Attribute\`]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:234](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L234)

___

### ServerEventTriggers

Ƭ **ServerEventTriggers**\<`E`\>: \{ [P in MandatoryEventNames\<E\> as \`trigger$\{Capitalize\<string & P\>}Event\`]: Function } & \{ [P in OptionalEventNames\<E\> as \`trigger$\{Capitalize\<string & P\>}Event\`]?: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:249](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L249)

___

### UseOptionalAttributes

Ƭ **UseOptionalAttributes**\<`C`, `A`\>: [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`C`[``"features"``], `C`[``"supportedFeatures"``], [`MakeAttributesMandatory`](cluster_export._internal_.md#makeattributesmandatory)\<`C`[``"attributes"``], `A`\>, `C`[``"commands"``], `C`[``"events"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `A` | extends [`OptionalAttributeConf`](cluster_export._internal_.md#optionalattributeconf)\<`C`[``"attributes"``]\> |

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:180](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L180)

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L192)

___

### WritableAttributeNames

Ƭ **WritableAttributeNames**\<`A`\>: \{ [K in keyof A]: A[K] extends WritableAttribute\<any, any\> ? K : never }[keyof `A`] \| \{ [K in keyof A]: A[K] extends OptionalWritableAttribute\<any, any\> ? K : never }[keyof `A`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |

#### Defined in

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L86)

## Functions

### ClusterExtend

▸ **ClusterExtend**\<`F`, `SF_BASE`, `SF_EXTEND`, `A_BASE`, `C_BASE`, `E_BASE`, `A_EXTEND`, `C_EXTEND`, `E_EXTEND`\>(`«destructured»`, `«destructured»`): [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, [`Merge`](util_export.md#merge)\<`SF_BASE`, `SF_EXTEND`\>, [`Merge`](util_export.md#merge)\<`A_BASE`, `A_EXTEND`\>, [`Merge`](util_export.md#merge)\<`C_BASE`, `C_EXTEND`\>, [`Merge`](util_export.md#merge)\<`E_BASE`, `E_EXTEND`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](schema_export.md#bitschema) |
| `SF_BASE` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<`F`\> |
| `SF_EXTEND` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A_BASE` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) = {} |
| `C_BASE` | extends [`Commands`](../interfaces/cluster_export.Commands.md) = {} |
| `E_BASE` | extends [`Events`](../interfaces/cluster_export.Events.md) = {} |
| `A_EXTEND` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) = {} |
| `C_EXTEND` | extends [`Commands`](../interfaces/cluster_export.Commands.md) = {} |
| `E_EXTEND` | extends [`Events`](../interfaces/cluster_export.Events.md) = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF_BASE`, `A_BASE`, `C_BASE`, `E_BASE`\> |
| `«destructured»` | [`ClusterExtend`](cluster_export._internal_.md#clusterextend)\<`F`, `SF_EXTEND`, `A_EXTEND`, `C_EXTEND`, `E_EXTEND`\> |

#### Returns

[`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, [`Merge`](util_export.md#merge)\<`SF_BASE`, `SF_EXTEND`\>, [`Merge`](util_export.md#merge)\<`A_BASE`, `A_EXTEND`\>, [`Merge`](util_export.md#merge)\<`C_BASE`, `C_EXTEND`\>, [`Merge`](util_export.md#merge)\<`E_BASE`, `E_EXTEND`\>\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:933](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L933)

___

### MakeAttributesMandatory

▸ **MakeAttributesMandatory**\<`T`, `C`\>(`attributes`, `conf`): [`MakeAttributesMandatory`](cluster_export._internal_.md#makeattributesmandatory)\<`T`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`OptionalAttributeConf`](cluster_export._internal_.md#optionalattributeconf)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `T` |
| `conf` | `C` |

#### Returns

[`MakeAttributesMandatory`](cluster_export._internal_.md#makeattributesmandatory)\<`T`, `C`\>

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:170](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L170)

___

### UseOptionalAttributes

▸ **UseOptionalAttributes**\<`C`, `A`\>(`cluster`, `conf`): [`UseOptionalAttributes`](cluster_export._internal_.md#useoptionalattributes)\<`C`, `A`\>

Forces the presence of the specified optional attributes, so they can be used in the command handlers

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `A` | extends [`OptionalAttributeConf`](cluster_export._internal_.md#optionalattributeconf)\<`C`[``"attributes"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | `C` |
| `conf` | `A` |

#### Returns

[`UseOptionalAttributes`](cluster_export._internal_.md#useoptionalattributes)\<`C`, `A`\>

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L192)
