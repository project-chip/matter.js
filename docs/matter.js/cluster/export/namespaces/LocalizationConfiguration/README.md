[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / LocalizationConfiguration

# Namespace: LocalizationConfiguration

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts#L67)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.activeLocale

> `readonly` **activeLocale**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`string`, `any`\>

The ActiveLocale attribute shall represent the locale that the Node is currently configured to use when
conveying information. The ActiveLocale attribute shall be a Language Tag as defined by BCP47
[https://tools.ietf.org/rfc/bcp/bcp47.txt]. The ActiveLocale attribute shall have a default value
assigned by the Vendor and shall be a value contained within the SupportedLocales attribute list.

An attempt to write a value to ActiveLocale that is not present in SupportedLocales shall result in a
CONSTRAINT_ERROR error.

###### See

MatterSpecification.v11.Core § 11.3.4.1

##### attributes.supportedLocales

> `readonly` **supportedLocales**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<`string`[], `any`\>

The SupportedLocales attribute shall represent a list of locale strings that are valid values for the
ActiveLocale attribute. The list shall NOT contain any duplicate entries. The ordering of items within
the list SHOULD NOT express any meaning.

###### See

MatterSpecification.v11.Core § 11.3.4.2

##### id

> `readonly` **id**: `43` = `0x2b`

##### name

> `readonly` **name**: `"LocalizationConfiguration"` = `"LocalizationConfiguration"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts#L20)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/LocalizationConfigurationCluster.ts#L71)
