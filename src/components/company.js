const companyKeys = [
    'id', ' companyName', ' accountNum', ' ipLogin', ' timeZoneId',
    'accountLimited', ' seats', ' loginNum', ' ruleIndependentNum', ' ays',
    'dbAys', ' dbSearch', ' dbSuper', ' dbTrial', ' pro',
    'landscape', ' npl', ' smeBasic', ' workspace', ' chemicalMoc',
    'ipreportPro', ' insights', ' renew',
]
   // ["id", " company_name", " account_num", " ip_login", " time_zone_id", "account_limited", " seats", " login_num", " rule_independent_num", " ays", "db_ays", " db_search", " db_super", " db_trial", " pro", "landscape", " npl", " sme_basic", " workspace", " chemical_moc", "ipreport_pro", " insights", " renew"]
const statKeys = [
    'companyId', ' companyName', ' searchNum', ' exportNum', ' exportPdfNum',
    'exportXlsNum', ' analysisNum', ' landscapeNum', ' viewNum', ' chemicalNum',
    'alertCreatedNum', ' workspaceCreatedNum', ' renew', ' beginAt', ' endAt',
]

const regex = /[A-Z]/g
const replacement = '$1_'

const company_keys = companyKeys.map(comelToSnake)
const stat_keys = statKeys.map(comelToSnake)

function comelToSnake(word) {
    const regex = /[A-Z]/g
    return word.replace(regex, $1 => {
        return '_' + $1.toLowerCase()
    }).replace(/^_/, '')
}

function snakeToComel(word) {
    const regex = /_+\w/g
    return word.replace(regex, $1 => {
        const len = $1.length - 1
        return $1.charAt(len).toUpperCase()
    })
}
