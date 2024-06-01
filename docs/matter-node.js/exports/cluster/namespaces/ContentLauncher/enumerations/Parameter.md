[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ContentLauncher](../README.md) / Parameter

# Enumeration: Parameter

## See

MatterSpecification.v11.Cluster § 6.7.5.4

## Enumeration Members

### Actor

> **Actor**: `0`

Actor represents an actor credited in video media content; for example, “Gaby sHoffman”

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:791

***

### Channel

> **Channel**: `1`

Channel represents the identifying data for a television channel; for example, "PBS"

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:795

***

### Character

> **Character**: `2`

A character represented in video media content; for example, “Snow White”

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:799

***

### Director

> **Director**: `3`

A director of the video media content; for example, “Spike Lee”

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:803

***

### Event

> **Event**: `4`

An event is a reference to a type of event; examples would include sports, music, or other types of events.
For example, searching for "Football games" would search for a 'game' event entity and a 'football' sport
entity.

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:809

***

### Franchise

> **Franchise**: `5`

A franchise is a video entity which can represent a number of video entities, like movies or TV shows. For
example, take the fictional franchise "Intergalactic Wars" which represents a collection of movie trilogies,
as well as animated and live action TV shows. This entity type was introduced to account for requests by
customers such as "Find Intergalactic Wars movies", which would search for all 'Intergalactic Wars' programs
of the MOVIE MediaType, rather than attempting to match to a single title.

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:817

***

### Genre

> **Genre**: `6`

Genre represents the genre of video media content such as action, drama or comedy.

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:821

***

### League

> **League**: `7`

League represents the categorical information for a sporting league; for example, "NCAA"

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:825

***

### Popularity

> **Popularity**: `8`

Popularity indicates whether the user asks for popular content.

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:829

***

### Provider

> **Provider**: `9`

The provider (MSP) the user wants this media to be played on; for example, "Netflix".

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:833

***

### Sport

> **Sport**: `10`

Sport represents the categorical information of a sport; for example, football

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:837

***

### SportsTeam

> **SportsTeam**: `11`

SportsTeam represents the categorical information of a professional sports team; for example, "University of
Washington Huskies"

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:842

***

### Type

> **Type**: `12`

The type of content requested. Supported types are "Movie", "MovieSeries", "TVSeries", "TVSeason",
"TVEpisode", "SportsEvent", and "Video"

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:847

***

### Video

> **Video**: `13`

Video represents the identifying data for a specific piece of video content; for example, "Manchester by the
Sea".

#### Source

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:852
