import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { ILogger } from "@spt/models/spt/utils/ILogger";

import { IQuestCondition } from "@spt/models/eft/common/tables/IQuest";
import configJson from "./config.json";
import questChangeInfoJson from "./questChangeInfo.json";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";

class Mod implements IPostDBLoadMod {
    public postDBLoad(container: DependencyContainer): void {
        // get the logger from the server container
        const logger = container.resolve<ILogger>("WinstonLogger");

        const databaseServer =
            container.resolve<DatabaseServer>("DatabaseServer");
        const tables: IDatabaseTables = databaseServer.getTables();
        const quests = tables.templates.quests;

        // remove Network Provider - Part 1 pre-requisites
        if (configJson.removeRequirements) {
            const networkProviderConditions: IQuestCondition[] = [
                questChangeInfoJson.newPreReq as IQuestCondition,
            ];
            quests[questChangeInfoJson.mainQuest].conditions.AvailableForStart =
                networkProviderConditions;
        }
        // remove questline timegating
        if (configJson.skipTimeGate) {
            const questList = questChangeInfoJson.timeGateRemovalList;
            questList.forEach((quest) => {
                quests[quest].conditions.AvailableForStart.forEach(
                    (condition) => {
                        condition.availableAfter = 0;
                    }
                );
            });
        }

        logger.info("[LightkeeperPatch] Lightkeeper questline patch applied");
    }
}

export const mod = new Mod();
