/*
  概要：SQLXで使用する定数を宣言
*/

/* SQLで使用するパラメータ（人事基本情報） */
const SQL_PARAMETER = {
  target_date: "2010-01-01",
  system_code: "1010"
}

/* 共通タグ（データセット） */
const CATEGORY_TAG = {
  jinji: "jinji",
  common_master: "common_master",
  basic_data: "basic_data",
  work_product: "mart_ar_jinji_basicdata"
}

/* 共通ラベル（テーブル） */
const CATEGORY_LABEL = {
  df_repository: "prod-ar-jinji-basic",
}

/* 共通ラベル（Step、Use_Contents） */
const CATEGORY_STEP = {
  raw: "raw",
  logic: "logic",
  staging: "staging",
  mart: "mart"
}
const CATEGORY_USE_CONTENTS = {
  ar: "accountability_report",
  es: "engagement_survey",
  ac: "accreditation"
}

module.exports = { 
  SQL_PARAMETER, 
  CATEGORY_TAG,
  CATEGORY_LABEL,
  CATEGORY_STEP,
  CATEGORY_USE_CONTENTS
}
