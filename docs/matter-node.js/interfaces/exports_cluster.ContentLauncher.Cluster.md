[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ContentLauncher](../modules/exports_cluster.ContentLauncher.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[ContentLauncher](../modules/exports_cluster.ContentLauncher.md).Cluster

Content Launcher

This cluster provides an interface for launching content on a Video Player device such as a Streaming Media
Player, Smart TV or Smart Screen.

ContentLauncherCluster supports optional features that you can enable with the ContentLauncherCluster.with()
factory method.

**`See`**

MatterSpecification.v11.Cluster § 6.7

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.ContentLauncher.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.ContentLauncher.Cluster.md#attributes)
- [base](exports_cluster.ContentLauncher.Cluster.md#base)
- [commands](exports_cluster.ContentLauncher.Cluster.md#commands)
- [events](exports_cluster.ContentLauncher.Cluster.md#events)
- [extensions](exports_cluster.ContentLauncher.Cluster.md#extensions)
- [features](exports_cluster.ContentLauncher.Cluster.md#features)
- [id](exports_cluster.ContentLauncher.Cluster.md#id)
- [name](exports_cluster.ContentLauncher.Cluster.md#name)
- [revision](exports_cluster.ContentLauncher.Cluster.md#revision)
- [supportedFeatures](exports_cluster.ContentLauncher.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.ContentLauncher.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.ContentLauncher.Cluster.md#alter)
- [enable](exports_cluster.ContentLauncher.Cluster.md#enable)
- [set](exports_cluster.ContentLauncher.Cluster.md#set)
- [with](exports_cluster.ContentLauncher.Cluster.md#with)

## Properties

### attributes

• **attributes**: `Object`

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](exports_cluster.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `hls`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `background`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `logo`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `progressBar`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `providerName`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `splash`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `waterMark`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>\> ; `contentUrl`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `displayString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ContentLauncher.Status.md)\>  }\>, `any`\>  }  } ; `flags`: \{ `urlPlayback`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `search`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `parameterList`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<[`Status`](../enums/exports_cluster.ContentLauncher.Status.md)\>  }\>, `any`\>  }  } ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `urlPlayback`: ``true``  }  }]

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `contentSearch` | [`BitFlag`](../modules/exports_schema.md#bitflag) | ContentSearch Device supports content search (non-app specific) |
| `urlPlayback` | [`BitFlag`](../modules/exports_schema.md#bitflag) | UrlPlayback Device supports basic URL-based file playback |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``1290``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"ContentLauncher"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](exports_cluster.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `hls`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `urlPlayback`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `urlPlayback`: ``true``  }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1290`` ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](exports_cluster.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `hls`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `urlPlayback`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `urlPlayback`: ``true``  }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1290`` ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](exports_cluster.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `hls`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `urlPlayback`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `urlPlayback`: ``true``  }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1290`` ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](exports_cluster.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `hls`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `urlPlayback`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `urlPlayback`: ``true``  }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1290`` ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](exports_cluster.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `hls`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `urlPlayback`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `urlPlayback`: ``true``  }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1290`` ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](exports_cluster.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `hls`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `urlPlayback`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `urlPlayback`: ``true``  }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1290`` ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](exports_cluster.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `hls`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `urlPlayback`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `urlPlayback`: ``true``  }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1290`` ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](exports_cluster.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `hls`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `urlPlayback`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `urlPlayback`: ``true``  }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1290`` ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](exports_cluster.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `hls`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `urlPlayback`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `urlPlayback`: ``true``  }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1290`` ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](exports_cluster.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `hls`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `urlPlayback`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `urlPlayback`: ``true``  }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1290`` ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/exports_cluster.ClusterComposer.md#withfeatures)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](exports_cluster.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](exports_cluster.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `hls`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `urlPlayback`: ``true``  }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>, `any`\>  }  } ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `contentSearch`: ``true``  }  }, \{ `component`: {} ; `flags`: \{ `urlPlayback`: ``true``  }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: ``1290`` ; `name`: ``"ContentLauncher"`` ; `revision`: ``1``  }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
