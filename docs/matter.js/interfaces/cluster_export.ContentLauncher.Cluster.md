[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ContentLauncher](../modules/cluster_export.ContentLauncher.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[ContentLauncher](../modules/cluster_export.ContentLauncher.md).Cluster

Content Launcher

This cluster provides an interface for launching content on a Video Player device such as a Streaming Media
Player, Smart TV or Smart Screen.

ContentLauncherCluster supports optional features that you can enable with the ContentLauncherCluster.with()
factory method.

**`See`**

MatterSpecification.v11.Cluster § 6.7

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.ContentLauncher.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](cluster_export.ContentLauncher.Cluster.md#attributes)
- [base](cluster_export.ContentLauncher.Cluster.md#base)
- [commands](cluster_export.ContentLauncher.Cluster.md#commands)
- [events](cluster_export.ContentLauncher.Cluster.md#events)
- [extensions](cluster_export.ContentLauncher.Cluster.md#extensions)
- [features](cluster_export.ContentLauncher.Cluster.md#features)
- [id](cluster_export.ContentLauncher.Cluster.md#id)
- [name](cluster_export.ContentLauncher.Cluster.md#name)
- [revision](cluster_export.ContentLauncher.Cluster.md#revision)
- [supportedFeatures](cluster_export.ContentLauncher.Cluster.md#supportedfeatures)
- [unknown](cluster_export.ContentLauncher.Cluster.md#unknown)

### Methods

- [alter](cluster_export.ContentLauncher.Cluster.md#alter)
- [enable](cluster_export.ContentLauncher.Cluster.md#enable)
- [set](cluster_export.ContentLauncher.Cluster.md#set)
- [with](cluster_export.ContentLauncher.Cluster.md#with)

## Properties

### attributes

• **attributes**: `Object`

#### Inherited from

Identity.attributes

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `Object`

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](cluster_export.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hls`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `background`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `logo`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `progressBar`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `providerName`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `splash`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `waterMark`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `contentUrl`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `displayString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\>  }  } = UrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `search`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `parameterList`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ContentLauncher.Status.md)\>  }\>, `any`\>  }  } = ContentSearchComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }]

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `contentSearch` | [`BitFlag`](../modules/schema_export.md#bitflag) | ContentSearch Device supports content search (non-app specific) |
| `urlPlayback` | [`BitFlag`](../modules/schema_export.md#bitflag) | UrlPlayback Device supports basic URL-based file playback |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``1290``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"ContentLauncher"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](cluster_export.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hls`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = UrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = ContentSearchComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1290`` = 0x50a; `name`: ``"ContentLauncher"`` = "ContentLauncher"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](cluster_export.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hls`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = UrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = ContentSearchComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1290`` = 0x50a; `name`: ``"ContentLauncher"`` = "ContentLauncher"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](cluster_export.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hls`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = UrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = ContentSearchComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1290`` = 0x50a; `name`: ``"ContentLauncher"`` = "ContentLauncher"; `revision`: ``1`` = 1 }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](cluster_export.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hls`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = UrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = ContentSearchComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1290`` = 0x50a; `name`: ``"ContentLauncher"`` = "ContentLauncher"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](cluster_export.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hls`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = UrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = ContentSearchComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1290`` = 0x50a; `name`: ``"ContentLauncher"`` = "ContentLauncher"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](cluster_export.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hls`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = UrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = ContentSearchComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1290`` = 0x50a; `name`: ``"ContentLauncher"`` = "ContentLauncher"; `revision`: ``1`` = 1 }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](cluster_export.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hls`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = UrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = ContentSearchComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1290`` = 0x50a; `name`: ``"ContentLauncher"`` = "ContentLauncher"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](cluster_export.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hls`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = UrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = ContentSearchComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1290`` = 0x50a; `name`: ``"ContentLauncher"`` = "ContentLauncher"; `revision`: ``1`` = 1 }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](cluster_export.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hls`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = UrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = ContentSearchComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1290`` = 0x50a; `name`: ``"ContentLauncher"`` = "ContentLauncher"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](cluster_export.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hls`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = UrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = ContentSearchComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1290`` = 0x50a; `name`: ``"ContentLauncher"`` = "ContentLauncher"; `revision`: ``1`` = 1 }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `acceptHeader`: [`Attribute`](cluster_export.Attribute.md)\<`string`[], `any`\> ; `supportedStreamingProtocols`: [`Attribute`](cluster_export.Attribute.md)\<[`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `dash`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `hls`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  } ; `commands`: \{ `launchUrl`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `brandingInformation`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `contentUrl`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `displayString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = UrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }, \{ `component`: \{ `commands`: \{ `launchContent`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `autoPlay`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `search`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<...\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>, `any`\>  }  } = ContentSearchComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `contentSearch`: ``true`` = true }  }, \{ `component`: {} = ContentSearchOrUrlPlaybackComponent; `flags`: \{ `urlPlayback`: ``true`` = true }  }] ; `features`: \{ `contentSearch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `urlPlayback`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``1290`` = 0x50a; `name`: ``"ContentLauncher"`` = "ContentLauncher"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
