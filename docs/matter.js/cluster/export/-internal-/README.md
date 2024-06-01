[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / \<internal\>

# \<internal\>

## Index

### Interfaces

- [AttributeOptions](interfaces/AttributeOptions.md)
- [CachedAttributeInfo](interfaces/CachedAttributeInfo.md)
- [CachedCommandInfo](interfaces/CachedCommandInfo.md)
- [CachedEventInfo](interfaces/CachedEventInfo.md)
- [CommandOptions](interfaces/CommandOptions.md)
- [ConditionalAttributeOptions](interfaces/ConditionalAttributeOptions.md)
- [ConditionalCommandOptions](interfaces/ConditionalCommandOptions.md)
- [ConditionalEventOptions](interfaces/ConditionalEventOptions.md)
- [EventOptions](interfaces/EventOptions.md)
- [scenesTableEntry](interfaces/scenesTableEntry.md)

## Type Aliases

### AttributeGetters\<A\>

> **AttributeGetters**\<`A`\>: \{ \[P in keyof A as \`$\{string & P\}AttributeGetter\`\]?: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L92)

***

### AttributeHandlers\<A\>

> **AttributeHandlers**\<`A`\>: [`Merge`](../../../util/export/README.md#mergeab)\<[`AttributeGetters`](README.md#attributegettersa)\<`A`\>, [`Merge`](../../../util/export/README.md#mergeab)\<[`AttributeSetters`](README.md#attributesettersa)\<`A`\>, [`AttributeValidators`](README.md#attributevalidatorsa)\<`A`\>\>\>

Handlers to process cluster commands

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:133](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L133)

***

### AttributeSetters\<A\>

> **AttributeSetters**\<`A`\>: \{ \[P in keyof A as \`$\{string & P\}AttributeSetter\`\]?: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L100)

***

### AttributeValidators\<A\>

> **AttributeValidators**\<`A`\>: \{ \[P in keyof A as \`$\{string & P\}AttributeValidator\`\]?: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L106)

***

### ClientAttributeGetters\<A\>

> **ClientAttributeGetters**\<`A`\>: `Omit`\<\{ \[P in keyof A as \`get$\{Capitalize\<string & P\>\}Attribute\`\]: Function \}, keyof [`GlobalAttributes`](../README.md#globalattributesf)\<`any`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L72)

***

### ClientAttributeListeners\<A\>

> **ClientAttributeListeners**\<`A`\>: \{ \[P in keyof A as \`add$\{Capitalize\<string & P\>\}AttributeListener\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L103)

***

### ClientAttributeSetters\<A\>

> **ClientAttributeSetters**\<`A`\>: \{ \[P in WritableAttributeNames\<A\> as \`set$\{Capitalize\<string & P\>\}Attribute\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L89)

***

### ClientAttributeSubscribers\<A\>

> **ClientAttributeSubscribers**\<`A`\>: \{ \[P in keyof A as \`subscribe$\{Capitalize\<string & P\>\}Attribute\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L94)

***

### ClientEventGetters\<E\>

> **ClientEventGetters**\<`E`\>: \{ \[P in keyof E as \`get$\{Capitalize\<string & P\>\}Event\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `E` *extends* [`Events`](../interfaces/Events.md) |

#### Source

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L111)

***

### ClientEventListeners\<E\>

> **ClientEventListeners**\<`E`\>: \{ \[P in keyof E as \`add$\{Capitalize\<string & P\>\}EventListener\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `E` *extends* [`Events`](../interfaces/Events.md) |

#### Source

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L127)

***

### ClientEventSubscribers\<E\>

> **ClientEventSubscribers**\<`E`\>: \{ \[P in keyof E as \`subscribe$\{Capitalize\<string & P\>\}Event\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `E` *extends* [`Events`](../interfaces/Events.md) |

#### Source

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L117)

***

### ClientGlobalAttributeGetters\<F\>

> **ClientGlobalAttributeGetters**\<`F`\>: \{ \[P in GlobalAttributeNames\<F\> as \`get$\{Capitalize\<string & P\>\}Attribute\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |

#### Source

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L81)

***

### ClusterExtend\<F, SF, A, C, E\>

> **ClusterExtend**\<`F`, `SF`, `A`, `C`, `E`\>: `object`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../interfaces/Commands.md) |
| `E` *extends* [`Events`](../interfaces/Events.md) |

#### Type declaration

##### attributes?

> `optional` **attributes**: `A`

##### commands?

> `optional` **commands**: `C`

##### events?

> `optional` **events**: `E`

##### supportedFeatures

> **supportedFeatures**: `SF`

#### Source

[packages/matter.js/src/cluster/Cluster.ts:922](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L922)

***

### CommandHandlers\<T, AS, ES\>

> **CommandHandlers**\<`T`, `AS`, `ES`\>: [`Merge`](../../../util/export/README.md#mergeab)\<`{ [P in MandatoryCommandNames<T>]: CommandHandler<T[P], AS, ES> }`, `{ [P in OptionalCommandNames<T>]?: CommandHandler<T[P], AS, ES> }`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Commands`](../interfaces/Commands.md) |
| `AS` *extends* [`AttributeServers`](../README.md#attributeserversa)\<`any`\> |
| `ES` *extends* [`EventServers`](../README.md#eventserverse)\<`any`\> |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L127)

***

### CommandServers\<C\>

> **CommandServers**\<`C`\>: `{ [P in keyof C]: SignatureFromCommandSpec<C[P]> }`

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`Commands`](../interfaces/Commands.md) |

#### Source

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:109](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L109)

***

### DelayedChangeData

> **DelayedChangeData**: `object`

#### Type declaration

##### changed

> **changed**: `boolean`

##### newValue

> **newValue**: `any`

##### oldValue

> **oldValue**: `any`

#### Source

[packages/matter.js/src/cluster/server/AttributeServer.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/AttributeServer.ts#L37)

***

### GetterTypeFromSpec\<A\>

> **GetterTypeFromSpec**\<`A`\>: `A` *extends* [`OptionalAttribute`](../interfaces/OptionalAttribute.md)\<infer T, `any`\> ? `T` \| `undefined` : [`AttributeJsType`](../README.md#attributejstypet)\<`A`\>

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attribute`](../interfaces/Attribute.md)\<`any`, `any`\> |

#### Source

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L70)

***

### GetterTypeFromSpec\<A\>

> **GetterTypeFromSpec**\<`A`\>: `A` *extends* [`OptionalAttribute`](../interfaces/OptionalAttribute.md)\<infer T, `any`\> ? `T` \| `undefined` : [`AttributeJsType`](../README.md#attributejstypet)\<`A`\>

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attribute`](../interfaces/Attribute.md)\<`any`, `any`\> |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L217)

***

### MakeAttributeMandatory\<A\>

> **MakeAttributeMandatory**\<`A`\>: `A` *extends* [`OptionalWritableFabricScopedAttribute`](../interfaces/OptionalWritableFabricScopedAttribute.md)\<infer T, `any`\> ? [`WritableFabricScopedAttribute`](../interfaces/WritableFabricScopedAttribute.md)\<`T`, `any`\> : `A` *extends* [`OptionalWritableAttribute`](../interfaces/OptionalWritableAttribute.md)\<infer T, `any`\> ? [`WritableAttribute`](../interfaces/WritableAttribute.md)\<`T`, `any`\> : `A` *extends* [`OptionalAttribute`](../interfaces/OptionalAttribute.md)\<infer T, `any`\> ? [`Attribute`](../interfaces/Attribute.md)\<`T`, `any`\> : `A`

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attribute`](../interfaces/Attribute.md)\<`any`, `any`\> |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L158)

***

### MakeAttributesMandatory\<T, C\>

> **MakeAttributesMandatory**\<`T`, `C`\>: `{ [K in keyof T]: K extends keyof C ? MakeAttributeMandatory<T[K]> : T[K] }`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Attributes`](../interfaces/Attributes.md) |
| `C` *extends* [`OptionalAttributeConf`](README.md#optionalattributeconft)\<`T`\> |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:166](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L166)

***

### MandatoryAttributeServers\<A\>

> **MandatoryAttributeServers**\<`A`\>: `Omit`\<`{ [P in MandatoryAttributeNames<A>]: A[P] extends FabricScopedAttribute<any, any> ? FabricScopedAttributeServer<AttributeJsType<A[P]>> : A[P] extends WritableFabricScopedAttribute<any, any> ? FabricScopedAttributeServer<AttributeJsType<A[P]>> : A[P] extends FixedAttribute<any, any> ? FixedAttributeServer<AttributeJsType<A[P]>> : AttributeServer<AttributeJsType<A[P]>> }`, keyof [`GlobalAttributes`](../README.md#globalattributesf)\<`any`\>\>

Cluster attributes accessible on the cluster server

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L55)

***

### MandatoryCommandNames\<C\>

> **MandatoryCommandNames**\<`C`\>: `{ [K in keyof C]: C[K] extends OptionalCommand<any, any, any> ? never : K }`\[keyof `C`\]

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`Commands`](../interfaces/Commands.md) |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L86)

