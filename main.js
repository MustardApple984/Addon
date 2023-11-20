import { world } from '@minecraft/server';
import { ActionFormData } from '@minecraft/server-ui';

// メインフォームを出す処理コード
world.afterEvents.itemUse.subscribe((ev) => {
  const { itemStack, source } = ev;
  if (!(itemStack.typeId == 'minecraft:compass')) return;
  if (itemStack.typeId == 'minecraft:compass') {
    open_form(source);
  }
});

function open_form(player) {
  const form = new ActionFormData()
    .title('§l==MENU==')
    .body('§l§cBOSS§e RPG')
    .button('§l§a==SHOP==')
    .button('§l§d==テレポート==');

  form.show(player).then((formRes) => {
    if (formRes.selection === 1) {
      // ショップを選択した場合、新しいフォームを表示
      openShopForm(player);
    } else if (formRes.selection === 2) {
      // テレポートを選択した場合、次のフォームを表示
      nextForm(player);
    }
  });
}

// ショップフォームを表示する処理コード
function openShopForm(player) {
  const shopForm = new ActionFormData()
    .title('§l==SHOP==')
    .body('アイテムカテゴリを選択してください:')
    .button('§l§a武器')
    .button('§l§bアイテム')
    .button('§l§cスキル')
    .button('戻る');

  shopForm.show(player).then((shopFormRes) => {
    // 選択に応じて詳細なフォームを表示
    switch (shopFormRes.selection) {
      case 1:
        openWeaponForm(player);
        break;
      case 2:
        openItemForm(player);
        break;
      case 3:
        openSkillForm(player);
        break;
      case 4:
        // 戻るボタンが選択された場合の処理
        break;
    }
  });
}

// 武器フォームを表示する処理コード
function openWeaponForm(player) {
  // 武器に関するフォームの内容を設定
  const weaponForm = new ActionFormData()
    .title('§l==武器==')
    .body('武器の一覧を表示します...')
    .button('戻る');

  weaponForm.show(player).then((weaponFormRes) => {
    // 必要に応じて武器フォームの応答を処理する
  });
}

// アイテムフォームを表示する処理コード
function openItemForm(player) {
  // アイテムに関するフォームの内容を設定
  const itemForm = new ActionFormData()
    .title('§l==アイテム==')
    .body('アイテムの一覧を表示します...')
    .button('戻る');

  itemForm.show(player).then((itemFormRes) => {
    // 必要に応じてアイテムフォームの応答を処理する
  });
}

// スキルフォームを表示する処理コード
function openSkillForm(player) {
  // スキルに関するフォームの内容を設定
  const skillForm = new ActionFormData()
    .title('§l==スキル==')
    .body('スキルの一覧を表示します...')
    .button('戻る');

  skillForm.show(player).then((skillFormRes) => {
    // 必要に応じてスキルフォームの応答を処理する
  });
}

// 押した時に次のフォームを出す処理コード
function nextForm(player) {
  const nextform = new ActionFormData()
    .title('Title')
    .body('body_text')
    .button('test');

  nextform.show(player).then((formRes) => {
    // 次のフォームの応答を処理する（必要なら）
  });
}

