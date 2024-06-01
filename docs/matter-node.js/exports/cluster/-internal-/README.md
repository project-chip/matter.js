[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / \<internal\>

# \<internal\>

## Index

### Namespaces

- ["/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"](namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)
- ["/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/AttributeId"](namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_AttributeId/README.md)
- ["/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/ClusterId"](namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_ClusterId/README.md)
- ["/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"](namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)
- ["/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EndpointNumber"](namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EndpointNumber/README.md)
- ["/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EventId"](namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EventId/README.md)
- ["/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/FabricIndex"](namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_FabricIndex/README.md)
- ["/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/NodeId"](namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_NodeId/README.md)
- ["/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/VendorId"](namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_VendorId/README.md)
- ["/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvVoid"](namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvVoid/README.md)
- ["/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"](namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)
- [AsyncConstruction](namespaces/AsyncConstruction/README.md)

### Classes

- [MatterDevice](classes/MatterDevice.md)

### Interfaces

- [AsyncConstructable](interfaces/AsyncConstructable.md)
- [AsyncConstruction](interfaces/AsyncConstruction.md)
- [AttributeOptions](interfaces/AttributeOptions.md)
- [CachedAttributeInfo](interfaces/CachedAttributeInfo.md)
- [CachedCommandInfo](interfaces/CachedCommandInfo.md)
- [CachedEventInfo](interfaces/CachedEventInfo.md)
- [CommandOptions](interfaces/CommandOptions.md)
- [ConditionalAttributeOptions](interfaces/ConditionalAttributeOptions.md)
- [ConditionalCommandOptions](interfaces/ConditionalCommandOptions.md)
- [ConditionalEventOptions](interfaces/ConditionalEventOptions.md)
- [Configuration](interfaces/Configuration.md)
- [EndpointInterface](interfaces/EndpointInterface.md)
- [EventOptions](interfaces/EventOptions.md)
- [ProductDescription](interfaces/ProductDescription.md)
- [scenesTableEntry](interfaces/scenesTableEntry.md)

## Type Aliases

### AttributeGetters\<A\>

> **AttributeGetters**\<`A`\>: \{ \[P in keyof A as \`$\{string & P\}AttributeGetter\`\]?: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:52

***

### AttributeHandlers\<A\>

> **AttributeHandlers**\<`A`\>: [`Merge`](../../../util/export/README.md#mergeab)\<[`AttributeGetters`](README.md#attributegettersa)\<`A`\>, [`Merge`](../../../util/export/README.md#mergeab)\<[`AttributeSetters`](README.md#attributesettersa)\<`A`\>, [`AttributeValidators`](README.md#attributevalidatorsa)\<`A`\>\>\>

Handlers to process cluster commands

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:88

***

### AttributeSetters\<A\>

> **AttributeSetters**\<`A`\>: \{ \[P in keyof A as \`$\{string & P\}AttributeSetter\`\]?: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:60

***

### AttributeValidators\<A\>

> **AttributeValidators**\<`A`\>: \{ \[P in keyof A as \`$\{string & P\}AttributeValidator\`\]?: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:67

***

### ClientAttributeGetters\<A\>

> **ClientAttributeGetters**\<`A`\>: `Omit`\<\{ \[P in keyof A as \`get$\{Capitalize\<string & P\>\}Attribute\`\]: Function \}, keyof [`GlobalAttributes`](../README.md#globalattributesf)\<`any`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

packages/matter.js/dist/esm/cluster/client/ClusterClientTypes.d.ts:44

***

### ClientAttributeListeners\<A\>

> **ClientAttributeListeners**\<`A`\>: \{ \[P in keyof A as \`add$\{Capitalize\<string & P\>\}AttributeListener\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

packages/matter.js/dist/esm/cluster/client/ClusterClientTypes.d.ts:61

***

### ClientAttributeSetters\<A\>

> **ClientAttributeSetters**\<`A`\>: \{ \[P in WritableAttributeNames\<A\> as \`set$\{Capitalize\<string & P\>\}Attribute\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

packages/matter.js/dist/esm/cluster/client/ClusterClientTypes.d.ts:55

***

### ClientAttributeSubscribers\<A\>

> **ClientAttributeSubscribers**\<`A`\>: \{ \[P in keyof A as \`subscribe$\{Capitalize\<string & P\>\}Attribute\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

packages/matter.js/dist/esm/cluster/client/ClusterClientTypes.d.ts:58

***

### ClientEventGetters\<E\>

> **ClientEventGetters**\<`E`\>: \{ \[P in keyof E as \`get$\{Capitalize\<string & P\>\}Event\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `E` *extends* [`Events`](../interfaces/Events.md) |

#### Source

packages/matter.js/dist/esm/cluster/client/ClusterClientTypes.d.ts:67

***

### ClientEventListeners\<E\>

> **ClientEventListeners**\<`E`\>: \{ \[P in keyof E as \`add$\{Capitalize\<string & P\>\}EventListener\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `E` *extends* [`Events`](../interfaces/Events.md) |

#### Source

packages/matter.js/dist/esm/cluster/client/ClusterClientTypes.d.ts:73

***

### ClientEventSubscribers\<E\>

> **ClientEventSubscribers**\<`E`\>: \{ \[P in keyof E as \`subscribe$\{Capitalize\<string & P\>\}Event\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `E` *extends* [`Events`](../interfaces/Events.md) |

#### Source

packages/matter.js/dist/esm/cluster/client/ClusterClientTypes.d.ts:70

***

### ClientGlobalAttributeGetters\<F\>

> **ClientGlobalAttributeGetters**\<`F`\>: \{ \[P in GlobalAttributeNames\<F\> as \`get$\{Capitalize\<string & P\>\}Attribute\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |

#### Source

packages/matter.js/dist/esm/cluster/client/ClusterClientTypes.d.ts:47

***

### ClusterExtend\<F, SF, A, C, E\>

> **ClusterExtend**\<`F`, `SF`, `A`, `C`, `E`\>: `object`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
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

packages/matter.js/dist/esm/cluster/Cluster.d.ts:249

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

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:82

***

### CommandServers\<C\>

> **CommandServers**\<`C`\>: `{ [P in keyof C]: SignatureFromCommandSpec<C[P]> }`

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`Commands`](../interfaces/Commands.md) |

#### Source

packages/matter.js/dist/esm/cluster/client/ClusterClientTypes.d.ts:64

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

packages/matter.js/dist/esm/cluster/server/AttributeServer.d.ts:25

***

### GetterTypeFromSpec\<A\>

> **GetterTypeFromSpec**\<`A`\>: `A` *extends* [`OptionalAttribute`](../interfaces/OptionalAttribute.md)\<infer T, `any`\> ? `T` \| `undefined` : [`AttributeJsType`](../README.md#attributejstypet)\<`A`\>

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attribute`](../interfaces/Attribute.md)\<`any`, `any`\> |

#### Source

packages/matter.js/dist/esm/cluster/client/ClusterClientTypes.d.ts:43

***

### GetterTypeFromSpec\<A\>

> **GetterTypeFromSpec**\<`A`\>: `A` *extends* [`OptionalAttribute`](../interfaces/OptionalAttribute.md)\<infer T, `any`\> ? `T` \| `undefined` : [`AttributeJsType`](../README.md#attributejstypet)\<`A`\>

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attribute`](../interfaces/Attribute.md)\<`any`, `any`\> |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:119

***

### MakeAttributeMandatory\<A\>

> **MakeAttributeMandatory**\<`A`\>: `A` *extends* [`OptionalWritableFabricScopedAttribute`](../interfaces/OptionalWritableFabricScopedAttribute.md)\<infer T, `any`\> ? [`WritableFabricScopedAttribute`](../interfaces/WritableFabricScopedAttribute.md)\<`T`, `any`\> : `A` *extends* [`OptionalWritableAttribute`](../interfaces/OptionalWritableAttribute.md)\<infer T, `any`\> ? [`WritableAttribute`](../interfaces/WritableAttribute.md)\<`T`, `any`\> : `A` *extends* [`OptionalAttribute`](../interfaces/OptionalAttribute.md)\<infer T, `any`\> ? [`Attribute`](../interfaces/Attribute.md)\<`T`, `any`\> : `A`

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attribute`](../interfaces/Attribute.md)\<`any`, `any`\> |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:105

***

### MakeAttributesMandatory\<T, C\>

> **MakeAttributesMandatory**\<`T`, `C`\>: `{ [K in keyof T]: K extends keyof C ? MakeAttributeMandatory<T[K]> : T[K] }`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Attributes`](../interfaces/Attributes.md) |
| `C` *extends* [`OptionalAttributeConf`](README.md#optionalattributeconft)\<`T`\> |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:106

***

### MandatoryAttributeServers\<A\>

> **MandatoryAttributeServers**\<`A`\>: `Omit`\<`{ [P in MandatoryAttributeNames<A>]: A[P] extends FabricScopedAttribute<any, any> ? FabricScopedAttributeServer<AttributeJsType<A[P]>> : A[P] extends WritableFabricScopedAttribute<any, any> ? FabricScopedAttributeServer<AttributeJsType<A[P]>> : A[P] extends FixedAttribute<any, any> ? FixedAttributeServer<AttributeJsType<A[P]>> : AttributeServer<AttributeJsType<A[P]>> }`, keyof [`GlobalAttributes`](../README.md#globalattributesf)\<`any`\>\>

Cluster attributes accessible on the cluster server

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:28

***

### MandatoryCommandNames\<C\>

> **MandatoryCommandNames**\<`C`\>: `{ [K in keyof C]: C[K] extends OptionalCommand<any, any, any> ? never : K }`\[keyof `C`\]

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`Commands`](../interfaces/Commands.md) |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:46

***

### OptionalAttributeConf\<T\>

> **OptionalAttributeConf**\<`T`\>: `{ [K in OptionalAttributeNames<T>]?: true }`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:102

***

### OptionalAttributeServers\<A\>

> **OptionalAttributeServers**\<`A`\>: `{ [P in OptionalAttributeNames<A>]?: A[P] extends OptionalWritableFabricScopedAttribute<any, any> ? FabricScopedAttributeServer<AttributeJsType<A[P]>> : A[P] extends OptionalFixedAttribute<any, any> ? FixedAttributeServer<AttributeJsType<A[P]>> : AttributeServer<AttributeJsType<A[P]>> }`

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:31

***

### OptionalCommandNames\<C\>

> **OptionalCommandNames**\<`C`\>: `{ [K in keyof C]: C[K] extends OptionalCommand<any, any, any> ? K : never }`\[keyof `C`\]

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`Commands`](../interfaces/Commands.md) |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:49

***

### ServerAttributeGetters\<A\>

> **ServerAttributeGetters**\<`A`\>: \{ \[P in MandatoryAttributeNames\<A\> as \`get$\{Capitalize\<string & P\>\}Attribute\`\]: Function \} & \{ \[P in OptionalAttributeNames\<A\> as \`get$\{Capitalize\<string & P\>\}Attribute\`\]?: Function \} & \{ \[P in FabricScopedAttributeNames\<A\> as \`get$\{Capitalize\<string & P\>\}Attribute\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:120

***

### ServerAttributeSetters\<A\>

> **ServerAttributeSetters**\<`A`\>: \{ \[P in NonFixedAttributeNames\<A\> as \`set$\{Capitalize\<string & P\>\}Attribute\`\]: Function \} & \{ \[P in FabricScopedAttributeNames\<A\> as \`set$\{Capitalize\<string & P\>\}Attribute\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:127

***

### ServerAttributeSubscribers\<A\>

> **ServerAttributeSubscribers**\<`A`\>: \{ \[P in NonFixedAttributeNames\<A\> as \`subscribe$\{Capitalize\<string & P\>\}Attribute\`\]: Function \} & \{ \[P in FabricScopedAttributeNames\<A\> as \`subscribe$\{Capitalize\<string & P\>\}Attribute\`\]: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:132

***

### ServerEventTriggers\<E\>

> **ServerEventTriggers**\<`E`\>: \{ \[P in MandatoryEventNames\<E\> as \`trigger$\{Capitalize\<string & P\>\}Event\`\]: Function \} & \{ \[P in OptionalEventNames\<E\> as \`trigger$\{Capitalize\<string & P\>\}Event\`\]?: Function \}

#### Type parameters

| Type parameter |
| :------ |
| `E` *extends* [`Events`](../interfaces/Events.md) |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:142

***

### UseOptionalAttributes\<C, A\>

> **UseOptionalAttributes**\<`C`, `A`\>: [`Cluster`](../interfaces/Cluster.md)\<`C`\[`"features"`\], `C`\[`"supportedFeatures"`\], [`MakeAttributesMandatory`](README.md#makeattributesmandatorytc)\<`C`\[`"attributes"`\], `A`\>, `C`\[`"commands"`\], `C`\[`"events"`\]\>

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`Cluster`](../interfaces/Cluster.md)\<`any`, `any`, `any`, `any`, `any`\> |
| `A` *extends* [`OptionalAttributeConf`](README.md#optionalattributeconft)\<`C`\[`"attributes"`\]\> |

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:110

***

### WritableAttributeNames\<A\>

> **WritableAttributeNames**\<`A`\>: `{ [K in keyof A]: A[K] extends WritableAttribute<any, any> ? K : never }`\[keyof `A`\] \| `{ [K in keyof A]: A[K] extends OptionalWritableAttribute<any, any> ? K : never }`\[keyof `A`\]

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../interfaces/Attributes.md) |

#### Source

packages/matter.js/dist/esm/cluster/client/ClusterClientTypes.d.ts:50

## Functions

### AsyncConstruction()

> **AsyncConstruction**\<`T`\>(`subject`, `initializer`?, `options`?): [`AsyncConstruction`](interfaces/AsyncConstruction.md)\<`T`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`AsyncConstructable`](interfaces/AsyncConstructable.md)\<`any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subject` | `T` |
| `initializer`? | () => [`MaybePromise`](../../../util/export/README.md#maybepromiset) |
| `options`? | [`Options`](namespaces/AsyncConstruction/interfaces/Options.md) |

#### Returns

[`AsyncConstruction`](interfaces/AsyncConstruction.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:115

***

### ClusterExtend()

> **ClusterExtend**\<`F`, `SF_BASE`, `SF_EXTEND`, `A_BASE`, `C_BASE`, `E_BASE`, `A_EXTEND`, `C_EXTEND`, `E_EXTEND`\>(`__namedParameters`, `__namedParameters`): [`Cluster`](../interfaces/Cluster.md)\<`F`, [`Merge`](../../../util/export/README.md#mergeab)\<`SF_BASE`, `SF_EXTEND`\>, [`Merge`](../../../util/export/README.md#mergeab)\<`A_BASE`, `A_EXTEND`\>, [`Merge`](../../../util/export/README.md#mergeab)\<`C_BASE`, `C_EXTEND`\>, [`Merge`](../../../util/export/README.md#mergeab)\<`E_BASE`, `E_EXTEND`\>\>

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) | - |
| `SF_BASE` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> | - |
| `SF_EXTEND` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> | - |
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

packages/matter.js/dist/esm/cluster/Cluster.d.ts:255

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

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:109

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

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:112
