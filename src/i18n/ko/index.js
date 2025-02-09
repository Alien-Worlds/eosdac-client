export default {
  'candidate': {
    'nominated_next': '다음 관리인단으로 출마',
    'pay': '지불',
    'read_more': '더 보기',
    'requestedpay': '요청한 보상',
    'select': '선택',
    'staked': '스테이킹됨',
    'unselect': '선택 해제',
    'votes': '표'
  },
  'constitution': {
    'direct_link': '링크',
    'hash': '해시',
    'signed_message': '헌법에 서명하셨습니다!',
    'switch_contrast': '색상 대조'
  },
  'contract_errors': {
    'BURN_INVALID_QTY_': '유효하지 않은 수량',
    'BURN_LOCKED_TOKEN': 'transferLocked 토큰의 토큰을 소각하십시오. 발급자는 먼저 \'잠금 해제\'해야합니다.',
    'BURN_NON_POSITIVE_QTY_': '소각량은 0보다 커야 합니다',
    'BURN_SYMBOL_MISMATCH': '심볼 정확도 불일치',
    'BURN_UNKNOWN_SYMBOL': '해당 계약이 식별할 수 없는 토큰을 소각하려 합니다.',
    'CLAIMPAY_INVALID_CLAIM_ID': '지불 청구 ID가 잘못되었습니다.',
    'CREATE_EXISITNG_SYMBOL': '해당 심볼을 가진 토큰이 이미 존재합니다',
    'CREATE_INVALID_SUPPLY': '유효하지 않은 공급량',
    'CREATE_INVALID_SYMBOL': '잘못된 심볼명',
    'CREATE_MAX_SUPPLY_MUST_BE_POSITIVE': '최대 공급량은 0보다 커야 합니다.',
    'GENERAL_MEMBER_HAS_NOT_AGREED_TO_ANY_TERMS': '약관에 동의하지 않은 계정입니다',
    'GENERAL_MEMBER_HAS_NOT_AGREED_TO_LATEST_TERMS': '최신 약관에 동의하지 않습니다.',
    'GENERAL_REG_MEMBER_NOT_FOUND': '회원으로 등록되어 있지 않은 계정입니다.',
    'ISSUE_INVALID_PRECISION': '심볼 정확도 불일치',
    'ISSUE_INVALID_QUANTITY': '유효하지 않은 수량',
    'ISSUE_INVALID_SYMBOL': '잘못된 심볼명',
    'ISSUE_NON_EXISTING_SYMBOL': '해당 심볼을 가진 토큰이 존재하지 않습니다. 발행하기 전에 먼저 토큰을 생성하십시오',
    'ISSUE_NON_POSITIVE': '발행량은 0보다 커야 합니다',
    'ISSUE_QTY_EXCEED_SUPPLY': '수량이 가능한 공급량을 초과합니다.',
    'MEMBERREG_NOT_LATEST_TERMS': '최신 약관에 동의하지 않습니다.',
    'MEMBERREG_NO_VALID_TERMS': '유효한 회원 약관이 없습니다.',
    'MEMBERUNREG_ACTIVE_CANDIDATE': '활성화된 후보자는 회원 등록을 취소하기 전에 후보자로서 사임해야 합니다.',
    'MEMBERUNREG_MEMBER_NOT_REGISTERED': '등록되지 않은 회원입니다.',
    'NEWMEMTERMS_DUPLICATE_TERMS': '다음 회원 약관은 최신 약관과 중복될 수 없습니다.',
    'NEWMEMTERMS_EMPTY_HASH': '회원 약관 문서 해시는 비워둘 수 없습니다.',
    'NEWMEMTERMS_EMPTY_TERMS': '회원 약관은 비워둘 수 없습니다.',
    'NEWMEMTERMS_HASH_TOO_LONG': '회원 약관 문서 해시는 32자 미만이어야 합니다.',
    'NEWMEMTERMS_TERMS_TOO_LONG': '회원 약관 문서 URL은 256자 미만이어야 합니다.',
    'NEWPERIOD_EARLY': '현재 기간이 끝날 때까지 새 기간을 시작할 수 없습니다.',
    'NEWPERIOD_EXPECTED_CAND_NOT_FOUND': '손상된 데이터: 이임한 후보에게 락업 지연 설정을 시도하고 있습니다.',
    'NEWPERIOD_VOTER_ENGAGEMENT_LOW_ACTIVATE': 'DAC를 활성화하는 데 필요한 투표수가 모자랍니다.',
    'NOMINATECAND_ALREADY_REGISTERED': '이미 등록하여 활성화된 후보입니다.',
    'NOMINATECAND_INSUFFICIENT_FUNDS_TO_STAKE': '스테이크 수량이 부족합니다.',
    'NOMINATECAND_PAY_LIMIT_EXCEEDED': '후보자의 희망 보수액이 초과되었습니다.',
    'NOMINATECAND_STAKING_FUNDS_INCOMPLETE': '등록하려는 후보자는 충분한 수량의 토큰을 스테이크 계약에 전송해야합니다.',
    'REMOVECANDIDATE_NOT_CURRENT_CANDIDATE': '후보자가 아직 등록되지 않았습니다.',
    'REMOVECUSTODIAN_NOT_CURRENT_CUSTODIAN': '입력된 계정명은 현재 관리인의 계정명이 아닙니다.',
    'TRANSFER_INVALID_QTY': '유효하지 않은 수량',
    'TRANSFER_NONEXISTING_DESTN': '존재하지 않는 계정으로',
    'TRANSFER_NON_POSITIVE_QTY': '0보다 큰 수량을 전송해야 합니다',
    'TRANSFER_OVERDRAWN': '마이너스 인출된 수량',
    'TRANSFER_SYMBOL_MISMATCH': '심볼 정확도 불일치',
    'TRANSFER_TO_SELF': '본인에게 전송할 수 없습니다',
    'UNLOCK_INVALID_SYMBOL': '잘못된 심볼명',
    'UNLOCK_NON_EXISTING_SYMBOL': '해당 심볼은 가진 토큰이 존재하지 않습니다. 발행하기 전에 먼저 토큰을 생성하십시오.',
    'UNSTAKE_CAND_NOT_REGISTERED': '후보자가 아직 등록되어 있지 않습니다.',
    'UNSTAKE_CANNOT_UNSTAKE_FROM_ACTIVE_CAND': '활성화된 후보자의 토큰은 스테이크를 해제할 수 없습니다. 먼저 withdrawcane를 하십시오.',
    'UNSTAKE_CANNOT_UNSTAKE_UNDER_TIME_LOCK': '토큰이 시간 지연에서 해제되기 전에 스테이크를 해제할 수 없습니다.',
    'UPDATEBIO_BIO_SIZE_TOO_LONG': '자기소개는 256자 이하이어야합니다.',
    'UPDATECONFIG_INVALID_AUTH_HIGH_TO_NUM_ELECTED': '승인 임계 값은 선출된 관리인 수 이상의 값으로 충족시킬 수 없습니다.',
    'UPDATECONFIG_INVALID_AUTH_MID_TO_LOW_AUTH': '낮은 승인 임계 값은 중간 승인 임계 값보다 클 수 없습니다',
    'UPDATECONFIG_INVALID_CONTRACT': '알림 설정과 관련된 유효하지 않은 계약 시도',
    'UPDATEREQPAY_EXCESS_MAX_PAY': '후보자의 최대 희망 보수액이 초과했습니다.',
    'UPDATEREQPAY_NOT_CURRENT_REG_CANDIDATE': '후보자가 아직 등록되어 있지 않습니다.',
    'UPDATETERMS_NO_EXISTING_TERMS': '해당 ID에 대응하는 기존 약관이 없습니다.',
    'UPDATE_BIO_NOT_CURRENT_REG_CANDIDATE': '후보자가 아직 등록되어 있지 않습니다.',
    'VOTECUST_CANDIDATE_NOT_FOUND': '후보자를 찾을 수 없습니다.',
    'VOTECUST_DUPLICATE_VOTES': '후보자에 대해 중복 표가 추가되었습니다.',
    'VOTECUST_MAX_VOTES_EXCEEDED': '최대 투표 가능한 수를 초과했습니다.',
    'VOTECUST_VOTING_FOR_INACTIVE_CAND': '비활성 후보자에 투표하려 합니다.',
    'VOTECUST_VOTING_IS_DISABLED': '현재는 투표를 할 수 없습니다.'
  },
  'default': {
    'constitution': '헌법',
    'constitution_has_been_updated': '헌법이 개정되었습니다. 회원 클라이언트를 사용하려면 업데이트된 헌법에 서명하십시오.',
    'login': '로그인',
    'logout': '로그아웃',
    'member_client': '회원 클라이언트',
    'menu': '메뉴',
    'sign_the_constitution': '헌법에 서명하기',
    'you_have_not_yet_registered': '귀하는 아직 회원 등록을 하지 않은 상태입니다. 회원 클라이언트를 이용하려면 헌법에 서명하십시오.',
    'your_token_balance': '{tokenName} 잔액'
  },
  'four_zero_four': {
    'go_back': '돌아가기',
    'sorry_nothing_here': '죄송합니다. 표시할 내용이 없습니다.'
  },
  'lang_selector': {
    'choose_your_language': '언어 선택',
    'languages': {
      'chinese': '중국어 (간체)',
      'english_gb': '영어 (GB)',
      'english_us': '영어 (US)',
      'french': '프랑스어',
      'german': '독일어',
      'italian': '이탈리아어',
      'japanese': '일본어',
      'korean': '한국어',
      'russian': '러시아어',
      'spanish': '스페인어',
      'vietnamese': '베트남어'
    }
  },

  'manage_candidateship': {
    'amount_to_stake_placeholder': '스테이크할 {token_symbol}량',
    'locked_tokens': '락업된 토큰',
    'page_description_active_custodian': '귀하는 현재 {dacname} 관리인단으로서 활동 중입니다.',
    'page_description_registered': '관리인단 후보로 등록해주셔서 감사합니다. 관리인 후보 등록 과정의 일부로 귀하의 토큰은 스테이킹되었습니다.',
    'page_description_unregistered': '이 페이지에서 관리인단 후보로 등록할 수 있습니다. 관리인은 {dacname} 헌법에 명시된 책임을 가집니다. {dacname} 헌법을 이해하지 못 하였거나 관리인단으로서의 책임을 다 할 수 없을 시에는 등록하지 마십시오. 등록 전 헌법 제 5항을 자세히 읽어보시기 바랍니다.',
    'pay_description': '관리인 임기(1주일) 동안 받고 싶은 EOS 토큰 수를 입력해 주십시오. 요구할 수 있는 최대치는 {requested_pay}입니다.',
    'register': '등록하기',
    'requested_custodian_pay_placeholder': '요청한 EOS 보상',
    'requestedpay': '요청한 보상',
    'stake_amount': '스테이킹한 수량',
    'stake_description': '스테이킹하려는 토큰 수를 정하십시오. 등록에 필요한 최소량은 {minimum_stake}입니다..',
    'unregister': '등록 취소',
    'unstake': '스테이크 해제',
    'unstake_description': '주의: 스테이킹을 해제는 액션을 취한 후 토큰이 월렛에 다시 보일 때까지 60분의 지연이 발생합니다.  전송이 완료될 때까지 기다려주시기 바랍니다. 또한 관리인으로 선출된 경우에는 토큰이 며칠 동안 스마트 계약에 유지되며 현재 다음으로 설정됩니다 :\n\nPlease note, the unstaking action has a built in delay of 60 minutes from the time you unstake before you will see the funds back in your wallet. Please be patient for the transfer to complete. Also, if you were ever elected as a custodian, the funds will be held in a smart contract for a number of days, currently set to:'
  },
  'markdown_viewer': {
    'select_text_to_edit': '편집하려는 부분을 선택하십시오.'
  },
  'menu': {
    'credits': '크레딧',
    'custodians': '관리인',
    'member_status': '회원 상태',
    'profile': '프로필',
    'register_as_candidate': '관리인으로 등록하기',
    'settings': '설정',
    'support': '문의 지원 및 피드백',
    'unregister_as_candidate': '관리인 등록 취소'
  },
  'profile': {
    'account_name': '계정명',
    'bio': '소개',
    'cancel': '취소',
    'download': '다운로드',
    'edit': '편집',
    'familyName': '성',
    'female': '여성',
    'gender': '성별',
    'givenName': '이름',
    'male': '남성',
    'maxLinksmsg': '죄송합니다. 링크는 최대 {number_allowed_links}개까지만 추가할 수 있습니다.',
    'other': '기타',
    'profile': '프로필',
    'profile_picture_url': '프로필 사진 URL',
    'save': '저장',
    'social_link': '소셜 미디어 링크',
    'social_profile_link': '소셜 프로필 링크',
    'website': '웹사이트'
  },
  'settings': {
    'API': 'API',
    'API_endpoint': 'API 엔드포인트',
    'NOT_REGISTERED': '미등록',
    'REGISTERED': '등록됨',
    'language_preference': '언어 환경 설정',
    'member_status': '회원 상태',
    'off': '오프',
    'on': '온',
    'register_as_member': '회원으로 등록',
    'register_now': '지금 등록',
    'settings': '설정',
    'transaction_popup_desc': '트랜잭션 활성/비활성 팝업',
    'transaction_popup_label': '트랜잭션 팝업',
    'unregister_membership': '회원 등록 취소',
    'user_preference': '사용자 설정'
  },
  'transaction': {
    'cancel': '취소',
    'error': '오류',
    'signature_rejected': '트랜잭션을 취소했습니다',
    'transaction': '트랜잭션',
    'transaction_successful': '트랜젝션 성공'
  },
  'vote_custodians': {
    'candidate_list': '후보 목록',
    'description_main': '관리인단은 DAC의 운영 및 업무를 관리합니다. 여기에는 DAC의 자산 및 부채의 관리 및 관리가 포함됩니다 (이에 국한되지 않음). 자신의 토큰 중 일부를 스테이킹하여 7일간 지속되는 관리인단 후보로 출마한 {dacname} 회원은 다음과 같습니다. 귀하의 투표는 다음 관리인단을 선출하기 위해 7일마다 재계산됩니다. 투표가 중요합니다! 누가 {dacname}의 가치를 높이는지 제대로 판단하려면 {dacname}에 계속해서 참여하고 정기적으로 투표하십시오.',
    'description_side': '한 번에 최대 {maxvotes}명의 관리인 후보자에게 투표할 수 있습니다. DAC의 가치를 높일 수 있는 후보자를 선택하십시오.',
    'my_votes': '내 투표',
    'rows_per_page': '페이지 당 프로필 수',
    'search': '검색',
    'submit_my_votes': '표 제출하기',
    'voting_disabled_text': '아직 투표는 시작되지 않았습니다. 그래픽 인터페이스는 확인 가능하지만 지금은 투표를 해도 그 내역이 체인에 보내지지 않을 것입니다. 투표는 곧 시작할 예정입니다.',
    'voting_disabled_title': '지금은 투표할 수 없습니다',
    'voting_progress': '투표 진행 중'
  },
  'votingprogress': {
    'activated_at': 'DAC은 15% 달성 시 활성화됩니다',
    'loading': '불러오는 중...',
    'refresh': '새로고침',
    'seconds': '초',
    'threshold_met': '15% 최소 투표율이 넘었습니다. {dacname}이 해제되었습니다.',
    'update_in': '업데이트 시각'
  }
}
