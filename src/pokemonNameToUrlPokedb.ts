/*
https://swsh.pokedb.tokyo/pokemon/list?season=11&rule=0
を開き、シーズン・バトルルール（シングル・ダブル）を選択。
developer consoleで以下のコマンドを実行し、結果をname2Urlに貼り付け。
JSON.stringify(Object.fromEntries(Array.from(document.querySelectorAll('div[data-pokemon-name]')).map((div)=>[div.dataset.pokemonName, div.querySelector('a').href])), null, 4)

名前が同じポケモンのフォルム・リージョンフォームは反映されないので、サイト上のアイコンで見分けながら手動でリンクを張る。
    "ロトム(ヒート)": "",
    "ロトム(ウォッシュ)": "",
    "ロトム(フロスト)": "",
    "ロトム(スピン)": "",
    "ロトム(カット)": "",
    "ウーラオス(いちげき)": "",
    "ウーラオス(れんげき)": "",
その他、必要に応じて貼り付け（面倒なのでまず見かけないポケモンはスルー）

ポリゴン２ => ポリゴン2
ポリゴンＺ => ポリゴンZ

*/

const name2Url: {[index:string]: string} =
{
    "ロトム(ヒート)": "https://swsh.pokedb.tokyo/pokemon/show/0479-01?season=11&rule=0",
    "ロトム(ウォッシュ)": "https://swsh.pokedb.tokyo/pokemon/show/0479-02?season=11&rule=0",
    "ロトム(フロスト)": "https://swsh.pokedb.tokyo/pokemon/show/0479-03?season=11&rule=0",
    "ロトム(スピン)": "https://swsh.pokedb.tokyo/pokemon/show/0479-04?season=11&rule=0",
    "ロトム(カット)": "https://swsh.pokedb.tokyo/pokemon/show/0479-05?season=11&rule=0",
    "ウーラオス(いちげき)": "https://swsh.pokedb.tokyo/pokemon/show/0892-00?season=11&rule=0",
    "ウーラオス(れんげき)": "https://swsh.pokedb.tokyo/pokemon/show/0892-01?season=11&rule=0",
    "パッチラゴン": "https://swsh.pokedb.tokyo/pokemon/show/0880-00?season=11&rule=0",
    "ウーラオス": "https://swsh.pokedb.tokyo/pokemon/show/0892-00?season=11&rule=0",
    "アシレーヌ": "https://swsh.pokedb.tokyo/pokemon/show/0730-00?season=11&rule=0",
    "リザードン": "https://swsh.pokedb.tokyo/pokemon/show/0006-00?season=11&rule=0",
    "ホルード": "https://swsh.pokedb.tokyo/pokemon/show/0660-00?season=11&rule=0",
    "ゲンガー": "https://swsh.pokedb.tokyo/pokemon/show/0094-00?season=11&rule=0",
    "ドサイドン": "https://swsh.pokedb.tokyo/pokemon/show/0464-00?season=11&rule=0",
    "ロトム": "https://swsh.pokedb.tokyo/pokemon/show/0479-03?season=11&rule=0",
    "マリルリ": "https://swsh.pokedb.tokyo/pokemon/show/0184-00?season=11&rule=0",
    "カビゴン": "https://swsh.pokedb.tokyo/pokemon/show/0143-00?season=11&rule=0",
    "ナットレイ": "https://swsh.pokedb.tokyo/pokemon/show/0598-00?season=11&rule=0",
    "オーロンゲ": "https://swsh.pokedb.tokyo/pokemon/show/0861-00?season=11&rule=0",
    "キュウコン": "https://swsh.pokedb.tokyo/pokemon/show/0038-00?season=11&rule=0",
    "サザンドラ": "https://swsh.pokedb.tokyo/pokemon/show/0635-00?season=11&rule=0",
    "ピクシー": "https://swsh.pokedb.tokyo/pokemon/show/0036-00?season=11&rule=0",
    "ギルガルド": "https://swsh.pokedb.tokyo/pokemon/show/0681-00?season=11&rule=0",
    "ウルガモス": "https://swsh.pokedb.tokyo/pokemon/show/0637-00?season=11&rule=0",
    "モロバレル": "https://swsh.pokedb.tokyo/pokemon/show/0591-00?season=11&rule=0",
    "ポリゴンZ": "https://swsh.pokedb.tokyo/pokemon/show/0474-00?season=11&rule=0",
    "アーマーガア": "https://swsh.pokedb.tokyo/pokemon/show/0823-00?season=11&rule=0",
    "ニンフィア": "https://swsh.pokedb.tokyo/pokemon/show/0700-00?season=11&rule=0",
    "ハッサム": "https://swsh.pokedb.tokyo/pokemon/show/0212-00?season=11&rule=0",
    "ハピナス": "https://swsh.pokedb.tokyo/pokemon/show/0242-00?season=11&rule=0",
    "ラプラス": "https://swsh.pokedb.tokyo/pokemon/show/0131-00?season=11&rule=0",
    "アイアント": "https://swsh.pokedb.tokyo/pokemon/show/0632-00?season=11&rule=0",
    "ウインディ": "https://swsh.pokedb.tokyo/pokemon/show/0059-00?season=11&rule=0",
    "ウオノラゴン": "https://swsh.pokedb.tokyo/pokemon/show/0882-00?season=11&rule=0",
    "ヌメルゴン": "https://swsh.pokedb.tokyo/pokemon/show/0706-00?season=11&rule=0",
    "ヒヒダルマ": "https://swsh.pokedb.tokyo/pokemon/show/0555-00?season=11&rule=0",
    "ガマゲロゲ": "https://swsh.pokedb.tokyo/pokemon/show/0537-00?season=11&rule=0",
    "サニーゴ": "https://swsh.pokedb.tokyo/pokemon/show/0222-00?season=11&rule=0",
    "マタドガス": "https://swsh.pokedb.tokyo/pokemon/show/0110-00?season=11&rule=0",
    "オンバーン": "https://swsh.pokedb.tokyo/pokemon/show/0715-00?season=11&rule=0",
    "ドヒドイデ": "https://swsh.pokedb.tokyo/pokemon/show/0748-00?season=11&rule=0",
    "ブリムオン": "https://swsh.pokedb.tokyo/pokemon/show/0858-00?season=11&rule=0",
    "ルガルガン": "https://swsh.pokedb.tokyo/pokemon/show/0745-01?season=11&rule=0",
    "マンムー": "https://swsh.pokedb.tokyo/pokemon/show/0473-00?season=11&rule=0",
    "ワルビアル": "https://swsh.pokedb.tokyo/pokemon/show/0553-00?season=11&rule=0",
    "オノノクス": "https://swsh.pokedb.tokyo/pokemon/show/0612-00?season=11&rule=0",
    "シャンデラ": "https://swsh.pokedb.tokyo/pokemon/show/0609-00?season=11&rule=0",
    "ポットデス": "https://swsh.pokedb.tokyo/pokemon/show/0855-00?season=11&rule=0",
    "サーナイト": "https://swsh.pokedb.tokyo/pokemon/show/0282-00?season=11&rule=0",
    "レアコイル": "https://swsh.pokedb.tokyo/pokemon/show/0082-00?season=11&rule=0",
    "ルカリオ": "https://swsh.pokedb.tokyo/pokemon/show/0448-00?season=11&rule=0",
    "エアームド": "https://swsh.pokedb.tokyo/pokemon/show/0227-00?season=11&rule=0",
    "モジャンボ": "https://swsh.pokedb.tokyo/pokemon/show/0465-00?season=11&rule=0",
    "トリトドン": "https://swsh.pokedb.tokyo/pokemon/show/0423-00?season=11&rule=0",
    "クレッフィ": "https://swsh.pokedb.tokyo/pokemon/show/0707-00?season=11&rule=0",
    "ランクルス": "https://swsh.pokedb.tokyo/pokemon/show/0579-00?season=11&rule=0",
    "エーフィ": "https://swsh.pokedb.tokyo/pokemon/show/0196-00?season=11&rule=0",
    "ジュラルドン": "https://swsh.pokedb.tokyo/pokemon/show/0884-00?season=11&rule=0",
    "ラフレシア": "https://swsh.pokedb.tokyo/pokemon/show/0045-00?season=11&rule=0",
    "バンバドロ": "https://swsh.pokedb.tokyo/pokemon/show/0750-00?season=11&rule=0",
    "ガラガラ": "https://swsh.pokedb.tokyo/pokemon/show/0105-00?season=11&rule=0",
    "ペンドラー": "https://swsh.pokedb.tokyo/pokemon/show/0545-00?season=11&rule=0",
    "インテレオン": "https://swsh.pokedb.tokyo/pokemon/show/0818-00?season=11&rule=0",
    "ヤドラン": "https://swsh.pokedb.tokyo/pokemon/show/0080-00?season=11&rule=0",
    "ジュナイパー": "https://swsh.pokedb.tokyo/pokemon/show/0724-00?season=11&rule=0",
    "キングドラ": "https://swsh.pokedb.tokyo/pokemon/show/0230-00?season=11&rule=0",
    "キュワワー": "https://swsh.pokedb.tokyo/pokemon/show/0764-00?season=11&rule=0",
    "ラッキー": "https://swsh.pokedb.tokyo/pokemon/show/0113-00?season=11&rule=0",
    "ヌオー": "https://swsh.pokedb.tokyo/pokemon/show/0195-00?season=11&rule=0",
    "パルシェン": "https://swsh.pokedb.tokyo/pokemon/show/0091-00?season=11&rule=0",
    "ロズレイド": "https://swsh.pokedb.tokyo/pokemon/show/0407-00?season=11&rule=0",
    "カメックス": "https://swsh.pokedb.tokyo/pokemon/show/0009-00?season=11&rule=0",
    "ファイアロー": "https://swsh.pokedb.tokyo/pokemon/show/0663-00?season=11&rule=0",
    "ストリンダー": "https://swsh.pokedb.tokyo/pokemon/show/0849-01?season=11&rule=0",
    "ドラミドロ": "https://swsh.pokedb.tokyo/pokemon/show/0691-00?season=11&rule=0",
    "ウォーグル": "https://swsh.pokedb.tokyo/pokemon/show/0628-00?season=11&rule=0",
    "ドラピオン": "https://swsh.pokedb.tokyo/pokemon/show/0452-00?season=11&rule=0",
    "マニューラ": "https://swsh.pokedb.tokyo/pokemon/show/0461-00?season=11&rule=0",
    "フライゴン": "https://swsh.pokedb.tokyo/pokemon/show/0330-00?season=11&rule=0",
    "タチフサグマ": "https://swsh.pokedb.tokyo/pokemon/show/0862-00?season=11&rule=0",
    "ギガイアス": "https://swsh.pokedb.tokyo/pokemon/show/0526-00?season=11&rule=0",
    "バタフリー": "https://swsh.pokedb.tokyo/pokemon/show/0012-00?season=11&rule=0",
    "ゾロアーク": "https://swsh.pokedb.tokyo/pokemon/show/0571-00?season=11&rule=0",
    "セキタンザン": "https://swsh.pokedb.tokyo/pokemon/show/0839-00?season=11&rule=0",
    "マホイップ": "https://swsh.pokedb.tokyo/pokemon/show/0869-00?season=11&rule=0",
    "アマージョ": "https://swsh.pokedb.tokyo/pokemon/show/0763-00?season=11&rule=0",
    "マシェード": "https://swsh.pokedb.tokyo/pokemon/show/0756-00?season=11&rule=0",
    "テラキオン": "https://swsh.pokedb.tokyo/pokemon/show/0639-00?season=11&rule=0",
    "レントラー": "https://swsh.pokedb.tokyo/pokemon/show/0405-00?season=11&rule=0",
    "ストライク": "https://swsh.pokedb.tokyo/pokemon/show/0123-00?season=11&rule=0",
    "キリキザン": "https://swsh.pokedb.tokyo/pokemon/show/0625-00?season=11&rule=0",
    "エンニュート": "https://swsh.pokedb.tokyo/pokemon/show/0758-00?season=11&rule=0",
    "サダイジャ": "https://swsh.pokedb.tokyo/pokemon/show/0844-00?season=11&rule=0",
    "ヌケニン": "https://swsh.pokedb.tokyo/pokemon/show/0292-00?season=11&rule=0",
    "コオリッポ": "https://swsh.pokedb.tokyo/pokemon/show/0875-00?season=11&rule=0",
    "ローブシン": "https://swsh.pokedb.tokyo/pokemon/show/0534-00?season=11&rule=0",
    "ミロカロス": "https://swsh.pokedb.tokyo/pokemon/show/0350-00?season=11&rule=0",
    "ジャラランガ": "https://swsh.pokedb.tokyo/pokemon/show/0784-00?season=11&rule=0",
    "サンダース": "https://swsh.pokedb.tokyo/pokemon/show/0135-00?season=11&rule=0",
    "ルチャブル": "https://swsh.pokedb.tokyo/pokemon/show/0701-00?season=11&rule=0",
    "ハガネール": "https://swsh.pokedb.tokyo/pokemon/show/0208-00?season=11&rule=0",
    "チラチーノ": "https://swsh.pokedb.tokyo/pokemon/show/0573-00?season=11&rule=0",
    "フーディン": "https://swsh.pokedb.tokyo/pokemon/show/0065-00?season=11&rule=0",
    "エレザード": "https://swsh.pokedb.tokyo/pokemon/show/0695-00?season=11&rule=0",
    "コバルオン": "https://swsh.pokedb.tokyo/pokemon/show/0638-00?season=11&rule=0",
    "ゴチルゼル": "https://swsh.pokedb.tokyo/pokemon/show/0576-00?season=11&rule=0",
    "バイバニラ": "https://swsh.pokedb.tokyo/pokemon/show/0584-00?season=11&rule=0",
    "メタモン": "https://swsh.pokedb.tokyo/pokemon/show/0132-00?season=11&rule=0",
    "ブラッキー": "https://swsh.pokedb.tokyo/pokemon/show/0197-00?season=11&rule=0",
    "ドククラゲ": "https://swsh.pokedb.tokyo/pokemon/show/0073-00?season=11&rule=0",
    "キレイハナ": "https://swsh.pokedb.tokyo/pokemon/show/0182-00?season=11&rule=0",
    "ネギガナイト": "https://swsh.pokedb.tokyo/pokemon/show/0865-00?season=11&rule=0",
    "モスノウ": "https://swsh.pokedb.tokyo/pokemon/show/0873-00?season=11&rule=0",
    "ダダリン": "https://swsh.pokedb.tokyo/pokemon/show/0781-00?season=11&rule=0",
    "シルヴァディ": "https://swsh.pokedb.tokyo/pokemon/show/0773-17?season=11&rule=0",
    "ランターン": "https://swsh.pokedb.tokyo/pokemon/show/0171-00?season=11&rule=0",
    "ペリッパー": "https://swsh.pokedb.tokyo/pokemon/show/0279-00?season=11&rule=0",
    "バルジーナ": "https://swsh.pokedb.tokyo/pokemon/show/0630-00?season=11&rule=0",
    "ドータクン": "https://swsh.pokedb.tokyo/pokemon/show/0437-00?season=11&rule=0",
    "コジョンド": "https://swsh.pokedb.tokyo/pokemon/show/0620-00?season=11&rule=0",
    "ドクロッグ": "https://swsh.pokedb.tokyo/pokemon/show/0454-00?season=11&rule=0",
    "デスバーン": "https://swsh.pokedb.tokyo/pokemon/show/0867-00?season=11&rule=0",
    "ヘラクロス": "https://swsh.pokedb.tokyo/pokemon/show/0214-00?season=11&rule=0",
    "アップリュー": "https://swsh.pokedb.tokyo/pokemon/show/0841-00?season=11&rule=0",
    "サマヨール": "https://swsh.pokedb.tokyo/pokemon/show/0356-00?season=11&rule=0",
    "ヤミラミ": "https://swsh.pokedb.tokyo/pokemon/show/0302-00?season=11&rule=0",
    "デンチュラ": "https://swsh.pokedb.tokyo/pokemon/show/0596-00?season=11&rule=0",
    "リーフィア": "https://swsh.pokedb.tokyo/pokemon/show/0470-00?season=11&rule=0",
    "クワガノン": "https://swsh.pokedb.tokyo/pokemon/show/0738-00?season=11&rule=0",
    "グレイシア": "https://swsh.pokedb.tokyo/pokemon/show/0471-00?season=11&rule=0",
    "トゲデマル": "https://swsh.pokedb.tokyo/pokemon/show/0777-00?season=11&rule=0",
    "ナマコブシ": "https://swsh.pokedb.tokyo/pokemon/show/0771-00?season=11&rule=0",
    "ワタシラガ": "https://swsh.pokedb.tokyo/pokemon/show/0830-00?season=11&rule=0",
    "マッギョ": "https://swsh.pokedb.tokyo/pokemon/show/0618-00?season=11&rule=0",
    "クレベース": "https://swsh.pokedb.tokyo/pokemon/show/0713-00?season=11&rule=0",
    "ニョロトノ": "https://swsh.pokedb.tokyo/pokemon/show/0186-00?season=11&rule=0",
    "バチンキー": "https://swsh.pokedb.tokyo/pokemon/show/0811-00?season=11&rule=0",
    "マンタイン": "https://swsh.pokedb.tokyo/pokemon/show/0226-00?season=11&rule=0",
    "スターミー": "https://swsh.pokedb.tokyo/pokemon/show/0121-00?season=11&rule=0",
    "タイプヌル": "https://swsh.pokedb.tokyo/pokemon/show/0772-00?season=11&rule=0",
    "ヨノワール": "https://swsh.pokedb.tokyo/pokemon/show/0477-00?season=11&rule=0",
    "サイドン": "https://swsh.pokedb.tokyo/pokemon/show/0112-00?season=11&rule=0",
    "ツボツボ": "https://swsh.pokedb.tokyo/pokemon/show/0213-00?season=11&rule=0",
    "シザリガー": "https://swsh.pokedb.tokyo/pokemon/show/0342-00?season=11&rule=0",
    "ルンパッパ": "https://swsh.pokedb.tokyo/pokemon/show/0272-00?season=11&rule=0",
    "バクガメス": "https://swsh.pokedb.tokyo/pokemon/show/0776-00?season=11&rule=0",
    "ムーランド": "https://swsh.pokedb.tokyo/pokemon/show/0508-00?season=11&rule=0",
    "ライチュウ": "https://swsh.pokedb.tokyo/pokemon/show/0026-00?season=11&rule=0",
    "シンボラー": "https://swsh.pokedb.tokyo/pokemon/show/0561-00?season=11&rule=0",
    "ブルンゲル": "https://swsh.pokedb.tokyo/pokemon/show/0593-00?season=11&rule=0",
    "アブリボン": "https://swsh.pokedb.tokyo/pokemon/show/0743-00?season=11&rule=0",
    "フシギダネ": "https://swsh.pokedb.tokyo/pokemon/show/0001-00?season=11&rule=0",
    "フシギソウ": "https://swsh.pokedb.tokyo/pokemon/show/0002-00?season=11&rule=0",
    "ヒトカゲ": "https://swsh.pokedb.tokyo/pokemon/show/0004-00?season=11&rule=0",
    "リザード": "https://swsh.pokedb.tokyo/pokemon/show/0005-00?season=11&rule=0",
    "ゼニガメ": "https://swsh.pokedb.tokyo/pokemon/show/0007-00?season=11&rule=0",
    "カメール": "https://swsh.pokedb.tokyo/pokemon/show/0008-00?season=11&rule=0",
    "キャタピー": "https://swsh.pokedb.tokyo/pokemon/show/0010-00?season=11&rule=0",
    "トランセル": "https://swsh.pokedb.tokyo/pokemon/show/0011-00?season=11&rule=0",
    "ピカチュウ": "https://swsh.pokedb.tokyo/pokemon/show/0025-00?season=11&rule=0",
    "サンド": "https://swsh.pokedb.tokyo/pokemon/show/0027-01?season=11&rule=0",
    "サンドパン": "https://swsh.pokedb.tokyo/pokemon/show/0028-01?season=11&rule=0",
    "ピッピ": "https://swsh.pokedb.tokyo/pokemon/show/0035-00?season=11&rule=0",
    "ロコン": "https://swsh.pokedb.tokyo/pokemon/show/0037-01?season=11&rule=0",
    "プリン": "https://swsh.pokedb.tokyo/pokemon/show/0039-00?season=11&rule=0",
    "プクリン": "https://swsh.pokedb.tokyo/pokemon/show/0040-00?season=11&rule=0",
    "ナゾノクサ": "https://swsh.pokedb.tokyo/pokemon/show/0043-00?season=11&rule=0",
    "クサイハナ": "https://swsh.pokedb.tokyo/pokemon/show/0044-00?season=11&rule=0",
    "ディグダ": "https://swsh.pokedb.tokyo/pokemon/show/0050-01?season=11&rule=0",
    "ダグトリオ": "https://swsh.pokedb.tokyo/pokemon/show/0051-01?season=11&rule=0",
    "ニャース": "https://swsh.pokedb.tokyo/pokemon/show/0052-02?season=11&rule=0",
    "ペルシアン": "https://swsh.pokedb.tokyo/pokemon/show/0053-01?season=11&rule=0",
    "コダック": "https://swsh.pokedb.tokyo/pokemon/show/0054-00?season=11&rule=0",
    "ゴルダック": "https://swsh.pokedb.tokyo/pokemon/show/0055-00?season=11&rule=0",
    "ガーディ": "https://swsh.pokedb.tokyo/pokemon/show/0058-00?season=11&rule=0",
    "ニョロモ": "https://swsh.pokedb.tokyo/pokemon/show/0060-00?season=11&rule=0",
    "ニョロゾ": "https://swsh.pokedb.tokyo/pokemon/show/0061-00?season=11&rule=0",
    "ニョロボン": "https://swsh.pokedb.tokyo/pokemon/show/0062-00?season=11&rule=0",
    "ケーシィ": "https://swsh.pokedb.tokyo/pokemon/show/0063-00?season=11&rule=0",
    "ユンゲラー": "https://swsh.pokedb.tokyo/pokemon/show/0064-00?season=11&rule=0",
    "ゴーリキー": "https://swsh.pokedb.tokyo/pokemon/show/0067-00?season=11&rule=0",
    "カイリキー": "https://swsh.pokedb.tokyo/pokemon/show/0068-00?season=11&rule=0",
    "ポニータ": "https://swsh.pokedb.tokyo/pokemon/show/0077-01?season=11&rule=0",
    "ギャロップ": "https://swsh.pokedb.tokyo/pokemon/show/0078-01?season=11&rule=0",
    "ヤドン": "https://swsh.pokedb.tokyo/pokemon/show/0079-01?season=11&rule=0",
    "コイル": "https://swsh.pokedb.tokyo/pokemon/show/0081-00?season=11&rule=0",
    "カモネギ": "https://swsh.pokedb.tokyo/pokemon/show/0083-01?season=11&rule=0",
    "ゴース": "https://swsh.pokedb.tokyo/pokemon/show/0092-00?season=11&rule=0",
    "ゴースト": "https://swsh.pokedb.tokyo/pokemon/show/0093-00?season=11&rule=0",
    "イワーク": "https://swsh.pokedb.tokyo/pokemon/show/0095-00?season=11&rule=0",
    "キングラー": "https://swsh.pokedb.tokyo/pokemon/show/0099-00?season=11&rule=0",
    "ナッシー": "https://swsh.pokedb.tokyo/pokemon/show/0103-01?season=11&rule=0",
    "カラカラ": "https://swsh.pokedb.tokyo/pokemon/show/0104-00?season=11&rule=0",
    "サワムラー": "https://swsh.pokedb.tokyo/pokemon/show/0106-00?season=11&rule=0",
    "エビワラー": "https://swsh.pokedb.tokyo/pokemon/show/0107-00?season=11&rule=0",
    "ベロリンガ": "https://swsh.pokedb.tokyo/pokemon/show/0108-00?season=11&rule=0",
    "ドガース": "https://swsh.pokedb.tokyo/pokemon/show/0109-00?season=11&rule=0",
    "サイホーン": "https://swsh.pokedb.tokyo/pokemon/show/0111-00?season=11&rule=0",
    "モンジャラ": "https://swsh.pokedb.tokyo/pokemon/show/0114-00?season=11&rule=0",
    "ガルーラ": "https://swsh.pokedb.tokyo/pokemon/show/0115-00?season=11&rule=0",
    "シードラ": "https://swsh.pokedb.tokyo/pokemon/show/0117-00?season=11&rule=0",
    "トサキント": "https://swsh.pokedb.tokyo/pokemon/show/0118-00?season=11&rule=0",
    "アズマオウ": "https://swsh.pokedb.tokyo/pokemon/show/0119-00?season=11&rule=0",
    "バリヤード": "https://swsh.pokedb.tokyo/pokemon/show/0122-01?season=11&rule=0",
    "カイロス": "https://swsh.pokedb.tokyo/pokemon/show/0127-00?season=11&rule=0",
    "ケンタロス": "https://swsh.pokedb.tokyo/pokemon/show/0128-00?season=11&rule=0",
    "コイキング": "https://swsh.pokedb.tokyo/pokemon/show/0129-00?season=11&rule=0",
    "イーブイ": "https://swsh.pokedb.tokyo/pokemon/show/0133-00?season=11&rule=0",
    "シャワーズ": "https://swsh.pokedb.tokyo/pokemon/show/0134-00?season=11&rule=0",
    "ブースター": "https://swsh.pokedb.tokyo/pokemon/show/0136-00?season=11&rule=0",
    "ポリゴン": "https://swsh.pokedb.tokyo/pokemon/show/0137-00?season=11&rule=0",
    "ヨルノズク": "https://swsh.pokedb.tokyo/pokemon/show/0164-00?season=11&rule=0",
    "チョンチー": "https://swsh.pokedb.tokyo/pokemon/show/0170-00?season=11&rule=0",
    "ピチュー": "https://swsh.pokedb.tokyo/pokemon/show/0172-00?season=11&rule=0",
    "ピィ": "https://swsh.pokedb.tokyo/pokemon/show/0173-00?season=11&rule=0",
    "ププリン": "https://swsh.pokedb.tokyo/pokemon/show/0174-00?season=11&rule=0",
    "トゲチック": "https://swsh.pokedb.tokyo/pokemon/show/0176-00?season=11&rule=0",
    "ネイティ": "https://swsh.pokedb.tokyo/pokemon/show/0177-00?season=11&rule=0",
    "ネイティオ": "https://swsh.pokedb.tokyo/pokemon/show/0178-00?season=11&rule=0",
    "ウソッキー": "https://swsh.pokedb.tokyo/pokemon/show/0185-00?season=11&rule=0",
    "ウパー": "https://swsh.pokedb.tokyo/pokemon/show/0194-00?season=11&rule=0",
    "ヤドキング": "https://swsh.pokedb.tokyo/pokemon/show/0199-00?season=11&rule=0",
    "ソーナンス": "https://swsh.pokedb.tokyo/pokemon/show/0202-00?season=11&rule=0",
    "ノコッチ": "https://swsh.pokedb.tokyo/pokemon/show/0206-00?season=11&rule=0",
    "ハリーセン": "https://swsh.pokedb.tokyo/pokemon/show/0211-00?season=11&rule=0",
    "ニューラ": "https://swsh.pokedb.tokyo/pokemon/show/0215-00?season=11&rule=0",
    "イノムー": "https://swsh.pokedb.tokyo/pokemon/show/0221-00?season=11&rule=0",
    "テッポウオ": "https://swsh.pokedb.tokyo/pokemon/show/0223-00?season=11&rule=0",
    "オクタン": "https://swsh.pokedb.tokyo/pokemon/show/0224-00?season=11&rule=0",
    "デリバード": "https://swsh.pokedb.tokyo/pokemon/show/0225-00?season=11&rule=0",
    "カポエラー": "https://swsh.pokedb.tokyo/pokemon/show/0237-00?season=11&rule=0",
    "ミルタンク": "https://swsh.pokedb.tokyo/pokemon/show/0241-00?season=11&rule=0",
    "ヨーギラス": "https://swsh.pokedb.tokyo/pokemon/show/0246-00?season=11&rule=0",
    "サナギラス": "https://swsh.pokedb.tokyo/pokemon/show/0247-00?season=11&rule=0",
    "ジグザグマ": "https://swsh.pokedb.tokyo/pokemon/show/0263-01?season=11&rule=0",
    "マッスグマ": "https://swsh.pokedb.tokyo/pokemon/show/0264-01?season=11&rule=0",
    "ハスブレロ": "https://swsh.pokedb.tokyo/pokemon/show/0271-00?season=11&rule=0",
    "ダーテング": "https://swsh.pokedb.tokyo/pokemon/show/0275-00?season=11&rule=0",
    "ラルトス": "https://swsh.pokedb.tokyo/pokemon/show/0280-00?season=11&rule=0",
    "キルリア": "https://swsh.pokedb.tokyo/pokemon/show/0281-00?season=11&rule=0",
    "テッカニン": "https://swsh.pokedb.tokyo/pokemon/show/0291-00?season=11&rule=0",
    "ゴニョニョ": "https://swsh.pokedb.tokyo/pokemon/show/0293-00?season=11&rule=0",
    "ドゴーム": "https://swsh.pokedb.tokyo/pokemon/show/0294-00?season=11&rule=0",
    "バクオング": "https://swsh.pokedb.tokyo/pokemon/show/0295-00?season=11&rule=0",
    "ルリリ": "https://swsh.pokedb.tokyo/pokemon/show/0298-00?season=11&rule=0",
    "クチート": "https://swsh.pokedb.tokyo/pokemon/show/0303-00?season=11&rule=0",
    "ライボルト": "https://swsh.pokedb.tokyo/pokemon/show/0310-00?season=11&rule=0",
    "ロゼリア": "https://swsh.pokedb.tokyo/pokemon/show/0315-00?season=11&rule=0",
    "キバニア": "https://swsh.pokedb.tokyo/pokemon/show/0318-00?season=11&rule=0",
    "サメハダー": "https://swsh.pokedb.tokyo/pokemon/show/0319-00?season=11&rule=0",
    "ホエルコ": "https://swsh.pokedb.tokyo/pokemon/show/0320-00?season=11&rule=0",
    "ホエルオー": "https://swsh.pokedb.tokyo/pokemon/show/0321-00?season=11&rule=0",
    "ナックラー": "https://swsh.pokedb.tokyo/pokemon/show/0328-00?season=11&rule=0",
    "ルナトーン": "https://swsh.pokedb.tokyo/pokemon/show/0337-00?season=11&rule=0",
    "ソルロック": "https://swsh.pokedb.tokyo/pokemon/show/0338-00?season=11&rule=0",
    "ナマズン": "https://swsh.pokedb.tokyo/pokemon/show/0340-00?season=11&rule=0",
    "ネンドール": "https://swsh.pokedb.tokyo/pokemon/show/0344-00?season=11&rule=0",
    "ヒンバス": "https://swsh.pokedb.tokyo/pokemon/show/0349-00?season=11&rule=0",
    "ヨマワル": "https://swsh.pokedb.tokyo/pokemon/show/0355-00?season=11&rule=0",
    "ソーナノ": "https://swsh.pokedb.tokyo/pokemon/show/0360-00?season=11&rule=0",
    "ユキワラシ": "https://swsh.pokedb.tokyo/pokemon/show/0361-00?season=11&rule=0",
    "オニゴーリ": "https://swsh.pokedb.tokyo/pokemon/show/0362-00?season=11&rule=0",
    "コリンク": "https://swsh.pokedb.tokyo/pokemon/show/0403-00?season=11&rule=0",
    "ルクシオ": "https://swsh.pokedb.tokyo/pokemon/show/0404-00?season=11&rule=0",
    "スボミー": "https://swsh.pokedb.tokyo/pokemon/show/0406-00?season=11&rule=0",
    "ミツハニー": "https://swsh.pokedb.tokyo/pokemon/show/0415-00?season=11&rule=0",
    "ビークイン": "https://swsh.pokedb.tokyo/pokemon/show/0416-00?season=11&rule=0",
    "チェリム": "https://swsh.pokedb.tokyo/pokemon/show/0421-00?season=11&rule=0",
    "カラナクシ": "https://swsh.pokedb.tokyo/pokemon/show/0422-00?season=11&rule=0",
    "フワンテ": "https://swsh.pokedb.tokyo/pokemon/show/0425-00?season=11&rule=0",
    "フワライド": "https://swsh.pokedb.tokyo/pokemon/show/0426-00?season=11&rule=0",
    "ミミロップ": "https://swsh.pokedb.tokyo/pokemon/show/0428-00?season=11&rule=0",
    "スカタンク": "https://swsh.pokedb.tokyo/pokemon/show/0435-00?season=11&rule=0",
    "ドーミラー": "https://swsh.pokedb.tokyo/pokemon/show/0436-00?season=11&rule=0",
    "ウソハチ": "https://swsh.pokedb.tokyo/pokemon/show/0438-00?season=11&rule=0",
    "マネネ": "https://swsh.pokedb.tokyo/pokemon/show/0439-00?season=11&rule=0",
    "ゴンベ": "https://swsh.pokedb.tokyo/pokemon/show/0446-00?season=11&rule=0",
    "リオル": "https://swsh.pokedb.tokyo/pokemon/show/0447-00?season=11&rule=0",
    "ヒポポタス": "https://swsh.pokedb.tokyo/pokemon/show/0449-00?season=11&rule=0",
    "スコルピ": "https://swsh.pokedb.tokyo/pokemon/show/0451-00?season=11&rule=0",
    "グレッグル": "https://swsh.pokedb.tokyo/pokemon/show/0453-00?season=11&rule=0",
    "タマンタ": "https://swsh.pokedb.tokyo/pokemon/show/0458-00?season=11&rule=0",
    "ユキノオー": "https://swsh.pokedb.tokyo/pokemon/show/0460-00?season=11&rule=0",
    "ベロベルト": "https://swsh.pokedb.tokyo/pokemon/show/0463-00?season=11&rule=0",
    "エルレイド": "https://swsh.pokedb.tokyo/pokemon/show/0475-00?season=11&rule=0",
    "ユキメノコ": "https://swsh.pokedb.tokyo/pokemon/show/0478-00?season=11&rule=0",
    "ハーデリア": "https://swsh.pokedb.tokyo/pokemon/show/0507-00?season=11&rule=0",
    "チョロネコ": "https://swsh.pokedb.tokyo/pokemon/show/0509-00?season=11&rule=0",
    "レパルダス": "https://swsh.pokedb.tokyo/pokemon/show/0510-00?season=11&rule=0",
    "ムシャーナ": "https://swsh.pokedb.tokyo/pokemon/show/0518-00?season=11&rule=0",
    "ハトーボー": "https://swsh.pokedb.tokyo/pokemon/show/0520-00?season=11&rule=0",
    "ケンホロウ": "https://swsh.pokedb.tokyo/pokemon/show/0521-00?season=11&rule=0",
    "ダンゴロ": "https://swsh.pokedb.tokyo/pokemon/show/0524-00?season=11&rule=0",
    "ガントル": "https://swsh.pokedb.tokyo/pokemon/show/0525-00?season=11&rule=0",
    "コロモリ": "https://swsh.pokedb.tokyo/pokemon/show/0527-00?season=11&rule=0",
    "ココロモリ": "https://swsh.pokedb.tokyo/pokemon/show/0528-00?season=11&rule=0",
    "モグリュー": "https://swsh.pokedb.tokyo/pokemon/show/0529-00?season=11&rule=0",
    "ドテッコツ": "https://swsh.pokedb.tokyo/pokemon/show/0533-00?season=11&rule=0",
    "ガマガル": "https://swsh.pokedb.tokyo/pokemon/show/0536-00?season=11&rule=0",
    "ナゲキ": "https://swsh.pokedb.tokyo/pokemon/show/0538-00?season=11&rule=0",
    "ダゲキ": "https://swsh.pokedb.tokyo/pokemon/show/0539-00?season=11&rule=0",
    "ホイーガ": "https://swsh.pokedb.tokyo/pokemon/show/0544-00?season=11&rule=0",
    "モンメン": "https://swsh.pokedb.tokyo/pokemon/show/0546-00?season=11&rule=0",
    "チュリネ": "https://swsh.pokedb.tokyo/pokemon/show/0548-00?season=11&rule=0",
    "ドレディア": "https://swsh.pokedb.tokyo/pokemon/show/0549-00?season=11&rule=0",
    "バスラオ": "https://swsh.pokedb.tokyo/pokemon/show/0550-01?season=11&rule=0",
    "ダルマッカ": "https://swsh.pokedb.tokyo/pokemon/show/0554-01?season=11&rule=0",
    "マラカッチ": "https://swsh.pokedb.tokyo/pokemon/show/0556-00?season=11&rule=0",
    "イシズマイ": "https://swsh.pokedb.tokyo/pokemon/show/0557-00?season=11&rule=0",
    "イワパレス": "https://swsh.pokedb.tokyo/pokemon/show/0558-00?season=11&rule=0",
    "ズルズキン": "https://swsh.pokedb.tokyo/pokemon/show/0560-00?season=11&rule=0",
    "デスマス": "https://swsh.pokedb.tokyo/pokemon/show/0562-01?season=11&rule=0",
    "デスカーン": "https://swsh.pokedb.tokyo/pokemon/show/0563-00?season=11&rule=0",
    "ダストダス": "https://swsh.pokedb.tokyo/pokemon/show/0569-00?season=11&rule=0",
    "ゾロア": "https://swsh.pokedb.tokyo/pokemon/show/0570-00?season=11&rule=0",
    "チラーミィ": "https://swsh.pokedb.tokyo/pokemon/show/0572-00?season=11&rule=0",
    "ゴチミル": "https://swsh.pokedb.tokyo/pokemon/show/0575-00?season=11&rule=0",
    "ユニラン": "https://swsh.pokedb.tokyo/pokemon/show/0577-00?season=11&rule=0",
    "ダブラン": "https://swsh.pokedb.tokyo/pokemon/show/0578-00?season=11&rule=0",
    "エモンガ": "https://swsh.pokedb.tokyo/pokemon/show/0587-00?season=11&rule=0",
    "シュバルゴ": "https://swsh.pokedb.tokyo/pokemon/show/0589-00?season=11&rule=0",
    "タマゲタケ": "https://swsh.pokedb.tokyo/pokemon/show/0590-00?season=11&rule=0",
    "プルリル": "https://swsh.pokedb.tokyo/pokemon/show/0592-00?season=11&rule=0",
    "テッシード": "https://swsh.pokedb.tokyo/pokemon/show/0597-00?season=11&rule=0",
    "ギギギアル": "https://swsh.pokedb.tokyo/pokemon/show/0601-00?season=11&rule=0",
    "リグレー": "https://swsh.pokedb.tokyo/pokemon/show/0605-00?season=11&rule=0",
    "オーベム": "https://swsh.pokedb.tokyo/pokemon/show/0606-00?season=11&rule=0",
    "ヒトモシ": "https://swsh.pokedb.tokyo/pokemon/show/0607-00?season=11&rule=0",
    "ランプラー": "https://swsh.pokedb.tokyo/pokemon/show/0608-00?season=11&rule=0",
    "オノンド": "https://swsh.pokedb.tokyo/pokemon/show/0611-00?season=11&rule=0",
    "ツンベアー": "https://swsh.pokedb.tokyo/pokemon/show/0614-00?season=11&rule=0",
    "チョボマキ": "https://swsh.pokedb.tokyo/pokemon/show/0616-00?season=11&rule=0",
    "アギルダー": "https://swsh.pokedb.tokyo/pokemon/show/0617-00?season=11&rule=0",
    "クリムガン": "https://swsh.pokedb.tokyo/pokemon/show/0621-00?season=11&rule=0",
    "ゴルーグ": "https://swsh.pokedb.tokyo/pokemon/show/0623-00?season=11&rule=0",
    "コマタナ": "https://swsh.pokedb.tokyo/pokemon/show/0624-00?season=11&rule=0",
    "バッフロン": "https://swsh.pokedb.tokyo/pokemon/show/0626-00?season=11&rule=0",
    "ワシボン": "https://swsh.pokedb.tokyo/pokemon/show/0627-00?season=11&rule=0",
    "バルチャイ": "https://swsh.pokedb.tokyo/pokemon/show/0629-00?season=11&rule=0",
    "クイタラン": "https://swsh.pokedb.tokyo/pokemon/show/0631-00?season=11&rule=0",
    "モノズ": "https://swsh.pokedb.tokyo/pokemon/show/0633-00?season=11&rule=0",
    "ジヘッド": "https://swsh.pokedb.tokyo/pokemon/show/0634-00?season=11&rule=0",
    "メラルバ": "https://swsh.pokedb.tokyo/pokemon/show/0636-00?season=11&rule=0",
    "ビリジオン": "https://swsh.pokedb.tokyo/pokemon/show/0640-00?season=11&rule=0",
    "ホルビー": "https://swsh.pokedb.tokyo/pokemon/show/0659-00?season=11&rule=0",
    "ヤヤコマ": "https://swsh.pokedb.tokyo/pokemon/show/0661-00?season=11&rule=0",
    "ヒノヤコマ": "https://swsh.pokedb.tokyo/pokemon/show/0662-00?season=11&rule=0",
    "ヤンチャム": "https://swsh.pokedb.tokyo/pokemon/show/0674-00?season=11&rule=0",
    "ゴロンダ": "https://swsh.pokedb.tokyo/pokemon/show/0675-00?season=11&rule=0",
    "ニャスパー": "https://swsh.pokedb.tokyo/pokemon/show/0677-00?season=11&rule=0",
    "ニャオニクス": "https://swsh.pokedb.tokyo/pokemon/show/0678-01?season=11&rule=0",
    "ヒトツキ": "https://swsh.pokedb.tokyo/pokemon/show/0679-00?season=11&rule=0",
    "ニダンギル": "https://swsh.pokedb.tokyo/pokemon/show/0680-00?season=11&rule=0",
    "シュシュプ": "https://swsh.pokedb.tokyo/pokemon/show/0682-00?season=11&rule=0",
    "フレフワン": "https://swsh.pokedb.tokyo/pokemon/show/0683-00?season=11&rule=0",
    "ペロッパフ": "https://swsh.pokedb.tokyo/pokemon/show/0684-00?season=11&rule=0",
    "ペロリーム": "https://swsh.pokedb.tokyo/pokemon/show/0685-00?season=11&rule=0",
    "マーイーカ": "https://swsh.pokedb.tokyo/pokemon/show/0686-00?season=11&rule=0",
    "カラマネロ": "https://swsh.pokedb.tokyo/pokemon/show/0687-00?season=11&rule=0",
    "ガメノデス": "https://swsh.pokedb.tokyo/pokemon/show/0689-00?season=11&rule=0",
    "クズモー": "https://swsh.pokedb.tokyo/pokemon/show/0690-00?season=11&rule=0",
    "ブロスター": "https://swsh.pokedb.tokyo/pokemon/show/0693-00?season=11&rule=0",
    "エリキテル": "https://swsh.pokedb.tokyo/pokemon/show/0694-00?season=11&rule=0",
    "デデンネ": "https://swsh.pokedb.tokyo/pokemon/show/0702-00?season=11&rule=0",
    "ヌメラ": "https://swsh.pokedb.tokyo/pokemon/show/0704-00?season=11&rule=0",
    "ヌメイル": "https://swsh.pokedb.tokyo/pokemon/show/0705-00?season=11&rule=0",
    "ボクレー": "https://swsh.pokedb.tokyo/pokemon/show/0708-00?season=11&rule=0",
    "オーロット": "https://swsh.pokedb.tokyo/pokemon/show/0709-00?season=11&rule=0",
    "バケッチャ": "https://swsh.pokedb.tokyo/pokemon/show/0710-03?season=11&rule=0",
    "パンプジン": "https://swsh.pokedb.tokyo/pokemon/show/0711-03?season=11&rule=0",
    "オンバット": "https://swsh.pokedb.tokyo/pokemon/show/0714-00?season=11&rule=0",
    "フクスロー": "https://swsh.pokedb.tokyo/pokemon/show/0723-00?season=11&rule=0",
    "ニャビー": "https://swsh.pokedb.tokyo/pokemon/show/0725-00?season=11&rule=0",
    "ニャヒート": "https://swsh.pokedb.tokyo/pokemon/show/0726-00?season=11&rule=0",
    "オシャマリ": "https://swsh.pokedb.tokyo/pokemon/show/0729-00?season=11&rule=0",
    "デンヂムシ": "https://swsh.pokedb.tokyo/pokemon/show/0737-00?season=11&rule=0",
    "アブリー": "https://swsh.pokedb.tokyo/pokemon/show/0742-00?season=11&rule=0",
    "イワンコ": "https://swsh.pokedb.tokyo/pokemon/show/0744-00?season=11&rule=0",
    "ヨワシ": "https://swsh.pokedb.tokyo/pokemon/show/0746-00?season=11&rule=0",
    "ヒドイデ": "https://swsh.pokedb.tokyo/pokemon/show/0747-00?season=11&rule=0",
    "オニシズクモ": "https://swsh.pokedb.tokyo/pokemon/show/0752-00?season=11&rule=0",
    "ラランテス": "https://swsh.pokedb.tokyo/pokemon/show/0754-00?season=11&rule=0",
    "ネマシュ": "https://swsh.pokedb.tokyo/pokemon/show/0755-00?season=11&rule=0",
    "ヤトウモリ": "https://swsh.pokedb.tokyo/pokemon/show/0757-00?season=11&rule=0",
    "キテルグマ": "https://swsh.pokedb.tokyo/pokemon/show/0760-00?season=11&rule=0",
    "アマカジ": "https://swsh.pokedb.tokyo/pokemon/show/0761-00?season=11&rule=0",
    "アママイコ": "https://swsh.pokedb.tokyo/pokemon/show/0762-00?season=11&rule=0",
    "ヤレユータン": "https://swsh.pokedb.tokyo/pokemon/show/0765-00?season=11&rule=0",
    "ナゲツケサル": "https://swsh.pokedb.tokyo/pokemon/show/0766-00?season=11&rule=0",
    "グソクムシャ": "https://swsh.pokedb.tokyo/pokemon/show/0768-00?season=11&rule=0",
    "シロデスナ": "https://swsh.pokedb.tokyo/pokemon/show/0770-00?season=11&rule=0",
    "ジジーロン": "https://swsh.pokedb.tokyo/pokemon/show/0780-00?season=11&rule=0",
    "ジャラコ": "https://swsh.pokedb.tokyo/pokemon/show/0782-00?season=11&rule=0",
    "ジャランゴ": "https://swsh.pokedb.tokyo/pokemon/show/0783-00?season=11&rule=0",
    "サルノリ": "https://swsh.pokedb.tokyo/pokemon/show/0810-00?season=11&rule=0",
    "ヒバニー": "https://swsh.pokedb.tokyo/pokemon/show/0813-00?season=11&rule=0",
    "ラビフット": "https://swsh.pokedb.tokyo/pokemon/show/0814-00?season=11&rule=0",
    "メッソン": "https://swsh.pokedb.tokyo/pokemon/show/0816-00?season=11&rule=0",
    "ジメレオン": "https://swsh.pokedb.tokyo/pokemon/show/0817-00?season=11&rule=0",
    "ホシガリス": "https://swsh.pokedb.tokyo/pokemon/show/0819-00?season=11&rule=0",
    "ヨクバリス": "https://swsh.pokedb.tokyo/pokemon/show/0820-00?season=11&rule=0",
    "ココガラ": "https://swsh.pokedb.tokyo/pokemon/show/0821-00?season=11&rule=0",
    "アオガラス": "https://swsh.pokedb.tokyo/pokemon/show/0822-00?season=11&rule=0",
    "サッチムシ": "https://swsh.pokedb.tokyo/pokemon/show/0824-00?season=11&rule=0",
    "レドームシ": "https://swsh.pokedb.tokyo/pokemon/show/0825-00?season=11&rule=0",
    "イオルブ": "https://swsh.pokedb.tokyo/pokemon/show/0826-00?season=11&rule=0",
    "クスネ": "https://swsh.pokedb.tokyo/pokemon/show/0827-00?season=11&rule=0",
    "フォクスライ": "https://swsh.pokedb.tokyo/pokemon/show/0828-00?season=11&rule=0",
    "ヒメンカ": "https://swsh.pokedb.tokyo/pokemon/show/0829-00?season=11&rule=0",
    "ウールー": "https://swsh.pokedb.tokyo/pokemon/show/0831-00?season=11&rule=0",
    "バイウールー": "https://swsh.pokedb.tokyo/pokemon/show/0832-00?season=11&rule=0",
    "カムカメ": "https://swsh.pokedb.tokyo/pokemon/show/0833-00?season=11&rule=0",
    "カジリガメ": "https://swsh.pokedb.tokyo/pokemon/show/0834-00?season=11&rule=0",
    "ワンパチ": "https://swsh.pokedb.tokyo/pokemon/show/0835-00?season=11&rule=0",
    "パルスワン": "https://swsh.pokedb.tokyo/pokemon/show/0836-00?season=11&rule=0",
    "タンドン": "https://swsh.pokedb.tokyo/pokemon/show/0837-00?season=11&rule=0",
    "トロッゴン": "https://swsh.pokedb.tokyo/pokemon/show/0838-00?season=11&rule=0",
    "カジッチュ": "https://swsh.pokedb.tokyo/pokemon/show/0840-00?season=11&rule=0",
    "タルップル": "https://swsh.pokedb.tokyo/pokemon/show/0842-00?season=11&rule=0",
    "ウッウ": "https://swsh.pokedb.tokyo/pokemon/show/0845-00?season=11&rule=0",
    "カマスジョー": "https://swsh.pokedb.tokyo/pokemon/show/0847-00?season=11&rule=0",
    "ヤクデ": "https://swsh.pokedb.tokyo/pokemon/show/0850-00?season=11&rule=0",
    "マルヤクデ": "https://swsh.pokedb.tokyo/pokemon/show/0851-00?season=11&rule=0",
    "オトスパス": "https://swsh.pokedb.tokyo/pokemon/show/0853-00?season=11&rule=0",
    "ヤバチャ": "https://swsh.pokedb.tokyo/pokemon/show/0854-00?season=11&rule=0",
    "テブリム": "https://swsh.pokedb.tokyo/pokemon/show/0857-00?season=11&rule=0",
    "ギモー": "https://swsh.pokedb.tokyo/pokemon/show/0860-00?season=11&rule=0",
    "ニャイキング": "https://swsh.pokedb.tokyo/pokemon/show/0863-00?season=11&rule=0",
    "サニゴーン": "https://swsh.pokedb.tokyo/pokemon/show/0864-00?season=11&rule=0",
    "バリコオル": "https://swsh.pokedb.tokyo/pokemon/show/0866-00?season=11&rule=0",
    "マホミル": "https://swsh.pokedb.tokyo/pokemon/show/0868-00?season=11&rule=0",
    "タイレーツ": "https://swsh.pokedb.tokyo/pokemon/show/0870-00?season=11&rule=0",
    "バチンウニ": "https://swsh.pokedb.tokyo/pokemon/show/0871-00?season=11&rule=0",
    "ユキハミ": "https://swsh.pokedb.tokyo/pokemon/show/0872-00?season=11&rule=0",
    "イシヘンジン": "https://swsh.pokedb.tokyo/pokemon/show/0874-00?season=11&rule=0",
    "モルペコ": "https://swsh.pokedb.tokyo/pokemon/show/0877-00?season=11&rule=0",
    "ダイオウドウ": "https://swsh.pokedb.tokyo/pokemon/show/0879-00?season=11&rule=0",
    "パッチルドン": "https://swsh.pokedb.tokyo/pokemon/show/0881-00?season=11&rule=0",
    "ウオチルドン": "https://swsh.pokedb.tokyo/pokemon/show/0883-00?season=11&rule=0",
    "ドラメシヤ": "https://swsh.pokedb.tokyo/pokemon/show/0885-00?season=11&rule=0",
    "ドロンチ": "https://swsh.pokedb.tokyo/pokemon/show/0886-00?season=11&rule=0",
    "ダクマ": "https://swsh.pokedb.tokyo/pokemon/show/0891-00?season=11&rule=0"
};

export function pokemonNameToURL(pokemonName: string) {
    return name2Url[pokemonName] || 'https://swsh.pokedb.tokyo/pokemon/list?season=11&rule=0';
}