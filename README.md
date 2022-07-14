<div align="center">
  
# Valorant API - valorant-api.com
  
[![Profile](https://github.com/valapi/.github/blob/main/128_valapi.png?raw=true)](https://github.com/valapi)
  
**Third-Party API** by Officer
  
[![LICENSE](https://badgen.net/badge/license/MIT/blue)](https://github.com/valapi/.github/blob/main/LICENSE)
[![Github](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com/valapi)
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/pbyWbUYjyt)
  
</div>

-----------

> - **@valapi** isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
> - **@valapi** was created under [Riot Games' "Legal Jibber Jabber"](https://www.riotgames.com/en/legal)
> - [MIT License](https://github.com/valapi/.github/blob/main/LICENSE)

## Guide

Full Guide: **[Click Here](https://valapi.github.io/docs/API/valorant-api.com/Intro.html#contents)**

```typescript
import { Client } from '@valapi/riot-api';
```

### Client

```typescript
const ApiClient = new Client({
    language: 'en-US',
});

```

### API

```typescript
const _data = await ApiClient.Events.get();

console.log(_data.data);
```