/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.8.6
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * combat object
 */
export interface GetCharactersCharacterIdStatsCombat { 
    /**
     * cap_drainedby_npc integer
     */
    cap_drainedby_npc?: number;
    /**
     * cap_drainedby_pc integer
     */
    cap_drainedby_pc?: number;
    /**
     * cap_draining_pc integer
     */
    cap_draining_pc?: number;
    /**
     * criminal_flag_set integer
     */
    criminal_flag_set?: number;
    /**
     * damage_from_np_cs_amount integer
     */
    damage_from_np_cs_amount?: number;
    /**
     * damage_from_np_cs_num_shots integer
     */
    damage_from_np_cs_num_shots?: number;
    /**
     * damage_from_players_bomb_amount integer
     */
    damage_from_players_bomb_amount?: number;
    /**
     * damage_from_players_bomb_num_shots integer
     */
    damage_from_players_bomb_num_shots?: number;
    /**
     * damage_from_players_combat_drone_amount integer
     */
    damage_from_players_combat_drone_amount?: number;
    /**
     * damage_from_players_combat_drone_num_shots integer
     */
    damage_from_players_combat_drone_num_shots?: number;
    /**
     * damage_from_players_energy_amount integer
     */
    damage_from_players_energy_amount?: number;
    /**
     * damage_from_players_energy_num_shots integer
     */
    damage_from_players_energy_num_shots?: number;
    /**
     * damage_from_players_fighter_bomber_amount integer
     */
    damage_from_players_fighter_bomber_amount?: number;
    /**
     * damage_from_players_fighter_bomber_num_shots integer
     */
    damage_from_players_fighter_bomber_num_shots?: number;
    /**
     * damage_from_players_fighter_drone_amount integer
     */
    damage_from_players_fighter_drone_amount?: number;
    /**
     * damage_from_players_fighter_drone_num_shots integer
     */
    damage_from_players_fighter_drone_num_shots?: number;
    /**
     * damage_from_players_hybrid_amount integer
     */
    damage_from_players_hybrid_amount?: number;
    /**
     * damage_from_players_hybrid_num_shots integer
     */
    damage_from_players_hybrid_num_shots?: number;
    /**
     * damage_from_players_missile_amount integer
     */
    damage_from_players_missile_amount?: number;
    /**
     * damage_from_players_missile_num_shots integer
     */
    damage_from_players_missile_num_shots?: number;
    /**
     * damage_from_players_projectile_amount integer
     */
    damage_from_players_projectile_amount?: number;
    /**
     * damage_from_players_projectile_num_shots integer
     */
    damage_from_players_projectile_num_shots?: number;
    /**
     * damage_from_players_smart_bomb_amount integer
     */
    damage_from_players_smart_bomb_amount?: number;
    /**
     * damage_from_players_smart_bomb_num_shots integer
     */
    damage_from_players_smart_bomb_num_shots?: number;
    /**
     * damage_from_players_super_amount integer
     */
    damage_from_players_super_amount?: number;
    /**
     * damage_from_players_super_num_shots integer
     */
    damage_from_players_super_num_shots?: number;
    /**
     * damage_from_structures_total_amount integer
     */
    damage_from_structures_total_amount?: number;
    /**
     * damage_from_structures_total_num_shots integer
     */
    damage_from_structures_total_num_shots?: number;
    /**
     * damage_to_players_bomb_amount integer
     */
    damage_to_players_bomb_amount?: number;
    /**
     * damage_to_players_bomb_num_shots integer
     */
    damage_to_players_bomb_num_shots?: number;
    /**
     * damage_to_players_combat_drone_amount integer
     */
    damage_to_players_combat_drone_amount?: number;
    /**
     * damage_to_players_combat_drone_num_shots integer
     */
    damage_to_players_combat_drone_num_shots?: number;
    /**
     * damage_to_players_energy_amount integer
     */
    damage_to_players_energy_amount?: number;
    /**
     * damage_to_players_energy_num_shots integer
     */
    damage_to_players_energy_num_shots?: number;
    /**
     * damage_to_players_fighter_bomber_amount integer
     */
    damage_to_players_fighter_bomber_amount?: number;
    /**
     * damage_to_players_fighter_bomber_num_shots integer
     */
    damage_to_players_fighter_bomber_num_shots?: number;
    /**
     * damage_to_players_fighter_drone_amount integer
     */
    damage_to_players_fighter_drone_amount?: number;
    /**
     * damage_to_players_fighter_drone_num_shots integer
     */
    damage_to_players_fighter_drone_num_shots?: number;
    /**
     * damage_to_players_hybrid_amount integer
     */
    damage_to_players_hybrid_amount?: number;
    /**
     * damage_to_players_hybrid_num_shots integer
     */
    damage_to_players_hybrid_num_shots?: number;
    /**
     * damage_to_players_missile_amount integer
     */
    damage_to_players_missile_amount?: number;
    /**
     * damage_to_players_missile_num_shots integer
     */
    damage_to_players_missile_num_shots?: number;
    /**
     * damage_to_players_projectile_amount integer
     */
    damage_to_players_projectile_amount?: number;
    /**
     * damage_to_players_projectile_num_shots integer
     */
    damage_to_players_projectile_num_shots?: number;
    /**
     * damage_to_players_smart_bomb_amount integer
     */
    damage_to_players_smart_bomb_amount?: number;
    /**
     * damage_to_players_smart_bomb_num_shots integer
     */
    damage_to_players_smart_bomb_num_shots?: number;
    /**
     * damage_to_players_super_amount integer
     */
    damage_to_players_super_amount?: number;
    /**
     * damage_to_players_super_num_shots integer
     */
    damage_to_players_super_num_shots?: number;
    /**
     * damage_to_structures_total_amount integer
     */
    damage_to_structures_total_amount?: number;
    /**
     * damage_to_structures_total_num_shots integer
     */
    damage_to_structures_total_num_shots?: number;
    /**
     * deaths_high_sec integer
     */
    deaths_high_sec?: number;
    /**
     * deaths_low_sec integer
     */
    deaths_low_sec?: number;
    /**
     * deaths_null_sec integer
     */
    deaths_null_sec?: number;
    /**
     * deaths_pod_high_sec integer
     */
    deaths_pod_high_sec?: number;
    /**
     * deaths_pod_low_sec integer
     */
    deaths_pod_low_sec?: number;
    /**
     * deaths_pod_null_sec integer
     */
    deaths_pod_null_sec?: number;
    /**
     * deaths_pod_wormhole integer
     */
    deaths_pod_wormhole?: number;
    /**
     * deaths_wormhole integer
     */
    deaths_wormhole?: number;
    /**
     * drone_engage integer
     */
    drone_engage?: number;
    /**
     * dscans integer
     */
    dscans?: number;
    /**
     * duel_requested integer
     */
    duel_requested?: number;
    /**
     * engagement_register integer
     */
    engagement_register?: number;
    /**
     * kills_assists integer
     */
    kills_assists?: number;
    /**
     * kills_high_sec integer
     */
    kills_high_sec?: number;
    /**
     * kills_low_sec integer
     */
    kills_low_sec?: number;
    /**
     * kills_null_sec integer
     */
    kills_null_sec?: number;
    /**
     * kills_pod_high_sec integer
     */
    kills_pod_high_sec?: number;
    /**
     * kills_pod_low_sec integer
     */
    kills_pod_low_sec?: number;
    /**
     * kills_pod_null_sec integer
     */
    kills_pod_null_sec?: number;
    /**
     * kills_pod_wormhole integer
     */
    kills_pod_wormhole?: number;
    /**
     * kills_wormhole integer
     */
    kills_wormhole?: number;
    /**
     * npc_flag_set integer
     */
    npc_flag_set?: number;
    /**
     * probe_scans integer
     */
    probe_scans?: number;
    /**
     * pvp_flag_set integer
     */
    pvp_flag_set?: number;
    /**
     * repair_armor_by_remote_amount integer
     */
    repair_armor_by_remote_amount?: number;
    /**
     * repair_armor_remote_amount integer
     */
    repair_armor_remote_amount?: number;
    /**
     * repair_armor_self_amount integer
     */
    repair_armor_self_amount?: number;
    /**
     * repair_capacitor_by_remote_amount integer
     */
    repair_capacitor_by_remote_amount?: number;
    /**
     * repair_capacitor_remote_amount integer
     */
    repair_capacitor_remote_amount?: number;
    /**
     * repair_capacitor_self_amount integer
     */
    repair_capacitor_self_amount?: number;
    /**
     * repair_hull_by_remote_amount integer
     */
    repair_hull_by_remote_amount?: number;
    /**
     * repair_hull_remote_amount integer
     */
    repair_hull_remote_amount?: number;
    /**
     * repair_hull_self_amount integer
     */
    repair_hull_self_amount?: number;
    /**
     * repair_shield_by_remote_amount integer
     */
    repair_shield_by_remote_amount?: number;
    /**
     * repair_shield_remote_amount integer
     */
    repair_shield_remote_amount?: number;
    /**
     * repair_shield_self_amount integer
     */
    repair_shield_self_amount?: number;
    /**
     * self_destructs integer
     */
    self_destructs?: number;
    /**
     * warp_scramble_pc integer
     */
    warp_scramble_pc?: number;
    /**
     * warp_scrambledby_npc integer
     */
    warp_scrambledby_npc?: number;
    /**
     * warp_scrambledby_pc integer
     */
    warp_scrambledby_pc?: number;
    /**
     * weapon_flag_set integer
     */
    weapon_flag_set?: number;
    /**
     * webifiedby_npc integer
     */
    webifiedby_npc?: number;
    /**
     * webifiedby_pc integer
     */
    webifiedby_pc?: number;
    /**
     * webifying_pc integer
     */
    webifying_pc?: number;
}
