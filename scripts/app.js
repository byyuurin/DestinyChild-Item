(function(window, Vue){


  /* 效果總表
  -------------------------------------------------------------------------------------------------------------- */
  const effectData = [
    // 武器(1)
    { type: 0, slot: 0, level: 'E', template:'機敏性の[效果值]をクリティカルに追加 [限制]', percent: 0, min: 0.01, max: 0.02, limited: 0},
    { type: 0, slot: 0, level: 'E', template:'防御力の[效果值]をクリティカルに追加 [限制]', percent: 0, min: 0.01, max: 0.02, limited: 0},
    { type: 0, slot: 0, level: 'D', template:'機敏性の[效果值]をHPに追加 [限制]', percent: 0, min: 0.02, max: 0.03, limited: 0},
    { type: 0, slot: 0, level: 'D', template:'機敏性の[效果值]を攻撃力に追加 [限制]', percent: 0, min: 0.02, max: 0.03, limited: 0},
    { type: 0, slot: 0, level: 'C', template:'クリティカルの[效果值]をHPに追加 [限制]', percent: 0, min: 0.03, max: 0.04, limited: 0},
    { type: 0, slot: 0, level: 'C', template:'攻撃力の[效果值]をクリティカルに追加 [限制]', percent: 0, min: 0.03, max: 0.04, limited: 0},
    { type: 0, slot: 0, level: 'C', template:'防御力の[效果值]を攻撃力に追加 [限制]', percent: 0, min: 0.03, max: 0.04, limited: 0},
    { type: 0, slot: 0, level: 'B', template:'防御力の[效果值]をHPに追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 0, slot: 0, level: 'B', template:'HPの[效果值]をクリティカルに追加 [限制]', percent: 0, min: 0.03, max: 0.04, limited: 0},
    { type: 0, slot: 0, level: 'B', template:'クリティカルの[效果值]を攻撃力に追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 0, slot: 0, level: 'A', template:'攻撃力の[效果值]をHPに追加 [限制]', percent: 0, min: 0.04, max: 0.06, limited: 0},
    { type: 0, slot: 0, level: 'A', template:'HPの[效果值]を攻撃力に追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 0, slot: 0, level: 'A', template:'クリティカル[效果值]増加', percent: 0, min: 450, max: 600, limited: 0},
    { type: 0, slot: 0, level: 'S', template:'HP[效果值]増加', percent: 0, min: 600, max: 1000, limited: 0},
    { type: 0, slot: 0, level: 'S', template:'攻撃力[效果值]増加', percent: 0, min: 600, max: 1000, limited: 0},
    { type: 0, slot: 0, level: 'S', template:'全ステータス[效果值]増加', percent: 0, min: 450, max: 600, limited: 0},

    // 武器(2)
    { type: 0, slot: 1, level: 'E', template:'ノーマルスキル攻撃時、クリティカルの[效果值]をダメージに追加 [限制]', percent: 0, min: 0.02, max: 0.03, limited: 0},
    { type: 0, slot: 1, level: 'E', template:'スライドスキル攻撃時、クリティカルの[效果值]をダメージに追加 [限制]', percent: 0, min: 0.02, max: 0.03, limited: 0},
    { type: 0, slot: 1, level: 'E', template:'ドライブスキル攻撃時、クリティカルの[效果值]をダメージに追加 [限制]', percent: 0, min: 0.04, max: 0.06, limited: 0},
    { type: 0, slot: 1, level: 'E', template:'ノーマルスキル攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.01, max: 0.03, limited: 0},
    { type: 0, slot: 1, level: 'E', template:'スライドスキル攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.01, max: 0.03, limited: 0},
    { type: 0, slot: 1, level: 'E', template:'ドライブスキル攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.03, max: 0.05, limited: 0},
    { type: 0, slot: 1, level: 'D', template:'ノーマルスキル攻撃時、機敏性の[效果值]をダメージに追加 [限制]', percent: 0, min: 0.03, max: 0.04, limited: 0},
    { type: 0, slot: 1, level: 'D', template:'スライドスキル攻撃時、機敏性の[效果值]をダメージに追加 [限制]', percent: 0, min: 0.03, max: 0.04, limited: 0},
    { type: 0, slot: 1, level: 'D', template:'ドライブスキル攻撃時、機敏性の[效果值]をダメージに追加 [限制]', percent: 0, min: 0.05, max: 0.07, limited: 0},
    { type: 0, slot: 1, level: 'D', template:'ノーマルスキル攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.03, max: 0.05, limited: 0},
    { type: 0, slot: 1, level: 'D', template:'スライドスキル攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.03, max: 0.05, limited: 0},
    { type: 0, slot: 1, level: 'D', template:'ドライブスキル攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.05, max: 0.07, limited: 0},
    { type: 0, slot: 1, level: 'C', template:'ノーマルスキル攻撃時、防御力の[效果值]をダメージに追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 0, slot: 1, level: 'C', template:'スライドスキル攻撃時、防御力の[效果值]をダメージに追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 0, slot: 1, level: 'C', template:'ドライブスキル攻撃時、防御力の[效果值]をダメージに追加 [限制]', percent: 0, min: 0.05, max: 0.07, limited: 0},
    { type: 0, slot: 1, level: 'C', template:'ノーマルスキル攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.05, max: 0.07, limited: 0},
    { type: 0, slot: 1, level: 'C', template:'スライドスキル攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.05, max: 0.07, limited: 0},
    { type: 0, slot: 1, level: 'C', template:'ドライブスキル攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.07, max: 0.10, limited: 0},
    { type: 0, slot: 1, level: 'B', template:'ノーマルスキル攻撃時、攻撃力の[效果值]をダメージに追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 0, slot: 1, level: 'B', template:'スライドスキル攻撃時、攻撃力の[效果值]をダメージに追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 0, slot: 1, level: 'B', template:'ドライブスキル攻撃時、攻撃力の[效果值]をダメージに追加 [限制]', percent: 0, min: 0.05, max: 0.07, limited: 0},
    { type: 0, slot: 1, level: 'B', template:'ノーマルスキル攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.07, max: 0.10, limited: 0},
    { type: 0, slot: 1, level: 'B', template:'スライドスキル攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.07, max: 0.10, limited: 0},
    { type: 0, slot: 1, level: 'B', template:'ドライブスキル攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.10, max: 0.15, limited: 0},
    { type: 0, slot: 1, level: 'A', template:'ノーマルスキル攻撃時、HPの[效果值]をダメージに追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 0, slot: 1, level: 'A', template:'スライドスキル攻撃時、HPの[效果值]をダメージに追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 0, slot: 1, level: 'A', template:'ドライブスキル攻撃時、HPの[效果值]をダメージに追加 [限制]', percent: 0, min: 0.05, max: 0.07, limited: 0},
    { type: 0, slot: 1, level: 'A', template:'ノーマルスキル攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.10, max: 0.15, limited: 0},
    { type: 0, slot: 1, level: 'A', template:'スライドスキル攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.10, max: 0.15, limited: 0},
    { type: 0, slot: 1, level: 'A', template:'ドライブスキル攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.15, max: 0.20, limited: 0},
    { type: 0, slot: 1, level: 'S', template:'攻撃時、クリティカルの[效果值]をダメージに追加 [限制]', percent: 0, min: 0.10, max: 0.15, limited: 0},
    { type: 0, slot: 1, level: 'S', template:'攻撃時、機敏性の[效果值]をダメージに追加 [限制]', percent: 0, min: 0.10, max: 0.15, limited: 0},
    { type: 0, slot: 1, level: 'S', template:'攻撃時、防御力の[效果值]をダメージに追加 [限制]', percent: 0, min: 0.08, max: 0.12, limited: 0},
    { type: 0, slot: 1, level: 'S', template:'攻撃時、攻撃力の[效果值]をダメージに追加 [限制]', percent: 0, min: 0.07, max: 0.10, limited: 0},
    { type: 0, slot: 1, level: 'S', template:'攻撃時、HPの[效果值]をダメージに追加 [限制]', percent: 0, min: 0.06, max: 0.08, limited: 0},
    { type: 0, slot: 1, level: 'S', template:'攻撃時、ダメージ[效果值]増加 [限制]', percent: 0, min: 0.15, max: 0.30, limited: 0},

    // 武器(3)
    { type: 0, slot: 2, level: 'E', template:'ノーマルスキルで敵を倒すと[機率值]の確率で最大HPの[效果值]回復 [限制]', percent: 0.20, min: 0.02, max: 0.05, limited: 0},
    { type: 0, slot: 2, level: 'E', template:'スライドスキルで敵を倒すと[機率值]の確率で最大HPの[效果值]回復 [限制]', percent: 0.20, min: 0.02, max: 0.05, limited: 0},
    { type: 0, slot: 2, level: 'E', template:'ドライブスキルで敵を倒すと[機率值]の確率で最大HPの[效果值]回復 [限制]', percent: 0.20, min: 0.05, max: 0.08, limited: 0},
    { type: 0, slot: 2, level: 'E', template:'ノーマルスキル攻撃時、[機率值]の確率でダメージの[效果值]HP吸収 [限制]', percent: 0.20, min: 0.01, max: 0.02, limited: 0},
    { type: 0, slot: 2, level: 'E', template:'スライドスキル攻撃時、[機率值]の確率でダメージの[效果值]HP吸収 [限制]', percent: 0.20, min: 0.01, max: 0.02, limited: 0},
    { type: 0, slot: 2, level: 'E', template:'ドライブスキル攻撃時、[機率值]の確率でダメージの[效果值]HP吸収 [限制]', percent: 0.20, min: 0.02, max: 0.03, limited: 0},
    { type: 0, slot: 2, level: 'D', template:'ノーマルスキルで敵を倒すと[機率值]の確率で最大HPの[效果值]回復 [限制]', percent: 0.20, min: 0.05, max: 0.08, limited: 0},
    { type: 0, slot: 2, level: 'D', template:'スライドスキルで敵を倒すと[機率值]の確率で最大HPの[效果值]回復 [限制]', percent: 0.20, min: 0.05, max: 0.08, limited: 0},
    { type: 0, slot: 2, level: 'D', template:'ドライブスキルで敵を倒すと[機率值]の確率で最大HPの[效果值]回復 [限制]', percent: 0.20, min: 0.08, max: 0.10, limited: 0},
    { type: 0, slot: 2, level: 'D', template:'ノーマルスキル攻撃時、防御無視[效果值]追加', percent: 0, min: 100, max: 150, limited: 0},
    { type: 0, slot: 2, level: 'D', template:'スライドスキル攻撃時、防御無視[效果值]追加', percent: 0, min: 100, max: 150, limited: 0},
    { type: 0, slot: 2, level: 'D', template:'ドライブスキル攻撃時、防御無視[效果值]追加', percent: 0, min: 150, max: 300, limited: 0},
    { type: 0, slot: 2, level: 'C', template:'ノーマルスキル攻撃時、ダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.03, max: 0.04, limited: 0},
    { type: 0, slot: 2, level: 'C', template:'スライドスキル攻撃時、ダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.03, max: 0.04, limited: 0},
    { type: 0, slot: 2, level: 'C', template:'ドライブスキル攻撃時、ダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.04, max: 0.06, limited: 0},
    { type: 0, slot: 2, level: 'C', template:'ノーマルスキル攻撃時、防御無視[效果值]追加', percent: 0, min: 150, max: 200, limited: 0},
    { type: 0, slot: 2, level: 'C', template:'スライドスキル攻撃時、防御無視[效果值]追加', percent: 0, min: 150, max: 200, limited: 0},
    { type: 0, slot: 2, level: 'C', template:'ドライブスキル攻撃時、防御無視[效果值]追加', percent: 0, min: 200, max: 400, limited: 0},
    { type: 0, slot: 2, level: 'B', template:'ノーマルスキルで敵を倒すと最大HPの[效果值]回復 [限制]', percent: 0, min: 0.08, max: 0.10, limited: 0},
    { type: 0, slot: 2, level: 'B', template:'スライドスキルで敵を倒すと最大HPの[效果值]回復 [限制]', percent: 0, min: 0.08, max: 0.10, limited: 0},
    { type: 0, slot: 2, level: 'B', template:'ドライブスキルで敵を倒すと最大HPの[效果值]回復 [限制]', percent: 0, min: 0.10, max: 0.15, limited: 0},
    { type: 0, slot: 2, level: 'B', template:'ノーマルスキル攻撃時、防御無視[效果值]追加', percent: 0, min: 200, max: 300, limited: 0},
    { type: 0, slot: 2, level: 'B', template:'スライドスキル攻撃時、防御無視[效果值]追加', percent: 0, min: 200, max: 300, limited: 0},
    { type: 0, slot: 2, level: 'B', template:'ドライブスキル攻撃時、防御無視[效果值]追加', percent: 0, min: 300, max: 500, limited: 0},
    { type: 0, slot: 2, level: 'A', template:'ノーマルスキル攻撃時、ダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.06, max: 0.08, limited: 0},
    { type: 0, slot: 2, level: 'A', template:'スライドスキル攻撃時、ダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.06, max: 0.08, limited: 0},
    { type: 0, slot: 2, level: 'A', template:'ドライブスキル攻撃時、ダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.08, max: 0.10, limited: 0},
    { type: 0, slot: 2, level: 'A', template:'ノーマルスキル攻撃時、防御無視[效果值]追加', percent: 0, min: 300, max: 400, limited: 0},
    { type: 0, slot: 2, level: 'A', template:'スライドスキル攻撃時、防御無視[效果值]追加', percent: 0, min: 300, max: 400, limited: 0},
    { type: 0, slot: 2, level: 'A', template:'ドライブスキル攻撃時、防御無視[效果值]追加', percent: 0, min: 400, max: 600, limited: 0},
    { type: 0, slot: 2, level: 'S', template:'敵を倒すと最大HPの[效果值]回復 [限制]', percent: 0, min: 0.15, max: 0.20, limited: 0},
    { type: 0, slot: 2, level: 'S', template:'攻撃時、ダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.08, max: 0.10, limited: 0},
    { type: 0, slot: 2, level: 'S', template:'攻撃時、防御無視[效果值]追加', percent: 0, min: 400, max: 600, limited: 0},

    // 防具(1)
    { type: 1, slot: 0, level: 'E', template:'クリティカルの[效果值]を機敏性に追加 [限制]', percent: 0, min: 0.01, max: 0.02, limited: 0},
    { type: 1, slot: 0, level: 'E', template:'防御力の[效果值]を機敏性に追加 [限制]', percent: 0, min: 0.01, max: 0.02, limited: 0},
    { type: 1, slot: 0, level: 'D', template:'クリティカルの[效果值]を防御力に追加 [限制]', percent: 0, min: 0.02, max: 0.03, limited: 0},
    { type: 1, slot: 0, level: 'D', template:'機敏性の[效果值]をHPに追加 [限制]', percent: 0, min: 0.02, max: 0.03, limited: 0},
    { type: 1, slot: 0, level: 'C', template:'機敏性の[效果值]を防御力に追加 [限制]', percent: 0, min: 0.03, max: 0.04, limited: 0},
    { type: 1, slot: 0, level: 'C', template:'クリティカルの[效果值]をHPに追加 [限制]', percent: 0, min: 0.03, max: 0.04, limited: 0},
    { type: 1, slot: 0, level: 'C', template:'攻撃力の[效果值]を機敏性に追加 [限制]', percent: 0, min: 0.03, max: 0.04, limited: 0},
    { type: 1, slot: 0, level: 'B', template:'防御力の[效果值]をHPに追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 1, slot: 0, level: 'B', template:'HPの[效果值]を機敏性に追加 [限制]', percent: 0, min: 0.03, max: 0.04, limited: 0},
    { type: 1, slot: 0, level: 'B', template:'攻撃力の[效果值]を防御力に追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 1, slot: 0, level: 'A', template:'攻撃力の[效果值]をHPに追加 [限制]', percent: 0, min: 0.05, max: 0.06, limited: 0},
    { type: 1, slot: 0, level: 'A', template:'HPの[效果值]を防御力に追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 1, slot: 0, level: 'A', template:'機敏性[效果值]増加', percent: 0, min: 450, max: 600, limited: 0},
    { type: 1, slot: 0, level: 'S', template:'HP[效果值]増加', percent: 0, min: 600, max: 1000, limited: 0},
    { type: 1, slot: 0, level: 'S', template:'防御力[效果值]増加', percent: 0, min: 600, max: 1000, limited: 0},
    { type: 1, slot: 0, level: 'S', template:'全ステータス[效果值]増加', percent: 0, min: 450, max: 600, limited: 0},

    // 防具(2)
    { type: 1, slot: 1, level: 'E', template:'ノーマルスキルを受けるとクリティカルの[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.01, max: 0.02, limited: 0},
    { type: 1, slot: 1, level: 'E', template:'スライドスキルを受けるとクリティカルの[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.01, max: 0.02, limited: 0},
    { type: 1, slot: 1, level: 'E', template:'ドライブスキルを受けるとクリティカルの[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.02, max: 0.03, limited: 0},
    { type: 1, slot: 1, level: 'E', template:'ノーマルスキルを受けると[機率值]の確率でダメージ[效果值]減少 [限制]', percent: 0.30, min: 0.01, max: 0.04, limited: 0},
    { type: 1, slot: 1, level: 'E', template:'スライドスキルを受けると[機率值]の確率でダメージ[效果值]減少 [限制]', percent: 0.30, min: 0.01, max: 0.04, limited: 0},
    { type: 1, slot: 1, level: 'E', template:'ドライブスキルを受けると[機率值]の確率でダメージ[效果值]減少 [限制]', percent: 0.30, min: 0.04, max: 0.07, limited: 0},
    { type: 1, slot: 1, level: 'D', template:'ノーマルスキルを受けると機敏性の[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.02, max: 0.03, limited: 0},
    { type: 1, slot: 1, level: 'D', template:'スライドスキルを受けると機敏性の[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.02, max: 0.03, limited: 0},
    { type: 1, slot: 1, level: 'D', template:'ドライブスキルを受けると機敏性の[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.03, max: 0.04, limited: 0},
    { type: 1, slot: 1, level: 'D', template:'ノーマルスキルを受けると[機率值]の確率でダメージ[效果值]減少 [限制]', percent: 0.30, min: 0.04, max: 0.07, limited: 0},
    { type: 1, slot: 1, level: 'D', template:'スライドスキルを受けると[機率值]の確率でダメージ[效果值]減少 [限制]', percent: 0.30, min: 0.04, max: 0.07, limited: 0},
    { type: 1, slot: 1, level: 'D', template:'ドライブスキルを受けると[機率值]の確率でダメージ[效果值]減少 [限制]', percent: 0.30, min: 0.07, max: 0.10, limited: 0},
    { type: 1, slot: 1, level: 'C', template:'ノーマルスキルを受けると防御力の[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.025, max: 0.035, limited: 0},
    { type: 1, slot: 1, level: 'C', template:'スライドスキルを受けると防御力の[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.025, max: 0.035, limited: 0},
    { type: 1, slot: 1, level: 'C', template:'ドライブスキルを受けると防御力の[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.035, max: 0.045, limited: 0},
    { type: 1, slot: 1, level: 'C', template:'ノーマルスキルを受けると[機率值]の確率でダメージ[效果值]減少 [限制]', percent: 0.30, min: 0.07, max: 0.10, limited: 0},
    { type: 1, slot: 1, level: 'C', template:'スライドスキルを受けると[機率值]の確率でダメージ[效果值]減少 [限制]', percent: 0.30, min: 0.07, max: 0.10, limited: 0},
    { type: 1, slot: 1, level: 'C', template:'ドライブスキルを受けると[機率值]の確率でダメージ[效果值]減少 [限制]', percent: 0.30, min: 0.10, max: 0.15, limited: 0},
    { type: 1, slot: 1, level: 'B', template:'ノーマルスキルを受けると攻撃力の[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.025, max: 0.035, limited: 0},
    { type: 1, slot: 1, level: 'B', template:'スライドスキルを受けると攻撃力の[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.025, max: 0.035, limited: 0},
    { type: 1, slot: 1, level: 'B', template:'ドライブスキルを受けると攻撃力の[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.035, max: 0.045, limited: 0},
    { type: 1, slot: 1, level: 'B', template:'ノーマルスキルを受けるとダメージ[效果值]減少 [限制]', percent: 0, min: 0.10, max: 0.15, limited: 0},
    { type: 1, slot: 1, level: 'B', template:'スライドスキルを受けるとダメージ[效果值]減少 [限制]', percent: 0, min: 0.10, max: 0.15, limited: 0},
    { type: 1, slot: 1, level: 'B', template:'ドライブスキルを受けるとダメージ[效果值]減少 [限制]', percent: 0, min: 0.15, max: 0.20, limited: 0},
    { type: 1, slot: 1, level: 'A', template:'ノーマルスキルを受けるとHPの[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.025, max: 0.035, limited: 0},
    { type: 1, slot: 1, level: 'A', template:'スライドスキルを受けるとHPの[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.025, max: 0.035, limited: 0},
    { type: 1, slot: 1, level: 'A', template:'ドライブスキルを受けるとHPの[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.035, max: 0.045, limited: 0},
    { type: 1, slot: 1, level: 'A', template:'ノーマルスキルを受けるとダメージ[效果值]減少 [限制]', percent: 0, min: 0.15, max: 0.20, limited: 0},
    { type: 1, slot: 1, level: 'A', template:'スライドスキルを受けるとダメージ[效果值]減少 [限制]', percent: 0, min: 0.15, max: 0.20, limited: 0},
    { type: 1, slot: 1, level: 'A', template:'ドライブスキルを受けるとダメージ[效果值]減少 [限制]', percent: 0, min: 0.20, max: 0.30, limited: 0},
    { type: 1, slot: 1, level: 'S', template:'攻撃を受けるとクリティカルの[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.08, max: 0.09, limited: 0},
    { type: 1, slot: 1, level: 'S', template:'攻撃を受けると機敏性の[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.08, max: 0.09, limited: 0},
    { type: 1, slot: 1, level: 'S', template:'攻撃を受けると防御力の[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.055, max: 0.065, limited: 0},
    { type: 1, slot: 1, level: 'S', template:'攻撃を受けると攻撃力の[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.045, max: 0.055, limited: 0},
    { type: 1, slot: 1, level: 'S', template:'攻撃を受けるとHP[效果值]をダメージ減少に追加 [限制]', percent: 0, min: 0.035, max: 0.045, limited: 0},
    { type: 1, slot: 1, level: 'S', template:'攻撃を受けるとダメージ[效果值]減少 [限制]', percent: 0, min: 0.20, max: 0.30, limited: 0},

    // 防具(3)
    { type: 1, slot: 2, level: 'E', template:'ノーマルスキルを受けるとダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.05, max: 0.10, limited: 0},
    { type: 1, slot: 2, level: 'E', template:'スライドスキルを受けるとダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.05, max: 0.10, limited: 0},
    { type: 1, slot: 2, level: 'E', template:'ドライブスキルを受けるとダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 1, slot: 2, level: 'E', template:'ノーマルスキルを受けると[機率值]の確率でHP[效果值]回復', percent: 0.30, min: 50, max: 100, limited: 0},
    { type: 1, slot: 2, level: 'E', template:'スライドスキルを受けると[機率值]の確率でHP[效果值]回復', percent: 0.30, min: 50, max: 100, limited: 0},
    { type: 1, slot: 2, level: 'E', template:'ドライブスキルを受けると[機率值]の確率でHP[效果值]回復', percent: 0.30, min: 100, max: 150, limited: 0},
    { type: 1, slot: 2, level: 'D', template:'ノーマルスキルを受けると[機率值]の確率でHP[效果值]回復', percent: 0.30, min: 100, max: 150, limited: 0},
    { type: 1, slot: 2, level: 'D', template:'スライドスキルを受けると[機率值]の確率でHP[效果值]回復', percent: 0.30, min: 100, max: 150, limited: 0},
    { type: 1, slot: 2, level: 'D', template:'ドライブスキルを受けると[機率值]の確率でHP[效果值]回復', percent: 0.30, min: 150, max: 200, limited: 0},
    { type: 1, slot: 2, level: 'D', template:'ノーマルスキルを受けると[機率值]の確率で防御無視相殺[效果值]追加', percent: 0.30, min: 100, max: 150, limited: 0},
    { type: 1, slot: 2, level: 'D', template:'スライドスキルを受けると[機率值]の確率で防御無視相殺[效果值]追加', percent: 0.30, min: 100, max: 150, limited: 0},
    { type: 1, slot: 2, level: 'D', template:'ドライブスキルを受けると[機率值]の確率で防御無視相殺[效果值]追加', percent: 0.30, min: 200, max: 300, limited: 0},
    { type: 1, slot: 2, level: 'C', template:'ノーマルスキルを受けるとダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.15, max: 0.20, limited: 0},
    { type: 1, slot: 2, level: 'C', template:'スライドスキルを受けるとダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.15, max: 0.20, limited: 0},
    { type: 1, slot: 2, level: 'C', template:'ドライブスキルを受けるとダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.20, max: 0.30, limited: 0},
    { type: 1, slot: 2, level: 'C', template:'ノーマルスキルを受けると[機率值]の確率で防御無視相殺[效果值]追加', percent: 0.30, min: 200, max: 250, limited: 0},
    { type: 1, slot: 2, level: 'C', template:'スライドスキルを受けると[機率值]の確率で防御無視相殺[效果值]追加', percent: 0.30, min: 200, max: 250, limited: 0},
    { type: 1, slot: 2, level: 'C', template:'ドライブスキルを受けると[機率值]の確率で防御無視相殺[效果值]追加', percent: 0.30, min: 300, max: 400, limited: 0},
    { type: 1, slot: 2, level: 'B', template:'ノーマルスキルを受けるとダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.20, max: 0.25, limited: 0},
    { type: 1, slot: 2, level: 'B', template:'スライドスキルを受けるとダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.20, max: 0.25, limited: 0},
    { type: 1, slot: 2, level: 'B', template:'ドライブスキルを受けるとダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.25, max: 0.35, limited: 0},
    { type: 1, slot: 2, level: 'B', template:'ノーマルスキルを受けると防御無視相殺[效果值]追加', percent: 0, min: 250, max: 350, limited: 0},
    { type: 1, slot: 2, level: 'B', template:'スライドスキルを受けると防御無視相殺[效果值]追加', percent: 0, min: 250, max: 350, limited: 0},
    { type: 1, slot: 2, level: 'B', template:'ドライブスキルを受けると防御無視相殺[效果值]追加', percent: 0, min: 350, max: 500, limited: 0},
    { type: 1, slot: 2, level: 'A', template:'ノーマルスキルを受けると[機率值]の確率でHP[效果值]回復', percent: 0.30, min: 150, max: 200, limited: 0},
    { type: 1, slot: 2, level: 'A', template:'スライドスキルを受けると[機率值]の確率でHP[效果值]回復', percent: 0.30, min: 150, max: 200, limited: 0},
    { type: 1, slot: 2, level: 'A', template:'ドライブスキルを受けると[機率值]の確率でHP[效果值]回復', percent: 0.30, min: 200, max: 300, limited: 0},
    { type: 1, slot: 2, level: 'A', template:'ノーマルスキルを受けると防御無視相殺[效果值]追加', percent: 0, min: 350, max: 450, limited: 0},
    { type: 1, slot: 2, level: 'A', template:'スライドスキルを受けると防御無視相殺[效果值]追加', percent: 0, min: 350, max: 450, limited: 0},
    { type: 1, slot: 2, level: 'A', template:'ドライブスキルを受けると防御無視相殺[效果值]追加', percent: 0, min: 450, max: 600, limited: 0},
    { type: 1, slot: 2, level: 'S', template:'攻撃を受けるとダメージの[效果值]HP吸収 [限制]', percent: 0, min: 0.25, max: 0.35, limited: 0},
    { type: 1, slot: 2, level: 'S', template:'攻撃を受けると[機率值]の確率でHP[效果值]回復', percent: 0.30, min: 200, max: 300, limited: 0},
    { type: 1, slot: 2, level: 'S', template:'攻撃を受けると防御無視相殺[效果值]追加', percent: 0, min: 450, max: 600, limited: 0},

    // 裝飾(1)
    { type: 2, slot: 0, level: 'E', template:'クリティカルの[效果值]を機敏性に追加 [限制]', percent: 0, min: 0.01, max: 0.02, limited: 0},
    { type: 2, slot: 0, level: 'E', template:'機敏性の[效果值]をクリティカルに追加 [限制]', percent: 0, min: 0.01, max: 0.02, limited: 0},
    { type: 2, slot: 0, level: 'E', template:'防御力の[效果值]を機敏性に追加 [限制]', percent: 0, min: 0.01, max: 0.02, limited: 0},
    { type: 2, slot: 0, level: 'E', template:'攻撃力の[效果值]を機敏性に追加 [限制]', percent: 0, min: 0.01, max: 0.02, limited: 0},
    { type: 2, slot: 0, level: 'D', template:'クリティカルの[效果值]を防御力に追加 [限制]', percent: 0, min: 0.02, max: 0.03, limited: 0},
    { type: 2, slot: 0, level: 'D', template:'機敏性の[效果值]を防御力に追加 [限制]', percent: 0, min: 0.02, max: 0.03, limited: 0},
    { type: 2, slot: 0, level: 'D', template:'防御力の[效果值]をクリティカルに追加 [限制]', percent: 0, min: 0.02, max: 0.03, limited: 0},
    { type: 2, slot: 0, level: 'D', template:'攻撃力の[效果值]をクリティカルに追加 [限制]', percent: 0, min: 0.02, max: 0.03, limited: 0},
    { type: 2, slot: 0, level: 'C', template:'機敏性の[效果值]をHPに追加 [限制]', percent: 0, min: 0.03, max: 0.04, limited: 0},
    { type: 2, slot: 0, level: 'C', template:'HPの[效果值]をクリティカルに追加 [限制]', percent: 0, min: 0.02, max: 0.03, limited: 0},
    { type: 2, slot: 0, level: 'C', template:'HPの[效果值]を機敏性に追加 [限制]', percent: 0, min: 0.02, max: 0.03, limited: 0},
    { type: 2, slot: 0, level: 'C', template:'機敏性の[效果值]を攻撃力に追加 [限制]', percent: 0, min: 0.03, max: 0.04, limited: 0},
    { type: 2, slot: 0, level: 'B', template:'クリティカルの[效果值]をHPに追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 2, slot: 0, level: 'B', template:'クリティカルの[效果值]を攻撃力に追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 2, slot: 0, level: 'B', template:'防御力の[效果值]を攻撃力に追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 2, slot: 0, level: 'B', template:'防御力の[效果值]をHPに追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 2, slot: 0, level: 'A', template:'攻撃力の[效果值]を防御力に追加 [限制]', percent: 0, min: 0.05, max: 0.06, limited: 0},
    { type: 2, slot: 0, level: 'A', template:'クリティカル[效果值]増加', percent: 0, min: 450, max: 600, limited: 0},
    { type: 2, slot: 0, level: 'A', template:'機敏性[效果值]増加', percent: 0, min: 450, max: 600, limited: 0},
    { type: 2, slot: 0, level: 'A', template:'攻撃力の[效果值]をHPに追加 [限制]', percent: 0, min: 0.05, max: 0.06, limited: 0},
    { type: 2, slot: 0, level: 'A', template:'HPの[效果值]を攻撃力に追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 2, slot: 0, level: 'A', template:'HPの[效果值]を防御力に追加 [限制]', percent: 0, min: 0.04, max: 0.05, limited: 0},
    { type: 2, slot: 0, level: 'S', template:'HP[效果值]増加', percent: 0, min: 600, max: 1000, limited: 0},
    { type: 2, slot: 0, level: 'S', template:'攻撃力[效果值]増加', percent: 0, min: 600, max: 1000, limited: 0},
    { type: 2, slot: 0, level: 'S', template:'防御力[效果值]増加', percent: 0, min: 600, max: 1000, limited: 0},
    { type: 2, slot: 0, level: 'S', template:'全ステータス[效果值]増加', percent: 0, min: 450, max: 600, limited: 0},

    // 裝飾(2)
    { type: 2, slot: 1, level: 'E', template:'即時回復量[效果值]増加', percent: 0, min: 0.05, max: 0.15, limited: 0},
    { type: 2, slot: 1, level: 'E', template:'持続回復量[效果值]増加', percent: 0, min: 0.05, max: 0.15, limited: 0},
    { type: 2, slot: 1, level: 'E', template:'回復不可回避率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'E', template:'回復不可命中率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'D', template:'失明回避率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'D', template:'失明命中率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'D', template:'デスヒール回避率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'D', template:'デスヒール命中率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'C', template:'凍結回避率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'C', template:'凍結命中率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'C', template:'石化回避率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'C', template:'石化命中率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'B', template:'沈黙回避率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'B', template:'沈黙命中率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'B', template:'気絶回避率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'B', template:'気絶命中率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'A', template:'混乱回避率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'A', template:'混乱命中率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'A', template:'睡眠命中率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'A', template:'睡眠回避率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'S', template:'デバフ回避率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},
    { type: 2, slot: 1, level: 'S', template:'デバフ命中率[效果值]増加', percent: 0, min: 0.10, max: 0.20, limited: 0},

    // 裝飾(3)
    { type: 2, slot: 2, level: 'E', template:'ノーマルスキルを受けると[機率值]の確率でスキルゲージ＋[效果值]', percent: 0.20, min: 0.01, max: 0.02, limited: 0},
    { type: 2, slot: 2, level: 'E', template:'スライドスキルを受けると[機率值]の確率でスキルゲージ＋[效果值]', percent: 0.20, min: 0.01, max: 0.02, limited: 0},
    { type: 2, slot: 2, level: 'E', template:'ドライブスキルを受けると[機率值]の確率でスキルゲージ＋[效果值]', percent: 0.20, min: 0.02, max: 0.03, limited: 0},
    { type: 2, slot: 2, level: 'E', template:'ノーマルスキル攻撃時、[機率值]の確率でスキルゲージ[效果值]削除', percent: 0.30, min: 0.01, max: 0.02, limited: 0},
    { type: 2, slot: 2, level: 'E', template:'スライドスキル攻撃時、[機率值]の確率でスキルゲージ[效果值]削除', percent: 0.30, min: 0.01, max: 0.02, limited: 0},
    { type: 2, slot: 2, level: 'E', template:'ドライブスキル攻撃時、[機率值]の確率でスキルゲージ[效果值]削除', percent: 0.30, min: 0.02, max: 0.03, limited: 0},
    { type: 2, slot: 2, level: 'D', template:'ノーマルスキルを受けると[機率值]の確率でスキルゲージ＋[效果值]', percent: 0.20, min: 0.02, max: 0.03, limited: 0},
    { type: 2, slot: 2, level: 'D', template:'スライドスキルを受けると[機率值]の確率でスキルゲージ＋[效果值]', percent: 0.20, min: 0.02, max: 0.03, limited: 0},
    { type: 2, slot: 2, level: 'D', template:'ドライブスキルを受けると[機率值]の確率でスキルゲージ＋[效果值]', percent: 0.20, min: 0.03, max: 0.04, limited: 0},
    { type: 2, slot: 2, level: 'D', template:'ノーマルスキル攻撃時、[機率值]の確率でスキルゲージ[效果值]削除', percent: 0.30, min: 0.02, max: 0.03, limited: 0},
    { type: 2, slot: 2, level: 'D', template:'スライドスキル攻撃時、[機率值]の確率でスキルゲージ[效果值]削除', percent: 0.30, min: 0.02, max: 0.03, limited: 0},
    { type: 2, slot: 2, level: 'D', template:'ドライブスキル攻撃時、[機率值]の確率でスキルゲージ[效果值]削除', percent: 0.30, min: 0.03, max: 0.04, limited: 0},
    { type: 2, slot: 2, level: 'C', template:'ノーマルスキルで敵を倒すと[機率值]の確率でドライブゲージ＋[效果值]', percent: 0.30, min: 0.08, max: 0.10, limited: 0},
    { type: 2, slot: 2, level: 'C', template:'スライドスキルで敵を倒すと[機率值]の確率でドライブゲージ＋[效果值]', percent: 0.30, min: 0.08, max: 0.10, limited: 0},
    { type: 2, slot: 2, level: 'C', template:'ドライブスキルで敵を倒すと[機率值]の確率でドライブゲージ＋[效果值]', percent: 0.30, min: 0.08, max: 0.10, limited: 0},
    { type: 2, slot: 2, level: 'C', template:'ノーマルスキルを受けると[機率值]の確率でドライブゲージ＋[效果值]', percent: 0.10, min: 0.03, max: 0.04, limited: 0},
    { type: 2, slot: 2, level: 'C', template:'スライドスキルを受けると[機率值]の確率でドライブゲージ＋[效果值]', percent: 0.10, min: 0.03, max: 0.04, limited: 0},
    { type: 2, slot: 2, level: 'C', template:'ドライブスキルを受けると[機率值]の確率でドライブゲージ＋[效果值]', percent: 0.10, min: 0.04, max: 0.05, limited: 0},
    { type: 2, slot: 2, level: 'B', template:'ノーマルスキルを受けると[機率值]の確率でスキルゲージ＋[效果值]', percent: 0.20, min: 0.04, max: 0.06, limited: 0},
    { type: 2, slot: 2, level: 'B', template:'スライドスキルを受けると[機率值]の確率でスキルゲージ＋[效果值]', percent: 0.20, min: 0.04, max: 0.06, limited: 0},
    { type: 2, slot: 2, level: 'B', template:'ドライブスキルを受けると[機率值]の確率でスキルゲージ＋[效果值]', percent: 0.20, min: 0.06, max: 0.08, limited: 0},
    { type: 2, slot: 2, level: 'B', template:'ノーマルスキル攻撃時、[機率值]の確率でスキルゲージ[效果值]削除', percent: 0.30, min: 0.04, max: 0.06, limited: 0},
    { type: 2, slot: 2, level: 'B', template:'スライドスキル攻撃時、[機率值]の確率でスキルゲージ[效果值]削除', percent: 0.30, min: 0.04, max: 0.06, limited: 0},
    { type: 2, slot: 2, level: 'B', template:'ドライブスキル攻撃時、[機率值]の確率でスキルゲージ[效果值]削除', percent: 0.30, min: 0.06, max: 0.08, limited: 0},
    { type: 2, slot: 2, level: 'A', template:'ノーマルスキルで敵を倒すと[機率值]の確率でドライブゲージ＋[效果值]', percent: 0.30, min: 0.10, max: 0.15, limited: 0},
    { type: 2, slot: 2, level: 'A', template:'スライドスキルで敵を倒すと[機率值]の確率でドライブゲージ＋[效果值]', percent: 0.30, min: 0.10, max: 0.15, limited: 0},
    { type: 2, slot: 2, level: 'A', template:'ドライブスキルで敵を倒すと[機率值]の確率でドライブゲージ＋[效果值]', percent: 0.30, min: 0.15, max: 0.20, limited: 0},
    { type: 2, slot: 2, level: 'A', template:'ノーマルスキルを受けると[機率值]の確率でドライブゲージ＋[效果值]', percent: 0.10, min: 0.05, max: 0.06, limited: 0},
    { type: 2, slot: 2, level: 'A', template:'スライドスキルを受けると[機率值]の確率でドライブゲージ＋[效果值]', percent: 0.10, min: 0.05, max: 0.06, limited: 0},
    { type: 2, slot: 2, level: 'A', template:'ドライブスキルを受けると[機率值]の確率でドライブゲージ＋[效果值]', percent: 0.10, min: 0.06, max: 0.08, limited: 0},
    { type: 2, slot: 2, level: 'S', template:'攻撃を受けると[機率值]の確率でスキルゲージ＋[效果值]', percent: 0.20, min: 0.08, max: 0.10, limited: 0},
    { type: 2, slot: 2, level: 'S', template:'敵を倒すと[機率值]の確率でドライブゲージ＋[效果值]', percent: 0.30, min: 0.15, max: 0.20, limited: 0},
    { type: 2, slot: 2, level: 'S', template:'攻撃時、[機率值]の確率でスキルゲージ[效果值]削除', percent: 0.30, min: 0.10, max: 0.15, limited: 0},
    { type: 2, slot: 2, level: 'S', template:'攻撃を受けると[機率值]の確率でドライブゲージ＋[效果值]', percent: 0.10, min: 0.06, max: 0.08, limited: 0},
  ];
  /* 翻譯
  -------------------------------------------------------------------------------------------------------------- */
  const translate = {
    // 武器(1)
    "機敏性の[效果值]をクリティカルに追加 [限制]": '依機敏的[效果值]追加爆擊',
    "防御力の[效果值]をクリティカルに追加 [限制]": '依防禦的[效果值]追加爆擊',
    "機敏性の[效果值]をHPに追加 [限制]": '依機敏的[效果值]追加HP',
    "機敏性の[效果值]を攻撃力に追加 [限制]": '依機敏的[效果值]追加攻擊力',
    "クリティカルの[效果值]をHPに追加 [限制]": '依爆擊的[效果值]追加HP',
    "攻撃力の[效果值]をクリティカルに追加 [限制]": '依攻擊力的[效果值]追加爆擊',
    "防御力の[效果值]を攻撃力に追加 [限制]": '依防禦的[效果值]追加攻擊力',
    "防御力の[效果值]をHPに追加 [限制]": '依防禦的[效果值]追加HP',
    "HPの[效果值]をクリティカルに追加 [限制]": '依HP的[效果值]追加爆擊',
    "クリティカルの[效果值]を攻撃力に追加 [限制]": '依爆擊的[效果值]追加攻擊力',
    "攻撃力の[效果值]をHPに追加 [限制]": '依攻擊力的[效果值]追加HP',
    "HPの[效果值]を攻撃力に追加 [限制]": '依HP的[效果值]追加攻擊力',
    "クリティカル[效果值]増加": '爆擊增加[效果值]',
    "HP[效果值]増加": 'HP增加[效果值]',
    "攻撃力[效果值]増加": '攻擊力增加[效果值]',
    "全ステータス[效果值]増加": '全部屬性增加[效果值]',
    // 武器(2)
    "ノーマルスキル攻撃時、クリティカルの[效果值]をダメージに追加 [限制]": 'NS攻擊時，依爆擊的[效果值]追加傷害',
    "スライドスキル攻撃時、クリティカルの[效果值]をダメージに追加 [限制]": 'SS攻擊時，依爆擊的[效果值]追加傷害',
    "ドライブスキル攻撃時、クリティカルの[效果值]をダメージに追加 [限制]": 'DS攻擊時，依爆擊的[效果值]追加傷害',
    "ノーマルスキル攻撃時、ダメージ[效果值]増加 [限制]": 'NS攻擊時，傷害增加[效果值]',
    "スライドスキル攻撃時、ダメージ[效果值]増加 [限制]": 'SS攻擊時，傷害增加[效果值]',
    "ドライブスキル攻撃時、ダメージ[效果值]増加 [限制]": 'DS攻擊時，傷害增加[效果值]',
    "ノーマルスキル攻撃時、機敏性の[效果值]をダメージに追加 [限制]": 'NS攻擊時，依機敏的[效果值]追加傷害',
    "スライドスキル攻撃時、機敏性の[效果值]をダメージに追加 [限制]": 'SS攻擊時，依機敏的[效果值]追加傷害',
    "ドライブスキル攻撃時、機敏性の[效果值]をダメージに追加 [限制]": 'DS攻擊時，依機敏的[效果值]追加傷害',
    "ノーマルスキル攻撃時、防御力の[效果值]をダメージに追加 [限制]": 'NS攻擊時，依防禦的[效果值]追加傷害',
    "スライドスキル攻撃時、防御力の[效果值]をダメージに追加 [限制]": 'SS攻擊時，依防禦的[效果值]追加傷害',
    "ドライブスキル攻撃時、防御力の[效果值]をダメージに追加 [限制]": 'DS攻擊時，依防禦的[效果值]追加傷害',
    "ノーマルスキル攻撃時、攻撃力の[效果值]をダメージに追加 [限制]": 'NS攻擊時，依攻擊力的[效果值]追加傷害',
    "スライドスキル攻撃時、攻撃力の[效果值]をダメージに追加 [限制]": 'SS攻擊時，依攻擊力的[效果值]追加傷害',
    "ドライブスキル攻撃時、攻撃力の[效果值]をダメージに追加 [限制]": 'DS攻擊時，依攻擊力的[效果值]追加傷害',
    "ノーマルスキル攻撃時、HPの[效果值]をダメージに追加 [限制]": 'NS攻擊時，依HP的[效果值]追加傷害',
    "スライドスキル攻撃時、HPの[效果值]をダメージに追加 [限制]": 'SS攻擊時，依HP的[效果值]追加傷害',
    "ドライブスキル攻撃時、HPの[效果值]をダメージに追加 [限制]": 'DS攻擊時，依HP的[效果值]追加傷害',
    "攻撃時、クリティカルの[效果值]をダメージに追加 [限制]": '攻擊時，依爆擊的[效果值]追加傷害',
    "攻撃時、機敏性の[效果值]をダメージに追加 [限制]": '攻擊時，依機敏的[效果值]追加傷害',
    "攻撃時、防御力の[效果值]をダメージに追加 [限制]": '攻擊時，依防禦的[效果值]追加傷害',
    "攻撃時、攻撃力の[效果值]をダメージに追加 [限制]": '攻擊時，依攻擊力的[效果值]追加傷害',
    "攻撃時、HPの[效果值]をダメージに追加 [限制]": '攻擊時，依HP的[效果值]追加傷害',
    "攻撃時、ダメージ[效果值]増加 [限制]": '攻擊時，傷害增加[效果值]',
    // 武器(3)
    "ノーマルスキルで敵を倒すと[機率值]の確率で最大HPの[效果值]回復 [限制]": 'NS打倒敵人時，有[機率值]機率依最大HP回復[效果值]',
    "スライドスキルで敵を倒すと[機率值]の確率で最大HPの[效果值]回復 [限制]": 'SS打倒敵人時，有[機率值]機率依最大HP回復[效果值]',
    "ドライブスキルで敵を倒すと[機率值]の確率で最大HPの[效果值]回復 [限制]": 'DS打倒敵人時，有[機率值]機率依最大HP回復[效果值]',
    "ノーマルスキル攻撃時、[機率值]の確率でダメージの[效果值]HP吸収 [限制]": 'NS攻擊時，有[機率值]機率回復HP[效果值]',
    "スライドスキル攻撃時、[機率值]の確率でダメージの[效果值]HP吸収 [限制]": 'SS攻擊時，有[機率值]機率回復HP[效果值]',
    "ドライブスキル攻撃時、[機率值]の確率でダメージの[效果值]HP吸収 [限制]": 'DS攻擊時，有[機率值]機率回復HP[效果值]',
    "ノーマルスキル攻撃時、防御無視[效果值]追加": 'NS攻擊時，追加無視防禦傷害[效果值]',
    "スライドスキル攻撃時、防御無視[效果值]追加": 'SS攻擊時，追加無視防禦傷害[效果值]',
    "ドライブスキル攻撃時、防御無視[效果值]追加": 'DS攻擊時，追加無視防禦傷害[效果值]',
    "ノーマルスキル攻撃時、ダメージの[效果值]HP吸収 [限制]": 'NS攻擊時，依傷害[效果值]回復HP',
    "スライドスキル攻撃時、ダメージの[效果值]HP吸収 [限制]": 'SS攻擊時，依傷害[效果值]回復HP',
    "ドライブスキル攻撃時、ダメージの[效果值]HP吸収 [限制]": 'DS攻擊時，依傷害[效果值]回復HP',
    "ノーマルスキルで敵を倒すと最大HPの[效果值]回復 [限制]": 'NS打倒敵人時，依最大HP回復[效果值]',
    "スライドスキルで敵を倒すと最大HPの[效果值]回復 [限制]": 'SS打倒敵人時，依最大HP回復[效果值]',
    "ドライブスキルで敵を倒すと最大HPの[效果值]回復 [限制]": 'DS打倒敵人時，依最大HP回復[效果值]',
    "敵を倒すと最大HPの[效果值]回復 [限制]": '打倒敵人時，依最大HP回復[效果值]',
    "攻撃時、ダメージの[效果值]HP吸収 [限制]": '攻擊時，依傷害[效果值]回復HP',
    "攻撃時、防御無視[效果值]追加": '攻擊時，追加無視防禦傷害[效果值]',
    // 防具(1)
    "クリティカルの[效果值]を機敏性に追加 [限制]": '依爆擊的[效果值]追加機敏',
    "防御力の[效果值]を機敏性に追加 [限制]": '依防禦的[效果值]追加機敏',
    "クリティカルの[效果值]を防御力に追加 [限制]": '依爆擊的[效果值]追加防禦',
    "機敏性の[效果值]を防御力に追加 [限制]": '依機敏的[效果值]追加防禦',
    "攻撃力の[效果值]を機敏性に追加 [限制]": '依攻擊力的[效果值]追加機敏',
    "HPの[效果值]を機敏性に追加 [限制]": '依HP的[效果值]追加機敏',
    "攻撃力の[效果值]を防御力に追加 [限制]": '依攻擊力的[效果值]追加防禦',
    "HPの[效果值]を防御力に追加 [限制]": '依HP的[效果值]追加防禦',
    "機敏性[效果值]増加": '機敏增加[效果值]',
    "防御力[效果值]増加": '防禦增加[效果值]',
    // 防具(2)
    "ノーマルスキルを受けるとクリティカルの[效果值]をダメージ減少に追加 [限制]": '受到NS攻擊時，依爆擊的[效果值]減少傷害',
    "スライドスキルを受けるとクリティカルの[效果值]をダメージ減少に追加 [限制]": '受到SS攻擊時，依爆擊的[效果值]減少傷害',
    "ドライブスキルを受けるとクリティカルの[效果值]をダメージ減少に追加 [限制]": '受到DS攻擊時，依爆擊的[效果值]減少傷害',
    "ノーマルスキルを受けると[機率值]の確率でダメージ[效果值]減少 [限制]": '受到NS攻擊時，有[機率值]機率減少傷害[效果值]',
    "スライドスキルを受けると[機率值]の確率でダメージ[效果值]減少 [限制]": '受到SS攻擊時，有[機率值]機率減少傷害[效果值]',
    "ドライブスキルを受けると[機率值]の確率でダメージ[效果值]減少 [限制]": '受到DS攻擊時，有[機率值]機率減少傷害[效果值]',
    "ノーマルスキルを受けると機敏性の[效果值]をダメージ減少に追加 [限制]": '受到NS攻擊時，依機敏的[效果值]減少傷害',
    "スライドスキルを受けると機敏性の[效果值]をダメージ減少に追加 [限制]": '受到SS攻擊時，依機敏的[效果值]減少傷害',
    "ドライブスキルを受けると機敏性の[效果值]をダメージ減少に追加 [限制]": '受到DS攻擊時，依機敏的[效果值]減少傷害',
    "ノーマルスキルを受けると防御力の[效果值]をダメージ減少に追加 [限制]": '受到NS攻擊時，依防禦的[效果值]減少傷害',
    "スライドスキルを受けると防御力の[效果值]をダメージ減少に追加 [限制]": '受到SS攻擊時，依防禦的[效果值]減少傷害',
    "ドライブスキルを受けると防御力の[效果值]をダメージ減少に追加 [限制]": '受到DS攻擊時，依防禦的[效果值]減少傷害',
    "ノーマルスキルを受けると攻撃力の[效果值]をダメージ減少に追加 [限制]": '受到NS攻擊時，依攻擊力的[效果值]減少傷害',
    "スライドスキルを受けると攻撃力の[效果值]をダメージ減少に追加 [限制]": '受到SS攻擊時，依攻擊力的[效果值]減少傷害',
    "ドライブスキルを受けると攻撃力の[效果值]をダメージ減少に追加 [限制]": '受到DS攻擊時，依攻擊力的[效果值]減少傷害',
    "ノーマルスキルを受けるとダメージ[效果值]減少 [限制]": '受到NS攻擊時，減少傷害[效果值]',
    "スライドスキルを受けるとダメージ[效果值]減少 [限制]": '受到SS攻擊時，減少傷害[效果值]',
    "ドライブスキルを受けるとダメージ[效果值]減少 [限制]": '受到DS攻擊時，減少傷害[效果值]',
    "ノーマルスキルを受けるとHPの[效果值]をダメージ減少に追加 [限制]": '受到NS攻擊時，依HP的[效果值]減少傷害',
    "スライドスキルを受けるとHPの[效果值]をダメージ減少に追加 [限制]": '受到SS攻擊時，依HP的[效果值]減少傷害',
    "ドライブスキルを受けるとHPの[效果值]をダメージ減少に追加 [限制]": '受到DS攻擊時，依HP的[效果值]減少傷害',
    "攻撃を受けるとクリティカルの[效果值]をダメージ減少に追加 [限制]": '受到攻擊時，依爆擊的[效果值]減少傷害',
    "攻撃を受けると機敏性の[效果值]をダメージ減少に追加 [限制]": '受到攻擊時，依機敏的[效果值]減少傷害',
    "攻撃を受けると防御力の[效果值]をダメージ減少に追加 [限制]": '受到攻擊時，依防禦的[效果值]減少傷害',
    "攻撃を受けると攻撃力の[效果值]をダメージ減少に追加 [限制]": '受到攻擊時，依攻擊力的[效果值]減少傷害',
    "攻撃を受けるとHP[效果值]をダメージ減少に追加 [限制]": '受到攻擊時，依HP的[效果值]減少傷害',
    "攻撃を受けるとダメージ[效果值]減少 [限制]": '受到攻擊時，減少傷害[效果值]',
    // 防具(3)
    "ノーマルスキルを受けるとダメージの[效果值]HP吸収 [限制]": '受到NS攻擊時，依傷害[效果值]回復HP',
    "スライドスキルを受けるとダメージの[效果值]HP吸収 [限制]": '受到SS攻擊時，依傷害[效果值]回復HP',
    "ドライブスキルを受けるとダメージの[效果值]HP吸収 [限制]": '受到DS攻擊時，依傷害[效果值]回復HP',
    "ノーマルスキルを受けると[機率值]の確率でHP[效果值]回復": '受到NS攻擊時，有[機率值]機率回復HP[效果值]',
    "スライドスキルを受けると[機率值]の確率でHP[效果值]回復": '受到SS攻擊時，有[機率值]機率回復HP[效果值]',
    "ドライブスキルを受けると[機率值]の確率でHP[效果值]回復": '受到DS攻擊時，有[機率值]機率回復HP[效果值]',
    "ノーマルスキルを受けると[機率值]の確率で防御無視相殺[效果值]追加": '受到NS攻擊時，有[機率值]機率無視防禦減少傷害[效果值]',
    "スライドスキルを受けると[機率值]の確率で防御無視相殺[效果值]追加": '受到SS攻擊時，有[機率值]機率無視防禦減少傷害[效果值]',
    "ドライブスキルを受けると[機率值]の確率で防御無視相殺[效果值]追加": '受到DS攻擊時，有[機率值]機率無視防禦減少傷害[效果值]',
    "ノーマルスキルを受けると防御無視相殺[效果值]追加": '受到NS攻擊時，無視防禦減少傷害[效果值]',
    "スライドスキルを受けると防御無視相殺[效果值]追加": '受到SS攻擊時，無視防禦減少傷害[效果值]',
    "ドライブスキルを受けると防御無視相殺[效果值]追加": '受到DS攻擊時，無視防禦減少傷害[效果值]',
    "攻撃を受けるとダメージの[效果值]HP吸収 [限制]": '受到攻擊時，依傷害[效果值]回復HP',
    "攻撃を受けると[機率值]の確率でHP[效果值]回復": '受到攻擊時，有[機率值]機率回復HP[效果值]',
    "攻撃を受けると防御無視相殺[效果值]追加": '受到攻擊時，無視防禦減少傷害[效果值]',
    // 裝飾(2)
    "即時回復量[效果值]増加": '即時回復量增加[效果值]',
    "持続回復量[效果值]増加": '持續回復量增加[效果值]',
    "回復不可回避率[效果值]増加": '回復不可迴避機率增加[效果值]',
    "回復不可命中率[效果值]増加": '回復不可命中機率增加[效果值]',
    "失明回避率[效果值]増加": '失明迴避機率增加[效果值]',
    "失明命中率[效果值]増加": '失明命中機率增加[效果值]',
    "デスヒール回避率[效果值]増加": '致命回復迴避機率增加[效果值]',
    "デスヒール命中率[效果值]増加": '致命回復命中機率增加[效果值]',
    "凍結回避率[效果值]増加": '凍結迴避機率增加[效果值]',
    "凍結命中率[效果值]増加": '凍結命中機率增加[效果值]',
    "石化回避率[效果值]増加": '石化迴避機率增加[效果值]',
    "石化命中率[效果值]増加": '石化命中機率增加[效果值]',
    "沈黙回避率[效果值]増加": '沉默迴避機率增加[效果值]',
    "沈黙命中率[效果值]増加": '沉默命中機率增加[效果值]',
    "気絶回避率[效果值]増加": '氣絕迴避機率增加[效果值]',
    "気絶命中率[效果值]増加": '氣絕命中機率增加[效果值]',
    "混乱回避率[效果值]増加": '混亂迴避機率增加[效果值]',
    "混乱命中率[效果值]増加": '混亂命中機率增加[效果值]',
    "睡眠命中率[效果值]増加": '睡眠命中機率增加[效果值]',
    "睡眠回避率[效果值]増加": '睡眠迴避機率增加[效果值]',
    "デバフ回避率[效果值]増加": '所有減益迴避機率增加[效果值]',
    "デバフ命中率[效果值]増加": '所有減益命中機率增加[效果值]',
    // 裝飾(3)
    "ノーマルスキルを受けると[機率值]の確率でスキルゲージ＋[效果值]": '受到NS攻擊時，有[機率值]機率技能充能＋[效果值]',
    "スライドスキルを受けると[機率值]の確率でスキルゲージ＋[效果值]": '受到SS攻擊時，有[機率值]機率技能充能＋[效果值]',
    "ドライブスキルを受けると[機率值]の確率でスキルゲージ＋[效果值]": '受到DS攻擊時，有[機率值]機率技能充能＋[效果值]',
    "ノーマルスキル攻撃時、[機率值]の確率でスキルゲージ[效果值]削除": 'NS攻擊時，有[機率值]機率削減目標技能充能[效果值]',
    "スライドスキル攻撃時、[機率值]の確率でスキルゲージ[效果值]削除": 'SS攻擊時，有[機率值]機率削減目標技能充能[效果值]',
    "ドライブスキル攻撃時、[機率值]の確率でスキルゲージ[效果值]削除": 'DS攻擊時，有[機率值]機率削減目標技能充能[效果值]',
    "ノーマルスキルで敵を倒すと[機率值]の確率でドライブゲージ＋[效果值]": 'NS打倒敵人時，有[機率值]機率DS充能＋[效果值]',
    "スライドスキルで敵を倒すと[機率值]の確率でドライブゲージ＋[效果值]": 'SS打倒敵人時，有[機率值]機率DS充能＋[效果值]',
    "ドライブスキルで敵を倒すと[機率值]の確率でドライブゲージ＋[效果值]": 'DS打倒敵人時，有[機率值]機率DS充能＋[效果值]',
    "ノーマルスキルを受けると[機率值]の確率でドライブゲージ＋[效果值]": '受到NS攻擊時，有[機率值]機率DS充能＋[效果值]',
    "スライドスキルを受けると[機率值]の確率でドライブゲージ＋[效果值]": '受到SS攻擊時，有[機率值]機率DS充能＋[效果值]',
    "ドライブスキルを受けると[機率值]の確率でドライブゲージ＋[效果值]": '受到DS攻擊時，有[機率值]機率DS充能＋[效果值]',
    "攻撃を受けると[機率值]の確率でスキルゲージ＋[效果值]": '受到攻擊時，有[機率值]機率技能充能＋[效果值]',
    "敵を倒すと[機率值]の確率でドライブゲージ＋[效果值]": '打倒敵人時，有[機率值]機率DS充能＋[效果值]',
    "攻撃時、[機率值]の確率でスキルゲージ[效果值]削除": '攻擊時，有[機率值]機率削減目標技能充能[效果值]',
    "攻撃を受けると[機率值]の確率でドライブゲージ＋[效果值]": '受到攻擊時，有[機率值]機率DS充能＋[效果值]'
  };
  /* Main
  -------------------------------------------------------------------------------------------------------------- */
  // 道具類型
  const typeLabel = ['武器', '防具', '裝飾'];
  // 強化欄位
  const slotLabel = ['(1)', '(2)', '(3)'];
  // 機率
  const levelConfig = {
    E: 0.3000,
    D: 0.3700,
    C: 0.2680,
    B: 0.0500,
    A: 0.0100,
    S: 0.0020,
  };
  const levelKeys = Object.keys(levelConfig);
  const levelCount = levelKeys.length;
  const levelOffset = 1 / (levelCount - 1);
  const ranges = [];
  levelKeys.forEach(level => {
    const lastValue = ranges.slice(-1)[0] || 0;
    const nextValue = lastValue + levelConfig[level];
    ranges.push(+nextValue.toFixed(4));
  });
  // 取等級
  const pickLevel = () => {
    const randomValue = +Math.random().toFixed(4);
    let index = 0;  
    for (let i = 0; i<ranges.length; i++) {
      if (ranges[i] > randomValue) {
        index = i;
        break;
      }
    }
    return levelKeys[index];
  };
  // 取效果值
  const pickResult = (min, max) => {
    const offsetLevel = Math.floor(Math.random() * levelCount);
    const offsetTotal = max - min;
    const value = min + offsetTotal * offsetLevel * levelOffset;
    const level = levelKeys[offsetLevel];
    if (offsetTotal <= 1) {
      return {
        level,
        value: (value * 100).toFixed(2) + '%'
      };
    }
    return {
      level,
      value: Math.floor(value).toFixed(0)
    };
  }
  // 取得細工特殊效果
  const pickEffect = (type, slot, level) => {
    const effects = effectData.filter(effect => {
      return effect.type === type && effect.slot === slot && level === level;
    })

    const data = effects[Math.floor(Math.random() * effects.length)];
    const template = translate[data.template] || data.template;
    const result = pickResult(data.min, data.max);
    const percentValue = ' $value% '.replace('$value',(result.percent * 100).toFixed(0));
    return '[' +data.level + result.level + '] '
      + template.replace('[效果值]', result.value).replace('[機率值]', percentValue).replace('[限制]', '');
  }
  // 模擬細工
  const createEffect = (type, slot) => {
    if (!typeLabel[type] || !slotLabel[slot]) {
      return 'Error.';
    }
    const level = pickLevel();
    return pickEffect(type, slot, level);
  }

  const vm = new Vue({
    el: '#app',
    data: {
      effectData,
      typeLabel,
      slotLabel,
      levelLabel: levelKeys,
      dialogVisible: false,
      activePane: 'demon',
      filterOption: {
        type: [],
        slot: [],
        level: [],
      },
      effectList: [],
    },
    computed: {
      effectMap() {
        const map = {  };
        this.effectList.forEach((effect) => {
          if (!map[effect.type]) {
            map[effect.type] = {};
          }
          if (!map[effect.type][effect.slot]) {
            map[effect.type][effect.slot] = [];
          }
          map[effect.type][effect.slot].push(effect);
        });
        return map;
      },
      filterEnabled() {
        const { effectData, effectList } = this;
        return effectData.length !== effectList.length;
      },
    },
    methods: {
      effectDesc(item, useTranslate = false) {
        const { template, percent, min, max } = item;
        const text = useTranslate ? translate[template] : template;
        const percentValue = ' $value% '.replace('$value',(item.percent * 100).toFixed(0));
        return text.replace('[效果值]', this.valueRange(item)).replace('[機率值]', percentValue).replace('[限制]', '');
      },
      valueRange(item) {
        const { min, max } = item;
        const template = ' $1 ~ $2 '
        if (max - min <= 1) {
          return template
            .replace('$1', (min*100).toFixed(0) + '%')
            .replace('$2', (max*100).toFixed(0) + '%');
        }
        return template
            .replace('$1', (min).toFixed(0))
            .replace('$2', (max).toFixed(0));
      },
      levelExpectedValue(level) {
        const value = levelConfig[level];
        return (value * 100).toFixed(2);
      },      
      pickEffectList(type, slot) {
        const { effectMap } = this;
        return effectMap[type] && effectMap[type][slot] || [];
      },
      isEmptyList(type, slot) {
        return this.pickEffectList(type, slot).length === 0;
      },
      updateEffectList() {
        this.effectList = this.effectData.filter((effect) => {
          const filterMatch = {
            type: false,
            slot: false,
            level: false,
          };
          Object.keys(filterMatch).forEach(key => {
            const checkList = this.filterOption[key] || [];
            const checkValue = effect[key];
            filterMatch[key] = checkList.length ? checkList.indexOf(checkValue) >= 0 : true;
          });
          return filterMatch.type && filterMatch.slot && filterMatch.level;
        });
      },
      // event handler
      handlePaneClick(pane) {
        this.activePane = pane;
      },
      handleOpenFilter() {
        this.dialogVisible = true;
      },
      handleFilterReset() {
        this.filterOption = {
          type: [],
          slot: [],
          level: [],
        };
      },
      handleCloseDialog() {
        this.dialogVisible = false;
        this.updateEffectList();
      }
    },
    beforeMount() {
      this.updateEffectList();
    }
  });

})(window, Vue);