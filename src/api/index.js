//#region

/* 
/achievement-categories
/achievement-objectives
/achievement-rewards
/achievements
/almanax
/almanax-calendars
/alliance-rights
/alterations
/areas
/breeds
/challenges
/characteristics
/collectables
/companions
/criteria/[Criterion] 
/custom-mode-breed-spells
/documents
/dungeons
/effects
/emoticons
/finish-moves
/guild-rights
/havenbag-furnitures
/havenbag-themes
/idols
/idols-spell-levels
/img/maps/[scale : 1/0.75/0.5/0.25]/[MapId].jpg
/incarnation-informations
/info-messages
/interactives
/item-sets
/items
/item-super-types
/item-types
/jobs
/legendary-power-categories
/legendary-treasure-hunts 
/living-object-skin-jnt-mood
/map-positions
/map-references
/modsters
/monsters
/monster-races
/monster-super-races
/months
/mount-behaviors
/mount-families
/mounts
/npc-messages
/npc-shop
/npcs
/ornaments
/point-of-interest
/quest-categories
/quest-objective-types
/quest-objectives
/quest-step-rewards
/quest-steps
/quests
/random-drop-groups
/recipes
/server-seasons
/servers
/server-game-types
/skills
/smiley-packs
/spells
/spell-levels
/spell-pairs
/spell-states
/spell-types
/spell-variants
/subareas
/super-areas
/titles
/version
/worlds 
*/
//#endregion

// exemple https://api.dofusdb.fr/items?$skip=17551&&$limit=50
import axios from "axios";

const API_BASE_URL = "https://api.dofusdb.fr/";

export const getDevItem = async () => {
  try {
    const response = await axios.get(API_BASE_URL + "items/22200");
    if (response.status != 200) {
      throw new Error("Erreur de requête : " + response.status);
    }
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};
export const getAllItems = async ({ pageParam = 0 }) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}items?$limit=50&$skip=${pageParam * 50}`
    );
    if (response.status !== 200) {
      throw new Error("Erreur de requête : " + response.status);
    }
    const data = response.data;
    return {
      data: data.data,
      nextPage: data.skip + 50 < data.total ? pageParam + 1 : undefined,
      total: data.total,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};
export const getCharacteristicById = async (id) => {
  if (id == -1) return;
  try {
    const response = await axios.get(API_BASE_URL + "characteristics/" + id);
    if (response.status != 200) {
      throw new Error("Erreur de requête : " + response.status);
    }
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};
