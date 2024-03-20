enum ResponseCode {
  //HTTP STATUS 200
  SUCCESS = "SU",

  //HTTP STATUS 400
  VALIDATION_FAILED = "VF",
  DUPLICATE_EMAIL = "DE",
  DUPLICATED_NICKNAME = "DN",
  DUPLICATED_TEL_NUMBER = "DT",
  NOT_EXISTED_USER = "NU",
  NOT_EXISTED_BOARD = "NB",

  //HTTP STATUS 401
  SIGN_IN_FAILED = "SF",
  AUTHORIZATION_FAIL = "AF",

  //HTTP STATUS 403
  NO_PERMISSION = "NP",

  //HTTP STATUS 500
  DATABASE_ERROR = "DBE",
}

export default ResponseCode;