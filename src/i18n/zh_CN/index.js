export default {
  'candidate': {
    'staked': '押注',
    'votes': '票数'
  },
  'constitution': {
    'direct_link': '链接',
    'hash': '哈希值',
    'signed_message': '您已经签署章程！',
    'switch_contrast': '切换背景色'
  },
  'contract_errors': {
    'BURN_INVALID_QTY_': '无效的数量。',
    'BURN_LOCKED_TOKEN': '销毁的是转账锁定（transferLocked）代币。发行者必须先“解锁”。',
    'BURN_NON_POSITIVE_QTY_': '数量必须为正数。',
    'BURN_SYMBOL_MISMATCH': '符号精度不匹配。',
    'BURN_UNKNOWN_SYMBOL': '正在销毁该合约未知的一种代币。',
    'CLAIMPAY_INVALID_CLAIM_ID': '无效的工资请求 ID。',
    'CREATE_EXISITNG_SYMBOL': '带有符号的代币已存在。',
    'CREATE_INVALID_SUPPLY': '无效的供给。',
    'CREATE_INVALID_SYMBOL': '无效的符号。',
    'CREATE_MAX_SUPPLY_MUST_BE_POSITIVE': '最大供给必须为正数。',
    'GENERAL_MEMBER_HAS_NOT_AGREED_TO_ANY_TERMS': '账户还未同意任何条款。',
    'GENERAL_MEMBER_HAS_NOT_AGREED_TO_LATEST_TERMS': '同意的条款不是最新的。',
    'GENERAL_REG_MEMBER_NOT_FOUND': '账户还未注册成为会员。',
    'ISSUE_INVALID_PRECISION': '符号精度不匹配。',
    'ISSUE_INVALID_QUANTITY': '无效的数量。',
    'ISSUE_INVALID_SYMBOL': '无效的符号名称。',
    'ISSUE_NON_EXISTING_SYMBOL': '带有符号的代币不存在，发行前请创造代币。',
    'ISSUE_NON_POSITIVE': '发行的数量必须为正数。',
    'ISSUE_QTY_EXCEED_SUPPLY': '数量超过有效的供给。',
    'MEMBERREG_NOT_LATEST_TERMS': '同意的条款不是最新的。',
    'MEMBERREG_NO_VALID_TERMS': '未找到有效的成员条款。',
    'MEMBERUNREG_ACTIVE_CANDIDATE': '一个现任的候选人必须放弃候选人提名才能注销会员身份。',
    'MEMBERUNREG_MEMBER_NOT_REGISTERED': '成员并未注册。',
    'NEWMEMTERMS_DUPLICATE_TERMS': '下一个成员条款无法是最新条款的副本。',
    'NEWMEMTERMS_EMPTY_HASH': '会员条款文档的哈希值不能为空。',
    'NEWMEMTERMS_EMPTY_TERMS': '会员条款不能为空。',
    'NEWMEMTERMS_HASH_TOO_LONG': '会员条款文档的哈希值长度不得超过 32 个字符。',
    'NEWMEMTERMS_TERMS_TOO_LONG': '会员条款文档的 url 地址长度不得超过 256 个字符。',
    'NEWPERIOD_EARLY': '新的周期过快被请求。请等待周期结束。',
    'NEWPERIOD_EXPECTED_CAND_NOT_FOUND': '数据损毁：尝试为候选人离开办公室设置一个锁定延时。',
    'NEWPERIOD_VOTER_ENGAGEMENT_LOW_ACTIVATE': '投票人数量不足以激活 DAC。',
    'NOMINATECAND_ALREADY_REGISTERED': '候选人已注册并上任。',
    'NOMINATECAND_INSUFFICIENT_FUNDS_TO_STAKE': '押注的资产数量不足。',
    'NOMINATECAND_PAY_LIMIT_EXCEEDED': '候选人的酬劳超出限制数额。',
    'NOMINATECAND_STAKING_FUNDS_INCOMPLETE': '一名正在注册的候选人必须向合约中转入足够的代币以供押注。',
    'REMOVECANDIDATE_NOT_CURRENT_CANDIDATE': '候选人还未注册。',
    'REMOVECUSTODIAN_NOT_CURRENT_CUSTODIAN': '输入的账户名不是一名现有的托管人。',
    'TRANSFER_INVALID_QTY': '无效的数量',
    'TRANSFER_NONEXISTING_DESTN': '账户不存在',
    'TRANSFER_NON_POSITIVE_QTY': '转账数量必须为正数',
    'TRANSFER_OVERDRAWN': '余额透支',
    'TRANSFER_SYMBOL_MISMATCH': '符号精度不匹配',
    'TRANSFER_TO_SELF': '无法转给自己',
    'UNLOCK_INVALID_SYMBOL': '无效的符号名称',
    'UNLOCK_NON_EXISTING_SYMBOL': '带有符号的代币不存在，请在解锁前创造代币。',
    'UNSTAKE_CAND_NOT_REGISTERED': '候选人未注册。',
    'UNSTAKE_CANNOT_UNSTAKE_FROM_ACTIVE_CAND': '无法取消一名在任候选人的押注。需先调用 withdrawcane。',
    'UNSTAKE_CANNOT_UNSTAKE_UNDER_TIME_LOCK': '在代币从延时中解锁前无法取消押注。',
    'UPDATEBIO_BIO_SIZE_TOO_LONG': '简介长度不得超过 256 个字符。',
    'UPDATECONFIG_INVALID_AUTH_HIGH_TO_NUM_ELECTED': '授权门槛无法使用超过选举产生托管人数量的值。',
    'UPDATECONFIG_INVALID_AUTH_MID_TO_LOW_AUTH': '低授权门槛不能超过中授权门槛。',
    'UPDATECONFIG_INVALID_CONTRACT': '试图为无效的合约设置通知。',
    'UPDATEREQPAY_EXCESS_MAX_PAY': '候选人的酬劳超出限制数额。',
    'UPDATEREQPAY_NOT_CURRENT_REG_CANDIDATE': '候选人还未注册。',
    'UPDATETERMS_NO_EXISTING_TERMS': '未找到与给予的 ID 匹配的条款。',
    'UPDATE_BIO_NOT_CURRENT_REG_CANDIDATE': '候选人还未注册。',
    'VOTECUST_CANDIDATE_NOT_FOUND': '无法找到候选人。',
    'VOTECUST_DUPLICATE_VOTES': '为同一名候选人重复投票。',
    'VOTECUST_MAX_VOTES_EXCEEDED': '超过最大的允许票数。',
    'VOTECUST_VOTING_FOR_INACTIVE_CAND': '尝试为一名无效的候选人投票。',
    'VOTECUST_VOTING_IS_DISABLED': '目前无法投票。'
  },
  'default': {
    'constitution': '章程',
    'constitution_has_been_updated': '章程已经更新。 请签署更新后的章程以使用会员客户端。',
    'login': '登录',
    'logout': '登出',
    'member_client': '会员客户端',
    'menu': '菜单',
    'sign_the_constitution': '签署章程',
    'you_have_not_yet_registered': '您尚未注册成为会员。 请签署章程以使用会员客户端。',
    'your_token_balance': '您的 {tokenName} 余额'
  },
  'four_zero_four': {
    'go_back': '返回',
    'sorry_nothing_here': '抱歉，这里什么也没有......'
  },
  'lang_selector': {
    'choose_your_language': '选择您的语言',
    'languages': {
      'chinese': '中文（简体）',
      'english_gb': '英文（英国）',
      'english_us': '英文（美国）',
      'french': '法文',
      'german': '德文',
      'italian': '意大利文',
      'japanese': '日文',
      'korean': '韩文',
      'russian': '俄文',
      'spanish': '西班牙文',
      'vietnamese': '越南文'
    }
  },
  'manage_candidateship': {
    'amount_to_stake_placeholder': '用于权益押注的 {token_symbol} 数量',
    'locked_tokens': '被锁的代币',
    'page_description_active_custodian': '您目前是一名在任的 {dacname} 托管人董事会成员。',
    'page_description_registered': '感谢您注册成为 {dacname} 托管人董事会的成员候选人。作为候选人注册的一部分，您的部分代币已被用于权益押注。',
    'page_description_unregistered': '这一页面是用于注册成为候选人来争取在托管人董事会任职。该职位需要承担 {dacname} 章程中列举的种种责任。请在完全理解并有能力承担作为一名 {dacname} 托管人董事会成员所需承担职责的前提下注册成为候选人。请在注册前仔细阅读章程第 5 节的内容。',
    'pay_description': '请填写您作为托管人希望在一届任期内获得的酬劳。最大数额为 {requested_pay}。',
    'register': '注册',
    'requested_custodian_pay_placeholder': '希望得到的酬劳（EOS）',
    'requestedpay': '希望得到的酬劳',
    'stake_amount': '权益押注数量',
    'stake_description': '请指定您想要用于权益押注的代币数量。最低数额为 {minimum_stake}。',
    'unregister': '注销',
    'unstake': '解除押注'
  },
  'markdown_viewer': {
    'select_text_to_edit': '选中您想要修改的文字。'
  },
  'menu': {
    'custodians': '选举托管人',
    'member_status': '会员状态',
    'profile': '个人资料',
    'register_as_candidate': '注册成为候选人',
    'settings': '设置',
    'support': '支持与反馈',
    'unregister_as_candidate': '注销成为候选人'
  },

  'profile': {
    'account_name': '账户名',
    'bio': '简介',
    'cancel': '取消',
    'download': '下载',
    'edit': '编辑',
    'familyName': '姓',
    'female': '女',
    'gender': '性别',
    'givenName': '名',
    'male': '男',
    'maxLinksmsg': '抱歉，最多只允许 {number_allowed_links} 个链接。',
    'other': '其他',
    'profile': '个人资料',
    'profile_picture_url': '头像地址',
    'save': '保存',
    'social_link': '社交网络链接',
    'social_profile_link': '社交账号链接',
    'website': '网站'
  },
  'settings': {
    'API': 'API',
    'API_endpoint': 'API 端点',
    'NOT_REGISTERED': '未注册',
    'REGISTERED': '已注册',
    'language_preference': '语言首选项',
    'member_status': '会员状态',
    'off': '关',
    'on': '开',
    'register_as_member': '注册成为会员',
    'register_now': '立即注册',
    'settings': '设置',
    'transaction_popup_desc': '允许/禁止转账的弹出提示',
    'transaction_popup_label': '事务弹出窗口',
    'unregister_membership': '注销会员',
    'user_preference': '用户设置'
  },
  'transaction': {
    'cancel': '取消',
    'error': '错误',
    'transaction': '交易',
    'transaction_successful': '交易成功'
  },
  'vote_custodians': {
    'candidate_list': '候选人名单',
    'description_main': '托管人董事会负责管理 DAC 的日常事务，包括但不限于管理 DAC 的资产和支出。以下 DAC 成员已经授予他们的部分代币来作为候选人进入托管人董事会，每个任期为 7 天。每隔 7 天，票数都将被重新计算来选出新的托管人董事会。投票相当重要！请经常来投票并参与到 DAC 事务中来了解谁在为 DAC 创造价值。',
    'description_side': '您一次最多可以投票给 {maxvotes} 名托管人候选人。 请选择您认为会为 {dacname} 带来价值的候选人。',
    'my_votes': '我的投票',
    'rows_per_page': '每页行数',
    'search': '搜索',
    'submit_my_votes': '提交我的投票',
    'voting_disabled_text': '投票功能暂时禁用。您可以试用图形用户界面，但您的投票不会被提交到区块链上。投票功能将很快启用。',
    'voting_disabled_title': '投票功能已禁用',
    'voting_progress': '选举进度'
  },
  'votingprogress': {
    'activated_at': 'DAC 将在达到 15% 时激活',
    'loading': '正在载入……',
    'refresh': '刷新',
    'seconds': '秒',
    'threshold_met': '已达到 15% 的投票门槛。{dacname} 解锁。',
    'update_in': '更新倒数'
  }
}
