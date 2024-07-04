# Lightkeeper Questline Patch

Modifies the Lightkeeper questline in SPT 3.8.3.

-   Removes pre-requisite quests, unlocks `Network Provider - Part 1` at level 25 from Mechanic
-   Removes time-gating on quests

Behavior can be modified in `config.json`:

```
skipTimeGate: setting `true` skips time gating for Mechanic & Lightkeeper quests
removeRequirements: setting `true` skips requirements to start the questline (https://tarkov.help/en/quest/lightkeeper-unlocking for 3.8.3)
```

---

### List of quests changed

-   `Network Provider - Part 1` has all existing requirements removed (example: you don't have to complete `Tarkov Shooter` / `Cargo X` questlines to access this quest). A new requirement is added for the player to be level 25. Basically, you can start the Lightkeeper questline once you hit Level 25. Setting `removeRequirements` to `false` will remove this feature.

-   For the rest of the questline, all these quests have their time-gates removed. Nothing else is modified for this list outside of it being available instantly on completion of the previous quest in the chain. Setting `skipTimeGate` to `false` will disable this feature.

```
Network Provider - Part 2
Assessment - Part 1
Assessment - Part 2
Assessment - Part 3
Key to the Tower
Knock-Knock
Getting Acquainted
Missing Informant
Snatch
Payback
Return the Favor
Provocation
Following the Bread Crumbs
Spotter
Make an Impression
Trouble in the Big City
Overseas Trust - Part 1
Overseas Trust - Part 2
```
