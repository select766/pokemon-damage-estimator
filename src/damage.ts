// ステータス・ダメージ計算

import { PokemonType, typeMatch } from "./model";

function f(value: number) {
    return Math.floor(value);
}

export const defaultLevel = 50;
export const ivMin = 0;
export const ivMax = 31;
export const evMin = 0;
export const evMax = 252;

/**
 * HPステータス計算
 * @param base 種族値
 * @param iv 個体値
 * @param ev 努力値
 * @param level レベル
 */
export function CalcStatusHP(base: number, iv: number, ev: number, level: number = defaultLevel) {
    return f((base * 2 + iv + f(ev / 4)) * level / 100) + level + 10;
}

/**
 * HP以外のステータス計算
 * @param base 種族値
 * @param iv 個体値
 * @param ev 努力値
 * @param nature 性格補正 負の数はマイナス補正、正の数はプラス補正、0は無補正
 * @param level レベル
 */
export function CalcStatusNonHP(base: number, iv: number, ev: number, nature: -1 | 0 | 1, level: number = defaultLevel) {
    const natureCoef = nature < 0 ? 0.9 : (nature > 0 ? 1.1 : 1.0);
    return f((f((base * 2 + iv + f(ev / 4)) * level / 100) + 5) * natureCoef);
}

/**
 * ダメージ計算
 * @param power 威力
 * @param attack 攻撃側の攻撃/特攻
 * @param defend 防御側の防御/特防
 * @param level 攻撃側のレベル
 * @param moveType 技のタイプ
 * @param attackerType1 攻撃側のタイプ1
 * @param attackerType2 攻撃側のタイプ2
 * @param defenderType1 防御側のタイプ1
 * @param defenderType2 防御側のタイプ2
 */
export function CalcDamage(
    power: number, attack: number, defend: number, level: number,
    moveType: PokemonType, attackerType1: PokemonType, attackerType2: PokemonType, defenderType1: PokemonType, defenderType2: PokemonType
): number {
    let value = f(f((f(level * 2 / 5) + 2) * power * attack / defend) / 50) + 2;
    if (moveType !== '') {
        if (moveType === attackerType1 || moveType === attackerType2) {
            value = f(value * 1.5);
        }

        value = f(value * typeMatch[moveType][defenderType1] / 2);
        value = f(value * typeMatch[moveType][defenderType2] / 2);
    }
    return value;
}
