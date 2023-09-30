# Tokyo Dreams in Geodetic Prose

:sparkles: I like looking for apartments

:sparkles: I like Tokyo and the surrounding area

:sparkles: I like Geodetic data

So here you have (in development) a collection of small tools I will use for apartment hunting. For now just to scratch my itch, but eventually to help me find my dream place in the Tokyo metro.

## Status

:warning: **Blocked:** Due to licensing issues, Google does not make its Transit data for Japan available through the API. Searching for an alternative provider.

## Plans

- [ ] Leverage ~~Google~~ APIs to have a microservice that will build and periodically refresh Isochrones (lines of equal trvel time) around target areas.
- [ ] Identify an API, potentially [Association for Open Data of Public Transportation](https://www.odpt.org), to provide transit route data.
- [ ] Build a microservice to store my Isochrones for reference.
- [ ] Build a Firefox Plugin to tell me if an apartment is inside or outside of my Isochrones.
- [ ] Contract-based types and testing.
- [ ] ...

## Tools

- PNPM Workpsaces and Turbo Repo for Pacakage and Dependency Management
- NestJS
- Jest
- Zod
- Google Routes API
- Google Geocoding API
