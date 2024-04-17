[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Switch](../modules/cluster_export.Switch.md) / Cluster

# Interface: Cluster

[cluster/export](../modules/cluster_export.md).[Switch](../modules/cluster_export.Switch.md).Cluster

Switch

This cluster exposes interactions with a switch device, for the purpose of using those interactions by other
devices.

Two types of switch devices are supported: latching switch (e.g. rocker switch) and momentary switch (e.g. push
button), distinguished with their feature flags.

Interactions with the switch device are exposed as attributes (for the latching switch) and as events (for both
types of switches).

An interested client may subscribe to these attributes/events and thus be informed of the interactions, and can
perform actions based on this, for example by sending commands to perform an action such as controlling a light
or a window shade.

Per the Matter specification you cannot use [SwitchCluster](../modules/cluster_export.md#switchcluster-1) without enabling certain feature combinations.
You must use the SwitchCluster.with() factory method to obtain a working cluster.

**`See`**

MatterSpecification.v11.Cluster § 1.11

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/cluster_export.Switch.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [id](cluster_export.Switch.Cluster.md#id)
- [name](cluster_export.Switch.Cluster.md#name)
- [with](cluster_export.Switch.Cluster.md#with)

## Properties

### id

• **id**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L100)

___

### name

• **name**: `string`

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L101)

___

### with

• **with**: \<SelectionT\>(...`selection`: `SelectionT`) => [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `previousPosition`: ... ; `totalNumberOfPressesCounted`: ...  }\>, `any`\> ; `multiPressOngoing`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: ... ; `newPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchMultiPressComponent; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `switchLatched`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } = LatchingSwitchComponent; `flags`: \{ `latchingSwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `initialPress`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchComponent; `flags`: \{ `momentarySwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `longPress`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\> ; `longRelease`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchLongPressComponent; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `shortRelease`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchReleaseComponent; `flags`: \{ `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``true`` = true; `momentarySwitch`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``false`` = false; `momentarySwitch`: ``false`` = false }  }] ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``59`` = 0x3b; `name`: ``"Switch"`` = "Switch"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

#### Type declaration

▸ \<`SelectionT`\>(`...selection`): [`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `previousPosition`: ... ; `totalNumberOfPressesCounted`: ...  }\>, `any`\> ; `multiPressOngoing`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: ... ; `newPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchMultiPressComponent; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `switchLatched`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } = LatchingSwitchComponent; `flags`: \{ `latchingSwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `initialPress`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchComponent; `flags`: \{ `momentarySwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `longPress`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\> ; `longRelease`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchLongPressComponent; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `shortRelease`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchReleaseComponent; `flags`: \{ `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``true`` = true; `momentarySwitch`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``false`` = false; `momentarySwitch`: ``false`` = false }  }] ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``59`` = 0x3b; `name`: ``"Switch"`` = "Switch"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

##### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `previousPosition`: ... ; `totalNumberOfPressesCounted`: ...  }\>, `any`\> ; `multiPressOngoing`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: ... ; `newPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchMultiPressComponent; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `switchLatched`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } = LatchingSwitchComponent; `flags`: \{ `latchingSwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `initialPress`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchComponent; `flags`: \{ `momentarySwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `longPress`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\> ; `longRelease`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchLongPressComponent; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `shortRelease`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchReleaseComponent; `flags`: \{ `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``true`` = true; `momentarySwitch`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``false`` = false; `momentarySwitch`: ``false`` = false }  }] ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``59`` = 0x3b; `name`: ``"Switch"`` = "Switch"; `revision`: ``1`` = 1 }\>\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

##### Returns

[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: \{ `currentPosition`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `numberOfPositions`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `multiPressMax`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `multiPressComplete`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `previousPosition`: ... ; `totalNumberOfPressesCounted`: ...  }\>, `any`\> ; `multiPressOngoing`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: ... ; `newPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchMultiPressComponent; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `switchLatched`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } = LatchingSwitchComponent; `flags`: \{ `latchingSwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `initialPress`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchComponent; `flags`: \{ `momentarySwitch`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `longPress`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newPosition`: ...  }\>, `any`\> ; `longRelease`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchLongPressComponent; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: \{ `events`: \{ `shortRelease`: [`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `previousPosition`: ...  }\>, `any`\>  }  } = MomentarySwitchReleaseComponent; `flags`: \{ `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchRelease`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchLongPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchLongPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitch`: ``false`` = false; `momentarySwitchMultiPress`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `momentarySwitchMultiPress`: ``true`` = true; `momentarySwitchRelease`: ``false`` = false }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``true`` = true; `momentarySwitch`: ``true`` = true }  }, \{ `component`: ``false`` = false; `flags`: \{ `latchingSwitch`: ``false`` = false; `momentarySwitch`: ``false`` = false }  }] ; `features`: \{ `latchingSwitch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitch`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitchLongPress`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitchMultiPress`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `momentarySwitchRelease`: [`BitFlag`](../modules/schema_export.md#bitflag)  } ; `id`: ``59`` = 0x3b; `name`: ``"Switch"`` = "Switch"; `revision`: ``1`` = 1 }\>, `SelectionT`\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L103)