***

### OptionalAttributeConf\<T\>

> **OptionalAttributeConf**\<`T`\>: `{ [K in OptionalAttributeNames<T>]?: true }`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:157](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L157)

***

### OptionalAttributeServers\<A\>

> **OptionalAttributeServers**\<`A`\>: `{ [P in OptionalAttributeNames<A>]?: A[P] extends OptionalWritableFabricScopedAttribute<any, any> ? FabricScopedAttributeServer<AttributeJsType<A[P]>> : A[P] extends OptionalFixedAttribute<any, any> ? FixedAttributeServer<AttributeJsType<A[P]>> : AttributeServer<AttributeJsType<A[P]>> }`

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L67)

***

### OptionalCommandNames\<C\>

> **OptionalCommandNames**\<`C`\>: `{ [K in keyof C]: C[K] extends OptionalCommand<any, any, any> ? K : never }`\[keyof `C`\]

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`Commands`](../interfaces/Commands.md) |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L89)

***

### ServerAttributeGetters\<A\>

> **ServerAttributeGetters**\<`A`\>: \{ \[P in MandatoryAttributeNames\<A\> as \`get$\{Capitalize\<string & P\>\}Attribute\`\]: Function \} & \{ \[P in OptionalAttributeNames\<A\> as \`get$\{Capitalize\<string & P\>\}Attribute\`\]?: Function \} & \{ \[P in FabricScopedAttributeNames\<A\> as \`get$\{Capitalize\<string & P\>\}Attribute\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:219](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L219)

***

### ServerAttributeSetters\<A\>

> **ServerAttributeSetters**\<`A`\>: \{ \[P in NonFixedAttributeNames\<A\> as \`set$\{Capitalize\<string & P\>\}Attribute\`\]: Function \} & \{ \[P in FabricScopedAttributeNames\<A\> as \`set$\{Capitalize\<string & P\>\}Attribute\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L226)

***

### ServerAttributeSubscribers\<A\>

> **ServerAttributeSubscribers**\<`A`\>: \{ \[P in NonFixedAttributeNames\<A\> as \`subscribe$\{Capitalize\<string & P\>\}Attribute\`\]: Function \} & \{ \[P in FabricScopedAttributeNames\<A\> as \`subscribe$\{Capitalize\<string & P\>\}Attribute\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:234](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L234)

***

### ServerEventTriggers\<E\>

> **ServerEventTriggers**\<`E`\>: \{ \[P in MandatoryEventNames\<E\> as \`trigger$\{Capitalize\<string & P\>\}Event\`\]: Function \} & \{ \[P in OptionalEventNames\<E\> as \`trigger$\{Capitalize\<string & P\>\}Event\`\]?: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `E` *extends* [`Events`](../interfaces/Events.md) |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:249](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L249)

***

### UseOptionalAttributes\<C, A\>

> **UseOptionalAttributes**\<`C`, `A`\>: [`Cluster`](../interfaces/Cluster.md)\<`C`\[`"features"`\], `C`\[`"supportedFeatures"`\], [`MakeAttributesMandatory`](README.md#makeattributesmandatorytc)\<`C`\[`"attributes"`\], `A`\>, `C`\[`"commands"`\], `C`\[`"events"`\]\>

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`Cluster`](../interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `A` *extends* [`OptionalAttributeConf`](README.md#optionalattributeconft)\<`C`\[`"attributes"`\]\> |

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:180](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L180)

***

### WritableAttributeNames\<A\>

> **WritableAttributeNames**\<`A`\>: `{ [K in keyof A]: A[K] extends WritableAttribute<any, any> ? K : never }`\[keyof `A`\] \| `{ [K in keyof A]: A[K] extends OptionalWritableAttribute<any, any> ? K : never }`\[keyof `A`\]

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

[packages/matter.js/src/cluster/client/ClusterClientTypes.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/ClusterClientTypes.ts#L86)

## Functions

### ClusterExtend()

> **ClusterExtend**\<`F`, `SF_BASE`, `SF_EXTEND`, `A_BASE`, `C_BASE`, `E_BASE`, `A_EXTEND`, `C_EXTEND`, `E_EXTEND`\>(`__namedParameters`, `__namedParameters`): [`Cluster`](../interfaces/Cluster.md)\<`F`, [`Merge`](../../../util/export/README.md#mergeab)\<`SF_BASE`, `SF_EXTEND`\>, [`Merge`](../../../util/export/README.md#mergeab)\<`A_BASE`, `A_EXTEND`\>, [`Merge`](../../../util/export/README.md#mergeab)\<`C_BASE`, `C_EXTEND`\>, [`Merge`](../../../util/export/README.md#mergeab)\<`E_BASE`, `E_EXTEND`\>\>

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) | - |
| `SF_BASE` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> | - |
| `SF_EXTEND` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> | - |
| `A_BASE` *extends* [`Attributes`](../interfaces/Attributes.md) | `object` |
| `C_BASE` *extends* [`Commands`](../interfaces/Commands.md) | `object` |
| `E_BASE` *extends* [`Events`](../interfaces/Events.md) | `object` |
| `A_EXTEND` *extends* [`Attributes`](../interfaces/Attributes.md) | `object` |
| `C_EXTEND` *extends* [`Commands`](../interfaces/Commands.md) | `object` |
| `E_EXTEND` *extends* [`Events`](../interfaces/Events.md) | `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`Cluster`](../interfaces/Cluster.md)\<`F`, `SF_BASE`, `A_BASE`, `C_BASE`, `E_BASE`\> |
| `__namedParameters` | [`ClusterExtend`](README.md#clusterextendfsface)\<`F`, `SF_EXTEND`, `A_EXTEND`, `C_EXTEND`, `E_EXTEND`\> |

#### Returns

[`Cluster`](../interfaces/Cluster.md)\<`F`, [`Merge`](../../../util/export/README.md#mergeab)\<`SF_BASE`, `SF_EXTEND`\>, [`Merge`](../../../util/export/README.md#mergeab)\<`A_BASE`, `A_EXTEND`\>, [`Merge`](../../../util/export/README.md#mergeab)\<`C_BASE`, `C_EXTEND`\>, [`Merge`](../../../util/export/README.md#mergeab)\<`E_BASE`, `E_EXTEND`\>\>

#### Source

[packages/matter.js/src/cluster/Cluster.ts:935](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L935)

***

### MakeAttributesMandatory()

> **MakeAttributesMandatory**\<`T`, `C`\>(`attributes`, `conf`): [`MakeAttributesMandatory`](README.md#makeattributesmandatorytc)\<`T`, `C`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Attributes`](../interfaces/Attributes.md) |
| `C` *extends* [`OptionalAttributeConf`](README.md#optionalattributeconft)\<`T`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `attributes` | `T` |
| `conf` | `C` |

#### Returns

[`MakeAttributesMandatory`](README.md#makeattributesmandatorytc)\<`T`, `C`\>

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:170](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L170)

***

### UseOptionalAttributes()

> **UseOptionalAttributes**\<`C`, `A`\>(`cluster`, `conf`): [`UseOptionalAttributes`](README.md#useoptionalattributesca)\<`C`, `A`\>

Forces the presence of the specified optional attributes, so they can be used in the command handlers

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`Cluster`](../interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `A` *extends* [`OptionalAttributeConf`](README.md#optionalattributeconft)\<`C`\[`"attributes"`\]\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | `C` |
| `conf` | `A` |

#### Returns

[`UseOptionalAttributes`](README.md#useoptionalattributesca)\<`C`, `A`\>

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L192)
